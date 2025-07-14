<script setup>
  import { ref } from 'vue';
  import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
  import { AgGridVue } from 'ag-grid-vue3';

  ModuleRegistry.registerModules([AllCommunityModule]);
  const defaultColDef = {
    flex: 1,
  };
  const rowData = ref([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  const colDefs = ref([
    { field: 'make', editable: true },
    { field: 'model', editable: true },
    { field: 'price', editable: true },
    { field: 'electric', editable: true },
  ]);
  const helloWorld = document.querySelector('button[data-v-8ff23930]');
  console.log('helloWorld', helloWorld);
</script>

<template>
  <div>
    클릭 시 다른 컴포넌트의 Local ref count 버튼 click을 trigger
    <button @click="helloWorld.click()">Click me</button>
  </div>
  <ag-grid-vue
    style="width: 100%; height: 300px"
    :columnDefs="colDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
  ></ag-grid-vue>
</template>
