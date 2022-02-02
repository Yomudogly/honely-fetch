// * STATE START * //
export const state = () => ({
  user: {},
  users: [],
  loading: false,
})
// * STATE END * //

// ! ACTIONS START  ! //
export const actions = {
  async onUpdateAllUsers(ctx) {
    ctx.commit('ON_UPDATE_LOADING_MUTATION', true)

    await this.$axios
      .$get('/users', {})
      .then((res) => {
        if (Object.keys(res).length > 0) {
          // ! Timeout just to show placeholders
          setTimeout(() => {
            ctx.commit('ON_UPDATE_ALL_USERS_MUTATION', res)
            ctx.commit('ON_UPDATE_LOADING_MUTATION', false)
          }, 2000)
        } else {
          throw new Error('No Users')
        }
      })
      .catch((err) => {
        console.log(err)

        ctx.commit('ON_UPDATE_ALL_USERS_MUTATION', ['No Users'])

        ctx.commit('ON_UPDATE_LOADING_MUTATION', false)
      })
  },
}
// ! ACTIONS END ! //

// MUTATIONS START
export const mutations = {
  ON_UPDATE_LOADING_MUTATION(state, loading) {
    state.loading = loading
  },

  ON_UPDATE_ALL_USERS_MUTATION(state, users) {
    state.users = users
  },

  ON_UPDATE_USER_MUTATION(state, user) {
    user ? (state.user = user) : (state.user = {})
  },
}
// MUTATIONS END
