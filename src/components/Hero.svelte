<script lang="ts">
  export let title: string
  export let subtitle: string
</script>

<section class="flex flex-col gap-2 text-center lg:text-left lg:px-8 lg:py-8 row-start-3 lg:row-start-5">
  <div>
    <h1 class="font-bold text-xl lg:text-4xl">{title}</h1>
    <p class="text-zinc-500 text-xs lg:text-base">{subtitle}</p>
  </div>
</section>