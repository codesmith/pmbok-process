<template>
  <div id="InputsTable">
    <table border="2" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td class="tableTitle">インプット</td>
        </tr>
      </thead>
      <tr
        v-for="(inputsTableElement, index) in this.$store.state.inputsTableElements"
        :key="inputsTableElement.name"
      >
        <transition name="slide">
          <td v-show="showTableElement(index)">
            <router-link
              :to="{ name: 'processes', params: { inNum: inputsTableElement.inNum }}"
              :class="{
              'active': routedProcessesElement.inputs.includes(index), 
              'inactive': !routedProcessesElement.inputs.includes(index)
            }"
            >・{{inputsTableElement.name}}</router-link>
          </td>
        </transition>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "inputsTable",
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
        if (this.routedProcessesElement.inputs.includes(i)) {
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
  background-color: darkblue;
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
#InputsTable {
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
  border-width: 1px;
  border-collapse: collapse;
  border-color: black;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-leave,
.slide-enter-to {
  opacity: 1;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
</style>

