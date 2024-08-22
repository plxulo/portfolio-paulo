<script>
	import Body from "./Body.svelte";
	import Footer from "./Footer.svelte";
	import Navigation from "./Navigation.svelte";
</script>

<Body>
	<Navigation />
  <slot />
</Body>
<Footer />