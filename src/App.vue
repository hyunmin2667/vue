<script>
  import BusInfoView1 from './components/BusInfo1.vue'
  import BusInfoView2 from './components/BusInfo2.vue'
  import BusInfoView3 from './components/BusInfo3.vue'
  
  export default {
    name: 'App',
    data() {
      return {
        picked: '0',
      }
    },

    method: {
    },

    components: {
      BusInfoView1,
      BusInfoView2,
      BusInfoView3
    }
    
  }
</script>

<template>
  <header>
    <h1>DSU BUS INFO</h1>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <section>
      <h2>목적지를 선택하세요</h2>
      <div class="segmented-controls">
        <input id="three-1" name="three" type="radio" v-model="picked" value="0" checked>
        <label for="three-1">민석도서관</label>
        <input id="three-2" name="three" type="radio" v-model="picked" value="1">
        <label for="three-2">스튜던트플라자</label>
        <input id="three-3" name="three" type="radio" v-model="picked" value="2">
        <label for="three-3">글로벌빌리지</label>
      </div>
    </section>




  </header>
  <main>
    <BusInfoView1 v-if="picked=='0'"/>
    <BusInfoView2 v-if="picked=='1'"/>
    <BusInfoView3 v-if="picked=='2'"/>

  </main>
  <footer>
    <br><br><br>
    2023 컴퓨터공학과 캡스톤디자인1<br>
    Version 0.1 (2023-06-14)
  </footer>

</template>


<script>
  
</script>


<style scoped>
  header {
    line-height: 1.5;
  }
  

  body {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding:0
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
    
  }
</style>
