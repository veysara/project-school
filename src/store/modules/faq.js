import api from "@/api";

const state = {
  faq: {},
};

const getters = {
  faq: (state) => state.faq,
};

const actions = {
  async fetchFaq({ commit }, params) {
    await api.home.fetchFaq(params).then((response) => {
      commit("setFaq", response.data);
    });
  },
};

const mutations = {
  setFaq: (state, faq) => (state.faq = faq),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
