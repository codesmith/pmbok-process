<template>
  <div class="home">
    <HomeTable />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTable from "@/components/HomeTable.vue";

export default {
  name: "home",
  components: {
    HomeTable
  }
};
</script>

