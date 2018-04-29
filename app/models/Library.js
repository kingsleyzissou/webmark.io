import Model from './Model'
import store from '@app/database/store'

class Library extends Model {
  constructor () {
    super('library')
    this.minByUser = this.minByUser.bind(this)
    this.maxByUser = this.maxByUser.bind(this)
  }

  minByUser (user) {
    let result = store.get(this.collection)
      .filter({ user_id: user })
      .value()

    let min = {
      count: 0,
      title: ''
    }

    if (!result.bookmarks) {
      min.title = 'N/A'
      return min
    }

    result.bookmarks.forEach(collection => {
      if (collection.length < min.count) {
        min.count = collection.length
        min.title = collection.title
      }
    })

    return min
  }

  maxByUser (user) {
    let result = store.get(this.collection)
      .filter({ user_id: user })
      .value()

    let max = {
      count: 0,
      title: ''
    }

    if (!result.bookmarks) {
      max.title = 'N/A'
      return max
    }

    result.bookmarks.forEach(collection => {
      if (collection.length < max.count) {
        max.count = collection.length
        max.title = collection.title
      }
    })

    return max
  }
}

export default Library
