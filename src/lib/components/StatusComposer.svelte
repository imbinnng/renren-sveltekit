<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import Textarea from '$lib/components/ui/textarea/textarea.svelte';
  import Card from '$lib/components/ui/card/card.svelte';
  import CardHeader from '$lib/components/ui/card/card-header.svelte';
  import CardContent from '$lib/components/ui/card/card-content.svelte';
  import Avatar from '$lib/components/ui/avatar/avatar.svelte';
  import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
  import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';

  let statusText = '';
  let showEmojis = false;
  const dispatch = createEventDispatcher();

  function postStatus() {
    if (statusText.trim()) {
      // Post status logic
      console.log('Posting status:', statusText);
      statusText = '';
      dispatch('refresh');
    }
  }

  function addEmoji(emoji: string) {
    statusText += emoji;
    showEmojis = false;
  }
</script>

<div class="mb-4">
  <div class="flex space-x-3">
    <Avatar class="h-12 w-12">
      <AvatarImage 
        src="https://picsum.photos/seed/currentuser/50/50.jpg" 
        alt="我的头像"
      />
      <AvatarFallback>我</AvatarFallback>
    </Avatar>
    
    <div class="flex-1">
      <Textarea
        bind:value={statusText}
        placeholder="说点什么吧..."
        class="min-h-[80px] resize-none"
        rows="3"
      />
      
      <div class="flex items-center justify-between mt-3">
        <div class="flex space-x-2">
          <Button 
            variant="outline"
            size="sm"
            on:click={() => showEmojis = !showEmojis}
          >
            😊 表情
          </Button>
          <Button variant="outline" size="sm">
            📷 图片
          </Button>
          <Button variant="outline" size="sm">
            🎵 音乐
          </Button>
          <Button variant="outline" size="sm">
            📹 视频
          </Button>
        </div>
        
        <Button 
          disabled={!statusText.trim()}
          on:click={postStatus}
          class="bg-blue-600 hover:bg-blue-700 text-white"
        >
          发布
        </Button>
      </div>

      {#if showEmojis}
        <Card class="mt-3 p-3 bg-gray-50">
          <div class="grid grid-cols-8 gap-1">
            {#each [
              '😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨'
            ] as emoji}
              <Button 
                variant="ghost"
                size="sm"
                class="text-lg p-1 h-auto"
                on:click={() => addEmoji(emoji)}
              >
                {emoji}
              </Button>
            {/each}
          </div>
        </Card>
      {/if}
    </div>
  </div>
</div>