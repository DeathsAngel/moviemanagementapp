<template>
    <div v-cloak>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Release</th>
                    <th></th>
                </tr>
                <tr v-for="movie in movies" :key="movie.id">
                    <td>{{movie.id}}</td>
                    <td>{{movie.name}}</td>
                    <td>{{movie.description}}</td>
                    <td>{{movie.release}}</td>
                    <!--<td><router-link :to="{name: 'Edit', params: { id: movie.id }}"><p>Edit</p></router-link></td>-->
                </tr>
            </thead>

        </table>
    </div>
</template>

<script>

    export default {
        name: 'GetMovies',
        data() {
            return {
                movies: []
            }
        },
        mounted() {
            fetch('https://localhost:44349/home')
                .then(res => res.json())
                .then(data => this.movies = data)
                    .catch(e => console.log(e));
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    v-cloak {
        display: none;
    }
</style>
