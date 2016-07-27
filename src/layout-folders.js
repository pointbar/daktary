/**
 * Layout for manage and display Github repositories.
 *
 */
{
  layout.folders = new Layout('folders')
  layout.folders.html(`
  <div id="search-engine-wrapper" class="search-engine-wrapper" data-template="search"></div>
  <main class="container">
    <div id="breadcrumb" class="breadcrumb" data-template="breadcrumb">
    </div>
    <section id="gh-list" class="gh-list" data-template="folders">
    </section>
  </main>`)
}
