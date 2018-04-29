import low from 'lowdb'
import path from 'path'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync(path.join(__dirname, 'store.json'))
const store = low(adapter)

export default store
