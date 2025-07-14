<script setup>
  import { storeToRefs } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  const store = useCounterStore();
  const { count } = storeToRefs(store);
  import('remote/counter');
  import('remote/editor');
  import('remote/grid');
</script>

<template>
  <!-- <button
    style="
      border: 0 solid #e2e8f0;
      margin-top: 10px;
      background-color: rgb(246, 179, 82);
      border-radius: 0.25rem;
      font-weight: 700;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: rgb(24, 24, 24);
    "
    @click="store.increment"
  >
    HOST counter: {{ count }}
  </button>
   -->
  <hr />
  <hr />
  <h1>Remote Ag Grid</h1>
  <wcc-ag-grid></wcc-ag-grid>
  <hr />
  <hr />
  <h1>Remote hello-world</h1>
  <hello-world :count="count"></hello-world>
  <hr />
  <hr />
  <h1>Remote Tui Editor</h1>
  <ck-editor></ck-editor>
</template>

<style scoped />
