<script>
	import Hero from "../../components/Hero.svelte";
	import Section from "../../components/Section.svelte";

  let title = "About"
  let subtitle = "A little bit about me"

  let sectionTitle = "I'm a web developer"
  let sectionContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempora provident optio animi a, labore dolores consequuntur, iure assumenda sed doloremque quis! Quos quidem ipsum laborum ullam nesciunt nihil saepe."
</script>

<Hero title={title} subtitle={subtitle} />

<Section
  sectionTitle={sectionTitle}
  sectionContent={sectionContent}
/>

<Section
  sectionTitle={sectionTitle}
  sectionContent={sectionContent}
/>