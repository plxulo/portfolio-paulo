<script>

	import { ArrowRight } from "lucide-svelte";
	import Button from "./Button.svelte";

</script>
<style>
  @keyframes scrollBackground {
    0% {
      background-position: top;
    }
    100% {
      background-position: bottom;
    }
  }

  .animated-background {
    background-size: 150%;
    animation: scrollBackground 15s linear infinite;
  }
</style>

<footer
  class="bg-background-2 bg-cover text-zinc-50 text-center animated-background"
>
  <div class="flex flex-col gap-12 px-6 py-16 items-center justify-center
    backdrop-blur-xl bg-gradient-to-t from-zinc-900 to-transparent 2xl:px-24 2xl:py-32">
    <p class="font-bold text-6xl md:text-9xl">Let's work together</p>
    <Button variant="footer">
      <p class="w-max flex-1">Get in touch</p>
      <ArrowRight />
    </Button>
  </div>
</footer>
