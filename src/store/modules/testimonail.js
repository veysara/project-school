import api from "@/api";

const state = {
  testimonial: {},
};

const getters = {
  testimonial: (state) => state.testimonial,
};

const actions = {
  async fetchTestimonial({ commit }, params) {
    await api.testimonial.fetchTestimonial(params).then((response) => {
      commit("setTestimonial", response.data);
    });
  },
};

const mutations = {
    setTestimonial: (state, testimonial) => (state.testimonial = testimonial),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
