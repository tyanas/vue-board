<template>
    <div class="details">
        <h1 v-show="!item.title">{{ msg }}</h1>
        <h1 v-show="item.title">{{ item.title }}</h1>
        <p>{{ item.description }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'details1',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    watch: {
        '$route' (to, from) {
            this.$store.dispatch('showDetails', { id: to.params.id })
        }
    },
    computed: mapGetters({
        item: 'selectedItem'
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
    background-color: papayawhip;
}
</style>
