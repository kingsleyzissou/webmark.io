import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const dbhost = process.env.DB_HOST

const port = process.env.PORT || 8080

const vue = {
  // Set the directory for the view files
  middleware: {
    rootPath: path.join(__dirname, '../app/views'),
    layout: {
      html: {
        start: '<!DOCTYPE html><html>',
        end: '</html>'
      },
      body: {
        start: `<body>`,
        end: `
          <script src="/js/map.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARG5-n8k_Fyzri_7zlC06_KUVqxbFt-h0&callback=gmaps" async defer></script>
        </body>`
      },
      template: {
        start: '<div id="app">',
        end: '</div>'
      }
    }
  },

  // Set properties for the Vue view. Inject meta data, scripts and css files
  template: (title) => {
    return {
      head: {
        title,
        meta: [
          { property: 'og:' + title, content: title },
          { name: 'twitter:' + title, content: title },
          { script: 'https://unpkg.com/vue' },
          { script: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js' },
          { style: '/css/normalize.css' },
          { style: '/css/bulma.css' },
          { style: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
          { style: '/css/style.css' }
        ]
      }
    }
  }
}

export { dbhost, port, vue }
