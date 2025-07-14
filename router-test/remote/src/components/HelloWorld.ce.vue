<script setup>
  import { ref } from 'vue';
  const { count } = defineProps(['count']);
  const localCount = ref(0);
  const agGrid = document.querySelector('wcc-ag-grid');
  console.log('agGrid', agGrid.rowData);
</script>

<template>
  <hr />
  <hr />
  <div class="greetings">
    <div>Host Props Count: {{ count }}</div>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a>
      +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
      .
    </h3>
    <hr />
    <h1>Local ref count test</h1>
    <button
      style="
        border: 0 solid #e2e8f0;
        margin-top: 10px;
        background-color: rgb(246, 179, 82);
        border-radius: 0.25rem;
        font-weight: 700;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: rgb(24, 24, 24);
      "
      @click="localCount++"
    >
      HOST counter: {{ localCount }}
    </button>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings {
    margin: 20px;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
