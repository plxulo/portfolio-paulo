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
    animation: scrollBackground 30s linear infinite;
  }
</style>

<footer
  class="bg-background-2 bg-cover text-zinc-50 text-center animated-background"
>
  <div class="flex flex-col gap-4 px-6 py-16 backdrop-blur-xl bg-gradient-to-t from-zinc-900 to-transparent 2xl:px-24 2xl:py-64">
    <p class="font-bold text-xl md:text-6xl xl:text-9xl">Let's work together</p>
  </div>
</footer>
