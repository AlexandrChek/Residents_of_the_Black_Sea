<template>
    <div>
        <label>Filter by class</label>
        <select @change="transmitClass($event)">
            <option v-for="animalClass in animalClasses" :key="animalClass" :value="animalClass">
                {{ animalClass }}
            </option>
        </select>
    </div>
</template>

<script>
import { serverUrl } from '../constants.js'

export default {
    name: 'ClassSelector',
    data() {
        return {
            animalClasses: [],
            selected: ''
        }
    },
    mounted() {
         document.addEventListener('load', this.getClasses())
    },
    methods: {
        getClasses() {
            fetch(`${serverUrl}/classes`)
            .then(response => response.json())
            .then(response => this.animalClasses = ['ALL', ...response])
        },
        transmitClass(event) {
            const val = event.target.value
            if (val !== this.selected) {
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
        font-size: 1rem;
        line-height: 1.25;
        min-width: calc(10rem + 16px);
        border-radius: 3px;
        border-width: 4px;
        &:focus {
            background-color: $creme-brulee;
        }
    }
</style>