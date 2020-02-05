<template>
  <div id="hello">
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(0),
              'TandtActive': selectedTandtProcesses.includes(0),
              'OutputActive': selectedOutputProcesses.includes(0)
            }"
          >{{this.$store.state.processesElements[0].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクトマネジメント計画書の作成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 1 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(1), 
              'TandtActive': selectedTandtProcesses.includes(1),
              'OutputActive': selectedOutputProcesses.includes(1)
            }"
          >{{this.$store.state.processesElements[1].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクト作業の指揮マネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 2 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(2), 
              'TandtActive': selectedTandtProcesses.includes(2),
              'OutputActive': selectedOutputProcesses.includes(2)
            }"
          >{{this.$store.state.processesElements[2].name}}</router-link>
          <br />
          <!-- プロジェクト知識のマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 3 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(3),
              'TandtActive': selectedTandtProcesses.includes(3),
              'OutputActive': selectedOutputProcesses.includes(3)
            }"
          >{{this.$store.state.processesElements[3].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクト作業の監視・コントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 4 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(4),
              'TandtActive': selectedTandtProcesses.includes(4),
              'OutputActive': selectedOutputProcesses.includes(4)
            }"
          >{{this.$store.state.processesElements[4].name}}</router-link>
          <br />
          <!-- 統合変更管理 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 5 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(5),
              'TandtActive': selectedTandtProcesses.includes(5),
              'OutputActive': selectedOutputProcesses.includes(5)
            }"
          >{{this.$store.state.processesElements[5].name}}</router-link>
        </td>
        <td>
          <!-- プロジェクトやフェーズの終結 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 6 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(6),
              'TandtActive': selectedTandtProcesses.includes(6),
              'OutputActive': selectedOutputProcesses.includes(6)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(7),
              'TandtActive': selectedTandtProcesses.includes(7),
              'OutputActive': selectedOutputProcesses.includes(7)
            }"
          >{{this.$store.state.processesElements[7].name}}</router-link>
          <br />
          <!-- 要求事項の収集 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 8 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(8),
              'TandtActive': selectedTandtProcesses.includes(8),
              'OutputActive': selectedOutputProcesses.includes(8)
            }"
          >{{this.$store.state.processesElements[8].name}}</router-link>
          <br />
          <!-- スコープの定義 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 9 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(9),
              'TandtActive': selectedTandtProcesses.includes(9),
              'OutputActive': selectedOutputProcesses.includes(9)
            }"
          >{{this.$store.state.processesElements[9].name}}</router-link>
          <br />
          <!-- WBSの作成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 10 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(10),
              'TandtActive': selectedTandtProcesses.includes(10),
              'OutputActive': selectedOutputProcesses.includes(10)
            }"
          >{{this.$store.state.processesElements[10].name}}</router-link>
        </td>
        <td></td>
        <td>
          <!-- スコープの妥当性確認 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 11 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(11),
              'TandtActive': selectedTandtProcesses.includes(11),
              'OutputActive': selectedOutputProcesses.includes(11)
            }"
          >{{this.$store.state.processesElements[11].name}}</router-link>
          <br />
          <!-- スコープのコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 12 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(12),
              'TandtActive': selectedTandtProcesses.includes(12),
              'OutputActive': selectedOutputProcesses.includes(12)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(13),
              'TandtActive': selectedTandtProcesses.includes(13),
              'OutputActive': selectedOutputProcesses.includes(13)
            }"
          >{{this.$store.state.processesElements[13].name}}</router-link>
          <br />
          <!-- アクティビティの定義 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 14 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(14),
              'TandtActive': selectedTandtProcesses.includes(14),
              'OutputActive': selectedOutputProcesses.includes(14)
            }"
          >{{this.$store.state.processesElements[14].name}}</router-link>
          <br />
          <!-- アクティビティの順序設定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 15 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(15),
              'TandtActive': selectedTandtProcesses.includes(15),
              'OutputActive': selectedOutputProcesses.includes(15)
            }"
          >{{this.$store.state.processesElements[15].name}}</router-link>
          <br />
          <!-- アクティビティの所要期間見積り -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 16 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(16),
              'TandtActive': selectedTandtProcesses.includes(16),
              'OutputActive': selectedOutputProcesses.includes(16)
            }"
          >{{this.$store.state.processesElements[16].name}}</router-link>
          <br />
          <!-- スケジュールの作成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 17 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(17), 
              'TandtActive': selectedTandtProcesses.includes(17),
              'OutputActive': selectedOutputProcesses.includes(17)
            }"
          >{{this.$store.state.processesElements[17].name}}</router-link>
        </td>
        <td></td>
        <td>
          <!-- スケジュールのコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 18 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(18), 
              'TandtActive': selectedTandtProcesses.includes(18),
              'OutputActive': selectedOutputProcesses.includes(18)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(19), 
              'TandtActive': selectedTandtProcesses.includes(19),
              'OutputActive': selectedOutputProcesses.includes(19)
            }"
          >{{this.$store.state.processesElements[19].name}}</router-link>
          <br />
          <!-- コストの見積り -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 20 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(20), 
              'TandtActive': selectedTandtProcesses.includes(20),
              'OutputActive': selectedOutputProcesses.includes(20)
            }"
          >{{this.$store.state.processesElements[20].name}}</router-link>
          <br />
          <!-- 予算の設定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 21 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(21), 
              'OutputActive': selectedOutputProcesses.includes(21)
            }"
          >{{this.$store.state.processesElements[21].name}}</router-link>
        </td>
        <td></td>
        <td>
          <!-- コストのコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 22 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(22), 
              'TandtActive': selectedTandtProcesses.includes(22),
              'OutputActive': selectedOutputProcesses.includes(22)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(23), 
              'TandtActive': selectedTandtProcesses.includes(23),
              'OutputActive': selectedOutputProcesses.includes(23)
            }"
          >{{this.$store.state.processesElements[23].name}}</router-link>
        </td>
        <td>
          <!-- 品質のマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 24 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(24), 
              'TandtActive': selectedTandtProcesses.includes(24),
              'OutputActive': selectedOutputProcesses.includes(24)
            }"
          >{{this.$store.state.processesElements[24].name}}</router-link>
        </td>
        <td>
          <!-- 品質のコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 25 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(25), 
              'TandtActive': selectedTandtProcesses.includes(25),
              'OutputActive': selectedOutputProcesses.includes(25)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(26), 
              'TandtActive': selectedTandtProcesses.includes(26),
              'OutputActive': selectedOutputProcesses.includes(26)
            }"
          >{{this.$store.state.processesElements[26].name}}</router-link>
          <br />
          <!-- アクティビティ資源の見積り -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 27 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(27), 
              'TandtActive': selectedTandtProcesses.includes(27),
              'OutputActive': selectedOutputProcesses.includes(27)
            }"
          >{{this.$store.state.processesElements[27].name}}</router-link>
        </td>
        <td>
          <!-- 資源の獲得 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 28 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(28), 
              'TandtActive': selectedTandtProcesses.includes(28),
              'OutputActive': selectedOutputProcesses.includes(28)
            }"
          >{{this.$store.state.processesElements[28].name}}</router-link>
          <br />
          <!-- チームの育成 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 29 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(29), 
              'TandtActive': selectedTandtProcesses.includes(29),
              'OutputActive': selectedOutputProcesses.includes(29)
            }"
          >{{this.$store.state.processesElements[29].name}}</router-link>
          <br />
          <!-- チームのマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 30 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(30), 
              'TandtActive': selectedTandtProcesses.includes(30),
              'OutputActive': selectedOutputProcesses.includes(30)
            }"
          >{{this.$store.state.processesElements[30].name}}</router-link>
        </td>
        <td>
          <!-- 資源のコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 31 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(31), 
              'TandtActive': selectedTandtProcesses.includes(31),
              'OutputActive': selectedOutputProcesses.includes(31)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(32), 
              'TandtActive': selectedTandtProcesses.includes(32),
              'OutputActive': selectedOutputProcesses.includes(32)
            }"
          >{{this.$store.state.processesElements[32].name}}</router-link>
        </td>
        <td>
          <!-- コミュニケーションのマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 33 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(33), 
              'TandtActive': selectedTandtProcesses.includes(33),
              'OutputActive': selectedOutputProcesses.includes(33)
            }"
          >{{this.$store.state.processesElements[33].name}}</router-link>
        </td>
        <td>
          <!-- コミュニケーションの監視 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 34 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(34),
              'TandtActive': selectedTandtProcesses.includes(34), 
              'OutputActive': selectedOutputProcesses.includes(34)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(35), 
              'TandtActive': selectedTandtProcesses.includes(35),
              'OutputActive': selectedOutputProcesses.includes(35)
            }"
          >{{this.$store.state.processesElements[35].name}}</router-link>
          <br />
          <!-- リスクの特定 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 36 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(36), 
              'TandtActive': selectedTandtProcesses.includes(36),
              'OutputActive': selectedOutputProcesses.includes(36)
            }"
          >{{this.$store.state.processesElements[36].name}}</router-link>
          <br />
          <!-- リスクの定性的分析 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 37 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(37), 
              'TandtActive': selectedTandtProcesses.includes(37),
              'OutputActive': selectedOutputProcesses.includes(37)
            }"
          >{{this.$store.state.processesElements[37].name}}</router-link>
          <br />
          <!-- リスクの定量的分析 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 38 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(38), 
              'TandtActive': selectedTandtProcesses.includes(38),
              'OutputActive': selectedOutputProcesses.includes(38)
            }"
          >{{this.$store.state.processesElements[38].name}}</router-link>
          <br />
          <!-- リスク対応の計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 39 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(39), 
              'TandtActive': selectedTandtProcesses.includes(39),
              'OutputActive': selectedOutputProcesses.includes(39)
            }"
          >{{this.$store.state.processesElements[39].name}}</router-link>
        </td>
        <td>
          <!-- リスク対応策の実行 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 40 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(40), 
              'TandtActive': selectedTandtProcesses.includes(40),
              'OutputActive': selectedOutputProcesses.includes(40)
            }"
          >{{this.$store.state.processesElements[40].name}}</router-link>
        </td>
        <td>
          <!-- リスクの監視 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 41 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(41), 
              'TandtActive': selectedTandtProcesses.includes(41),
              'OutputActive': selectedOutputProcesses.includes(41)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(42), 
              'TandtActive': selectedTandtProcesses.includes(42),
              'OutputActive': selectedOutputProcesses.includes(42)
            }"
          >{{this.$store.state.processesElements[42].name}}</router-link>
        </td>
        <td>
          <!-- 調達の実行 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 43 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(43),
              'TandtActive': selectedTandtProcesses.includes(43),
              'OutputActive': selectedOutputProcesses.includes(43) 
            }"
          >{{this.$store.state.processesElements[43].name}}</router-link>
        </td>
        <td>
          <!-- 調達のコントロール -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 44 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(44), 
              'TandtActive': selectedTandtProcesses.includes(44),
              'OutputActive': selectedOutputProcesses.includes(44)
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
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(45), 
              'TandtActive': selectedTandtProcesses.includes(45),
              'OutputActive': selectedOutputProcesses.includes(45)
            }"
          >{{this.$store.state.processesElements[45].name}}</router-link>
        </td>
        <td>
          <!-- ステークホルダーエンゲージメントの計画 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 46 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(46), 
              'TandtActive': selectedTandtProcesses.includes(46),
              'OutputActive': selectedOutputProcesses.includes(46)
            }"
          >{{this.$store.state.processesElements[46].name}}</router-link>
        </td>
        <td>
          <!-- ステークホルダーエンゲージメントのマネジメント -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 47 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(47), 
              'TandtActive': selectedTandtProcesses.includes(47),
              'OutputActive': selectedOutputProcesses.includes(47)
            }"
          >{{this.$store.state.processesElements[47].name}}</router-link>
        </td>
        <td>
          <!-- ステークホルダーエンゲージメントの監視 -->
          <router-link
            :to="{ name: 'itto', params: { psNum: 48 }}"
            class="inactive"
            :class="{
              'active': selectedInputProcesses.includes(48), 
              'TandtActive': selectedTandtProcesses.includes(48),
              'OutputActive': selectedOutputProcesses.includes(48)
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
          inNum: -1,
          outNum: -1,
          ttNum: -1
        };
      }
    }
  },

  computed: {
    selectedInputProcesses() {
      const processesElements = this.$store.state.processesElements;
      let routedIONumber = 0;
      if ("inNum" in this.routedElement) {
        routedIONumber = this.routedElement.inNum;
      } else if ("outNum" in this.routedElement) {
        routedIONumber = this.routedElement.outNum;
      }
      let filteredProcessesElements = processesElements.filter(
        processesElement => {
          return processesElement.inputs.includes(routedIONumber);
        }
      );
      let filteredProcessesArray = filteredProcessesElements.map(
        filteredProcessesElement => {
          return filteredProcessesElement.psNum;
        }
      );
      return filteredProcessesArray;
    },
    selectedTandtProcesses() {
      const processesElements = this.$store.state.processesElements;
      let routedTTNumber = this.routedElement.ttNum;

      let filteredProcessesElements = processesElements.filter(
        processesElement => {
          return processesElement.tandt.includes(routedTTNumber);
        }
      );

      let filteredProcessesArray = [];
      filteredProcessesArray = filteredProcessesElements.map(
        filteredProcessesElement => {
          return filteredProcessesElement.psNum;
        }
      );
      return filteredProcessesArray;
    },
    selectedOutputProcesses() {
      const processesElements = this.$store.state.processesElements;
      let routedIONumber = 0;
      if ("inNum" in this.routedElement) {
        routedIONumber = this.routedElement.inNum;
      } else if ("outNum" in this.routedElement) {
        routedIONumber = this.routedElement.outNum;
      }
      let filteredProcessesElements = processesElements.filter(
        processesElement => {
          return processesElement.outputs.includes(routedIONumber);
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
.inactive {
  color: darkgrey;
}
.active {
  color: blue;
}
.OutputActive {
  color: red;
}
.TandtActive {
  color: green;
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
