<script lang="ts">
  import Friends from '$lib/components/Friends.svelte';
  import Avatar from '$lib/components/ui/avatar/avatar.svelte';
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import Card from '$lib/components/ui/card/card.svelte';
  import CardContent from '$lib/components/ui/card/card-content.svelte';
</script>

<div class="max-w-6xl mx-auto py-6">
  <div class="flex gap-6">
    <!-- 左侧导航 -->
    <div class="w-56 hidden lg:block">
      <div class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <nav class="space-y-1">
          <a 
            href="/" 
            class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block"
          >
            <span>🏠</span>
            <span>首页</span>
          </a>
          <button 
            class="w-full text-left px-3 py-2 rounded flex items-center space-x-2"
            style="background-color: var(--renren-blue); color: white;"
          >
            <span>👥</span>
            <span>好友</span>
          </button>
          <a href="/messages" 
            class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block"
          >
            <span>💬</span>
            <span>消息</span>
          </a>
          <a href="/albums" 
            class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block"
          >
            <span>📷</span>
            <span>相册</span>
          </a>
          <a href="/blogs" 
            class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block"
          >
            <span>📝</span>
            <span>日志</span>
          </a>
          <a href="/share" 
            class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block"
          >
            <span>🔄</span>
            <span>分享</span>
          </a>
        </nav>
      </div>
    </div>

    <!-- 主内容 -->
    <div class="flex-1">
      <Friends />
    </div>

    <!-- 右侧栏 -->
    <div class="w-64 hidden xl:block">
      <div class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <h3 class="font-bold mb-3">好友统计</h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">总好友数</span>
            <span class="font-semibold">328</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">在线好友</span>
            <span class="font-semibold text-green-600">42</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">新好友请求</span>
            <span class="font-semibold text-blue-600">5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>