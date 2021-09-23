export const state = () => ({
  mobileMenuOpen: false,
  baseUrl: 'http://dev.teamuitbehandeld.nl',
  contactInfo: null
})

export const mutations = {
  SET_MOBILE_MENU_STATUS (state) {
    state.mobileMenuOpen = !state.mobileMenuOpen
  },

  SET_CONTACT_INFO (state, data) {
    state.contactInfo = data
  }
}

export const actions = {
  checkMobileMenuState (context) {
    context.commit('SET_MOBILE_MENU_STATUS')
  },

  async nuxtServerInit ({ commit }) {
    const body = await this.$axios.$get(`${process.env.strapiAPI}/contact-info`)
    commit('SET_CONTACT_INFO', body)
  }
}

export const getters = {

}
