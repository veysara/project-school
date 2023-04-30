import api from "@/api";

const state = {
  privacy: {},
};

const getters = {
  privacy: (state) => state.privacy,
};

const actions = {
  async fetchPrivacy({ commit }, params) {
    await api.privacy.fetchPrivacy(params).then((response) => {
      commit("setPrivacy", response.data);
    });
  },
};

const mutations = {
  setPrivacy: (state, privacy) => (state.privacy = privacy),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
