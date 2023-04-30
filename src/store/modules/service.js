import api from "@/api";
const state = {
    service: {},
    serviceDetail:{},
}
const getters = {
    service: (state) => state.service,
    serviceDetail: (state) => state.serviceDetail,
};

const actions = {
    async fetchService({commit} , params){
        await api.service.fetchService(params).then((response) => {
            commit("setService" , response.data);
        })
    },
    async fetchServiceDetail({commit} , params){
        await api.service.fetchServiceDetail(params).then((response) => {
            commit("setServiceDetail" , response.data);
        })
    }
}
const mutations = {
    setService: (state, service) => (state.service = service),
    setServiceDetail: (state, serviceDetail) => (state.serviceDetail = serviceDetail),
};

export default{
    state,
    getters,
    actions,
    mutations,
};