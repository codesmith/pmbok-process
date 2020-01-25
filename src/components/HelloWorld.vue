<template>
  <div id="hello">
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>
            プロセス群→
            <br />↓知識エリア
          </td>
          <td>立ち上げ</td>
          <td>計画</td>
          <td>実行</td>
          <td>監視・コントロール</td>
          <td>終結</td>
        </tr>
      </thead>
      <tr>
        <td>統合マネジメント</td>
        <td>プロジェクト憲章の作成</td>
        <td>プロジェクトマネジメント計画書の作成</td>
        <td>
          プロジェクト作業の指揮マネジメント
          <br />プロジェクト知識のマネジメント
        </td>
        <td>
          プロジェクト作業の監視・コントロール
          <br />統合変更管理
        </td>
        <td>プロジェクトやフェーズの終結</td>
      </tr>
      <tr>
        <td>スコープマネジメント</td>
        <td></td>
        <td>
          スコープマネジメントの計画
          <br />要求事項の収集
          <br />スコープの定義
          <br />WBSの作成
        </td>
        <td></td>
        <td>
          スコープの妥当性確認
          <br />スコープのコントロール
        </td>
        <td></td>
      </tr>
      <tr>
        <td>スケジュールマネジメント</td>
        <td></td>
        <td>
          スケジュールマネジメントの計画
          <br />アクティビティの定義
          <br />アクティビティの順序設定
          <br />アクティビティの所要期間見積り
          <br />スケジュールの作成
        </td>
        <td></td>
        <td>スケジュールのコントロール</td>
        <td></td>
      </tr>
      <tr>
        <td>コストマネジメント</td>
        <td></td>
        <td>
          コストマネジメントの計画
          <br />コストの見積り
          <br />予算の設定
        </td>
        <td></td>
        <td>コストのコントロール</td>
        <td></td>
      </tr>
      <tr>
        <td>品質マネジメント</td>
        <td></td>
        <td>品質マネジメントの計画</td>
        <td>品質のマネジメント</td>
        <td>品質のコントロール</td>
        <td></td>
      </tr>
      <tr>
        <td>資源マネジメント</td>
        <td></td>
        <td>
          資源マネジメントの計画
          <br />アクティビティ資源の見積り
        </td>
        <td>
          資源の獲得
          <br />チームの育成
          <br />チームのマネジメント
        </td>
        <td>資源のコントロール</td>
        <td></td>
      </tr>
      <tr>
        <td>コミュニケーションマネジメント</td>
        <td></td>
        <td>コミュニケーションマネジメントの計画</td>
        <td>コミュニケーションのマネジメント</td>
        <td>コミュニケーションの監視</td>
        <td></td>
      </tr>
      <tr>
        <td>リスクマネジメント</td>
        <td></td>
        <td>
          リスクマネジメントの計画
          <br />リスクの特定
          <br />リスクの定性的分析
          <br />リスクの定量的分析
          <br />リスク対応の計画
        </td>
        <td>リスク対応策の実行</td>
        <td>リスクの監視</td>
        <td></td>
      </tr>
      <tr>
        <td>調達マネジメント</td>
        <td></td>
        <td>調達マネジメントの計画</td>
        <td>調達の実行</td>
        <td>調達のコントロール</td>
        <td></td>
      </tr>
      <tr>
        <td>ステークホルダーマネジメント</td>
        <td>ステークホルダーの特定</td>
        <td>ステークホルダーエンゲージメントの計画</td>
        <td>ステークホルダーエンゲージメントのマネジメント</td>
        <td>ステークホルダーエンゲージメントの監視</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
