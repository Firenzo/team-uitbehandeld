export const state = () => ({
  isMobile: false
})

export const mutations = {
  SET_MOBILE_STATUS (state, status) {
    state.isMobile = status
  }
}

export const actions = {
  checkMobileState (context) {
    if (window.innerHeight < 1200) {
      context.commit('SET_MOBILE_STATUS', true)
    } else {
      context.commit('SET_MOBILE_STATUS', false)
    }
  }
}

export const getters = {
  getMobileState: state => state.isMobile
}
