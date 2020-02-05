<template>
  <div id="OutputsTable">
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td class="tableTitle">アウトプット</td>
        </tr>
      </thead>
      <tr
        v-for="(outputsTableElement, index) in this.$store.state.outputsTableElements"
        :key="outputsTableElement.name"
      >
        <td>
          <router-link
            :to="{ name: 'processes', params: { outNum: outputsTableElement.outNum }}"
            :class="{
              'active': routedProcessesElement.outputs.includes(index),
              'inactive': !routedProcessesElement.outputs.includes(index)
            }"
          >・{{outputsTableElement.name}}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "OutputsTable",
  props: {
    routedProcessesElement: {
      type: Object,
      required: false
    }
  }
};
</script>

<style scoped>
.inactive {
  color: darkgrey;
}
.active {
  background-color: red;
  color: white;
  padding: 0.5% 5%;
  border-radius: 40px 40px 40px 40px;
}
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

#OutputsTable {
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
  border-width: 1px;
  border-collapse: collapse;
  border-color: black;
}
</style>

