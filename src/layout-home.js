{
  layout.home = new Layout('home')
  layout.home.html(`
  <main>
    <section class="home-intro">
        <div class="home-intro-content container">
          <h2>S'inspirer des autres cultures<span>Rédiger et partager vos expériences</span></h2>
          <a href="#multibao/contributions/blob/master/pages/commencer_ici.md">Commencer ici</a>
          <a href="#multibao/documentation/blob/master/README.md">Guide d'utilisation</a>
        </div>
    </section>
    <section id="gh-crew-list" class="container">
      <ul data-template="crews">
      </ul>
    </section>
  </main>`)
}
