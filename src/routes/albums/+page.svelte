<script lang="ts">
  import AlbumsComponent from "$lib/components/Albums.svelte"
  import Button from "$lib/components/ui/button/button.svelte"
</script>

<div class="min-h-screen bg-gray-50">
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">相册</h1>
    <AlbumsComponent />
  </div>
</div>
