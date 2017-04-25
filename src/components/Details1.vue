<template>
    <div class="details">
        <div class="details-inner">
            <h1 v-show="!item.title">{{ msg }}</h1>
            <transition name="fade">
            <div v-show="item.title">
                <h1>{{ item.title }}</h1>
                <p v-html="item.description"></p>
                <button class="close">
                    <router-link class="link" :to="{ name: 'home' }">
                        OK, got it!
                    </router-link>
                </button>
            </div>
            </transition>
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
    margin-bottom: 8px;
}

.details-inner {
    padding: 48px 50px;
    box-sizing: border-box;
}

.close {
    line-height: 1.5;
    font-size: 25px;
    background-color: dodgerblue;
    border: 0;
}

.link {
    padding: 8px 10px;
    text-decoration: none;
    color: white;
}

.link:hover,
.link:active,
.link:visited {
    color: white;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
