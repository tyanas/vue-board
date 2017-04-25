<template>
    <div class="goals">
        <h2 class="header">Цели</h2>
        <button class="show"  v-show="!items.length"
            :disabled="processing"
            @click="getGoals()">
            Показать
        </button>
        <video id="video" v-show="processing && !items.length" class="spinner" src="./assets/corgi.mp4" muted preload />
        <transition name="fade">
        <ul v-if="items.length" class="list" >
            <li class="item" v-for="item in items">
                <div class="name">{{ item.name }}</div>
                <div class="progress">
                    <div class="progress_in" :style="{ left: item.shiftCount +'%' }"></div>
                </div>
            </li>
        </ul>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'goals',
    data: function() {
        return {
            processing: null
        }
    },
    computed: mapGetters({
        items: 'allGoals'
    }),
    methods:{
        getGoals: function() {
            var video = document.getElementById('video');

            if (video) {
                video.play();
            }

            this.processing = true;
            this.$store.dispatch('getAllGoals', this.processing)
        }
    },
    created: function () {
    }
}
</script>

<style scoped>
.goals {
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
}

.spinner {
    margin: 24px auto;
    width: 300px;
}
.header {
    margin: 0;
    padding: 8px 16px;
    background-color: lightskyblue;
}

.list {
    margin: 0;
    padding: 24px 0;
    flex: 1 0 0%;
    overflow: scroll;

    display: flex;
    flex-direction: column; /* not working in ff 53.0 */
    flex-wrap: wrap;
}

.item {
    width: 50%;
    box-sizing: border-box;
    padding: 8px 20px;
}

.name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.progress {
    display: inline-block;
    background-color: #c2c2c2;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .3);
    overflow: hidden;
    position: relative;
    top: -9px;
}

.progress_in {
    display: block;
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: green;
}

.show {
    line-height: 1.5;
    font-size: 25px;
    background-color: dodgerblue;
    border: 0;
    padding: 8px 10px;
    color: white;
    cursor: pointer;
    width: auto;
    margin: 24px auto;
}

.show[disabled] {
    opacity: 0.5;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>

