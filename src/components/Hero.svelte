<script lang="ts">
  export let title: string
  export let subtitle: string
</script>

<section class="flex flex-col gap-2 text-center py-6 lg:text-left row-start-2 lg:row-start-5">
  <div>
    <h1 class="font-display font-bold text-xl lg:text-5xl">{title}</h1>
    <p class="text-zinc-500 text-xs lg:text-base">{subtitle}</p>
  </div>
</section>