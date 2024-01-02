<template>
    <div>
        <label>SEARCH</label>
        <input type="text" placeholder="Name of species" @input="searchByName($event)">
    </div>
</template>

<script>
export default {
    name: 'InputSearch',
    methods: {
        searchByName(event) {  
            const name = event.target.value
            let suitables = []
            
            if(!name) {
                this.$emit('namesFound', '')
            } else if(name.length === 1) {
                this.$emit('notFound')
            } else {
                const creatures = JSON.parse(sessionStorage.getItem('creatures'))

                if(!name.includes(' ') && !name.includes('-')) {
                    creatures.forEach(creature => {
                        const parts = creature.name.split(/[ ,-]/)
                        if(parts.find(part => {return part.toLowerCase() === name.toLowerCase()})) {
                            suitables.push({id: creature.id, name: creature.name})
                        }
                    })
                } else {
                    creatures.forEach(creature => {
                        if(creature.name.toLowerCase().includes(name.toLowerCase())) {
                            suitables.push({id: creature.id, name: creature.name})
                        }
                    })
                }

                if(suitables.length) {
                    this.$emit('namesFound', suitables)
                } else {
                    this.$emit('notFound')
                }
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
    input {
        border-radius: 4px;
        font-size: $main-text-f-size;
        width: $input-search-width;
        &:focus {
            border-color: $toxic-green;
            outline: 1px solid $toxic-green;
        }
    }
</style>