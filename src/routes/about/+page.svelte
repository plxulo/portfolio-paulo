<script>
	import Hero from "../../components/Hero.svelte";
	import Section from "../../components/Section.svelte";

  let title = "Learn more about me"
  let sectionTitle = "I'm a web developer"
</script>

<Hero title={title} />

<article class="bg-zinc-900 text-white py-32">
  <Section sectionTitle={sectionTitle}>
    <p>I'm a web development intern and student at Federal University of Santa Catarina, Brazil. I'm currently learning and looking up to become a full cycle developer.</p>
  </Section>
</article>