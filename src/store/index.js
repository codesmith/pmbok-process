import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const processesTableElements = [
  // 統合マネジメント
  { psNum: 0, name: "プロジェクト憲章の作成", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14], updates: [] },
  { psNum: 1, name: "プロジェクトマネジメント計画書の作成", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], updates: [] },
  { psNum: 2, name: "プロジェクト作業の指揮マネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 21, 22, 25, 26, 34, 38, 39, 55, 48, 49], tandt: [0, 3, 2], outputs: [50, 51, 20, 54], updates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 21, 33, 38, 42, 49] },
  { psNum: 3, name: "プロジェクト知識のマネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 29, 35, 42, 50, 48, 49], tandt: [0, 13, 14, 1], outputs: [21], updates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 49] },
  { psNum: 4, name: "プロジェクト作業の監視・コントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 21, 18, 20, 22, 32, 38, 39, 52, 47, 48, 49], tandt: [0, 16, 18, 2], outputs: [53, 54,], updates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 20, 21, 38, 41] },
  { psNum: 5, name: "統合変更管理", inputs: [10, 11, 1, 71, 72, 15, 34, 39, 53, 54, 48, 49], tandt: [0, 4, 16, 18, 2], outputs: [55], updates: [...Array(69).keys()].map(i => ++i) },
  { psNum: 6, name: "プロジェクトやフェーズの終結", inputs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 20, 21, 22, 25, 30, 32, 33, 38, 39, 56, 45, 46, 47, 61, 49], tandt: [0, 16, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], updates: [...Array(69).keys()].map(i => ++i) },

  // スコープマネジメント
  { psNum: 7, name: "スコープマネジメントの計画", inputs: [0, 5, 74, 75, 48, 49], tandt: [0, 16, 2], outputs: [1, 2], updates: [] },
  { psNum: 8, name: "要求事項の収集", inputs: [0, 1, 2, 9, 14, 21, 42, 45, 47, 48, 49], tandt: [0, 15, 16, 18, 17, 1, 19, 20], outputs: [33, 34], updates: [] },
  { psNum: 9, name: "スコープの定義", inputs: [0, 1, 14, 33, 38, 48, 49], tandt: [0, 16, 18, 1, 21], outputs: [28], updates: [14, 33, 34, 42] },
  { psNum: 10, name: "WBSの作成", inputs: [1, 28, 33, 48, 49], tandt: [0, 22], outputs: [70], updates: [14, 33] },
  { psNum: 11, name: "スコープの妥当性確認", inputs: [1, 2, 70, 21, 32, 33, 34, 57, 51], tandt: [23, 18], outputs: [56, 52, 54], updates: [21, 33, 34] },
  { psNum: 12, name: "スコープのコントロール", inputs: [1, 2, 10, 11, 70, 73, 21, 33, 34, 51, 49], tandt: [16], outputs: [52, 54], updates: [1, 70, 71, 72, 73, 21, 33, 34] },

  // スケジュールマネジメント
  { psNum: 13, name: "スケジュールマネジメントの計画", inputs: [0, 1, 75, 48, 49], tandt: [0, 16, 2], outputs: [3], updates: [] },
  { psNum: 14, name: "アクティビティの定義", inputs: [3, 70, 48, 49], tandt: [0, 22, 24, 2], outputs: [13, 12, 22, 54], updates: [71, 72] },
  { psNum: 15, name: "アクティビティの順序設定", inputs: [3, 70, 13, 12, 14, 22, 48, 49], tandt: [25, 26, 27], outputs: [27], updates: [13, 12, 14, 22] },
  { psNum: 16, name: "アクティビティの所要期間見積り", inputs: [3, 70, 13, 12, 14, 21, 22, 29, 35, 36, 37, 38, 48, 49], tandt: [0, 28, 29, 30, 31, 16, 18, 2], outputs: [19, 15], updates: [12, 14, 21] },
  { psNum: 17, name: "スケジュールの作成", inputs: [1, 70, 13, 12, 14, 19, 15, 21, 22, 27, 29, 36, 37, 38, 47, 48, 49], tandt: [33, 34, 35, 16, 27, 36, 3, 37], outputs: [71, 26, 40, 24, 54], updates: [3, 4, 12, 14, 19, 21, 37, 38] },
  { psNum: 18, name: "スケジュールのコントロール", inputs: [3, 71, 72, 73, 21, 24, 26, 40, 51, 49], tandt: [16, 34, 3, 35, 36], outputs: [52, 41, 54], updates: [3, 71, 72, 73, 14, 15, 21, 26, 36, 38, 40] },

  // コストマネジメント
  { psNum: 19, name: "コストマネジメントの計画", inputs: [0, 3, 76, 48, 49], tandt: [0, 15, 16, 2], outputs: [4], updates: [] },
  { psNum: 20, name: "コストの見積り", inputs: [4, 5, 70, 21, 26, 37, 38, 48, 49], tandt: [0, 28, 29, 30, 31, 16, 3, 18], outputs: [17, 15], updates: [14, 21, 38] },
  { psNum: 21, name: "予算の設定", inputs: [4, 6, 70, 15, 17, 26, 38, 46, 45, 47, 48, 49], tandt: [0, 38, 16, 39, 40, 41], outputs: [72, 59], updates: [17, 26, 38] },
  { psNum: 22, name: "コストのコントロール", inputs: [4, 72, 73, 21, 59, 51, 49], tandt: [0, 16, 42, 3], outputs: [52, 18, 54], updates: [4, 72, 73, 14, 15, 17, 21, 38] },

  // 品質マネジメント
  { psNum: 23, name: "品質マネジメントの計画", inputs: [0, 2, 76, 9, 70, 14, 33, 34, 38, 42, 48, 49], tandt: [0, 15, 16, 18, 17, 43, 2], outputs: [5, 31], updates: [76, 70, 21, 34, 38, 42] },
  { psNum: 24, name: "品質のマネジメント", inputs: [5, 21, 30, 31, 39, 49], tandt: [15, 16, 18, 17, 45, 46, 47, 48], outputs: [32, 44, 54], updates: [5, 70, 71, 72, 20, 21, 38] },
  { psNum: 25, name: "品質のコントロール", inputs: [5, 21, 31, 44, 55, 50, 51, 48, 49], tandt: [15, 16, 23, 44, 17, 2], outputs: [30, 57, 52, 54], updates: [5, 20, 21, 38, 44] },

  // 資源マネジメント
  { psNum: 26, name: "資源マネジメントの計画", inputs: [0, 5, 70, 26, 33, 38, 42, 48, 49], tandt: [0, 17, 49, 2], outputs: [6, 43], updates: [14, 38] },
  { psNum: 27, name: "アクティビティ資源の見積り", inputs: [6, 70, 13, 12, 14, 17, 36, 38, 48, 49], tandt: [0, 28, 29, 30, 31, 16, 3, 2], outputs: [37, 15, 35], updates: [12, 14, 21] },
  { psNum: 28, name: "資源の獲得", inputs: [6, 8, 72, 26, 36, 37, 42, 48, 49], tandt: [18, 1, 5, 7], outputs: [23, 29, 36, 54], updates: [6, 72, 21, 26, 35, 37, 38, 42, 48, 49] },
  { psNum: 29, name: "チームの育成", inputs: [6, 21, 26, 29, 36, 43, 48, 49], tandt: [6, 7, 8, 1, 50, 51, 52, 2], outputs: [60, 54], updates: [6, 21, 26, 29, 36, 43, 48, 49] },
  { psNum: 30, name: "チームのマネジメント", inputs: [6, 20, 21, 29, 43, 48, 49], tandt: [1, 3], outputs: [54], updates: [6, 71, 72, 20, 21, 29, 48, 49] },
  { psNum: 31, name: "資源のコントロール", inputs: [6, 20, 21, 23, 26, 35, 37, 38, 51, 47, 49], tandt: [16, 47, 1, 3], outputs: [52, 54], updates: [6, 71, 72, 14, 20, 21, 23, 35, 38] },

  // コミュニケーションマネジメント
  { psNum: 32, name: "コミュニケーションマネジメントの計画", inputs: [0, 6, 9, 33, 42, 48, 49], tandt: [0, 9, 8, 10, 11, 1, 17, 2], outputs: [7], updates: [26, 42] },
  { psNum: 33, name: "コミュニケーションのマネジメント", inputs: [6, 7, 9, 54, 20, 21, 32, 39, 42, 53, 48, 49], tandt: [8, 11, 12, 3, 53, 1, 2], outputs: [25], updates: [7, 9, 20, 21, 26, 42, 38, 49] },
  { psNum: 34, name: "コミュニケーションの監視", inputs: [6, 7, 9, 20, 21, 25, 51, 48, 49], tandt: [0, 3, 17, 1, 2], outputs: [52, 54], updates: [7, 9, 20, 21, 42] },

  // リスクマネジメント
  { psNum: 35, name: "リスクマネジメントの計画", inputs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 76, 42, 48, 49], tandt: [0, 16, 2], outputs: [76], updates: [] },
  { psNum: 36, name: "リスクの特定", inputs: [2, 3, 4, 5, 6, 76, 70, 71, 72, 14, 17, 19, 20, 21, 33, 37, 42, 47, 58, 48, 49], tandt: [0, 15, 16, 1, 20, 2], outputs: [38, 39], updates: [14, 20, 21, 38] },
  { psNum: 37, name: "リスクの定性的分析", inputs: [76, 14, 38, 42, 48, 49], tandt: [0, 15, 16, 1, 55, 17, 2], outputs: [], updates: [14, 20, 38, 39] },
  { psNum: 38, name: "リスクの定量的分析", inputs: [76, 70, 71, 72, 14, 15, 17, 18, 19, 22, 37, 38, 39, 41, 48, 49], tandt: [0, 15, 1, 56, 16], outputs: [], updates: [39] },
  { psNum: 39, name: "リスク対応の計画", inputs: [6, 76, 72, 21, 26, 29, 36, 38, 39, 42, 48, 49], tandt: [0, 15, 1, 57, 58, 59, 60, 16, 18], outputs: [54], updates: [1, 4, 5, 6, 8, 70, 71, 72, 14, 18, 21, 26, 29, 38, 39] },
  { psNum: 40, name: "リスク対応策の実行", inputs: [76, 21, 38, 39, 49], tandt: [0, 1, 3], outputs: [54], updates: [20, 21, 29, 38, 39] },
  { psNum: 41, name: "リスクの監視", inputs: [76, 20, 21, 38, 39, 51, 53], tandt: [16, 45, 2], outputs: [52, 54, 1, 2, 3, 4, 5, 6, 7, 8, 9, 76, 14, 20, 21, 38, 39, 49], updates: [] },

  // 調達マネジメント
  { psNum: 42, name: "調達マネジメントの計画", inputs: [0, 46, 45, 1, 5, 76, 70, 22, 29, 33, 34, 37, 38, 42, 48, 49], tandt: [0, 15, 16, 64, 2], outputs: [8, 61, 62, 63, 64, 65, 66, 54], updates: [21, 22, 33, 34, 38, 42, 49] },
  { psNum: 43, name: "調達の実行", inputs: [1, 2, 7, 76, 8, 11, 72, 33, 38, 42, 58, 48, 49], tandt: [0, 61, 62, 16, 1], outputs: [68, 47, 54], updates: [2, 5, 7, 76, 8, 9, 70, 71, 72, 21, 33, 34, 36, 38, 42, 49] },
  { psNum: 44, name: "調達のコントロール", inputs: [2, 76, 8, 10, 71, 14, 21, 22, 32, 33, 34, 38, 42, 47, 61, 55, 51, 48, 49], tandt: [0, 63, 16, 23, 45], outputs: [69, 52, 54], updates: [58, 76, 8, 71, 72, 21, 37, 34, 38, 42, 49] },

  // ステークホルダーマネジメント
  { psNum: 45, name: "ステークホルダーの特定", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], updates: [] },
  { psNum: 46, name: "ステークホルダーエンゲージメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], updates: [] },
  { psNum: 47, name: "ステークホルダーエンゲージメントのマネジメント", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14], updates: [] },
  { psNum: 48, name: "ステークホルダーエンゲージメントの監視", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], updates: [] },
];

const inputsOutputsTableElements = [
  { ioNum: 0, name: "プロジェクト憲章", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 1, name: "スコープマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 2, name: "要求事項マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 3, name: "スケジュールマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 4, name: "コストマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 5, name: "品質マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 6, name: "資源マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 7, name: "コミュニケーションマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 8, name: "調達マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 9, name: "ステークホルダーエンゲージメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 10, name: "変更マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 11, name: "コンフィギュレーションマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 12, name: "アクティビティ属性", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 13, name: "アクティビティリスト", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 14, name: "前提条件ログ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 15, name: "見積りの根拠", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 16, name: "変更ログ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 17, name: "コスト見積り", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 18, name: "コスト予測", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 19, name: "所要期間見積り", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 20, name: "課題ログ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 21, name: "教訓登録簿", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 22, name: "マイルストーンリスト", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 23, name: "物的資源の割当て", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 24, name: "プロジェクトカレンダー", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 25, name: "プロジェクト伝達事項", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 26, name: "プロジェクトスケジュール", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 27, name: "プロジェクトスケジュールネットワーク図", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 28, name: "プロジェクトスコープ記述書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 29, name: "プロジェクトチームの任命", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 30, name: "品質コントロール測定結果", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 31, name: "品質尺度", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 32, name: "品質報告書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 33, name: "要求事項文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 34, name: "要求事項トレーサビリティマトリックス", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 35, name: "資源ブレークダウンストラクチャー", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 36, name: "資源カレンダー", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 37, name: "資源要求事項", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 38, name: "リスク登録簿", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 39, name: "リスク報告書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 40, name: "スケジュールデータ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 41, name: "スケジュール予測", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 42, name: "ステークホルダー登録簿", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 43, name: "チーム憲章", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 44, name: "テスト及び評価文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 45, name: "ビジネス・ケース", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 46, name: "ベネフィットマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 47, name: "合意書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 48, name: "組織体の環境要因", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 49, name: "組織のプロセス資産", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 50, name: "成果物", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 51, name: "作業パフォーマンス測定結果", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 52, name: "作業パフォーマンス情報", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 53, name: "作業パフォーマンス報告書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 54, name: "変更要求", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 55, name: "承認済み変更要求", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 56, name: "受け入れ済み成果物", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 57, name: "検証済み成果物", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 58, name: "調達文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 59, name: "プロジェクト資金要求事項", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 60, name: "チームのパフォーマンス評価", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 61, name: "調達戦略", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 62, name: "入札文書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 63, name: "調達作業範囲記述書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 64, name: "発注先選定基準", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 65, name: "内外製決定", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 66, name: "独自コスト見積り", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 67, name: "納入候補のプロポーザル", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 68, name: "選定済み納入者", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 69, name: "終結済み調達", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 70, name: "スコープベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 71, name: "スケジュールベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 72, name: "コストベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 73, name: "パフォーマンス測定ベースライン", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 74, name: "プロジェクトライフサイクルの記述", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 75, name: "開発アプローチ", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { ioNum: 76, name: "リスクマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], }
];

const tandtTableElements = [
  { ttNum: 0, name: "専門家の判断", usedProcesses: [1, 3] },
  { ttNum: 1, name: "人間関係とチームに関するスキル", usedProcesses: [1, 3] },
  { ttNum: 2, name: "会議", usedProcesses: [1, 3] },
  { ttNum: 3, name: "PMIS(プロジェクトマネジメント情報システム)", usedProcesses: [1, 3] },
  { ttNum: 4, name: "変更管理ツール", usedProcesses: [1, 3] },
  { ttNum: 5, name: "先行割当", usedProcesses: [1, 3] },
  { ttNum: 6, name: "コロケーション", usedProcesses: [1, 3] },
  { ttNum: 7, name: "バーチャルチーム", usedProcesses: [1, 3] },
  { ttNum: 8, name: "コミュニケーション技法", usedProcesses: [1, 3] },
  { ttNum: 9, name: "コミュニケーション要求事項分析", usedProcesses: [1, 3] },
  { ttNum: 10, name: "コミュニケーションモデル", usedProcesses: [1, 3] },
  { ttNum: 11, name: "コミュニケーション方法", usedProcesses: [1, 3] },
  { ttNum: 12, name: "コミュニケーションスキル", usedProcesses: [1, 3] },
  { ttNum: 13, name: "知識マネジメント", usedProcesses: [1, 3] },
  { ttNum: 14, name: "情報マネジメント", usedProcesses: [1, 3] },
  { ttNum: 15, name: "データ収集", usedProcesses: [1, 3] },
  { ttNum: 16, name: "データ分析", usedProcesses: [1, 3] },
  { ttNum: 17, name: "データ表現", usedProcesses: [1, 3] },
  { ttNum: 18, name: "意思決定", usedProcesses: [1, 3] },
  { ttNum: 19, name: "コンテキストダイアグラム", usedProcesses: [1, 3] },
  { ttNum: 20, name: "プロトタイプ", usedProcesses: [1, 3] },
  { ttNum: 21, name: "プロダクト分析", usedProcesses: [1, 3] },
  { ttNum: 22, name: "要素分解", usedProcesses: [1, 3] },
  { ttNum: 23, name: "検査", usedProcesses: [1, 3] },
  { ttNum: 24, name: "ローリングウェーブ計画法", usedProcesses: [1, 3] },
  { ttNum: 25, name: "PDM", usedProcesses: [1, 3] },
  { ttNum: 26, name: "依存関係の決定と統合", usedProcesses: [1, 3] },
  { ttNum: 27, name: "リードとラグ", usedProcesses: [1, 3] },
  { ttNum: 28, name: "類推見積り", usedProcesses: [1, 3] },
  { ttNum: 29, name: "パラメトリック見積り", usedProcesses: [1, 3] },
  { ttNum: 30, name: "三点見積リ", usedProcesses: [1, 3] },
  { ttNum: 31, name: "ボトムアップ見積り", usedProcesses: [1, 3] },
  { ttNum: 32, name: "プロダクト分析", usedProcesses: [1, 3] },
  { ttNum: 33, name: "スケジュールネットワーク分析", usedProcesses: [1, 3] },
  { ttNum: 34, name: "クリティカルパス法", usedProcesses: [1, 3] },
  { ttNum: 35, name: "資源最適化", usedProcesses: [1, 3] },
  { ttNum: 36, name: "スケジュール短縮", usedProcesses: [1, 3] },
  { ttNum: 37, name: "アジャイルのリリース計画", usedProcesses: [1, 3] },
  { ttNum: 38, name: "コスト集約", usedProcesses: [1, 3] },
  { ttNum: 39, name: "過去の情報レビュー", usedProcesses: [1, 3] },
  { ttNum: 40, name: "資金限度額による資金調整", usedProcesses: [1, 3] },
  { ttNum: 41, name: "資金調達", usedProcesses: [1, 3] },
  { ttNum: 42, name: "残作業効率指数", usedProcesses: [1, 3] },
  { ttNum: 43, name: "テストおよび検査計画", usedProcesses: [1, 3] },
  { ttNum: 44, name: "テストとプロダクト評価", usedProcesses: [1, 3] },
  { ttNum: 45, name: "監査", usedProcesses: [1, 3] },
  { ttNum: 46, name: "デザインフォーエックス", usedProcesses: [1, 3] },
  { ttNum: 47, name: "問題解決", usedProcesses: [1, 3] },
  { ttNum: 48, name: "品質改善方法", usedProcesses: [1, 3] },
  { ttNum: 49, name: "組織論", usedProcesses: [1, 3] },
  { ttNum: 50, name: "表彰と報酬", usedProcesses: [1, 3] },
  { ttNum: 51, name: "トレーニング", usedProcesses: [1, 3] },
  { ttNum: 52, name: "個人およびチームの評価", usedProcesses: [1, 3] },
  { ttNum: 53, name: "プロジェクト報告", usedProcesses: [1, 3] },
  { ttNum: 54, name: "プロンプトリスト", usedProcesses: [1, 3] },
  { ttNum: 55, name: "リスク区分化", usedProcesses: [1, 3] },
  { ttNum: 56, name: "不確実性の表現", usedProcesses: [1, 3] },
  { ttNum: 57, name: "脅威への戦略", usedProcesses: [1, 3] },
  { ttNum: 58, name: "好機への戦略", usedProcesses: [1, 3] },
  { ttNum: 59, name: "コンティンジェンシー対応戦略", usedProcesses: [1, 3] },
  { ttNum: 60, name: "プロジェクトの全体リスクのための戦略", usedProcesses: [1, 3] },
  { ttNum: 61, name: "公告", usedProcesses: [1, 3] },
  { ttNum: 62, name: "入札説明会", usedProcesses: [1, 3] },
  { ttNum: 63, name: "クレーム管理", usedProcesses: [1, 3] },
  { ttNum: 64, name: "行動規範", usedProcesses: [1, 3] },
];

export default new Vuex.Store({
  state: {
    processesElements: processesTableElements,
    inputsTableElements: inputsOutputsTableElements,
    tandtTableElements: tandtTableElements,
    outputsTableElements: inputsOutputsTableElements,
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