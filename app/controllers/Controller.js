class Controller {
  constructor () {
    this.bindAll = this.bindAll.bind(this)
  }
  bindAll (methods) {
    methods.forEach(method => {
      this[method] = this[method].bind(this)
    })
  }
}

export default Controller
