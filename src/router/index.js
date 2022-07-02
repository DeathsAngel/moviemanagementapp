import { createRouter, createWebHistory } from 'vue-router';
import AddMovieVue from '../components/AddMovie.vue';
import EditMovieVue from '../components/EditMovie.vue';
import GetMoviesVue from '../components/GetMovies.vue';

const routes = [
    { path: '/', name: 'Home',component: GetMoviesVue },
    { path: '/edit/:id', name: 'Edit', component: EditMovieVue },
    { path: '/add', name: 'Add', component: AddMovieVue }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;