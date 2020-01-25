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
.processes {
  position: absolute;
  align-self: center;
}
