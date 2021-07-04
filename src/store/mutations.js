export default  { // 3. mutations에서는 state값을 변경해야하기떄문에 state를 받아오고 , actions에서받아온 res.data값을 2번째 인재로받아옴
    SET_NEWS(state, data) {
        state.news = data; // 3. state에 news에 2번째인자값을 할당.
    },
    SET_ASK(state, data) {
        state.ask = data;
    },
    SET_JOB(state, data) {
        state.job = data;
    }
}