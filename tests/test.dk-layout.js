describe('#LAYOUT', () => {
  it('should create basic layout', () => {
    const layout = new Layout('layout')
    expect(layout).to.be.an('object')
  })
  it('should retrieves all template names', () => {
    const layout = new Layout('layout')
    layout.html('<h1>Honney Pot</h1><div data-template="search"></div><hr><div data-template="ruche"></div>')
    expect(layout._getTemplateNames()).to.have.length(2)
    expect(layout._getTemplateNames()).to.be.contain('ruche')
  })
  it('should retrieves simple html', () => {
    const layout = new Layout('layout')
    layout.html(`<h1>Hello</h1>`)
    expect(layout._htmlTpl.querySelector('h1').innerHTML).to.be('Hello')
  })
})
