<template>
  <div id="TandtTable">
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>技術&ツール</td>
        </tr>
      </thead>
      <tr>
        <td>・専門家の判断</td>
      </tr>
      <tr>
        <td>・人間関係とチームに関するスキル</td>
      </tr>
      <tr>
        <td>・会議</td>
      </tr>
      <tr>
        <td>・PMIS(プロジェクトマネジメント情報システム)</td>
      </tr>
      <tr>
        <td>・変更管理ツール</td>
      </tr>
      <tr>
        <td>・先行割当</td>
      </tr>
      <tr>
        <td>・コロケーション</td>
      </tr>
      <tr>
        <td>・バーチャルチーム</td>
      </tr>
      <tr>
        <td>・コミュニケーション技法</td>
      </tr>
      <tr>
        <td>・コミュニケーション要求事項分析</td>
      </tr>
      <tr>
        <td>・コミュニケーションモデル</td>
      </tr>

      <tr>
        <td>・コミュニケーション方法</td>
      </tr>
      <tr>
        <td>・コミュニケーションスキル</td>
      </tr>
      <tr>
        <td>・知識マネジメント</td>
      </tr>
      <tr>
        <td>・情報マネジメント</td>
      </tr>
      <tr>
        <td>・データ収集</td>
      </tr>
      <tr>
        <td>・データ分析</td>
      </tr>
      <tr>
        <td>・データ表現</td>
      </tr>
      <tr>
        <td>・意思決定</td>
      </tr>
      <tr>
        <td>・コンテキストダイアグラム</td>
      </tr>
      <tr>
        <td>・プロトタイプ</td>
      </tr>
      <tr>
        <td>・プロダクト分析</td>
      </tr>

      <tr>
        <td>・要素分解</td>
      </tr>
      <tr>
        <td>・検査</td>
      </tr>
      <tr>
        <td>・ローリングウェーブ計画法</td>
      </tr>
      <tr>
        <td>・PDM</td>
      </tr>
      <tr>
        <td>・依存関係の決定と統合</td>
      </tr>
      <tr>
        <td>・リードとラグ</td>
      </tr>
      <tr>
        <td>・類推見積り</td>
      </tr>
      <tr>
        <td>・パラメトリック見積り</td>
      </tr>
      <tr>
        <td>・三点見積リ</td>
      </tr>
      <tr>
        <td>・ボトムアップ見積り</td>
      </tr>
      <tr>
        <td>・プロダクト分析</td>
      </tr>

      <tr>
        <td>・スケジュールネットワーク分析</td>
      </tr>
      <tr>
        <td>・クリティカルパス法</td>
      </tr>
      <tr>
        <td>・資源最適化</td>
      </tr>
      <tr>
        <td>・スケジュール短縮</td>
      </tr>
      <tr>
        <td>・アジャイルのリリース計画</td>
      </tr>
      <tr>
        <td>・コスト集約</td>
      </tr>
      <tr>
        <td>・過去の情報レビュー</td>
      </tr>
      <tr>
        <td>・資金限度額による資金調整</td>
      </tr>

      <tr>
        <td>・資金調達</td>
      </tr>
      <tr>
        <td>・残作業効率指数</td>
      </tr>
      <tr>
        <td>・テストおよび検査計画</td>
      </tr>
      <tr>
        <td>・テストとプロダクト評価</td>
      </tr>
      <tr>
        <td>・監査</td>
      </tr>
      <tr>
        <td>・デザインフォーエックス</td>
      </tr>
      <tr>
        <td>・問題解決</td>
      </tr>
      <tr>
        <td>・品質改善方法</td>
      </tr>

      <tr>
        <td>・組織論</td>
      </tr>
      <tr>
        <td>・表彰と報酬</td>
      </tr>
      <tr>
        <td>・トレーニング</td>
      </tr>
      <tr>
        <td>・個人およびチームの評価</td>
      </tr>
      <tr>
        <td>・プロジェクト報告</td>
      </tr>
      <tr>
        <td>・プロンプトリスト</td>
      </tr>
      <tr>
        <td>・リスク区分化</td>
      </tr>
      <tr>
        <td>・不確実性の表現</td>
      </tr>

      <tr>
        <td>・脅威への戦略</td>
      </tr>
      <tr>
        <td>・好機への戦略</td>
      </tr>
      <tr>
        <td>・コンティンジェンシー対応戦略</td>
      </tr>
      <tr>
        <td>・プロジェクトの全体リスクのための戦略</td>
      </tr>
      <tr>
        <td>・公告</td>
      </tr>
      <tr>
        <td>・入札説明会</td>
      </tr>
      <tr>
        <td>・クレーム管理</td>
      </tr>
      <tr>
        <td>・行動規範</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tandtTable",
  props: {
    msg: String
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
p {
  text-indent: 1.5em;
  margin: 0;
  padding: 0 0 0 10px;
}
table {
  width: 400px;
}
.processes {
  padding: 0 0 0 30px;
}
#TandtTable {
  float: left;
  padding: 0 0 0 30px;
  margin: 10px;
}
thead > tr > td {
  text-align: center;
  font-weight: bold;
  padding: 5px;
  font-size: 110%;
}
td {
  text-align: left;
}
</style>

