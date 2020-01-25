import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const inputsTableElements = [
  { name: "プロジェクト憲章", targetProcesses: [1, 3] },
  { name: "スコープマネジメント計画書", targetProcesses: [1, 3] },
  { name: "要求事項マネジメント計画書", targetProcesses: [1, 3] },

  { name: "スケジュールマネジメント計画書", targetProcesses: [1, 3] },
  { name: "コストマネジメント計画書", targetProcesses: [1, 3] },
  { name: "品質マネジメント計画書", targetProcesses: [1, 3] },
  { name: "資源マネジメント計画書", targetProcesses: [1, 3] },
  { name: "コミュニケーションマネジメント計画書", targetProcesses: [1, 3] },
  { name: "調達マネジメント計画書", targetProcesses: [1, 3] },

  { name: "ステークホルダーエンゲージメント計画書", targetProcesses: [1, 3] },
  { name: "変更マネジメント計画書", targetProcesses: [1, 3] },
  { name: "コンフィギュレーションマネジメント計画書", targetProcesses: [1, 3] },

];

export default new Vuex.Store({
  state: {
    inEl: inputsTableElements,
  },
  getters: {
    inputsTableElements: state => state.inputsTableElements,
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    autoLogin({ commit, dispatch }) {
      const idToken = localStorage.getItem('idToken');
      if (!idToken) return;
      const now = new Date();
      const expiryTimeMs = localStorage.getItem('expiryTimeMs');
      const isExpired = now.getTime() >= expiryTimeMs;
      const refreshToken = localStorage.getItem('refreshToken');
      if (isExpired) {
        dispatch('refreshIdToken', refreshToken)
      } else {
        const expiresInMs = expiryTimeMs - now.getTime();
        setTimeout(() => {
          dispatch('refreshIdToken', refreshToken)
        }, expiresInMs)
        commit('updateIdToken', idToken)
      }
    },
    logout({ commit }) {
      commit('updateIdToken', null);
      localStorage.removeItem('idToken');
      localStorage.removeItem('expiryTimeMs');
      localStorage.removeItem('refreshToken');
      router.replace('/login');
    },
    setAuthData({ commit, dispatch }, authData) {
      const now = new Date();
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000
      commit('updateIdToken', authData.idToken);
      localStorage.setItem('idToken', authData.idToken);
      localStorage.setItem('expiryTimeMs', expiryTimeMs);
      localStorage.setItem('refreshToken', authData.refreshToken);
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken)
      }, authData.expiresIn * 1000);

    }
  }
})