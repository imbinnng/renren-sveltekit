<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import CardHeader from '$lib/components/ui/card/card-header.svelte'
  import Avatar from '$lib/components/ui/avatar/avatar.svelte'
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte'
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte'

  const shares = [
    {
      id: '1',
      user: {
        name: '张小明',
        username: 'zhangxiaoming',
        avatar: 'https://picsum.photos/seed/user1/50/50.jpg'
      },
      content: '今天吃了一顿超级美味的火锅！🍲 这个冬天太适合吃热腾腾的食物了。强烈推荐大家去试试这家店的麻辣锅底，简直是人间美味！',
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      likes: 15,
      comments: 3,
      media: ['https://picsum.photos/seed/share1/400/300.jpg'],
      type: 'status'
    },
    {
      id: '2',
      user: {
        name: '李美丽',
        username: 'limeili',
        avatar: 'https://picsum.photos/seed/user2/50/50.jpg'
      },
      content: '分享一下最近在读的一本书《代码大全》📚 里面有很多实用的编程技巧和最佳实践，推荐给所有开发者朋友阅读。#读书笔记 #编程学习',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      likes: 8,
      comments: 2,
      type: 'status'
    },
    {
      id: '3',
      user: {
        name: '王大伟',
        username: 'wangdawei',
        avatar: 'https://picsum.photos/seed/user3/50/50.jpg'
      },
      content: '终于完成了自己的个人作品集网站！🎉 从设计到上线历时3个月，中间踩了不少坑但学到了很多。现在可以和大家分享我的作品了，欢迎大家参观指导！https://example.com',
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      likes: 42,
      comments: 18,
      type: 'status'
    }
  ]
</script>

<div class="max-w-4xl mx-auto p-6">
  <div class="mb-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">分享</h1>
    <div class="flex space-x-4">
      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">发布分享</button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">我的分享</button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">好友分享</button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">热门分享</button>
    </div>
  </div>

  <div class="space-y-6">
    {#each shares as share (share.id)}
      <Card class="hover:shadow-lg transition-shadow">
        <CardContent class="p-6">
          <div class="flex space-x-4 mb-4">
            <Avatar class="h-12 w-12">
              <AvatarImage src={share.user.avatar} alt={share.user.name} />
              <AvatarFallback>{share.user.name[0]}</AvatarFallback>
            </Avatar>
            
            <div class="flex-1">
              <div class="flex items-center space-x-2">
                <span class="font-semibold text-gray-900">{share.user.name}</span>
                <span class="text-sm text-gray-500">@{share.user.username}</span>
                <span class="text-xs text-gray-500">•</span>
                <span class="text-xs text-gray-500">
                  {share.timestamp.toLocaleString('zh-CN', { 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>
          
          <div class="text-gray-900 leading-relaxed mb-4">{share.content}</div>
          
          {#if share.media && share.media.length > 0}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              {#each share.media as mediaUrl}
                <img 
                  src={mediaUrl} 
                  alt="分享图片"
                  class="w-full h-64 object-cover rounded-lg border"
                />
              {/each}
            </div>
          {/if}
          
          <div class="flex items-center justify-between text-sm">
            <div class="flex space-x-6">
              <button class="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span>{share.comments}</span>
              </button>
              
              <button class="flex items-center space-x-1 text-gray-600 hover:text-green-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m9.032 4.026A9.001 9.001 0 012.968 10.326"></path>
                </svg>
                <span>分享</span>
              </button>
              
              <button class="flex items-center space-x-1 text-gray-600 hover:text-red-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span>{share.likes}</span>
              </button>
            </div>
            
            <div class="flex space-x-2">
              <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h14a2 2 0 012 2 7 0l-4 4H5a2 2 0 00-2-2v14a2 2 0 00-2 2h-4a2 2 0 012-2v-8a2 2 0 00-2 2h4a2 2 0 012 2v-2a2 2 0 00-2-2h-4a2 2 0 00-2-2v8a2 2 0 00-2-2H7a2 2 0 00-2-2v-2a2 2 0 00-2-2h-4a2 2 0 00-2-2H5a2 2 0 00-2-2H3a2 2 0 00-2-2h-4a2 2 0 00-2-2h-4l-4 4a2 2 0 00-2-2 0z"></path>
                </svg>
                保存
              </button>
              <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 00-3 3h4a3 3 0 00-3 3v4a3 3 0 003 3h4a3 3 0 003 3v8a3 3 0 00-3-3h4a3 3 0 00-3 3h-4a3 3 0 00-3-3H7a3 3 0 00-3-3H4a3 3 0 00-3-3h-4a3 3 0 00-3-3v1a3 3 0 00-3-3H4a3 3 0 00-3-3H7a3 3 0 00-3-3z"></path>
                </svg>
                收藏
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>

  <div class="mt-8 text-center">
    <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      加载更多分享
    </button>
  </div>
</div>