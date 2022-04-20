<template>
    <section class="text-section">
      <article class="text-box">
        <ul class="keyword-list">
          <li class="keyword" v-for="data in keywordData" :key="data.keyword"><h5>{{data.keyword}}</h5></li>
        </ul>
        <div class="comment-box">
          <p class="comment" v-for="data in keywordData" :key="data.keyword">{{data.comment}}</p>
        </div>
      </article>
    </section>
</template>
<script>
export default {
  name: 'TextSection',
  props: {},
  data: function(){
    return {
      keywordData: [
        {keyword: 'SIMPLE', comment: 'sampleText111', isVisible: false},
        {keyword: 'SWEETY', comment: 'sampleText222', isVisible: false},
        {keyword: 'EMOTION', comment: 'sampleText333', isVisible: false}
      ]
    }
  }
}
</script>
<style scoped>
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
    flex-flow: row nowrap;
  }
  .keyword-list {
    display: flex;
    flex-flow: column nowrap;
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