<script lang="ts">
  export let sectionTitle: string
  export let sectionSubtitle: string = ""
  export let sectionContent: string
</script>

<section class="flex flex-col gap-2 text-center md:text-left mx-6 py-16">
  <header>
    <h1 class="font-bold text-xl lg:text-6xl 2xl:text-9xl">{sectionTitle}</h1>
    <p>{sectionSubtitle}</p>
  </header>
  <div>
    <p>{sectionContent}</p>
  </div>
</section>