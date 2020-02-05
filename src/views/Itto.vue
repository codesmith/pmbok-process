<template>
  <div class="itto">
    <p>{{routedProcessesElement.name}}</p>
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
      let routedParams = {};
      if (Object.keys(this.$route.params).length > 0) {
        routedParams = this.$route.params;
      } else {
        return {
          name:
            "インプット、技術とツール、アウトプットをどれか選択してください。",
          inputs: [-1],
          tandt: [-1],
          outputs: [-1]
        };
      }
      return processesElements[routedParams.psNum];
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
