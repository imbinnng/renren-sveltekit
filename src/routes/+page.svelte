<script lang="ts">
  import FeedList from '../lib/components/FeedList.svelte';
  import FeedDetail from '../lib/components/FeedDetail.svelte';
  import StatusComposer from '../lib/components/StatusComposer.svelte';
  import Avatar from '../lib/components/ui/avatar/avatar.svelte';
  import AvatarImage from '../lib/components/ui/avatar/avatar-image.svelte';
  import AvatarFallback from '../lib/components/ui/avatar/avatar-fallback.svelte';
  import Button from '../lib/components/ui/button/button.svelte';
  import Card from '../lib/components/ui/card/card.svelte';
  import CardContent from '../lib/components/ui/card/card-content.svelte';

  let selectedFeed: any = null;
  let showDetail = false;

  function openFeed(feed: any) {
    selectedFeed = feed;
    showDetail = true;
  }

  function closeDetail() {
    showDetail = false;
    selectedFeed = null;
  }

  function refreshFeed() {
    console.log('Refreshing feed');
  }
</script>

{#if showDetail && selectedFeed}
  <div class="p-4">
    <button on:click={closeDetail} class="text-blue-600 hover:text-blue-800 text-sm mb-4">
      ← 返回首页
    </button>
    <div class="max-w-2xl">
      <FeedDetail feed={selectedFeed} />
    </div>
  </div>
{:else}
  <div class="max-w-6xl mx-auto p-4">
    <div class="flex gap-6">
      <div class="w-64 hidden lg:block">
        <div class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <nav class="space-y-1">
            <button class="w-full text-left px-3 py-2 rounded flex items-center space-x-2" style="background-color: var(--renren-blue); color: white;">
              <span>🏠</span>
              <span>首页</span>
            </button>
            <a href="/friends" class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
              <span>👥</span>
              <span>好友</span>
            </a>
            <a href="/albums" class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
              <span>📷</span>
              <span>相册</span>
            </a>
            <a href="/blogs" class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
              <span>📝</span>
              <span>日志</span>
            </a>
            <a href="/share" class="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
              <span>🔄</span>
              <span>分享</span>
            </a>
          </nav>
        </div>

        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <h3 class="font-bold mb-3">应用</h3>
          <div class="grid grid-cols-2 gap-2">
            <button class="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🚗 抢车位</button>
            <button class="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">💰 朋友买卖</button>
            <button class="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🌾 天天农场</button>
            <button class="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🐄 阳光牧场</button>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <div class="space-y-6">
          <div class="bg-white rounded-lg border border-gray-200 p-6">
            <h2 class="text-lg font-semibold mb-4">分享你的新鲜事...</h2>
            <StatusComposer on:refresh={refreshFeed} />
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-6">
            <FeedList {openFeed} />
          </div>
        </div>
      </div>

      <div class="w-64 hidden xl:block">
        <div class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h3 class="font-bold">热门应用</h3>
          <div class="space-y-2">
            <a href="/albums" class="block text-sm hover:underline text-blue-600">抢车位</a>
            <a href="/" class="block text-sm hover:underline text-blue-600">朋友买卖</a>
            <a href="/" class="block text-sm hover:underline text-blue-600">天天农场</a>
            <a href="/" class="block text-sm hover:underline text-blue-600">阳光牧场</a>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <h3 class="font-bold mb-3">可能认识的人</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">王</div>
              <div class="flex-1">
                <div class="text-sm font-medium">王小明</div>
                <div class="text-xs text-gray-500">5个共同好友</div>
              </div>
              <Button size="sm" class="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">李</div>
              <div class="flex-1">
                <div class="text-sm font-medium">李美丽</div>
                <div class="text-xs text-gray-500">3个共同好友</div>
              </div>
              <Button size="sm" class="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}