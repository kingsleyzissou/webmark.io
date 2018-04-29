// import _ from 'lodash'
import store from '@app/database/store'

class Model {
  constructor (collection) {
    this.collection = collection
  }

  add (object) {
    return store.get(this.collection)
      .push(object)
      .write()
  }

  findBy (query) {
    return store.get(this.collection)
      .find(query)
      .value()
  }

  all () {
    let result = store.get(this.collection)
      .value()

    return result || []
  }

  count () {
    let result = store.get(this.collection)
      .value()
      .length

    return result || 0
  }

  countByUser (user) {
    let result = store.get(this.collection)
      .filter({ user_id: user })
      .value()
      .length

    return result || 0
  }

  getMultiple (query) {
    return store.get(this.collection)
      .filter(query)
      .value()
  }

  remove (object) {
    return store.get(this.collection)
      .remove(object)
      .write()
  }
}

export default Model
