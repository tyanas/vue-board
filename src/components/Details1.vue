<template>
    <div class="details">
        <h1 v-show="!item.title">{{ msg }}</h1>
        <div v-show="item.title">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <button class="close">
                <router-link class="link" :to="{ name: 'home' }">
                    OK, got it!
                </router-link>
            </button>
        </div>
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
    padding: 20px;
}

.close {
    line-height: 1.5;
    font-size: 25px;
}

.link {
    text-decoration: none;
}

.link:hover,
.link:active,
.link:visited {
    color: initial;
}

</style>
