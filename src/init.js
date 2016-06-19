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
})
const template = {}
const layout = {}
