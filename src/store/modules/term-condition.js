import api from "@/api";

const state = {
  condition: {},
};
const getters = {
    condition: (state) => state.condition,
  };
  
  const actions = {
    async fetchTermCondition({ commit }, params) {
      await api.condition.fetchTermCondition(params).then((response) => {
        // console.log(response.data)
        commit("setTermCondition", response.data);
      });
    },
  };
  
  const mutations = {
    setTermCondition: (state, condition) => (state.condition = condition),
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  