import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import mutations from './mutations'
import state from './state'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    plugins:[createPersistedState()],
    state,
    mutations,
    actions

})