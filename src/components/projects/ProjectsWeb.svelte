<script>
  export let projectsWebData = {};
  const { HEADING, ALL_PROJECTS, PROJECT_LIST } = projectsWebData;
</script>

<style>
  .section {
    background-color: #343a40;
    padding-top: 1ch;
    padding-bottom: 1ch;
  }

  .container {
    background-color: #ffffff;
    border: .5ch solid #ffffff;
    border-radius: 5px;
    padding-top: 1ch;
    padding-bottom: 2ch;
  }

  .project-img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  .project h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .title {
    text-transform: uppercase;
  }

  section .btn-primary {
    box-shadow: none;
    padding: 2px 25px;
    border: none;
  }
</style>

<section id="projects" class="section">
  <div class="container text-center">
    <h2 class="title">{HEADING}</h2>
    <div class="row section-body">
      {#each PROJECT_LIST as list}
        <div class="col-md-4 project">
          <img src={list.IMAGE} alt={list.LABEL} class="project-img" />
          <h4>{list.LABEL}</h4>
          <p>{list.DESCRIPTION}</p>
          <a href={list.URL} class="btn btn-primary round-border main-bgcolor">
            DEMO
          </a>
        </div>
      {/each}
    </div>
    <buttom class="btn btn-primary round-border main-bgcolor">
      {ALL_PROJECTS}
    </buttom>
  </div>
</section>
