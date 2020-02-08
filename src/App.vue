<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/processes">Processes</router-link>|
      <router-link to="/itto">ITTO</router-link>|
      <div class="tooltip1">
        <p>色の意味</p>
        <div class="description1">
          青：インプット
          <br />緑：ツールと技法
          <br />赤：アウトプット
          <br />紫：更新
        </div>
      </div>
    </div>
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav > a {
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav p {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.tooltip1 {
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.tooltip1 p {
  margin: 0;
  padding: 0;
  text-decoration: underline;
}
.description1 {
  display: none;
  position: absolute;
  padding: 10px;
  font-size: 12px;
  line-height: 1.6em;
  color: #fff;
  border-radius: 5px;
  background: #000;
  width: 100px;
  text-align: left;
}
.description1:before {
  content: "";
  position: absolute;
  top: 0%;
  right: 95%;
  border: 15px solid transparent;
  border-top: 15px solid #000;
  margin-left: -15px;
  transform: rotateZ(90deg);
}
.tooltip1:hover .description1 {
  display: inline-block;
  top: 0px;
  left: 80px;
}
</style>
