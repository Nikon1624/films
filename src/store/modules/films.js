import {HTTP, API_ENDPOINT} from '@/consts';

export default {
    namespaced: true,
    state: {
        films: [],
        film: false,
        defaultSort: []
    },
    getters: {
        films: (state) => state.films,
        film: (state) => state.film,
    },
    mutations: {
        setFilms(state, films) {
            state.films = films;

            if (state.defaultSort.length === 0) {
                state.defaultSort = [...films];
            }
        },
        setFilm(state, film) {
            state.film = film;
        },
        sortByTitle(state) {
            state.films.sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title === b.title) return 0;
                if (a.title < b.title) return -1;
            });
        },
        sortByYear(state) {
            state.films.sort((a,b) => a.year - b.year);
        },
        setDefaultSort(state) {
            state.films = [...state.defaultSort];
        }
    },
    actions: {
        async fetchFilms({commit}) {
            try {
                const response = await HTTP.get(API_ENDPOINT.FILMS);
                commit('setFilms', response.data.data);
            } catch (err) {
                return false;
            }
        },
        async fetchFilm({commit}, id) {
            try {
                const response = await HTTP.get(`${API_ENDPOINT.FILM}${id}`);
                commit('setFilm', response.data.data);
            } catch (err) {
                return false;
            }
        },
        setFilm({commit, getters}, id) {
            const needleFilm = getters.films.find((film) => film.id === id);
            commit('setFilm', needleFilm);
        },
        resetFilm({commit}) {
            commit('setFilm', false);
        },
        resetAllFilms({commit}) {
            commit('setFilms', []);
        },
        sortFilmsByTitle({commit}) {
            commit('sortByTitle');
        },
        sortFilmsByYear({commit}) {
            commit('sortByYear');
        },
        setDefaultSort({commit}) {
            commit('setDefaultSort');
        }
    }
};
