<script lang="ts">
  export let variant: string = '';
</script>

<button
  class={`flex-row items-center justify-center gap-3 px-4 h-8 w-fit rounded-3xl border text-sm 
    transition-all hidden md:flex
    ${variant === 'navigation' ? 'hover:bg-white hover:text-zinc-900' : ''}`}
>
  <slot />
</button>