<template>
  <div class="processes">
    <p>{{routedElement.name}}</p>
    <HomeTable :routedElement="routedElement"></HomeTable>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTable from "@/components/HomeTable.vue";

export default {
  name: "processes",
  computed: {
    routedElement() {
      const inputsTableElements = this.$store.state.inputsTableElements;
      const tandtTableElements = this.$store.state.tandtTableElements;
      const outputsTableElements = this.$store.state.outputsTableElements;
      let routedParams = {};
      if (Object.keys(this.$route.params).length > 0) {
        routedParams = this.$route.params;
      } else {
        return {
          name: "プロセスをどれか選択してください。",
          inNum: -1,
          outNum: -1,
          ttNum: -1
        };
      }
      if ("inNum" in routedParams) {
        return inputsTableElements[routedParams.inNum];
      } else if ("ttNum" in routedParams) {
        return tandtTableElements[routedParams.ttNum];
      } else if ("outNum" in routedParams) {
        return outputsTableElements[routedParams.outNum];
      }
      return 0;
    }
  },
  components: {
    HomeTable
  }
};
</script>

