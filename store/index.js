export const state = () => ({
  mobileMenuOpen: false,
  baseUrl: 'http://dev.teamuitbehandeld.nl'
})

export const mutations = {
  SET_MOBILE_MENU_STATUS (state) {
    state.mobileMenuOpen = !state.mobileMenuOpen
  }
}

export const actions = {
  checkMobileMenuState (context) {
    context.commit('SET_MOBILE_MENU_STATUS')
  }
}

export const getters = {

}
