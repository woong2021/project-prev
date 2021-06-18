import { fetchNewsList, fetchJobList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList} from '../api/index.js';

export default {
    FETCH_USER({ commit}, name){
        fetchUserInfo(name)
        .then(({ data }) =>{
            commit('SET_USER', data)
        })
        .catch( error => {
            console.log(error);
        });
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch( error => {
            console.log(error)
        });
    },
    FETCH_LIST({ commit }, pageName){
        fetchList(pageName)
        .then(({ data }) => commit('SET_LIST', data))
        .catch(error => console.log(error));
    }
}