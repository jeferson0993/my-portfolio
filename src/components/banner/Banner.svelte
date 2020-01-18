<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, ABOUT_SECTION, KNOW_MORE } = bannerData;
</script>

<section class="main-bgcolor light-color" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>{HEADING}</h1>
        <p>{DECRIPTION}</p>
        <a href={ABOUT_SECTION} target="#about" class="light-color">
          <i class="fas fa-chevron-down fa-2x watch-btn" />
          {KNOW_MORE}
        </a>
      </div>
      <div class="col-md-6">
        <img src="images/web_developer.svg" alt="developer image illustration" class="img-fluid" />
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding-top: 5%;    
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }

  .watch-btn {
    margin: auto 20px;
    position: relative;
    top: 8px;
  }

  section a {
    text-decoration: none;
  }

  img {
    margin-bottom: 2ch;
  }
</style>