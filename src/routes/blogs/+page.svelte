<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import CardHeader from '$lib/components/ui/card/card-header.svelte'
  import Avatar from '$lib/components/ui/avatar/avatar.svelte'
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte'
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte'

  const blogs = [
    {
      id: '1',
      title: '我的编程之路',
      content: '从零开始学习编程，经历了许多困难和挫折，但最终找到了适合自己的节奏...',
      author: '技术小白',
      avatar: 'https://picsum.photos/seed/author1/50/50.jpg',
      published: '2024-01-15',
      readCount: 1234,
      likes: 89,
      comments: 23
    },
    {
      id: '2',
      title: '前端开发最佳实践',
      content: '在实际项目中总结的一些前端开发经验和技巧，包括性能优化、代码规范等...',
      author: '代码达人',
      avatar: 'https://picsum.photos/seed/author2/50/50.jpg',
      published: '2024-01-10',
      readCount: 2341,
      likes: 156,
      comments: 45
    },
    {
      id: '3',
      title: '生活感悟',
      content: '程序员的生活不只是代码，还有诗和远方...',
      author: '文艺青年',
      avatar: 'https://picsum.photos/seed/author3/50/50.jpg',
      published: '2024-01-08',
      readCount: 892,
      likes: 67,
      comments: 12
    },
    {
      id: '4',
      title: '设计模式入门',
      content: '对于新手来说，设计模式可能比较抽象，但理解了之后会让代码更加优雅...',
      author: '架构师',
      avatar: 'https://picsum.photos/seed/author4/50/50.jpg',
      published: '2024-01-05',
      readCount: 3456,
      likes: 234,
      comments: 78
    }
  ]
</script>

<div class="max-w-4xl mx-auto p-6">
  <div class="mb-6 flex justify-between items-center">
    <h1 class="text-3xl font-bold text-gray-900">我的日志</h1>
    <Button class="bg-blue-600 hover:bg-blue-700 text-white">写日志</Button>
  </div>

  <div class="space-y-6">
    {#each blogs as blog (blog.id)}
      <Card class="hover:shadow-lg transition-shadow">
        <CardHeader class="pb-3">
          <div class="flex items-start space-x-4">
            <Avatar class="h-12 w-12">
              <AvatarImage src={blog.avatar} alt={blog.author} />
              <AvatarFallback>{blog.author[0]}</AvatarFallback>
            </Avatar>
            
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">{blog.title}</h3>
                  <div class="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.published}</span>
                  </div>
                </div>
                <div class="flex items-center space-x-4 text-sm">
                  <span class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{blog.readCount}</span>
                  </span>
                  <span class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span>{blog.likes}</span>
                  </span>
                  <span class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>{blog.comments}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent class="pt-0">
          <div class="prose prose max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">{blog.content}</p>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-200">
              <div class="flex space-x-4">
                <Button size="sm" variant="ghost" class="text-blue-600">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  编辑
                </Button>
                <Button size="sm" variant="ghost">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 00-16.755 2.005L7 22a2 2 0 01-2-1.99V17H7a2 2 0 00-2 2v1a2 2 0 002 2v1.99a2 2 0 002 .725.002L18.474 13.968a2 2 0 00-2.89-.974L16.95 5.724a2 2 0 00-1.995-1.858A2 2 0 00-13-4.324L7.741 1.608a2 2 0 00-1.997-1.226 4.398a2 2 0 00-1.09-1.31l2.711 4.22a2 2 0 00-.675-.489l3.58-3.228a2 2 0 00-.866-1.315l4.263 2.522a2 2 0 00-.868.973L19.236 3.602a2 2 0 00-.975-.828A2 2 0 00-1.754-2.005L4.246 22h12.5z"></path>
                  </svg>
                  删除
                </Button>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <span>阅读全文</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>

  <div class="mt-8 text-center">
    <Button variant="outline" class="px-6">
      加载更多日志
    </Button>
  </div>
</div>