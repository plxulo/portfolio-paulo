<script lang="ts">
  export let sectionTitle: string
</script>

<section class="flex flex-col gap-6 sm:gap-2 text-center md:text-left mx-6 py-16 2xl:mx-24">
  <header>
    <h1 class="font-bold text-5xl lg:text-6xl 2xl:text-9xl">{sectionTitle}</h1>
  </header>
  <div>
    <slot />
  </div>
</section>