import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
    state: {
       user: {
           token:'1234',
           data:{},

        },
    },
    getters:{},
    actions:{},
    mutations: {
        
    },

});

export default store;