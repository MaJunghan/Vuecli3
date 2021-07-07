// api index.js에서 이미 api호출 res값을 이미계산해놓고 vue에서 불러서씀
import axios from 'axios';

// 1. HTTP Request & Response 관련된 기본설정 : 토큰
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리

// News
function fetchNewsList() {
    // return axios.get('https://api.hnpwa.com/v0/news/1.json') // return 함수호출했을대 리턴값을 보냄
    return axios.get(`${config.baseUrl}news/1.json`); // config ulr을 ${} es6기능 템플릿stirng
}
// Jobs
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
// Ask
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
// user ID
function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}
function fetchItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

// 3. 모듈화 내보내기

export  {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItem
} 

// ==> axios를 사용하기위해서 axios를 import해야하는데 vue파일마다 게속 한다면 굉장히 프로그램적으로 안좋음





