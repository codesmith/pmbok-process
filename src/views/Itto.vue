<template>
  <div class="itto">
    <p>プロセス「{{routedProcessesElement.name}}」の I T T O</p>
    <InputsTable :routedProcessesElement="routedProcessesElement"></InputsTable>
    <TandtTable :routedProcessesElement="routedProcessesElement"></TandtTable>
    <OutputsTable :routedProcessesElement="routedProcessesElement"></OutputsTable>
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
  computed: {
    routedProcessesElement() {
      const processesElements = this.$store.state.processesElements;
      return processesElements[this.$route.params.psNum];
    }
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
