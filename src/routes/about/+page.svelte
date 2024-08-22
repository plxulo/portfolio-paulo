<script>
	import Hero from "../../components/Hero.svelte";
	import Section from "../../components/Section.svelte";

  let title = "About"
  let subtitle = "A little bit about me"

  let sectionTitle = "I'm a web developer"
  let sectionContent = "I'm a web development intern and student at Federal University of Santa Catarina, Brazil. I'm currently learning and looking up to become a full cycle developer."
</script>

<Hero title={title} subtitle={subtitle} />

<Section
  sectionTitle={sectionTitle}
  sectionContent={sectionContent}
/>