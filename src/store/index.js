import { createStore } from "vuex" 
import { fetchNewsList } from '../api/index'
import { fetchAskList } from '../api/index.js'
import { fetchJobsList } from '../api/index.js'


const store = new createStore({
    state: {
        news: [], // 4.변경
        ask: [],
        job: []
    },
    mutations: { // 3. mutations에서는 state값을 변경해야하기떄문에 state를 받아오고 , actions에서받아온 res.data값을 2번째 인재로받아옴
        SET_NEWS(state, res) {
            state.news = res; // 3. state에 news에 2번째인자값을 할당.
        },
        SET_ASK(state, res) {
            state.ask = res;
        },
        SET_JOB(state, res) {
            state.job = res;
        }
    },
    actions: {
        FETCH_NEWS(context) { // 2. actions는 context라는 인자로 mutations에 접근
            fetchNewsList()
                .then(res => {
                    context.commit('SET_NEWS', res.data); // 2. commit이라는 명령어 mutations에 SEW_NEWS를 호출하고 res.data값을 넘겨준다.
                })
                .catch(err => {
                    console.log(err);
                })
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(res => {
                    context.commit('SET_ASK', res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        FETCH_JOB(context) {
            fetchJobsList()
                .then(res => {
                    context.commit('SET_JOB', res.data);
                })
        }
    }
});

export default store