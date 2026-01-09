<script lang="ts">
  import type { Feed } from '$lib/types'
  import { formatTimeAgo } from '../data'
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import Avatar from '$lib/components/ui/avatar/avatar.svelte'
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte'
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte'
  import Textarea from '$lib/components/ui/textarea/textarea.svelte'

  export let feed: Feed

  let isLiked = false
  let isRetweeted = false
</script>

<Card>
  <CardContent class="p-4">
    <div class="flex space-x-3">
      <Avatar class="h-12 w-12">
        <AvatarImage 
          src={feed.author.avatar} 
          alt={feed.author.name}
        />
        <AvatarFallback>{feed.author.name[0]}</AvatarFallback>
      </Avatar>
      
      <div class="flex-1 min-w-0">
        <div class="flex items-center space-x-2">
          <a href="#" class="font-medium hover:underline" style="color: var(--renren-blue);">{feed.author.name}</a>
          {#if feed.author.verified}
            <span class="text-orange-500 text-sm">V</span>
          {/if}
          <span class="text-gray-500 text-sm">{formatTimeAgo(feed.timestamp)}</span>
        </div>
        
        <div class="mt-3 text-gray-900 leading-relaxed">{feed.content}</div>
        
        {#if feed.images && feed.images.length > 0}
          <div class="mt-4 space-y-2">
            {#if feed.images.length === 1}
              <div class="inline-block overflow-hidden rounded-lg border" style="border-color: var(--renren-border);">
                <img 
                  src={feed.images[0]} 
                  alt="动态图片"
                  class="w-full max-w-md object-cover hover:scale-105 transition-transform"
                />
              </div>
            {:else if feed.images.length === 2}
              <div class="grid grid-cols-2 gap-2">
                {#each feed.images as mediaUrl}
                  <div class="overflow-hidden rounded-lg border" style="border-color: var(--renren-border);">
                    <img 
                      src={mediaUrl} 
                      alt="动态图片"
                      class="w-full h-48 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                {/each}
              </div>
              {:else}
                <div class="grid grid-cols-2 gap-2">
                  {#each feed.images as mediaUrl, index}
                    <div class="relative overflow-hidden rounded-lg border {index >= 4 ? 'hidden' : ''}" style="border-color: var(--renren-border);">
                      <img 
                        src={mediaUrl} 
                        alt="动态图片"
                        class="w-full h-40 object-cover hover:scale-105 transition-transform"
                      />
                      {#if index === 3 && feed.images.length > 4}
                        <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                          <span class="text-white text-xl font-bold">+{feed.images.length - 4}</span>
                        </div>
                      {/if}
                    </div>
                  {/each}
              </div>
            {/if}
          </div>
        {/if}
        
        <div class="mt-4 flex justify-end items-center space-x-8">
          <Button variant="ghost" size="sm">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            评论({feed.comments})
          </Button>
          
          <Button 
            variant="ghost"
            size="sm"
            class="{isRetweeted ? 'text-green-600' : ''}"
            on:click={() => isRetweeted = !isRetweeted}
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m9.032 4.026A9.001 9.001 0 012.968 10.326"></path>
            </svg>
            分享({feed.shares + (isRetweeted ? 1 : 0)})
          </Button>
          
          <Button 
            variant="ghost"
            size="sm"
            class="{isLiked ? 'text-red-600' : ''}"
            on:click={() => isLiked = !isLiked}
          >
            <svg class="w-4 h-4 mr-1" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            喜欢({feed.likes + (isLiked ? 1 : 0)})
          </Button>
        </div>
      </div>
    </div>
  </CardContent>

  <!-- 评论区 -->
  <div class="border-t" style="border-color: var(--renren-border);">
    <CardContent class="p-4">
      <h3 class="font-bold mb-3">评论 ({feed.comments})</h3>
      
      <!-- 写评论 -->
      <Card class="mb-4">
        <CardContent class="p-4">
          <div class="flex space-x-3">
            <Avatar class="h-8 w-8">
              <AvatarImage 
                src="https://picsum.photos/seed/currentuser/40/40.jpg" 
                alt="我"
              />
              <AvatarFallback>我</AvatarFallback>
            </Avatar>
            
            <div class="flex-1">
              <Textarea
                placeholder="说点什么吧..."
                class="min-h-[60px] resize-none"
                rows="2"
              />
              
              <div class="flex justify-end mt-2">
                <Button size="sm" style="background-color: var(--renren-blue);">
                  发布
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <!-- 评论列表 -->
      <div class="space-y-3">
        <Card>
          <CardContent class="p-3 bg-gray-50">
            <div class="flex space-x-3">
              <Avatar class="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/commenter1/32/32.jpg" alt="评论者" />
                <AvatarFallback>张</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                <div class="flex items-center space-x-2 mb-1">
                  <a href="#" class="font-medium text-sm hover:underline" style="color: var(--renren-blue);">张小明</a>
                  <span class="text-xs text-gray-500">2小时前</span>
                </div>
                <p class="text-sm text-gray-800">说得太对了！我也是这么想的。</p>
                <div class="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                  <Button variant="ghost" size="sm" class="h-auto p-0">回复</Button>
                  <Button variant="ghost" size="sm" class="h-auto p-0">喜欢</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent class="p-3 bg-gray-50">
            <div class="flex space-x-3">
              <Avatar class="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/commenter2/32/32.jpg" alt="评论者" />
                <AvatarFallback>李</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                <div class="flex items-center space-x-2 mb-1">
                  <a href="#" class="font-medium text-sm hover:underline" style="color: var(--renren-blue);">李美丽</a>
                  <span class="text-xs text-gray-500">5小时前</span>
                </div>
                <p class="text-sm text-gray-800">这个观点很有意思，值得深入思考 👍</p>
                <div class="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                  <Button variant="ghost" size="sm" class="h-auto p-0">回复</Button>
                  <Button variant="ghost" size="sm" class="h-auto p-0">喜欢</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </div>
</Card>