import { createStore } from "vuex" 
import mutations from "./mutations";
import actions from "./actions";

const store = new createStore({
    state: {
        news: [], // 4.변경
        ask: [],
        job: [],
        user: [],
        item: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations: mutations,
    actions: actions,
});

export default store