<template>
    <div class="search-container">
        <InputSearch @namesFound="saveFoundedNames" @notFound="showNotFound"/>
        <FoundedNamesList v-if="foundedNames.length" :foundedNames="foundedNames"/>
        <NotFound v-if="notFound"/>
    </div>
    <ClassSelector @classSelected="filterByClass"/>
    <MySpinner v-if="spinnerIsOn"/>
    <div class="species-list-wrapper">
        <div class="letter-block" v-for="letterBlock in sortedNames" :key="letterBlock">
            <div class="letter">{{ letterBlock.letter }}</div>
            <NamesList :letterNames="letterBlock.names" :namesWithId="namesWithId"/>
        </div>
    </div>
</template>

<script>
import InputSearch from '../components/InputSearch.vue'
import FoundedNamesList from '../components/FoundedNamesList.vue'
import NotFound from '../components/NotFound.vue'
import ClassSelector from '../components/ClassSelector.vue'
import MySpinner from '../components/MySpinner.vue'
import NamesList from '../components/NamesList.vue'
import { serverUrl } from '../constants.js'

export default {
    name: 'SearchView',
    components: {
        InputSearch,
        FoundedNamesList,
        NotFound,
        ClassSelector,
        MySpinner,
        NamesList
    },
    data() {
        return {
            foundedNames: [],
            notFound: false,
            spinnerIsOn: true,
            namesWithId: [],
            sortedNames: []
        }
    },
    mounted() {
        this.getNames('/names_and_ids')
    },
    methods: {
        getNames(url) {
            fetch(`${serverUrl}${url}`)
            .then(response => response.json())
            .then(creatures => {
                this.namesWithId = creatures
                this.sortNames(creatures)

                if (url === '/names_and_ids') {
                    sessionStorage.setItem('creatures', JSON.stringify(this.namesWithId))
                }
            })
        },
        sortNames(creatures) {
            let allFirstLerrers = []
            creatures.forEach(item => {
                allFirstLerrers.push(item.name[0])
            })

            let uniqueLetters = [...new Set(allFirstLerrers)]
            let sortedLetters = uniqueLetters.sort()

            sortedLetters.forEach(letter => {
                let letterObj = {letter: letter, names: []}
                let suitableItems = creatures.filter(item => {return item.name[0] === letter})
                let suitableNames = []
                suitableItems.forEach(item => suitableNames.push(item.name))
                letterObj.names = suitableNames.sort()
                this.sortedNames.push(letterObj)
            })

            this.spinnerIsOn = false
        },
        saveFoundedNames(suitables) {
            if (suitables) {
                this.foundedNames = suitables
            } else {
                this.foundedNames = []
            }

            this.notFound = false
        },
        showNotFound() {
            this.foundedNames = []
            this.notFound = true
        },
        filterByClass(val) {
            if (val === 'ALL') {
                this.sortedNames = []
                this.getNames('/names_and_ids')
            } else {
                this.sortedNames = []
                this.getNames(`/filter_by_class/${val}`)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

    $list-margin: calc(7px + 2vw);

    .search-container {
        border-bottom: 1px solid $toxic-green;
        padding: 1rem 0;
        margin-bottom: 1rem;
        position: relative;
    }
    .species-list-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media(min-width: 1400px) {
            max-width: 1550px;
            margin: 0 auto;
        }
    }
    .letter-block {
        margin: $list-margin $list-margin 0 $list-margin;
        width: 10.7rem;
    }
    .letter {
        font-size: $big-f-size;
        color: $pink-rose-carrot;
    }
</style>