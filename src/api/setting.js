import { ApiService } from '@core/services'
import { api } from '@core/config/api' 

export class SettingService extends ApiService {
    endpoint=api.endpoint;
    // eslint-disable-next-line no-useless-constructor
    constructor () {
      super()
    }

    async fetch (filter) {
      return super.fetch(this.endpoint.setting, {
        params: {
          filter: filter
        },
        transformResponse: [function (data) {
          if (!data) {
            return {
              items: [],
              success: false
            }
          }
          // const results = JSON.parse(data)
          const items = {}
          // results.forEach(function (item) {
          //   items[item.setting_name] = item.setting_value
          // })
          return {
            items: items
          }
        }]
      })
    }

    async fetchLocales (filter) {
      return super.fetch(this.endpoint.locales, {
        params: {
          filter: filter
        },
        transformResponse: [function (data) {
          if (!data) {
            return {
              items: []
            }
          }
          const results = JSON.parse(data)
          console.log(results);
          return {
            items: {
              all: results.data.all,
              defaultActive: results.data.defaultActive,
              currentActive: results.data.currentActive
            }
          }
        }]
      })
    }

    async fetchMenus (filter) {
      return super.fetch(this.endpoint.menus, {
        params: {
          filter: filter
        },
        transformResponse: [function (data) {
          if (!data) {
            return {
              items: []
            }
          }
          let results = JSON.parse(data)
          results = results.data.menus
          const items = {}
          results.forEach(function (item) {
            items[item.key] = {
              name: item.name,
              image: process.env.VUE_APP_ASSET_URL + '/' + item.image
            }
          })
          return {
            menus: items
          }
        }]
      })
    }
}
