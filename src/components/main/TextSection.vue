<template>
    <section class="text-section sub-section">
      <article class="text-box">
        <ul class="keyword-list">
          <li class="keyword" @mouseover="setCommentSequence(1)" @mouseleave="setCommentSequence(0)"><h5>{{keywordData[0].keyword}}</h5></li>
          <li class="keyword" @mouseover="setCommentSequence(2)" @mouseleave="setCommentSequence(0)"><h5>{{keywordData[1].keyword}}</h5></li>
          <li class="keyword" @mouseover="setCommentSequence(3)" @mouseleave="setCommentSequence(0)"><h5>{{keywordData[2].keyword}}</h5></li>
        </ul>
        <transition name="line-fade" mode="out-in">
          <div class="vertical-line" v-if="commentSequence > 0"></div>
        </transition>
        <div class="comment-box">
          <transition name="comment-fade" mode="out-in">
            <p class="comment" v-if="commentSequence === 1">{{keywordData[0].comment}}</p>
            <p class="comment" v-else-if="commentSequence === 2">{{keywordData[1].comment}}</p>
            <p class="comment" v-else-if="commentSequence === 3">{{keywordData[2].comment}}</p>
          </transition>
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
      commentSequence: 0,
    }
  },
  methods: {
    setCommentSequence(sequence){
      this.commentSequence = sequence;
    }
  }
}
</script>
<style scoped>
  .line-fade-enter-active, .line-fade-leave-active {
    transition: opacity 0.5s;
  }
  .line-fade-enter-from, .line-fade-leave-to {
    opacity: 0;
  }
  .comment-fade-enter-active, .comment-fade-leave-active {
    transition: opacity 0.5s;
  }
  .comment-fade-enter-from, .comment-fade-leave-to {
    opacity: 0;
  }
  .text-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .text-box {
    width: 70%;
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
    justify-content: center;
    flex: 1 1 0;
    font-size: 3rem;
  }
  .comment-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  .comment-box .comment {
    line-height: 3rem;
  }

  .vertical-line {
    width: 5px;
    height: 100%;
    background: #000;
  }
</style>