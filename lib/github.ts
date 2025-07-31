"use client"

import { useState, useEffect } from "react"

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  fork: boolean
  homepage: string | null
  language: string | null
  forks_count: number
  stargazers_count: number
  watchers_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

export function useGitHubUser(username: string) {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setIsLoading(true)

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user data: ${userResponse.statusText}`)
        }
        const userData = await userResponse.json()
        setUser(userData)

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        if (!reposResponse.ok) {
          throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`)
        }
        const reposData = await reposResponse.json()
        setRepos(reposData)

        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub data:", err)
        setError(err instanceof Error ? err : new Error("Unknown error occurred"))
        setIsLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

  return { user, repos, isLoading, error }
}
