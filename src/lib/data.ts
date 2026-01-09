export const mockFeeds = [
  {
    id: '1',
    author: {
      id: '1',
      name: '张三',
      avatar: 'https://picsum.photos/seed/zhang3/40/40.jpg',
      verified: true,
      online: true
    },
    content: '今天天气真不错！出去走走，感受春天的美好。#春天 #生活',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 42,
    comments: 8,
    shares: 3,
    images: ['https://picsum.photos/seed/spring1/400/300.jpg']
  },
  {
    id: '2',
    author: {
      id: '2',
      name: '李四',
      avatar: 'https://picsum.photos/seed/li4/40/40.jpg',
      verified: false,
      online: false
    },
    content: '刚刚完成了一个重要的项目，感谢团队的支持和努力！',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 88,
    comments: 15,
    shares: 6
  },
  {
    id: '3',
    author: {
      id: '3',
      name: '王五',
      avatar: 'https://picsum.photos/seed/wang5/40/40.jpg',
      verified: true,
      online: true
    },
    content: '分享一篇很有意思的技术文章，关于前端性能优化的最佳实践...',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    likes: 25,
    comments: 12,
    shares: 8
  }
]

export function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (minutes < 60) {
    return `${minutes}分钟前`
  } else if (hours < 24) {
    return `${hours}小时前`
  } else {
    return `${days}天前`
  }
}

export const mockFriends = [
  {
    id: '1',
    name: '张三',
    avatar: 'https://picsum.photos/seed/friend1/64/64.jpg',
    verified: true,
    online: true
  },
  {
    id: '2',
    name: '李四',
    avatar: 'https://picsum.photos/seed/friend2/64/64.jpg',
    verified: false,
    online: false
  },
  {
    id: '3',
    name: '王五',
    avatar: 'https://picsum.photos/seed/friend3/64/64.jpg',
    verified: true,
    online: true
  },
  {
    id: '4',
    name: '赵六',
    avatar: 'https://picsum.photos/seed/friend4/64/64.jpg',
    verified: false,
    online: false
  },
  {
    id: '5',
    name: '钱七',
    avatar: 'https://picsum.photos/seed/friend5/64/64.jpg',
    verified: true,
    online: true
  }
]

export const mockAlbums = [
  {
    id: '1',
    title: '春天踏青',
    cover: 'https://picsum.photos/seed/album1/200/200.jpg',
    photos: [
      'https://picsum.photos/seed/photo1/400/300.jpg',
      'https://picsum.photos/seed/photo2/400/300.jpg',
      'https://picsum.photos/seed/photo3/400/300.jpg'
    ],
    privacy: 'public' as const,
    created: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: '2',
    title: '家庭聚会',
    cover: 'https://picsum.photos/seed/album2/200/200.jpg',
    photos: [
      'https://picsum.photos/seed/family1/400/300.jpg',
      'https://picsum.photos/seed/family2/400/300.jpg'
    ],
    privacy: 'friends' as const,
    created: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  }
]

export const mockBlogs = [
  {
    id: '1',
    title: '前端性能优化的最佳实践',
    excerpt: '在现代Web开发中，性能优化是一个永恒的话题。本文将分享一些实用的性能优化技巧...',
    author: {
      id: '1',
      name: '技术达人',
      avatar: 'https://picsum.photos/seed/author1/32/32.jpg',
      verified: true,
      online: false
    },
    publishDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    readCount: 1250,
    likeCount: 89,
    commentCount: 23
  },
  {
    id: '2',
    title: '我的创业故事：从0到1',
    excerpt: '创业路上充满挑战，但每一次困难都是成长的机会。今天想和大家分享我的创业经历...',
    author: {
      id: '2',
      name: '创业者小李',
      avatar: 'https://picsum.photos/seed/author2/32/32.jpg',
      verified: false,
      online: true
    },
    publishDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    readCount: 856,
    likeCount: 67,
    commentCount: 15
  }
]