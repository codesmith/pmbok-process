<template>
  <div id="TandtTable">
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>技術&ツール</td>
        </tr>
      </thead>
      <tr
        v-for="(tandtTableElement, index) in this.$store.state.tandtTableElements"
        :key="tandtTableElement.name"
      >
        <td v-show="showTableElement(index)">
          <router-link
            :to="{ name: 'processes', params: { ttNum: tandtTableElement.ttNum }}"
            :class="{
              'active': routedProcessesElement.tandt.includes(index), 
              'inactive': !routedProcessesElement.tandt.includes(index)
            }"
          >・{{tandtTableElement.name}}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tandtTable",
  props: {
    routedProcessesElement: {
      type: Object,
      required: false
    },
    showElement: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    showTableElement: function() {
      return function(i) {
        if (this.routedProcessesElement.tandt.includes(i)) {
          return true;
        } else if (this.showElement) {
          return true;
        } else {
          return false;
        }
      };
    }
  }
};
</script>

<style scoped>
.inactive {
  color: darkgrey;
}
.active {
  background-color: green;
  color: white;
  padding: 0.5% 5%;
  border-radius: 40px 40px 40px 40px;
}

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
#TandtTable {
  float: left;
  padding: 0 0 0 30px;
  margin: 10px;
}
thead > tr > td {
  text-align: center;
  font-weight: bold;
  padding: 5px;
  font-size: 110%;
}
td {
  text-align: left;
}
</style>

