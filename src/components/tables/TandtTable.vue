<template>
  <div id="TandtTable">
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>技術&ツール</td>
        </tr>
      </thead>
      <tr
        v-for="tandtTableElement in this.$store.state.tandtTableElements"
        :key="tandtTableElement.name"
      >
        <td>
          <router-link to="/processes">・{{tandtTableElement.name}}</router-link>
        </td>
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

