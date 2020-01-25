<template>
  <div class="processes">
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td class="input">インプット</td>
          <td class="tandt">技術とツール</td>
          <td class="output">アウトプット</td>
        </tr>
      </thead>
      <tr>
        <td class="knowledge-are-title">統合マネジメント</td>
        <td>
          <router-link to="/processes">プロジェクト憲章の作成</router-link>
        </td>
        <td>プロジェクトマネジメント計画書の作成</td>
      </tr>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.knowledge-are-title {
  background-color: #66cc99;
  font-size: large;
  font-weight: bold;
}
a {
  text-decoration: none;
}
</style>

