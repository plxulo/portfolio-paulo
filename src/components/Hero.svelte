<script lang="ts">
  export let title: string
  export let subtitle: string
</script>

<section class="flex flex-col gap-2 px-4 py-8">
  <div>
    <h1 class="font-bold text-xl lg:text-4xl">{title}</h1>
    <p class="text-zinc-500 text-xs lg:text-base">{subtitle}</p>
  </div>
</section>