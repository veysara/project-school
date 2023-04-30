import api from "@/api";

const state = {
  about: {},
};

const getters = {
  about: (state) => state.about,
};

const actions = {
  async fetchAbout({ commit }, params) {
    await api.About.fetchAbout(params).then((response) => {
      commit("setHome", response.data);
    });
  },
};

const mutations = {
  setHome: (state, about) => (state.about = about),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
