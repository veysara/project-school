import api from "@/api";
const state = {
    team: {},
    teamDetail:{},
}
const getters = {
    team: (state) => state.team,
    teamDetail: (state) => state.teamDetail,
};

const actions = {
    async fetchTeam({commit} , params){
        await api.team.fetchTeam(params).then((response) => {
            commit("setTeam" , response.data);
        })
    },
    async fetchTeamDetail({commit} , params){
        await api.team.fetchTeamDetail(params).then((response) => {
            commit("setTeamDetail" , response.data);
        })
    }
}
const mutations = {
    setTeam: (state, team) => (state.team = team),
    setTeamDetail: (state, teamDetail) => (state.teamDetail = teamDetail),
};

export default{
    state,
    getters,
    actions,
    mutations,
};