export interface User {
  id: string
  name: string
  avatar?: string
  verified?: boolean
  online?: boolean
}

export interface Feed {
  id: string
  author: User
  content: string
  timestamp: Date
  likes: number
  comments: number
  shares: number
  images?: string[]
}

export interface Comment {
  id: string
  author: User
  content: string
  timestamp: Date
  likes: number
}

export interface Album {
  id: string
  title: string
  cover: string
  photos: string[]
  privacy: 'public' | 'friends' | 'private'
  created: Date
}

export interface Blog {
  id: string
  title: string
  excerpt: string
  author: User
  publishDate: Date
  readCount: number
  likeCount: number
  commentCount: number
}