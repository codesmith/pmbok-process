<template>
  <hooper>
    <slide>slide 1</slide>
    <slide>slide 2</slide>
    <slide>slide 3</slide>
    <slide>slide 4</slide>
    <slide>slide 5</slide>
    <slide>
      <p>下のリンクを押すと、スタートします。</p>
      <router-link to="/processes">PMBOKプロセス一覧</router-link>|
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
// @ is an alias to /src
import {
  Hooper,
  Slide,
  Pagination as HooperPagination // ページネーションが必要なときにimport
  // Navigation as HooperNavigation // 左右のナビゲーションが必要なときにimport
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "home",
  components: {
    Hooper,
    Slide,
    HooperPagination
    // HooperNavigation
  }
};
</script>

<style>
.hooper-slide {
  background-color: #62caaa;
  padding: 20px;
  /* display: flex; */
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  font-size: 30px;
  border-radius: 10px;
}
.hooper {
  width: 50%;
  margin: 30px auto;
  height: 600px;
}
a {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>