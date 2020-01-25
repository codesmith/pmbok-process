<template>
  <div class="processes">
    <InputsTable></InputsTable>
    <TandtTable></TandtTable>
    <OutputsTable></OutputsTable>
  </div>
</template>

<script>
import InputsTable from "@/views/tables/InputsTable.vue";
import OutputsTable from "@/views/tables/OutputsTable.vue";
import TandtTable from "@/views/tables/TandtTable.vue";
export default {
  name: "processes",
  props: {
    msg: String
  },
  components: {
    InputsTable,
    OutputsTable,
    TandtTable
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

