import Vue from 'vue';
import App from './App.vue'
import router from './route'
import store from './store'
import 'bootstrap'
import AOS from "aos";

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
//= ========= ALl Plugin and Component  ============//
import {
  LayoutPlugin,
  ImagePlugin,
  ToastPlugin,
  ModalPlugin,
  BootstrapVueIcons,
  NavbarPlugin,
  LinkPlugin,
  CardPlugin,
  ButtonPlugin,
  ButtonGroupPlugin,
  TabsPlugin,
  TablePlugin,
  BreadcrumbPlugin,
  FormDatepickerPlugin,
  FormSelectPlugin,
  FormPlugin,
  FormInputPlugin,
  FormGroupPlugin,
  PaginationPlugin,
  FormTextareaPlugin,
  FormCheckboxPlugin,
  EmbedPlugin,
} from 'bootstrap-vue'

import { mapActions, mapGetters } from "vuex";

  //= ========= ALl Declare Usage Plugin and Component ============//

  Vue.use(LayoutPlugin)
  Vue.use(NavbarPlugin)
  Vue.use(ImagePlugin)
  Vue.use(LinkPlugin)
  Vue.use(ToastPlugin)
  Vue.use(ModalPlugin)
  Vue.use(CardPlugin)
  Vue.use(ButtonPlugin)
  Vue.use(ButtonGroupPlugin)
  Vue.use(TabsPlugin)
  Vue.use(BootstrapVueIcons)
  Vue.use(TablePlugin)
  Vue.use(BreadcrumbPlugin)
  Vue.use(FormDatepickerPlugin)
  Vue.use(FormSelectPlugin)
  Vue.use(FormPlugin)
  Vue.use(FormInputPlugin)
  Vue.use(FormGroupPlugin)
  Vue.use(PaginationPlugin)
  Vue.use(EmbedPlugin)
  Vue.use(FormTextareaPlugin)
  Vue.use(FormCheckboxPlugin)
  Vue.use(AOS)
  Vue.use(CoolLightBox)
//= ========= ALl Style Main and Customize ============//
import './assets/scss/app.scss'
import 'aos/dist/aos.css';

//= ========= Vue Render to Html ============//
new Vue({
  data: {
    loading: false,
    general: {
      settings: {},
      locales: {},
      menus: {},
    },
    appLoading: document.getElementById("loading-bg"),
  },
  computed: {
    ...mapGetters(["settings", "locales"]),
  },
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | " + "aditi-asia",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "aditi asia is .",
        id: "description",
      },
    ],
  },
  methods: {
    ...mapActions(["fetchSettings", "fetchLocals"]),
    setLocaleTtoLocaleStorage(locale) {
      if (localStorage.getItem("_locale")) {
        localStorage.removeItem("_locale");
      }
      localStorage.setItem("_locale", JSON.stringify(locale));
    },
    _loading() {
      const appLoading = document.getElementById("loading-bg");
      if (this.loading) {
        appLoading.style.display = "block";
      } else {
        appLoading.style.display = "none";
      }
    },
  },
  created() {
    let locale = localStorage.getItem("_locale");
    locale = locale ? JSON.parse(locale) : null;
    this.fetchLocals({
      locale: locale ? locale.title : "en",
    }).then(() => {
      this.general.locales = this.locales;
      this.setLocaleTtoLocaleStorage(this.general.locales.currentActive);
    });
  },
  mounted() {
    let locale = localStorage.getItem("_locale");
    locale = locale ? JSON.parse(locale) : null;
    this.fetchSettings({
      filter: {
        locale: locale ? locale.title : "en",
      },
    }).then(() => {
      this.general.settings = this.settings;
      store.commit("setSettings", this.general.settings);
    });
    AOS.init()
  },
  updated() {
    store.commit("setSettings", this.general.settings);
  },
  
  watch: {
    $route(to, from) {
      if (from.params.locale && to.params.locale !== from.params.locale) {
        this.fetchLocals({
          locale: to.params.locale,
        }).then(() => {
          this.general.locales = this.locales;
          this.setLocaleTtoLocaleStorage(this.general.locales.currentActive);
        });
      }
    },
    
  },
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
  
