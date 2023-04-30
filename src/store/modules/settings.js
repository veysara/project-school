import api from "@/api";

const state = {
  settings: [],
  locales: [],
};

const getters = {
  settings: (state) => state.settings,
  locales: (state) => state.locales,
};

const actions = {
  async fetchSettings({ commit }, filter) {
    await api.setting.fetch(filter).then((response) => {
      if (response.status === 200) {
        commit("setSettings", response.data.items);
      }
    });
  },
  async fetchLocals({ commit }, filter) {
    await api.setting.fetchLocales(filter).then((response) => {
      if (response.status === 200) {
        commit("setLocales", response.data.items);
      }
    });
  },
};

const mutations = {
  setSettings: (state, settings) => (state.settings = settings),
  setLocales: (state, locales) => (state.locales = locales),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
