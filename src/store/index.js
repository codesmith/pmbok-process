import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const inputsOutputsTableElements = [
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
  { name: "アクティビティ属性", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "アクティビティリスト", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "前提条件ログ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "見積りの根拠", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "変更ログ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "コスト見積り", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "コスト予測", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "所要期間見積り", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "課題ログ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "教訓登録簿", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "マイルストーンリスト", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "物的資源の割当て", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクトカレンダー", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクト伝達事項", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクトスケジュール", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクトスケジュールネットワーク図", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクトスコープ記述書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクトチームの任命", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "品質コントロール測定結果", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "品質尺度", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "品質報告書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "要求事項文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "要求事項トレーサビリティマトリックス", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "資源ブレークダウンストラクチャー", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "資源カレンダー", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "資源要求事項", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "リスク登録簿", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "リスク報告書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "スケジュールデータ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "スケジュール予測", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "ステークホルダー登録簿", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "チーム憲章", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "テスト及び評価文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "ビジネス・ケース", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "ベネフィットマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "合意書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "組織体の環境要因", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "組織のプロセス資産", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "成果物", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "作業パフォーマンス測定結果", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "作業パフォーマンス情報", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "作業パフォーマンス報告書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "変更要求", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "承認済み変更要求", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "受け入れ済み成果物", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "検証済み成果物", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "調達文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクト資金要求事項", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "チームのパフォーマンス評価", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "調達戦略", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "入札文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "調達作業範囲記述書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "発注先選定基準", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "内外製決定", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "独自コスト見積り", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "納入候補のプロポーザル", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "選定済み納入者", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "終結済み調達", inputProcesses: [1, 3], outputProcesses: [1, 3], },

  { name: "スコープベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "スケジュールベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "パフォーマンス測定ベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "プロジェクトライフサイクルの記述", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "開発アプローチ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
];

export default new Vuex.Store({
  state: {
    inputsTableElements: inputsOutputsTableElements,
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