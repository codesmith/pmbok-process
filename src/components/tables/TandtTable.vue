<template>
  <div id="TandtTable">
    <table border="2" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>ツールと技法</td>
        </tr>
      </thead>
      <tr
        v-for="(tandtTableElement, index) in this.$store.state.tandtTableElements"
        :key="tandtTableElement.name"
      >
        <transition name="slide">
          <td v-show="showTableElement(index)">
            <router-link
              :to="{ name: 'processes', params: { ttNum: tandtTableElement.ttNum }}"
              :class="{
              'active': routedProcessesElement.tandt.includes(index), 
              'inactive': !routedProcessesElement.tandt.includes(index)
            }"
            >・{{tandtTableElement.name}}</router-link>
          </td>
        </transition>
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

