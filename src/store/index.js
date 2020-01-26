import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const processesTableElements = [
  // 統合マネジメント
  { psNum: 0, name: "プロジェクト憲章の作成", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14] },
  { psNum: 1, name: "プロジェクトマネジメント計画書の作成", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { psNum: 2, name: "プロジェクト作業の指揮マネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 3, name: "プロジェクト知識のマネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 4, name: "プロジェクト作業の監視・コントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 5, name: "統合変更管理", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 6, name: "プロジェクトやフェーズの終結", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // スコープマネジメント
  { psNum: 7, name: "スコープマネジメントの計画", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14] },
  { psNum: 8, name: "要求事項の収集", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { psNum: 9, name: "スコープの定義", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 10, name: "WBSの作成", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 11, name: "スコープの妥当性確認", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 12, name: "スコープのコントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // スケジュールマネジメント
  { psNum: 13, name: "スケジュールマネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 14, name: "アクティビティの定義", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14] },
  { psNum: 15, name: "アクティビティの順序設定", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { psNum: 16, name: "アクティビティの所要期間見積り", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 17, name: "スケジュールの作成", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 18, name: "スケジュールのコントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // コストマネジメント
  { psNum: 19, name: "コストマネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 20, name: "コストの見積り", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 21, name: "予算の設定", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { psNum: 22, name: "コストのコントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // 品質マネジメント
  { psNum: 23, name: "品質マネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 24, name: "品質のマネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 25, name: "品質のコントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // 資源マネジメント
  { psNum: 26, name: "資源マネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 27, name: "アクティビティ資源の見積り", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14] },
  { psNum: 28, name: "資源の獲得", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { psNum: 29, name: "チームの育成", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 30, name: "チームのマネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 31, name: "資源のコントロール", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  // コミュニケーションマネジメント
  { psNum: 32, name: "コミュニケーションマネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 33, name: "コミュニケーションのマネジメント", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 34, name: "コミュニケーションの監視", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // リスクマネジメント
  { psNum: 35, name: "リスクマネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 36, name: "リスクの特定", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 37, name: "リスクの定性的分析", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14] },
  { psNum: 38, name: "リスクの定量的分析", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { psNum: 39, name: "リスク対応の計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 40, name: "リスク対応策の実行", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 41, name: "リスクの監視", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  // 調達マネジメント
  { psNum: 43, name: "調達マネジメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 43, name: "調達の実行", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 44, name: "調達のコントロール", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // ステークホルダーマネジメント
  { psNum: 45, name: "ステークホルダーの特定", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 46, name: "ステークホルダーエンゲージメントの計画", inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { psNum: 47, name: "ステークホルダーエンゲージメントのマネジメント", inputs: [46, 45, 47, 48, 49], tandt: [0, 15, 1, 2], outputs: [0, 14] },
  { psNum: 48, name: "ステークホルダーエンゲージメントの監視", inputs: [0, 48, 49], tandt: [0, 15, 1, 2], outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

];

const inputsOutputsTableElements = [
  { name: "プロジェクト憲章", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "スコープマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "要求事項マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "スケジュールマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "コストマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "品質マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "資源マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "コミュニケーションマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "調達マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "ステークホルダーエンゲージメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "変更マネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
  { name: "コンフィギュレーションマネジメント計画書", inputProcesses: [1, 3], outputProcesses: [1, 3], },
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

const tandtTableElements = [
  { name: "専門家の判断", usedProcesses: [1, 3] },
  { name: "人間関係とチームに関するスキル", usedProcesses: [1, 3] },
  { name: "会議", usedProcesses: [1, 3] },
  { name: "PMIS(プロジェクトマネジメント情報システム)", usedProcesses: [1, 3] },
  { name: "変更管理ツール", usedProcesses: [1, 3] },
  { name: "先行割当", usedProcesses: [1, 3] },
  { name: "コロケーション", usedProcesses: [1, 3] },
  { name: "バーチャルチーム", usedProcesses: [1, 3] },
  { name: "コミュニケーション技法", usedProcesses: [1, 3] },
  { name: "コミュニケーション要求事項分析", usedProcesses: [1, 3] },
  { name: "コミュニケーションモデル", usedProcesses: [1, 3] },
  { name: "コミュニケーション方法", usedProcesses: [1, 3] },
  { name: "コミュニケーションスキル", usedProcesses: [1, 3] },
  { name: "知識マネジメント", usedProcesses: [1, 3] },
  { name: "情報マネジメント", usedProcesses: [1, 3] },
  { name: "データ収集", usedProcesses: [1, 3] },
  { name: "データ分析", usedProcesses: [1, 3] },
  { name: "データ表現", usedProcesses: [1, 3] },
  { name: "意思決定", usedProcesses: [1, 3] },
  { name: "コンテキストダイアグラム", usedProcesses: [1, 3] },
  { name: "プロトタイプ", usedProcesses: [1, 3] },
  { name: "プロダクト分析", usedProcesses: [1, 3] },
  { name: "要素分解", usedProcesses: [1, 3] },
  { name: "検査", usedProcesses: [1, 3] },
  { name: "ローリングウェーブ計画法", usedProcesses: [1, 3] },
  { name: "PDM", usedProcesses: [1, 3] },
  { name: "依存関係の決定と統合", usedProcesses: [1, 3] },
  { name: "リードとラグ", usedProcesses: [1, 3] },
  { name: "類推見積り", usedProcesses: [1, 3] },
  { name: "パラメトリック見積り", usedProcesses: [1, 3] },
  { name: "三点見積リ", usedProcesses: [1, 3] },
  { name: "ボトムアップ見積り", usedProcesses: [1, 3] },
  { name: "プロダクト分析", usedProcesses: [1, 3] },
  { name: "スケジュールネットワーク分析", usedProcesses: [1, 3] },
  { name: "クリティカルパス法", usedProcesses: [1, 3] },
  { name: "資源最適化", usedProcesses: [1, 3] },
  { name: "スケジュール短縮", usedProcesses: [1, 3] },
  { name: "アジャイルのリリース計画", usedProcesses: [1, 3] },
  { name: "コスト集約", usedProcesses: [1, 3] },
  { name: "過去の情報レビュー", usedProcesses: [1, 3] },
  { name: "資金限度額による資金調整", usedProcesses: [1, 3] },
  { name: "資金調達", usedProcesses: [1, 3] },
  { name: "残作業効率指数", usedProcesses: [1, 3] },
  { name: "テストおよび検査計画", usedProcesses: [1, 3] },
  { name: "テストとプロダクト評価", usedProcesses: [1, 3] },
  { name: "監査", usedProcesses: [1, 3] },
  { name: "デザインフォーエックス", usedProcesses: [1, 3] },
  { name: "問題解決", usedProcesses: [1, 3] },
  { name: "品質改善方法", usedProcesses: [1, 3] },
  { name: "組織論", usedProcesses: [1, 3] },
  { name: "表彰と報酬", usedProcesses: [1, 3] },
  { name: "トレーニング", usedProcesses: [1, 3] },
  { name: "個人およびチームの評価", usedProcesses: [1, 3] },
  { name: "プロジェクト報告", usedProcesses: [1, 3] },
  { name: "プロンプトリスト", usedProcesses: [1, 3] },
  { name: "リスク区分化", usedProcesses: [1, 3] },
  { name: "不確実性の表現", usedProcesses: [1, 3] },
  { name: "脅威への戦略", usedProcesses: [1, 3] },
  { name: "好機への戦略", usedProcesses: [1, 3] },
  { name: "コンティンジェンシー対応戦略", usedProcesses: [1, 3] },
  { name: "プロジェクトの全体リスクのための戦略", usedProcesses: [1, 3] },
  { name: "公告", usedProcesses: [1, 3] },
  { name: "入札説明会", usedProcesses: [1, 3] },
  { name: "クレーム管理", usedProcesses: [1, 3] },
  { name: "行動規範", usedProcesses: [1, 3] },
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