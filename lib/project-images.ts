// Map of project topics to relevant image URLs
const topicImageMap: Record<string, string> = {
  // Programming languages
  javascript: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000",
  typescript: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1000",
  python: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1000",
  java: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?q=80&w=1000",

  // Web development
  react: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000",
  nextjs: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000",
  vue: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000",
  angular: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=1000",

  // Mobile
  android: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1000",
  ios: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000",

  // Backend
  nodejs: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1000",
  express: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
  django: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1000",

  // Data
  datascience: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  machinelearning: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000",

  // Other
  portfolio: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
  website: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000",
  game: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000",
  api: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
}

// Map of common project names to relevant image URLs
const nameImageMap: Record<string, string> = {
  portfolio: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
  blog: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000",
  ecommerce: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  todo: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
  weather: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
  calculator: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1000",
  chat: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000",
}

// Default images by programming language
const languageImageMap: Record<string, string> = {
  JavaScript: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000",
  TypeScript: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1000",
  Python: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1000",
  Java: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?q=80&w=1000",
  HTML: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1000",
  CSS: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000",
  PHP: "https://images.unsplash.com/photo-1599507593548-7a2b081229ca?q=80&w=1000",
  Ruby: "https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=1000",
  C: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000",
  "C++": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000",
  "C#": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000",
  Go: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=1000",
  Rust: "https://images.unsplash.com/photo-1551645120-d5ba68a45432?q=80&w=1000",
}

// Default images for fallback
const defaultImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000",
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1000",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000",
]

export function getProjectImage(name: string, topics?: string[]): string {
  // Check if the project name matches any in our name map
  const lowerName = name.toLowerCase()
  for (const [key, url] of Object.entries(nameImageMap)) {
    if (lowerName.includes(key)) {
      return url
    }
  }

  // Check if any topics match our topic map
  if (topics && topics.length > 0) {
    for (const topic of topics) {
      const lowerTopic = topic.toLowerCase()
      if (topicImageMap[lowerTopic]) {
        return topicImageMap[lowerTopic]
      }
    }
  }

  // Use language-specific image if available
  if (topics && topics.length > 0) {
    for (const topic of topics) {
      if (languageImageMap[topic]) {
        return languageImageMap[topic]
      }
    }
  }

  // Return a random default image as fallback
  const randomIndex = Math.floor(Math.abs(hashCode(name)) % defaultImages.length)
  return defaultImages[randomIndex]
}

// Simple hash function for strings
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}
