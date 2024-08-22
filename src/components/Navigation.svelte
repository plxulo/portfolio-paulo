<script lang="ts">
  // Rename -> Header.svelte
	import { ArrowRight } from "lucide-svelte";
  import Button from "./Button.svelte";

  let backgroundImage: string
</script>

<section class="grid lg:row-span-4 xl:row-span-5 grid-cols-6 xl:grid-cols-12 place-items-start place-content-start text-center
  bg-background-1 bg-cover text-zinc-50">
  <!--<div class="fixed top-0 w-full lg:w-[calc(100%-32px)] lg:left-4 lg:right-4 grid grid-cols-subgrid col-span-full py-4 px-4
    backdrop-blur-lg">=-->
  <div class="fixed top-0 w-full grid grid-cols-subgrid col-span-full py-4 px-4
  backdrop-blur-lg xl:py-6">
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
        <p class="w-max">Get in touch</p>
        <ArrowRight />
      </Button>
    </div>
  </div>
</section>
