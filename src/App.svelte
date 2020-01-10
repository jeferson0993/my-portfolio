<script>
	import DATA from "./data/data.js";
	import Navbar from "./components/navbar/Navbar.svelte";
	export let name;
</script>

<main>

	<!-- Navbar -->
	<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />

	<h1>{name}</h1>
	<p><a href="https://svelte.dev/docs">Svelte doc</a>.</p>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff0000;
		text-transform: uppercase;
		font-size: 2.5em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>