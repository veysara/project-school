import api from "@/api";

const state = {
    portfolio: {},
    portfolioDetail:{},
}

const getters = {
    portfolio: (state) => state.portfolio,
    portfolioDetail: (state) => state.portfolioDetail,
};

const actions = {
    async fetchPortfolio({commit} , params){
        await api.portfolio.fetchPortfolio(params).then((response) => {
            commit("setPortfolio" , response.data);
        })
    },
    async fetchPortfolioDetail({commit} , params){
        await api.portfolio.fetchPortfolioDetail(params).then((response) => {
            commit("setPortfolioDetail" , response.data);
        })
    }
}

const mutations = {
    setPortfolio: (state, portfolio) => (state.portfolio = portfolio),
    setPortfolioDetail: (state, portfolioDetail) => (state.portfolioDetail = portfolioDetail),
};

export default{
    state,
    getters,
    actions,
    mutations,
};