<template>
    <div v-cloak>
        <form @submit.prevent="createEdit">
            <table class="center">
                <tr>
                    <td class="left">
                        Movie Name
                    </td>
                    <td>
                        <input v-model="movie.name" />
                    </td>
                </tr>
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
                        <input v-model="movie.release" />
                    </td>
                </tr>
            </table>
            

            <button type="submit" class="btn btn-primary">Update</button>
            <button type="button" v-on:click="deleteMovie" class="btn btn-danger">Delete</button>
            <router-link :to="{name: 'Home'}"><button class="btn btn-secondary">Back</button></router-link>
        </form>
    </div>
</template>

<script>
    import { Movie } from "@/Models/Movie";
    import router from '@/router';

    export default {
        name: 'EditMovie',
        data() {
            return {
                movie: new Movie
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
                await fetch('https://localhost:44349/home', {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.movie)
                });
                router.push({ name: 'Home' });
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