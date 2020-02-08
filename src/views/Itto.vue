<template>
  <div class="itto">
    <p>
      {{routedProcessesElement.name}}
      <button @click="showElement = !showElement">表示/非表示</button>
    </p>
    <InputsTable :routedProcessesElement="routedProcessesElement" :showElement="showElement"></InputsTable>
    <TandtTable :routedProcessesElement="routedProcessesElement" :showElement="showElement"></TandtTable>
    <OutputsTable :routedProcessesElement="routedProcessesElement" :showElement="showElement"></OutputsTable>
  </div>
</template>

<script>
import InputsTable from "@/components/tables/InputsTable.vue";
import OutputsTable from "@/components/tables/OutputsTable.vue";
import TandtTable from "@/components/tables/TandtTable.vue";
export default {
  name: "itto",
  data() {
    return {
      showElement: true
    };
  },
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
          outputs: [-1],
          updates: [-1]
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
