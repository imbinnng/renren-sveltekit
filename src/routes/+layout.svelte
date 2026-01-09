<script>
  import '../app.css';
</script>

<div class="min-h-screen" style="background-color: var(--renren-bg);">
  <!-- 全站头部导航 -->
  <header class="border-b border-gray-200 bg-white p-4">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-4">
        <div class="text-2xl font-bold" style="color: var(--renren-blue);">人人网</div>
        <nav class="flex space-x-4 md:space-x-6">
          <a href="/" class="text-gray-600 hover:text-blue-600 text-sm md:text-base">首页</a>
          <a href="/friends" class="text-gray-600 hover:text-blue-600 text-sm md:text-base">好友</a>
          <a href="/albums" class="text-gray-600 hover:text-blue-600 text-sm md:text-base">相册</a>
          <a href="/blogs" class="text-gray-600 hover:text-blue-600 text-sm md:text-base">日志</a>
          <a href="/share" class="text-gray-600 hover:text-blue-600 text-sm md:text-base">分享</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- 页面内容 -->
  <main>
    <slot />
  </main>
</div>

<style>
  :global(:root) {
    --renren-blue: #005EAC;
    --renren-border: #e5e7eb;
    --renren-bg: #f8f9fa;
  }
</style>