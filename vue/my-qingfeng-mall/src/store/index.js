<<<<<<< HEAD
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
=======
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
>>>>>>> 4d6009137a4c2eb2c02db962839a4c4cc29bc8a6
