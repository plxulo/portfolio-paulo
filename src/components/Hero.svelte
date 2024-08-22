<script lang="ts">
  export let title: string
  export let subtitle: string
</script>

<section class="flex flex-col gap-2 text-center py-6 lg:text-left row-start-2 lg:row-start-5 xl:row-start-6 mx-6">
  <div>
    <h1 class="font-bold text-xl md:text-6xl 2xl:text-9xl">{title}</h1>
    <p class="text-zinc-500 text-xs lg:text-base">{subtitle}</p>
  </div>
</section>