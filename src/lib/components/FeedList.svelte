<script lang="ts">
  import type { Feed } from '$lib/types'
  import { mockFeeds, formatTimeAgo } from '../data'
  import Button from '$lib/components/ui/button/button.svelte'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardContent from '$lib/components/ui/card/card-content.svelte'
  import Avatar from '$lib/components/ui/avatar/avatar.svelte'
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte'
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte'

  export let openFeed: (feed: Feed) => void

  let feeds = mockFeeds

  function handleLike(feedId: string) {
    const feed = feeds.find(f => f.id === feedId)
    if (feed) {
      feed.likes += 1
    }
  }

  function handleRetweet(feedId: string) {
    const feed = feeds.find(f => f.id === feedId)
    if (feed) {
      feed.shares += 1
    }
  }
</script>

  <div class="space-y-3">
    {#each feeds as feed (feed.id)}
      <Card 
        class="cursor-pointer hover:shadow-md transition-shadow"
        role="button"
        tabindex="0"
        on:click={() => openFeed(feed)}
        on:keydown={(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            openFeed(feed)
          }
        }}
      >
        <CardContent class="p-4">
          <div class="flex space-x-3">
            <Avatar class="h-12 w-12">
              <AvatarImage 
                src={feed.author.avatar} 
                alt={feed.author.name}
              />
              <AvatarFallback>{feed.author.name[0]}</AvatarFallback>
            </Avatar>
            
            <div class="flex-1">
              <div class="flex items-center space-x-2">
                <a href="#" class="font-medium hover:underline" style="color: var(--renren-blue);">{feed.author.name}</a>
                {#if feed.author.verified}
                  <span class="text-orange-500 text-sm">V</span>
                {/if}
                <span class="text-gray-500 text-sm">{formatTimeAgo(feed.timestamp)}</span>
              </div>
              
              <div class="mt-2 text-gray-900 leading-relaxed">{feed.content}</div>
              
              {#if feed.images && feed.images.length > 0}
                <div class="mt-3 {feed.images.length === 1 ? '' : 'grid grid-cols-2'} gap-1">
                  {#each feed.images as mediaUrl}
                    <div class="overflow-hidden rounded border" style="border-color: var(--renren-border);">
                      <img 
                        src={mediaUrl} 
                        alt="动态图片"
                        class="{feed.images.length === 1 ? 'w-full max-w-xs' : 'w-full h-24'} object-cover hover:scale-105 transition-transform cursor-pointer"
                        on:click|stopPropagation
                      />
                    </div>
                  {/each}
                </div>
              {/if}
              
              <div class="mt-3 flex justify-end items-center space-x-4 text-sm">
                <Button 
                  variant="ghost"
                  size="sm"
                  on:click={() => openFeed(feed)}
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  评论({feed.comments})
                </Button>
                
                <Button 
                  variant="ghost"
                  size="shadcn-ui/sm"
                  on:click={() => handleRetweet(feed.id)}
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m9.032 4.026A9.001 9.001 0 012.968 10.326"></path>
                  </svg>
                  分享({feed.shares})
                </Button>
                
                <Button 
                  variant="ghost"
                  size="sm"
                  on:click={() => handleLike(feed.id)}
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  喜欢({feed.likes})
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>