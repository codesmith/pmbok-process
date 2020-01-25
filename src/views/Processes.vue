<template>
  <div class="processes">
    <table id="input" border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>インプット</td>
        </tr>
      </thead>
      <tr>
        <td>プロジェクト憲章</td>
      </tr>
      <tr>
        <td>
          プロジェクトマネジメント計画書
          <p>・スコープマネジメント計画書</p>
          <p>・要求事項マネジメント計画書</p>
          <p>・スケジュールマネジメント計画書</p>
          <p>・コストマネジメント計画書</p>
          <p>・品質マネジメント計画書</p>
          <p>・資源マネジメント計画書</p>
          <p>・コミュニケーションマネジメント計画書</p>
          <p>・調達マネジメント計画書</p>
          <p>・ステークホルダーエンゲージメント計画書</p>
        </td>
      </tr>

      <tr>
        <td></td>
      </tr>
    </table>

    <table id="tandt">
      <thead>
        <tr bgcolor="orange">
          <td>技術とツール</td>
        </tr>
      </thead>
    </table>

    <table id="output">
      <thead>
        <tr bgcolor="orange">
          <td>アウトプット</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "processes",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.knowledge-are-title {
  background-color: #66cc99;
  font-size: large;
  font-weight: bold;
}
a {
  text-decoration: none;
}
p {
  text-indent: 10px;
  margin: 0;
  padding: 0 0 0 10px;
}
table {
  width: 400px;
}
.processes {
  padding: 0 0 0 30px;
}
#input {
  float: left;
  padding: 0 0 0 30px;
}
#tandt {
  float: left;
  padding: 0 0 0 30px;
}
#output {
  float: left;
  padding: 0 0 0 30px;
}
</style>

