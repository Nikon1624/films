import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import films from '@/store/modules/films';

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        films
    }
});
