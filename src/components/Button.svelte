<script lang="ts">
  export let variant: string = '';
</script>

<button
  class={`flex-row items-center justify-center gap-3 px-4 h-8 w-fit rounded-3xl border text-sm 
    transition-all flex hover:px-6 duration-1000
    ${variant === 'navigation' && 'hover:bg-white hover:text-zinc-900'}
    ${variant === 'footer' && 'w-1/2 hover:w-2/3 sm:w-1/4 hover:bg-white hover:text-zinc-900 sm:hover:w-1/3'}`}
>
  <slot />
</button>