<script lang="ts">
  // Changed background image, padding
  import { ArrowDown, ArrowRight } from "lucide-svelte";
  import Button from "./Button.svelte";
	import { onMount } from "svelte";

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

<section class="grid lg:row-span-4 xl:row-span-5 grid-cols-6 xl:grid-cols-12 
  place-items-start place-content-center sm:place-content-end
  bg-emerald-700 bg-cover text-zinc-50 h-screen">
  <div class={`fixed z-10 top-0 w-full grid grid-cols-subgrid col-span-full py-4 px-6 backdrop-blur-lg xl:py-6 2xl:px-24 transition-colors duration-1000
    ${isScroll && 'bg-zinc-950/70 text-white shadow-lg'}`}>
    <div class="hidden md:flex justify-start items-center grid-cols-subgrid">
      <p class="w-max">Paulo Amarante</p>
    </div>
    <section class="flex flex-row justify-center gap-3 col-start-3 col-span-2 xl:col-start-6">
      <nav class="flex flex-row items-center gap-3">
        <ul class="flex flex-row items-center gap-3">
          <a href="/portfolio-paulo" class="hover:underline hover:font-medium">Home</a>
          <a href="/portfolio-paulo/about" class="hover:underline hover:font-medium">About</a>
          <a href="/portfolio-paulo/stack" class="hover:underline hover:font-medium">Stack</a>
          <a href="/portfolio-paulo/projects" class="hover:underline hover:font-medium">Projects</a>
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

  <section class="flex flex-col gap-2 text-center sm:text-left sm:pl-8 pb-8 hover:pt-8 w-screen
    sm:bg-gradient-to-t from-zinc-900 to-transparent
    2xl:pl-24 2xl:pb-24 2xl:hover:pt-24 hover:cursor-default 
    sm:hover:bg-zinc-900 transition-all duration-1000">


    <div class="flex flex-col sm:flex-row items-center gap-8">
      <div>
        <h1 class="font-bold text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl w-max">Paulo Amarante</h1>
        <p class="text-zinc-300 text-base md:text-xl">Software developer - science & technology</p>
      </div>
      <div class="rounded-full w-fit h-fit bg-white text-zinc-900 animate-bounce sm:opacity-85 hover:opacity-100 hover:cursor-pointer transition-all">
        <ArrowDown class="size-8 md:size-16" />
      </div>
    </div>


  </section>
</section>
