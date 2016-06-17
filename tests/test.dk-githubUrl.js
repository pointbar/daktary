describe('#GhUrl', () => {
  it('should create a GitHubUrl object', () => {
    const noValidGhUrl = new GithubUrl('')
    expect(noValidGhUrl).to.be.an('object')
  })
  it('should generate an API GitHub url', () => {
    const validGhUrl = new GithubUrl(
      {owner: 'owner', repo: 'repo', branch: 'master', path: 'file.md'})
    expect(validGhUrl.toGhApiUrl().startsWith(
      'https://api.github.com/repos/owner/repo/contents/' +
      'file.md?ref=master&client_id='
    )).to.be(true)
  })
  it('should generate an API GitHub Search url', () => {
    const githubQuery = new GithubUrl(
      {owner: 'multibao', repo: 'contributions'})
    expect(githubQuery.toGhApiSearch('jardin').startsWith(
      'https://api.github.com/search/code?q=jardin+' +
      'language:Markdown+user:multibao'
    )).to.be(true)
  })
  it('should generate an URL to GitHub', () => {
    const githubQuery = new GithubUrl(
      {owner: 'mltb', repo: 'model', branch: 'master', path: '/art/ombes.md'})
    expect(githubQuery.getGhUrl()).to.be(
      'https://github.com/mltb/model/blob/master//art/ombes.md'
    )
  })
  it('should generate an URL to prose', () => {
    const githubQuery = new GithubUrl(
      {owner: 'mltb', repo: 'model', branch: 'master', path: '/art/ombes.md'})
    expect(githubQuery.getProseUrl()).to.be(
      'http://prose.io/#mltb/model/edit/master//art/ombes.md'
    )
  })
})
