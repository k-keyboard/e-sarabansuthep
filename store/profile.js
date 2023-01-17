export const state = () => ({
    profile: '',
})

export const mutations = {
    addUserId(state, text) {
        state.profile = text
    },
}
