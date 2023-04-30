import Vue from "vue";
import Vuex from "vuex";

// import translation from "./modules/translation";
import home from "./modules/home";
import about from "./modules/about";
import service from "./modules/service";
import condition from "./modules/term-condition";
import setting from "./modules/settings";
import portfolio from "./modules/portfolio";
import career from "./modules/career";
import faq from "./modules/faq";
import team from "./modules/team";
import privacy from "./modules/privacy";
import consaltan from "./modules/consaltan";
import testimonail from "./modules/testimonail";
import chooseUs from "./modules/choose-us";
import counter from "./modules/counter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // translation,
    setting,
    home,
    about,
    service, 
    condition,
    portfolio,
    career,
    faq,
    team,
    privacy,
    consaltan,
    testimonail,
    chooseUs,
    counter
  },
});
