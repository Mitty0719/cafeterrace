<template>
    <section class="text-section">
      <article class="text-box">
        <ul class="keyword-list">
          <li class="keyword" @mouseover="setShowComment(1)" @mouseleave="setShowComment(0)"><h5>{{keywordData[0].keyword}}</h5></li>
          <li class="keyword" @mouseover="setShowComment(2)" @mouseleave="setShowComment(0)"><h5>{{keywordData[1].keyword}}</h5></li>
          <li class="keyword" @mouseover="setShowComment(3)" @mouseleave="setShowComment(0)"><h5>{{keywordData[2].keyword}}</h5></li>
        </ul>
        <div class="comment-box">
          <p class="comment" v-if="showComment === 1">{{keywordData[0].comment}}</p>
          <p class="comment" v-if="showComment === 2">{{keywordData[1].comment}}</p>
          <p class="comment" v-if="showComment === 3">{{keywordData[2].comment}}</p>
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
        {keyword: 'SIMPLE', comment: 'sampleText111'},
        {keyword: 'SWEETY', comment: 'sampleText222'},
        {keyword: 'EMOTION', comment: 'sampleText333'}
      ],
      showComment: 0,
    }
  },
  methods: {
    setShowComment(sequence){
      this.showComment = sequence;
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