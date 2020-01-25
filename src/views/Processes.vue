<template>
  <div class="processes">
    <InputsTable></InputsTable>
    <table id="tandt">
      <thead>
        <tr bgcolor="orange">
          <td>技術とツール</td>
        </tr>
      </thead>
    </table>

    <OutputsTable></OutputsTable>
  </div>
</template>

<script>
import InputsTable from "@/views/tables/InputsTable.vue";
import OutputsTable from "@/views/tables/OutputsTable.vue";
export default {
  name: "processes",
  props: {
    msg: String
  },
  components: {
    InputsTable,
    OutputsTable
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

#tandt {
  float: left;
  padding: 0 0 0 30px;
}
thead > tr > td {
  text-align: center;
}
td {
  text-align: left;
}
</style>

