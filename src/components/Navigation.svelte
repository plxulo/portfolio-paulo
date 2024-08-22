<script lang="ts">
	import { ArrowRight } from "lucide-svelte";
  import Button from "./Button.svelte";

  let backgroundImage: string
</script>

<section class="grid lg:row-span-5 grid-cols-6 place-items-center place-content-start text-center
  bg-background-1 bg-cover text-zinc-50">
  <div class="grid grid-cols-subgrid col-span-full place-content-center py-4 px-4
    backdrop-blur-lg">
    <section class="flex flex-row justify-center gap-3 col-start-3 col-span-2">
      <nav class="flex flex-row items-center gap-3">
        <ul class="flex flex-row items-center gap-3">
          <a href="/" class="hover:underline hover:font-medium">Home</a>
          <a href="/about" class="hover:underline hover:font-medium">About</a>
          <a href="/stack" class="hover:underline hover:font-medium">Stack</a>
          <a href="/projects" class="hover:underline hover:font-medium">Projects</a>
        </ul>
      </nav>
    </section>
    <div class="grid-cols-subgrid col-start-6">
      <Button variant="navigation">
        <p class="w-max">Get in touch</p>
        <ArrowRight />
      </Button>
    </div>
  </div>
  
</section>