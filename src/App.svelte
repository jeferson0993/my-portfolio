<script>
	import DATA from "./data/data.js";
	import Navbar from "./components/navbar/Navbar.svelte";
	import Banner from "./components/banner/Banner.svelte";
</script>

<main>

	<!-- Navbar -->
	<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />

	<!-- Banner -->
	<Banner bannerData={DATA.BANNER_DATA} />

	<p><a href="https://svelte.dev/docs">Svelte docs</a>.</p>

</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff0000;
		text-transform: uppercase;
		font-size: 2.5em;
		font-weight: 100;
	}

	@media (min-width: 360px) {
		main {
			max-width: none;
		}
	}
</style>