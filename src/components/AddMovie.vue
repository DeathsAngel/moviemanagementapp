<template>
    <div v-cloak>
        <form @submit.prevent="submit">
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
                        <input type="number" v-model="movie.release" />
                    </td>
                </tr>
            </table>
            <button type="submit" class="btn btn-primary">Submit</button>
            <router-link :to="{name: 'Home'}"><button class="btn btn-secondary">Back</button></router-link>
        </form>
    </div>
</template>

<script>
    import { Movie } from "@/Models/Movie";
    import router from '@/router';

    export default {
        name: 'AddMovie',
        data() {
            return {
                movie: new Movie
            }
        },
        methods: {
            async submit() {
                await fetch('https://localhost:44349/home', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.movie)
                }).then(res => console.log(res));

                router.push({ name: 'Home' });
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