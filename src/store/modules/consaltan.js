import api from "@/api";
const state = {
    consaltan: {},
}
const getters = {
    consaltan: (state) => state.consaltan,
};

const actions = {
    async fetchConsaltan({commit} , params){
        await api.consaltan.fetchConsaltan(params).then((response) => {
            commit("setConsaltan" , response.data);
        })
    }
}
const mutations = {
    setConsaltan: (state, consaltan) => (state.consaltan = consaltan),
};

export default{
    state,
    getters,
    actions,
    mutations,
};