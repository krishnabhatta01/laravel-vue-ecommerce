import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
    state: {
        sideBarOpen: false,

        user: {
            token: "1234",
            data: {},
        },
    },
    getters: {
        sideBarOpen: (state) => {
            return state.sideBarOpen;
        },
    },
    mutations: {
        toggleSidebar(state) {
            state.sideBarOpen = !state.sideBarOpen;
        },
    },
    actions: {
        toggleSidebar(context) {
            context.commit("toggleSidebar");
        },
    },
});

export default store;