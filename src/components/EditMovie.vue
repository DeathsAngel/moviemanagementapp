<template>
    <form @submit.prevent="submit">
        <label>
            Movie Name
            <input v-model="movie.name" />
        </label>
        <label>
            Movie Description
            <input v-model="movie.description" />
        </label>
        <label>
            Release Year
            <input v-model="movie.release" type="number" />
        </label>
    </form>
</template>

<script>
import { Movie } from "../Models/Movie";

    export default {
        name: 'EditMovie',
        data() {
            return {
                movie: new Movie
            }
        },
        props: ['id'],
        mounted() {
            fetch('https://localhost:44349/home/' + this.id)
                .then(res => res.json())
                .then(data => {
                    this.movie = data;
                })
                .catch(e => console.log(e));
        }
    }
</script>