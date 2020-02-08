<template>
  <hooper>
    <slide>
      <p>
        これはPMBOK第6版の勉強用のサイトです。
        <br />次のスライドから説明が始まります。
        <br />
        <br />
        <router-link to="/processes">説明を飛ばして始める</router-link>
      </p>
    </slide>
    <slide>
      PMBOK第6版では、合計49のプロセスが
      <br />定義されています。
      <br />各プロセスは10の知識エリアと5つのプロセス群にそれぞれ分類されます。
    </slide>
    <slide>
      プロセスに入力された"インプット"は、
      <br />"アウトプット"に変換され出力されます。
      <br />この時に"ツールと技法"が使用されます。
      <br />
      <br />↑上の3つを総称してITTOと呼びます。
    </slide>
    <slide>
      <p>
        PMBOKでは
        <br />「あるプロセスAから出力されたアウトプットが、プロセスBとプロセスCのインプットとして入力される。」、
        <br />「プロセスD、E、Fで同じツールと技法が使用されている」
        <br />……ということが、往々にしてあります。
      </p>
    </slide>
    <slide>
      <p>
        このサイトでは
        <br />「あるプロセスのITTOはそれぞれ何があるか。」、
        <br />逆に「あるITTOが、どのプロセスで登場するか。」
        <br />について、整理しました。
        <br />
        <br />皆様の勉強の一助となれば幸いです。
      </p>
    </slide>
    <slide>
      <p>
        下のリンクを押すと、スタートします。
        <br />
        <br />
        <router-link to="/processes">PMBOKプロセス一覧</router-link>
      </p>
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
  display: flex;
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