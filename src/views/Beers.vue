<template>
    <div>
        <aside class="sidebar">
        <ul class="beers-list">
            <li @click="beerActive=beer" v-for="beer in beers" :key="beer.id">{{ beer.name }}</li>
        </ul>
        <hr>
        <transition enter-active-class="animate__animated animate__backInDown" appear>
                <h2>Avec VueX</h2>
        </transition>
                <ul class="beers-list">
                    <li @click="beerActive=beer" v-for="beer in beers2" :key="beer.id">{{ beer.name }}</li>
                </ul>
        </aside>
        <theBeer v-if="beerActive" :beer="beerActive"></theBeer>
    </div>
</template>

<script>
import services from '@/services/beers.js'
import theBeer from '@/components/TheBeer'

    export default {
        name: 'beers',
        props: {
        },
        data() {
            return {
                beers: [],
                beerActive: false
            }
        },
        computed: {
            beers2() {
                return this.$store.getters.getAllBeers
            }
        }
        ,
        methods: {
            
        },
        components: {
            theBeer
            
        },
        created() {
            services.getAllBeers()
            .then(response => this.beers = response)

            //via vuex
            this.$store.dispatch('getBeers')

        }
    }
</script>

<style scoped>
    .beers-list {
       text-align: left;
       cursor:pointer;
       
    }
    .sidebar{
         float:left;
         width: 20%;
    }
</style>