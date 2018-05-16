import Vuex from "vuex";
import Vue from 'vue'
import nav from './nav'
Vue.use(Vuex)

const store  = new Vuex.Store({
    state:{
        loadState:false,
        loadText:'loading',
    },
    mutations:{
        loadShow (state){
            state.loadState = true
          },
          loadHide (state){
            state.loadState = false
          },
          loadtToggle (){
            state.loadState = !state.loadState;
          },
          setLoadText(state,data){
            state.loadText = data || 'loading'
          },
    },
    modules:{
        nav
    }
})

export  default store

