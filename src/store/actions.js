import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
} from "../api/index";

export default {
  FETCH_NEWS(context) {
    // 2. actions는 context라는 인자로 mutations에 접근
    fetchNewsList()
      .then((res) => {
        console.log(res);
        context.commit("SET_NEWS", res.data); // 2. commit이라는 명령어 mutations에 SEW_NEWS를 호출하고 res.data값을 넘겨준다.
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_JOB({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOB", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName).then(({ data }) => {
      commit("SET_USER", data);
    });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItem(itemId).then(({ data }) => {
      commit("SET_ITEM", data);
    });
  },
};
