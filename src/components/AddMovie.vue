<template>
    <form @submit.prevent="submit">
        <label>
            Movie Name
            <input v-model="name" />
        </label>
        <label>
            Movie Description
            <input v-model="description" />
        </label>
        <label>
            Release Year
            <input v-model="release" type="number"/>
        </label>
    </form>
</template>

<script>
    export default {
        name: 'AddMovie',
        data() {
            return {
                name: '',
                description: '',
                release: '',
            }
        }
    }
</script>