<template>
  <div id="hello">
    <p>{{selectedInputProcesses}}</p>
    <table border="3" style="border-collapse: collapse; border-color:black">
      <thead>
        <tr bgcolor="orange">
          <td>
            プロセス群→
            <br />↓知識エリア
          </td>
          <td>立ち上げ</td>
          <td>計画</td>
          <td>実行</td>
          <td>監視・コントロール</td>
          <td>終結</td>
        </tr>
      </thead>
      <tr>
        <td class="knowledge-are-title">統合マネジメント</td>
        <td>
          <!-- プロジェクト憲章 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 0 }}"
            :class="{
              'active': selectedInputProcesses.includes(0), 
              'inactive': !selectedInputProcesses.includes(0)
            }"
          >{{this.$store.state.processesElements[0].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクトマネジメント計画書の作成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 1 }}"
            :class="{
              'active': selectedInputProcesses.includes(1), 
              'inactive': !selectedInputProcesses.includes(1)
            }"
          >{{this.$store.state.processesElements[1].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクト作業の指揮マネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 2 }}"
            :class="{
              'active': selectedInputProcesses.includes(2), 
              'inactive': !selectedInputProcesses.includes(2)
            }"
          >{{this.$store.state.processesElements[2].name}}</router-link>
          <br />
          <!-- プロジェクト知識のマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 3 }}"
            :class="{
              'active': selectedInputProcesses.includes(3), 
              'inactive': !selectedInputProcesses.includes(3)
            }"
          >{{this.$store.state.processesElements[3].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクト作業の監視・コントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 4 }}"
            :class="{
              'active': selectedInputProcesses.includes(4), 
              'inactive': !selectedInputProcesses.includes(4)
            }"
          >{{this.$store.state.processesElements[4].name}}</router-link>
          <br />
          <!-- 統合変更管理 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 5 }}"
            :class="{
              'active': selectedInputProcesses.includes(5), 
              'inactive': !selectedInputProcesses.includes(5)
            }"
          >{{this.$store.state.processesElements[5].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクトやフェーズの終結 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 6 }}"
            :class="{
              'active': selectedInputProcesses.includes(6), 
              'inactive': !selectedInputProcesses.includes(6)
            }"
          >{{this.$store.state.processesElements[6].name}}</router-link>
        </td>
      </tr>
      <tr>
        <td class="knowledge-are-title">スコープマネジメント</td>
        <td></td>
        <td>
          <!-- スコープマネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 7 }}"
            :class="{
              'active': selectedInputProcesses.includes(7), 
              'inactive': !selectedInputProcesses.includes(7)
            }"
          >{{this.$store.state.processesElements[7].name}}</router-link>
          <br />
          <!-- 要求事項の収集 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 8 }}"
            :class="{
              'active': selectedInputProcesses.includes(8), 
              'inactive': !selectedInputProcesses.includes(8)
            }"
          >{{this.$store.state.processesElements[8].name}}</router-link>
          <br />
          <!-- スコープの定義 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 9 }}"
            :class="{
              'active': selectedInputProcesses.includes(9), 
              'inactive': !selectedInputProcesses.includes(9)
            }"
          >{{this.$store.state.processesElements[9].name}}</router-link>
          <br />
          <!-- WBSの作成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 10 }}"
            :class="{
              'active': selectedInputProcesses.includes(10), 
              'inactive': !selectedInputProcesses.includes(10)
            }"
          >{{this.$store.state.processesElements[10].name}}</router-link>
        </td>
        <td></td>
        <td>
          <!-- スコープの妥当性確認 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 11 }}"
            :class="{
              'active': selectedInputProcesses.includes(11), 
              'inactive': !selectedInputProcesses.includes(11)
            }"
          >{{this.$store.state.processesElements[11].name}}</router-link>
          <br />
          <!-- スコープのコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 12 }}"
            :class="{
              'active': selectedInputProcesses.includes(12), 
              'inactive': !selectedInputProcesses.includes(12)
            }"
          >{{this.$store.state.processesElements[12].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">スケジュールマネジメント</td>
        <td></td>
        <td>
          <!-- スケジュールマネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 13 }}"
            :class="{
              'active': selectedInputProcesses.includes(13), 
              'inactive': !selectedInputProcesses.includes(13)
            }"
          >{{this.$store.state.processesElements[13].name}}</router-link>
          <br />
          <!-- アクティビティの定義 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 14 }}"
            :class="{
              'active': selectedInputProcesses.includes(14), 
              'inactive': !selectedInputProcesses.includes(14)
            }"
          >{{this.$store.state.processesElements[14].name}}</router-link>
          <br />
          <!-- アクティビティの順序設定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 15 }}"
            :class="{
              'active': selectedInputProcesses.includes(15), 
              'inactive': !selectedInputProcesses.includes(15)
            }"
          >{{this.$store.state.processesElements[15].name}}</router-link>
          <br />
          <!-- アクティビティの所要期間見積り -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 16 }}"
            :class="{
              'active': selectedInputProcesses.includes(16), 
              'inactive': !selectedInputProcesses.includes(16)
            }"
          >{{this.$store.state.processesElements[16].name}}</router-link>
          <br />
          <!-- スケジュールの作成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 17 }}"
            :class="{
              'active': selectedInputProcesses.includes(17), 
              'inactive': !selectedInputProcesses.includes(17)
            }"
          >{{this.$store.state.processesElements[17].name}}</router-link>
        </td>
        <td></td>
        <td>
          <!-- スケジュールのコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 18 }}"
            :class="{
              'active': selectedInputProcesses.includes(18), 
              'inactive': !selectedInputProcesses.includes(18)
            }"
          >{{this.$store.state.processesElements[18].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">コストマネジメント</td>
        <td></td>
        <td>
          <!-- コストマネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 19 }}"
            :class="{
              'active': selectedInputProcesses.includes(19), 
              'inactive': !selectedInputProcesses.includes(19)
            }"
          >{{this.$store.state.processesElements[19].name}}</router-link>
          <br />
          <!-- コストの見積り -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 20 }}"
            :class="{
              'active': selectedInputProcesses.includes(20), 
              'inactive': !selectedInputProcesses.includes(20)
            }"
          >{{this.$store.state.processesElements[20].name}}</router-link>
          <br />
          <!-- 予算の設定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 21 }}"
            :class="{
              'active': selectedInputProcesses.includes(21), 
              'inactive': !selectedInputProcesses.includes(21)
            }"
          >{{this.$store.state.processesElements[21].name}}</router-link>
        </td>
        <td></td>
        <td>
          <!-- コストのコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 22 }}"
            :class="{
              'active': selectedInputProcesses.includes(22), 
              'inactive': !selectedInputProcesses.includes(22)
            }"
          >{{this.$store.state.processesElements[22].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">品質マネジメント</td>
        <td></td>
        <td>
          <!-- 品質マネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 23 }}"
            :class="{
              'active': selectedInputProcesses.includes(23), 
              'inactive': !selectedInputProcesses.includes(23)
            }"
          >{{this.$store.state.processesElements[23].name}}</router-link>
        </td>
        <td>
          <!-- 品質のマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 24 }}"
            :class="{
              'active': selectedInputProcesses.includes(24), 
              'inactive': !selectedInputProcesses.includes(24)
            }"
          >{{this.$store.state.processesElements[24].name}}</router-link>
        </td>
        <td>
          <!-- 品質のコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 25 }}"
            :class="{
              'active': selectedInputProcesses.includes(25), 
              'inactive': !selectedInputProcesses.includes(25)
            }"
          >{{this.$store.state.processesElements[25].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">資源マネジメント</td>
        <td></td>
        <td>
          <!-- 資源マネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 26 }}"
            :class="{
              'active': selectedInputProcesses.includes(26), 
              'inactive': !selectedInputProcesses.includes(26)
            }"
          >{{this.$store.state.processesElements[26].name}}</router-link>
          <br />
          <!-- アクティビティ資源の見積り -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 27 }}"
            :class="{
              'active': selectedInputProcesses.includes(27), 
              'inactive': !selectedInputProcesses.includes(27)
            }"
          >{{this.$store.state.processesElements[27].name}}</router-link>
        </td>
        <td>
          <!-- 資源の獲得 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 28 }}"
            :class="{
              'active': selectedInputProcesses.includes(28), 
              'inactive': !selectedInputProcesses.includes(28)
            }"
          >{{this.$store.state.processesElements[28].name}}</router-link>
          <br />
          <!-- チームの育成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 29 }}"
            :class="{
              'active': selectedInputProcesses.includes(29), 
              'inactive': !selectedInputProcesses.includes(29)
            }"
          >{{this.$store.state.processesElements[29].name}}</router-link>
          <br />
          <!-- チームのマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 30 }}"
            :class="{
              'active': selectedInputProcesses.includes(30), 
              'inactive': !selectedInputProcesses.includes(30)
            }"
          >{{this.$store.state.processesElements[30].name}}</router-link>
        </td>
        <td>
          <!-- 資源のコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 31 }}"
            :class="{
              'active': selectedInputProcesses.includes(31), 
              'inactive': !selectedInputProcesses.includes(31)
            }"
          >{{this.$store.state.processesElements[31].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">コミュニケーションマネジメント</td>
        <td></td>
        <td>
          <!-- コミュニケーションマネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 32 }}"
            :class="{
              'active': selectedInputProcesses.includes(32), 
              'inactive': !selectedInputProcesses.includes(32)
            }"
          >{{this.$store.state.processesElements[32].name}}</router-link>
        </td>
        <td>
          <!-- コミュニケーションのマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 33 }}"
            :class="{
              'active': selectedInputProcesses.includes(33), 
              'inactive': !selectedInputProcesses.includes(33)
            }"
          >{{this.$store.state.processesElements[33].name}}</router-link>
        </td>
        <td>
          <!-- コミュニケーションの監視 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 34 }}"
            :class="{
              'active': selectedInputProcesses.includes(34), 
              'inactive': !selectedInputProcesses.includes(34)
            }"
          >{{this.$store.state.processesElements[34].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">リスクマネジメント</td>
        <td></td>
        <td>
          <!-- リスクマネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 35 }}"
            :class="{
              'active': selectedInputProcesses.includes(35), 
              'inactive': !selectedInputProcesses.includes(35)
            }"
          >{{this.$store.state.processesElements[35].name}}</router-link>
          <br />
          <!-- リスクの特定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 36 }}"
            :class="{
              'active': selectedInputProcesses.includes(36), 
              'inactive': !selectedInputProcesses.includes(36)
            }"
          >{{this.$store.state.processesElements[36].name}}</router-link>
          <br />
          <!-- リスクの定性的分析 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 37 }}"
            :class="{
              'active': selectedInputProcesses.includes(37), 
              'inactive': !selectedInputProcesses.includes(37)
            }"
          >{{this.$store.state.processesElements[37].name}}</router-link>
          <br />
          <!-- リスクの定量的分析 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 38 }}"
            :class="{
              'active': selectedInputProcesses.includes(38), 
              'inactive': !selectedInputProcesses.includes(38)
            }"
          >{{this.$store.state.processesElements[38].name}}</router-link>
          <br />
          <!-- リスク対応の計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 39 }}"
            :class="{
              'active': selectedInputProcesses.includes(39), 
              'inactive': !selectedInputProcesses.includes(39)
            }"
          >{{this.$store.state.processesElements[39].name}}</router-link>
        </td>
        <td>
          <!-- リスク対応策の実行 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 40 }}"
            :class="{
              'active': selectedInputProcesses.includes(40), 
              'inactive': !selectedInputProcesses.includes(40)
            }"
          >{{this.$store.state.processesElements[40].name}}</router-link>
        </td>
        <td>
          <!-- リスクの監視 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 41 }}"
            :class="{
              'active': selectedInputProcesses.includes(41), 
              'inactive': !selectedInputProcesses.includes(41)
            }"
          >{{this.$store.state.processesElements[41].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">調達マネジメント</td>
        <td></td>
        <td>
          <!-- 調達マネジメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 42 }}"
            :class="{
              'active': selectedInputProcesses.includes(42), 
              'inactive': !selectedInputProcesses.includes(42)
            }"
          >{{this.$store.state.processesElements[42].name}}</router-link>
        </td>
        <td>
          <!-- 調達の実行 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 43 }}"
            :class="{
              'active': selectedInputProcesses.includes(43), 
              'inactive': !selectedInputProcesses.includes(43)
            }"
          >{{this.$store.state.processesElements[43].name}}</router-link>
        </td>
        <td>
          <!-- 調達のコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 44 }}"
            :class="{
              'active': selectedInputProcesses.includes(44), 
              'inactive': !selectedInputProcesses.includes(44)
            }"
          >{{this.$store.state.processesElements[44].name}}</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="knowledge-are-title">ステークホルダーマネジメント</td>
        <td>
          <!-- ステークホルダーの特定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 45 }}"
            :class="{
              'active': selectedInputProcesses.includes(45), 
              'inactive': !selectedInputProcesses.includes(45)
            }"
          >{{this.$store.state.processesElements[45].name}}</router-link>
        </td>
        <td>
          <!-- ステークホルダーエンゲージメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 46 }}"
            :class="{
              'active': selectedInputProcesses.includes(46), 
              'inactive': !selectedInputProcesses.includes(46)
            }"
          >{{this.$store.state.processesElements[46].name}}</router-link>
        </td>
        <td>
          <!-- ステークホルダーエンゲージメントのマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 47 }}"
            :class="{
              'active': selectedInputProcesses.includes(47), 
              'inactive': !selectedInputProcesses.includes(47)
            }"
          >{{this.$store.state.processesElements[47].name}}</router-link>
        </td>
        <td>
          <!-- ステークホルダーエンゲージメントの監視 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 48 }}"
            :class="{
              'active': selectedInputProcesses.includes(48), 
              'inactive': !selectedInputProcesses.includes(48)
            }"
          >{{this.$store.state.processesElements[48].name}}</router-link>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HomeTable",
  props: {
    routedElement: {
      type: Object,
      required: false,
      default() {
        return {
          inNum: 0,
          outNum: 0,
          ttNum: 0
        };
      }
    }
  },

  computed: {
    selectedInputProcesses() {
      const processesElements = this.$store.state.processesElements;
      let routedInputNumber = this.routedElement.inNum;
      let filteredProcessesElements = processesElements.filter(
        processesElement => {
          return processesElement.inputs.includes(routedInputNumber);
        }
      );
      let filteredProcessesArray = filteredProcessesElements.map(
        filteredProcessesElement => {
          return filteredProcessesElement.psNum;
        }
      );

      return filteredProcessesArray;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.knowledge-are-title {
  background-color: #66cc99;
  font-size: 110%;
  font-weight: bold;
}
.active {
  color: red;
  font-size: large;
}
.inactive {
  color: darkgrey;
}
thead > tr > td {
  text-align: center;
  font-weight: bold;
  padding: 5px;
  font-size: 110%;
}
a {
  text-decoration: none;
}
</style>
