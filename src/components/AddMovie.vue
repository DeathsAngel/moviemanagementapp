<template>
    <div v-cloak>
        <form @submit.prevent="submit">
            <table class="center">
                <tr>
                    <td class="left" >
                        Movie Name
                    </td>
                    <td>
                        <input v-model="movie.name" v-bind:class="nameError && 'bg-danger'"/>
                    </td>
                </tr>
                <tr v-if="nameError"><td class="text-danger text-center" colspan="2">{{ nameError }}</td></tr>
                <tr>
                    <td class="left">
                        Description
                    </td>
                    <td>
                        <input v-model="movie.description" />
                    </td>
                </tr>
                <tr>
                    <td class="left">
                        Release Year
                    </td>
                    <td>
                        <input type="text" v-model="movie.release" pattern="\d{4}" min="4" max="4"  v-bind:class="releaseError && 'bg-danger'"/>
                    </td>
                </tr>
                <tr v-if="releaseError" ><td class="text-danger text-center" colspan="2">{{ releaseError }}</td></tr>
            </table>
            <button type="submit" class="btn btn-primary">Submit</button>
            <router-link :to="{name: 'Home'}"><button class="btn btn-secondary">Back</button></router-link>
        </form>
    </div>
</template>

<script>
    import { MovieAdd } from "@/Models";
    import router from '@/router';

    export default {
        name: 'AddMovie',
        data() {
            return {
                movie: new MovieAdd,
                nameError: '',
                releaseError: ''
            }
        },
        methods: {
            async submit() {
                this.nameError = this.movie.name.length > 0 ?
                    '' : 'A name is required!';

                this.releaseError = this.movie.release.length > 0 ?
                    '' : 'Release year is required!';

                if (!this.nameError && !this.releaseError) {
                    await fetch('https://localhost:44349/home', {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(this.movie)
                    });

                    router.push({ name: 'Home' });
                }
            }
        }
    }
</script>

<style>
    v-cloak {
        display: none;
    }

    .center {
        margin: auto;
        padding: 10px;
    }
    
    .left {
        text-align: left;
    }
</style>