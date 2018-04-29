import moment from 'moment'
import Model from './Model'
// import User from './User'
/**
 * Define the Mongoose schema for bookmarks
 *
 */
class Bookmark extends Model {
  constructor () {
    super('bookmarks')
    // this.User = new User( )
  }

  filterByDate (user, type) {
    let result = this.getMultiple({'user_id': user})
    let data = {
      labels: [],
      count: []
    }

    for (let i = 6; i >= 0; i--) {
      let count = 0
      let date = moment().subtract(i, type)
      result.forEach(r => {
        if (r.created_at) {
          if (date.isSame(r.created_at, type)) count++
        }
      })
      if (type === 'day') {
        data.labels.push(date.format('dddd'))
      } else {
        data.labels.push(date.format('MMMM'))
      }
      data.count.push(count)
    }

    return data
  }
}

export default Bookmark
