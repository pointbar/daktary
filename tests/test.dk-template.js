describe('#TEMPLATE', () => {
  it('should create basic template', () => {
    const template = new Template('template')
    expect(template).to.be.an('object')
  })
  it('should retrieve template\'s name', () => {
    const template = new Template('template')
    expect(template._name).to.be('template')
  })
  it('should attach event in template', () => {
    const template = new Template('template')
    template.html(`<h1>Hello</h1>`)
    template.events({
      'click h1': '',
      'keypress h1': ''
    })
    expect(template._events).to.have.property('keypress h1')
  })
  it('should retrieves simple html of a template', () => {
    const template = new Template('template')
    template.html(`<h1>Hello</h1>`)
    expect(template._htmlTpl.querySelector('h1').innerHTML).to.be('Hello')
  })
  it('should retrieves html and data of a template', () => {
    const template = new Template('template')
    const {wat} = {
      wat: 'world'
    }
    template.html(`<h1>Hello ${wat}</h1>`)
    expect(template._htmlTpl.querySelector('h1').innerHTML).to.be('Hello world')
  })
  it('should retrieves html with async data', (done) => {
    const template = new Template('template')
    window.setTimeout(() => {
      const {world} = {world: 'World!'}
      template.html(`<h1>Hello ${world}</h1>`)
      expect(template._htmlTpl.querySelector('h1').innerHTML).to.be('Hello World!')
      done()
    }, 500)
  })
})
