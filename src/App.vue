<script setup>

</script>

<template>
  <header>
    <h1>DSU BUS INFO</h1>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <section>
      <h1>목적지를 선택하세요</h1>

      <div class="segmented-controls">
        <input id="three-1" name="three" type="radio" checked>
        <label for="three-1">민석도서관</label>
        <input id="three-2" name="three" type="radio">
        <label for="three-2">스튜던트플라자</label>
        <input id="three-3" name="three" type="radio">
        <label for="three-3">글로벌빌리지</label>
      </div>
    </section>




  </header>

  <main>

    <ul class="post-list">
      <li>
        <span class="post-title">버스 1</span>
        <span class="post-view">1분</span>
      </li>
      <li>
        <span class="post-title">버스 2</span>
        <span class="post-view">5분</span>
      </li>
      <li>
        <span class="post-title">버스 3</span>
        <span class="post-view">10분</span>
      </li>
      <!-- 추가적인 리스트 아이템을 여기에 추가할 수 있습니다 -->
    </ul>

















    
  </main>
</template>

<style scoped>
  header {
    line-height: 1.5;
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