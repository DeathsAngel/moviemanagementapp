<template>
  <div class="hello">
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Release</th>
            </tr>
            <tr for="movie in data">
                <td>{{movie.id}}</td>
                <td>{{movie.name}}</td>
                <td>{{movie.description}}</td>
                <td>{{movie.release}}</td>
            </tr>
        </thead>

    </table>
  </div>
</template>

<script>
    import { getData } from './MovieService';
    import { Movie } from '../Models/Movie';

    getData().then(e => e.data = data);

    var data = new Movie;

    export default {
        name: 'GetMovies',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
