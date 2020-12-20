import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Films from '@/views/Films/Films';
import Film from '@/views/Film/Film';
import store from '@/store/store';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'root',
            path: '/',
            component: Films,
            beforeEnter(to, from, next) {
                if (store.getters['films/films']) {
                    store.dispatch('films/resetAllFilms')
                        .then(() => next());
                }
            }
        },
        {
            name: 'film',
            path: '/film/:id',
            component: Film
        }
    ]
});
