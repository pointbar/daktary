{
  const html = ({link, label, content, prose_url, git_url}) => `
    <aside class="contribution-tools">
      <a href="${git_url}" class="github-link">Voir sur Github</a>
      <a href="${prose_url}" class="proseio-link">Editer sur prose.io</a>
      <a href="" class="help-link">Aide</a>
      <a href="" class="page-top">Haut de page</a>
    </aside>
    <div id="parentRepo" class="breadcrumbs">
      À retrouver dans le dépôt : <a href="${link}">${label}</a>
    </div>
    <article id="contribution">
      ${content}
    </article>
  `
  template.create('contribution')
  template.contribution.data = () => {
    const ghApi = new GithubUrl(router.params)
    ghApi.getHtmlBlob().then(htmlResponse => {
      const {owner, repo, branch, path} = router.params
      const data = {
        git_url: ghApi.getGhUrl(),
        prose_url: ghApi.getProseUrl(),
        content: htmlResponse,
        link: `#${owner}/${repo}/tree/${branch}/` +
          `${path.replace(/(\/|)[0-9A-Za-z\u00C0-\u017F\-\_\.]*$/, '')}`,
        label: `${owner} - ${repo}`
      }
      template.contribution.html(html(data))
      template.contribution.renderAsync()
    })
  }
}
