<script lang="ts">
  // Rename -> Header.svelte
	import { ArrowRight } from "lucide-svelte";
  import Button from "./Button.svelte";
	import { onMount } from "svelte";

  let backgroundImage: string

  let scrollY: number = 0
  let isScroll: boolean = false

  function handleScroll() {
    scrollY = window.scrollY
    isScroll = scrollY > 300
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });
</script>

<section class="grid lg:row-span-4 xl:row-span-5 grid-cols-6 xl:grid-cols-12 place-items-start place-content-end text-center
  bg-background-1 bg-cover text-zinc-50 h-screen">
  <div class={`fixed top-0 w-full grid grid-cols-subgrid col-span-full py-4 px-6 backdrop-blur-lg xl:py-6
    ${isScroll && 'bg-zinc-950/70 text-white shadow-lg'}`}>
    <div class="hidden md:flex justify-start items-center grid-cols-subgrid">
      <p class="w-max">Paulo Amarante</p>
    </div>
    <section class="flex flex-row justify-center gap-3 col-start-3 col-span-2 xl:col-start-6">
      <nav class="flex flex-row items-center gap-3">
        <ul class="flex flex-row items-center gap-3">
          <a href="/" class="hover:underline hover:font-medium">Home</a>
          <a href="/about" class="hover:underline hover:font-medium">About</a>
          <a href="/stack" class="hover:underline hover:font-medium">Stack</a>
          <a href="/projects" class="hover:underline hover:font-medium">Projects</a>
        </ul>
      </nav>
    </section>
    <div class="flex justify-end items-center grid-cols-subgrid col-start-6 xl:col-start-12">
      <Button variant="navigation">
        <p class="w-max flex-1">Get in touch</p>
        <ArrowRight />
      </Button>
    </div>
  </div>

  <section class="hidden md:flex flex-col gap-2 text-left pl-6 pt-6 pb-16 w-screen bg-gradient-to-t from-zinc-900 to-transparent">
    <div>
      <h1 class="font-bold text-xl md:text-8xl lg:text-9xl 2xl:text-9xl w-max">Paulo Amarante</h1>
      <p class="text-zinc-300 text-base md:text-xl">Web developer - science & technology</p>
    </div>
  </section>
</section>
