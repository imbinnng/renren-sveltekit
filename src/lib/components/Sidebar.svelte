<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import CardHeader from '$lib/components/ui/card/card-header.svelte'
  
  export let currentView: string = 'list'
  export let onNavigate: (view: string) => void = () => {}
  
  console.log('Sidebar: currentView =', currentView)
  
  function handleClick(view: string) {
    console.log('Sidebar: clicked', view)
    if (onNavigate) {
      onNavigate(view)
    }
  }
</script>

<Card>
  <CardContent class="p-4">
    <nav class="space-y-1">
      <Button 
        variant="{currentView === 'list' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'list' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('list')}
      >
        🏠 首页
      </Button>
      <Button 
        variant="{currentView === 'profile' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'profile' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('profile')}
      >
        👤 个人主页
      </Button>
      <Button 
        variant="{currentView === 'friends' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'friends' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('friends')}
      >
        👥 好友
      </Button>
      <Button 
        variant="{currentView === 'messages' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'messages' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('messages')}
      >
        💬 消息
      </Button>
      <Button 
        variant="{currentView === 'albums' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'albums' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('albums')}
      >
        📷 相册
      </Button>
      <Button 
        variant="{currentView === 'blogs' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'blogs' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('blogs')}
      >
        📝 日志
      </Button>
      <Button 
        variant="{currentView === 'share' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'share' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('share')}
      >
        🔄 分享
      </Button>
      <Button 
        variant="{currentView === 'games' ? 'default' : 'ghost'}"
        class="w-full justify-start"
        style="background-color: {currentView === 'games' ? 'var(--renren-blue)' : ''};"
        on:click={() => handleClick('games')}
      >
        🎮 游戏
      </Button>
    </nav>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <h3 class="font-bold">应用</h3>
  </CardHeader>
  <CardContent class="p-4 pt-0">
    <div class="grid grid-cols-2 gap-2">
      <Button variant="ghost" size="sm" class="text-xs p-2 h-auto">
        🚗 抢车位
      </Button>
      <Button variant="ghost" size="sm" class="text-xs p-2 h-auto">
        💰 朋友买卖
      </Button>
      <Button variant="ghost" size="sm" class="text-xs p-2 h-auto">
        🌾 天天农场
      </Button>
      <Button variant="ghost" size="sm" class="text-xs p-2 h-auto">
        🐄 阳光牧场
      </Button>
    </div>
  </CardContent>
</Card>