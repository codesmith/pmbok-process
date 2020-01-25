<template>
  <div class="itto">
    <InputsTable></InputsTable>
    <TandtTable></TandtTable>
    <OutputsTable></OutputsTable>
  </div>
</template>

<script>
import InputsTable from "@/components/tables/InputsTable.vue";
import OutputsTable from "@/components/tables/OutputsTable.vue";
import TandtTable from "@/components/tables/TandtTable.vue";
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
