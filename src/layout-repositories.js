/**
* Layout for manage and display Github repositories.
*
*/
layout.repos = new Layout('repos')
layout.repos.html(`
<main class="container">
  <div id="breadcrumb" class="breadcrumb" data-template="breadcrumb">
  </div>
  <section id="gh-list" class="gh-list" data-template="repos">
  </section>
</main>`)
