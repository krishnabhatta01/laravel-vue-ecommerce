/* import Vue from 'vue'
import Vuex from 'vuex' */
import { createStore } from "vuex";




const Appstore = createStore({
    

    state: {
        sideBarOpen: false
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        }
    }

})

export default Appstore;
