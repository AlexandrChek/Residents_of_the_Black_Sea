<template>
<div>
    <label>Filter by class</label>
    <select @focus="getClasses" @change="transmitClass($event)">
        <option v-for="animalClass in animalClasses" :key="animalClass" :value="animalClass">
            {{animalClass}}
        </option>
    </select>
</div>
</template>

<script>
import {serverUrl, PostOptions} from '../constants.js'

export default {
    name: 'ClassSelector',
    data() {
        return {
            animalClasses: [],
            selected: ''
        }
    },
    methods: {
        getClasses() {
            const getClassesOptions = new PostOptions('getClasses')

            fetch(serverUrl, getClassesOptions)
            .then(response => response.json())
            .then(response => this.animalClasses = ['ALL', ...response])
        },
        transmitClass(event) {
            const val = event.target.value
            if(val !== this.selected) {
                this.selected = val
                this.$emit('classSelected', val)
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

    div {
        text-align: center;
    }
    label {
        @extend %label-style;
    }
    select {
        font-size: $main-text-f-size;
        width: calc($main-text-f-size * 10);
        border-radius: 2px;
        border-width: 4px;
        border-top-color: black;
        border-left-color: black;
        outline: none;
        &:focus {
            background-color: $creme-brulee;
        }
    }
</style>