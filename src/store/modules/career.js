import api from "@/api";
const state = {
    career: {},
    careerDetail:{},
}
const getters = {
    career: (state) => state.career,
    careerDetail: (state) => state.careerDetail,
};

const actions = {
    async fetchCareer({commit} , params){
        await api.career.fetchCareer(params).then((response) => {
            commit("setCareer" , response.data);
        })
    },
    async fetchCareerDetail({commit} , params){
        await api.career.fetchCareerDetail(params).then((response) => {
            commit("setCareerDetail" , response.data);
        })
    }
}
const mutations = {
    setCareer: (state, career) => (state.career = career),
    setCareerDetail: (state, careerDetail) => (state.careerDetail = careerDetail),
};

export default{
    state,
    getters,
    actions,
    mutations,
};