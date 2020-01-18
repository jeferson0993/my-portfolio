<script>
  import DATA from "./data/data.js";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Banner from "./components/banner/Banner.svelte";
  import About from "./components/about/About.svelte";
  import ProjectsWeb from "./components/projects/ProjectsWeb.svelte";
</script>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 360px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <!-- Navbar -->
  <Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />

  <!-- Banner -->
  <Banner bannerData={DATA.BANNER_DATA} />

  <!-- About -->
  <About aboutData={DATA.ABOUT_DATA} />

  <!-- Projects Web -->
  <ProjectsWeb projectsWebData={DATA.WEB_DATA} />

  <p>
    <a href="https://svelte.dev/docs">Svelte docs</a>
    .
  </p>

</main>
