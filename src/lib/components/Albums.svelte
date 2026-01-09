<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import CardHeader from '$lib/components/ui/card/card-header.svelte'
  import Avatar from '$lib/components/ui/avatar/avatar.svelte'
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte'
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte'

  const albums = [
    {
      id: '1',
      title: '毕业旅行',
      description: '和同学们的毕业旅行回忆',
      cover: 'https://picsum.photos/seed/album1/300/200.jpg',
      photoCount: 128,
      created: '2024-06-15',
      privacy: 'public'
    },
    {
      id: '2',
      title: '日常生活',
      description: '记录生活的美好瞬间',
      cover: 'https://picsum.photos/seed/album2/300/200.jpg',
      photoCount: 256,
      created: '2024-05-20',
      privacy: 'friends'
    },
    {
      id: '3',
      title: '工作照片',
      description: '工作中的点点滴滴',
      cover: 'https://picsum.photos/seed/album3/300/200.jpg',
      photoCount: 64,
      created: '2024-04-10',
      privacy: 'private'
    },
    {
      id: '4',
      title: '美食分享',
      description: '各种美食记录',
      cover: 'https://picsum.photos/seed/album4/300/200.jpg',
      photoCount: 89,
      created: '2024-03-25',
      privacy: 'public'
    }
  ]
</script>

<div class="max-w-6xl mx-auto p-6">
  <div class="mb-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">我的相册</h1>
    <div class="flex space-x-4 mb-6">
      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">创建相册</button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">上传照片</button>
      <div class="flex items-center space-x-2">
        <input type="text" placeholder="搜索相册..." class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each albums as album (album.id)}
      <Card class="group cursor-pointer hover:shadow-xl transition-all duration-300">
        <CardContent class="p-0">
          <div class="relative">
            <img src={album.cover} alt={album.title} class="w-full h-48 object-cover">
            <div class="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
              {album.privacy === 'public' ? '公开' : album.privacy === 'friends' ? '好友可见' : '私密'}
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{album.title}</h3>
            <p class="text-gray-600 text-sm mb-3">{album.description}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{album.photoCount} 张照片</span>
              <span>{album.created}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>

  <div class="mt-8 text-center">
    <Button variant="outline" class="px-6">
      查看更多相册
    </Button>
  </div>
</div>