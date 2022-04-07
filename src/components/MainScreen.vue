<template>
  <div class="ground">
    <section class="main-section">
      <div class="main-image"></div>
      <div class="main-text">
        CAFETERRACE
      </div>
    </section>
    <section class="text-section">

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
  .main-section{
    width: 100vw;
    height: 100vh;
  }
</style>
