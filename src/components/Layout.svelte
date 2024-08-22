<script>
	import Body from "./Body.svelte";
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
</script>

<Body>
	<Header />
  <slot />
</Body>
<Footer />