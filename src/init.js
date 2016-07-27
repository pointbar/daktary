const template = {}
const layout = {}

window.addEventListener('hashchange', () => {
  const ghUrl = window.location.toString().split('#')[1]
  const anchor = document.querySelector(`a[name="${ghUrl}"]`)
  if (anchor) {
    anchor.scrollIntoView()
    window.location = `#${router.url}`
  } else {
    router.go(ghUrl)
    if (this.currentRoute !== 'home') {
      window.location = `#${ghUrl}`
    }
  }
})
window.addEventListener('load', () => {
  const ghUrl = window.location.toString().split('#')[1]
  router.go(ghUrl)
  if (router.isNoRoute()) {
    window.location = './404.html'
    window.location.reload(true)
  }
  document.querySelector('#button-gh-search')
    .addEventListener('click', (evt) => {
      if (document.querySelector('#gh-search').value.length > 2) {
        const userQuery = document.querySelector('#gh-search').value
        const apiUrl = new GithubUrl(router.params).toGhApiSearch(userQuery)
        router.go(apiUrl.replace('https://api.github.com/', ''))
      }
    })
  document.querySelector('#gh-search').addEventListener('keypress', (evt) => {
    if (evt.key === 'Enter' && evt.target.value.length > 2) {
      const userQuery = evt.target.value
      const apiUrl = new GithubUrl(router.params).toGhApiSearch(userQuery)
      router.go(apiUrl.replace('https://api.github.com/', ''))
    }
  })
})
