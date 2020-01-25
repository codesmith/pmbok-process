<template>
  <div class="itto">
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
  name: "itto",
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
.itto {
  position: absolute;
  align-self: center;
}
