<template>
    <Nuxt />
</template>
<script>
export default {
    data() {
        return {
            myLiffID: '1657823496-pO9wqW5',
        }
    },
    head() {
        return {}
    },
    mounted() {
        console.log('start mounted')
        liff.init({
            liffId: this.myLiffID,
        }).then(() => {
            if (!liff.isLoggedIn()) {
                liff.login()
            }
            else {
                liff.getProfile().then((profile) => {
                    this.$store.commit('todos/addUserId', profile)
                    console.log(profile)
                }).catch((err) => {
                    console.log('error', err)
                })
            }
            // Start to use liff's api
            console.log('success')
        }).catch((err) => {
        // Error happens during initialization
            console.log(err.code, err.message)
        })
    },
}
</script>
