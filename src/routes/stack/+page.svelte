<script>
	import Hero from "../../components/Hero.svelte";
	import Section from "../../components/Section.svelte";

  let title = "Stack"
  let subtitle = "Learn more about my tech stack"

  let sectionTitle = "Skills & Stack"
  let learningSectionTitle = "Learning"
  
</script>
<Hero title={title} subtitle={subtitle} />

<article class="bg-zinc-900 text-white py-32">
  <Section sectionTitle={sectionTitle}>
    <ul class="space-y-4 mt-2">
      <li>
        <p>
          💻 Applications and data: Php, React, Javascript, Typescript, TailwindCSS, SQL, MongoDB, HTML5;
        </p>
      </li>
      <li>
        <p>
          ⚒️ Tools and utilities: Visual Studio Code, Figma, Linear, Trello, Postman, Obsidian;
        </p>
      </li>
      <li>
        <p>
          ♾️ DevOps: Amazon Web Services, GIT, GitHub.
        </p>
      </li>
    </ul>
  </Section>
</article>

<article>
  <Section sectionTitle={learningSectionTitle}>
    <ul class="space-y-4 mt-2">
      <li>
        <p>
          Svelte, Flask
        </p>
      </li>
    </ul>
  </Section>
</article>