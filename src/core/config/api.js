// APP CONFIG - General Project Configuration
const env = process.env

export const api = {

  baseURl: env.VUE_APP_API,
  prefix: env.VUE_APP_API_PREFIX ?? '/api/v1',

  endpoint: {
    locales: "get-locales",
    // menus: "get-menus",
    // translates: "get-translates",
    setting: "get-setting",
    home: "get-home",
    chooseUs: "get-choose",
    testimonial: "get-testimonial",
    counter: "get-counter",
    // condition: 'get-term-condition',
    // service: 'get-service',
    // about: 'get-about',
    // activity: 'get-blog'
    // slides: 'get-company-overview',
    // slides: 'get-activities-company',
  }
}
