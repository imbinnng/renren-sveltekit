<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import CardHeader from '$lib/components/ui/card/card-header.svelte'
  import Avatar from '$lib/components/ui/avatar/avatar.svelte'
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte'
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte'

  const friends = [
    {
      id: '1',
      name: '张小明',
      username: 'zhangxiaoming',
      avatar: 'https://picsum.photos/seed/friend1/50/50.jpg',
      status: 'online',
      mutualFriends: 15
    },
    {
      id: '2',
      name: '李美丽',
      username: 'limeili',
      avatar: 'https://picsum.photos/seed/friend2/50/50.jpg',
      status: 'offline',
      mutualFriends: 8
    },
    {
      id: '3',
      name: '王大伟',
      username: 'wangdawei',
      avatar: 'https://picsum.photos/seed/friend3/50/50.jpg',
      status: 'online',
      mutualFriends: 23
    },
    {
      id: '4',
      name: '陈小红',
      username: 'chenxiaohong',
      avatar: 'https://picsum.photos/seed/friend4/50/50.jpg',
      status: 'online',
      mutualFriends: 12
    }
  ]
</script>

<div class="w-full p-6">
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">好友</h1>
    <div class="flex space-x-4 text-sm">
      <button class="text-blue-600 hover:text-blue-800">全部好友 (128)</button>
      <button class="text-gray-600 hover:text-gray-800">在线好友 (4)</button>
      <button class="text-gray-600 hover:text-gray-800">推荐好友</button>
      <button class="text-gray-600 hover:text-gray-800">查找好友</button>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-3 gap-6">
    {#each friends as friend (friend.id)}
      <Card class="hover:shadow-md transition-shadow">
        <CardContent class="p-6">
          <div class="flex items-start space-x-4">
            <Avatar class="h-12 w-12">
              <AvatarImage src={friend.avatar} alt={friend.name} />
              <AvatarFallback>{friend.name[0]}</AvatarFallback>
            </Avatar>
            
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div class="min-w-0 flex-1">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">{friend.name}</h3>
                  <p class="text-sm text-gray-500 truncate">@{friend.username}</p>
                </div>
                <div class="flex flex-col items-end ml-2 text-right">
                  <div class="flex items-center space-x-1 text-xs">
                    <div class="w-2 h-2 rounded-full {friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}"></div>
                    <span class="text-gray-500">
                      {friend.status === 'online' ? '在线' : '离线'}
                    </span>
                  </div>
                  <span class="text-xs text-gray-500 mt-1">
                    {friend.mutualFriends} 共同好友
                  </span>
                </div>
              </div>
              
              <div class="mt-3 text-sm text-gray-700">
                这是一个友好活跃的用户，经常分享生活中的点点滴滴...
              </div>
              
              <div class="mt-4 flex flex-col sm:flex-row gap-2">
                <Button size="sm" variant="outline" class="flex-1">发消息</Button>
                <Button size="sm" variant="outline" class="flex-1">查看主页</Button>
                <Button size="sm" class="bg-blue-600 hover:bg-blue-700 text-white flex-1">添加好友</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>

  <div class="mt-8 text-center">
    <Button variant="outline" class="px-6">
      加载更多好友
    </Button>
  </div>
</div>