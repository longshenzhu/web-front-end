<<<<<<< HEAD
import vue from 'vue';
import vuex from 'vuex';


vue.use(vuex);

const store = new vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {
        
    },
    modules: {

    }
});

export default store;
=======
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: { }
})
>>>>>>> a57205fb59dd7e00a7d86fd73480350978ac8c3a
