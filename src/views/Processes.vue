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
  props: {
    msg: String
  },
  computed: {
    routedElement() {
      const inputsTableElements = this.$store.state.inputsTableElements;
      const tandtTableElements = this.$store.state.tandtTableElements;
      const outputsTableElements = this.$store.state.outputsTableElements;
      const routedParams = this.$route.params;
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

