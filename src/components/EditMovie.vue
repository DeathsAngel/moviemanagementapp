<template>
    <div v-cloak>
        <form @submit.prevent="createEdit">
            <table class="center">
                <tr>
                    <td class="left">
                        Movie Name
                    </td>
                    <td>
                        <input v-model="movie.name" v-bind:class="nameError && 'bg-danger'"/>
                    </td>
                </tr>
                <tr v-if="nameError"><td class="text-danger text-center" colspan="2">{{ nameError }}</td></tr>
                <tr>
                    <td class="left">
                        Movie Description
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
                        <input v-model="movie.release" min="4" maxlength="4" v-bind:class="releaseError && 'bg-danger'"/>
                    </td>
                </tr>
                <tr v-if="releaseError"><td class="text-danger text-center" colspan="2">{{ releaseError }}</td></tr>
            </table>
            

            <button type="submit" class="btn btn-primary">Update</button>
            <button type="button" @click="deleteMovie" class="btn btn-danger">Delete</button>
            <button type="button" @click="copyMovie" class="btn btn-info">Copy</button>
            <router-link :to="{name: 'Home'}"><button class="btn btn-secondary">Back</button></router-link>
        </form>
    </div>
</template>

<script>
    import { Movie, MovieAdd } from "@/Models";
    import router from '@/router';

    export default {
        name: 'EditMovie',
        data() {
            return {
                movie: new Movie,
                nameError: '',
                releaseError: ''
            }
        },
        props: ['id'],
        mounted() {
            fetch('https://localhost:44349/home/' + this.$route.params.id)
                .then(res => res.json())
                .then(data => {
                    this.movie = data;
                })
                .catch(e => console.log(e));
        },
        methods: {
            async createEdit() {
                this.nameError = this.movie.name.length > 0 ?
                    '' : 'A name is required!';

                this.releaseError = this.movie.release.length > 0 ?
                    '' : 'Release year is required!';

                if (!this.nameError && !this.releaseError) {
                    await fetch('https://localhost:44349/home', {
                        method: "PUT",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(this.movie)
                    });
                    router.push({ name: 'Home' });
                }
            },

            async deleteMovie() {
                await fetch('https://localhost:44349/home', {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.movie)
                });

                router.push({ name: 'Home' });
            },

            async copyMovie() {
                this.nameError = this.movie.name.length > 0 ?
                    '' : 'A name is required!';

                this.releaseError = this.movie.release.length > 0 ?
                    '' : 'Release year is required!';

                if (!this.nameError && !this.releaseError) {
                    let movieCopy = new MovieAdd();
                    movieCopy.name = this.movie.name;
                    movieCopy.description = this.movie.description;
                    movieCopy.release = this.movie.release;

                    await fetch('https://localhost:44349/home', {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(movieCopy)
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

    label{
        display: block;
    }
</style>