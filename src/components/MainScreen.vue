<template>
  <div class="ground">
    <section class="main-section">
      <div class="main-image">
        <div class="main-text">
          CAFETERRACE
        </div>
      </div>
    </section>
    <section class="text-section">
      <article class="text-box">
        <ul class="keyword-list">
          <li class="keyword"><h5>SIMPLE</h5></li>
          <li class="keyword"><h5>SWEETY</h5></li>
          <li class="keyword"><h5>EMOTION</h5></li>
        </ul>
        <div class="comment-box">
          <p class="comment">this is sample text. I don't know what do you want.  so I prepare everything. this is sample text. I don't know what do you want.  so I prepare everything.this is sample text. I don't know what do you want.  so I prepare everything.this is sample text. I don't know what do you want.  so I prepare everything.this is sample text. I don't know what do you want.  so I prepare everything.</p>
        </div>
      </article>
    </section>
    <section class="card-section">

    </section>
    <section class="barcode-section">

    </section>
  </div>
</template>

<script>
export default {
  name: 'MainScreen',
  props: {
    msg: String,
    seen: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-section {
    width: 100vw;
    height: 100vh;
  }
  .main-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: green;
  }
  .main-text {
    font-size: 2rem;
    color: #fff;
  }

  .text-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .text-box {
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: row;
  }
  .keyword-list {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .keyword-list .keyword {
    display: flex;
    align-items: center;
    flex: 1 1 0;
    font-size: 3rem;
  }
  .comment-box {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .comment-box .comment {
    line-height: 3rem;
  }
</style>
