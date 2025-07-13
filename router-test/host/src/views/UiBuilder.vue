<template>
  <div class="flex h-screen">
    <!-- 좌측 컴포넌트 패널 -->
    <aside class="w-1/5 p-4 border-r border-gray-200 bg-gray-50 overflow-y-auto">
      <h2 class="text-lg font-bold mb-4">컴포넌트 목록</h2>
      <draggable :list="components" group="builder" :clone="cloneComponent" item-key="type">
        <div
          v-for="comp in components"
          :key="comp.type"
          class="p-3 border rounded mb-3 bg-white shadow-sm cursor-move hover:bg-gray-100"
        >
          {{ comp.label }}
        </div>
      </draggable>
    </aside>

    <!-- 중앙 그리드 빌더 -->
    <main class="flex-1 relative bg-white" @drop.prevent="handleDrop" @dragover.prevent>
      <grid-layout
        class="p-4"
        :layout="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :margin="[10, 10]"
        @layout-updated="updateLayout"
      >
        <grid-item
          v-for="item in layout"
          :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <div
            class="w-full h-full border rounded bg-white shadow p-3 relative hover:ring-2 hover:ring-blue-400"
            @click.stop="selectedItem.value = item"
          >
            <component :is="item.component" v-bind="item.props" />
            <div class="absolute top-1 right-1 flex space-x-1">
              <button
                class="text-blue-600 text-sm hover:underline"
                @click.stop="duplicateItem(item)"
              >
                ⧉
              </button>
              <button class="text-red-600 text-sm hover:underline" @click.stop="removeItem(item.i)">
                ✕
              </button>
            </div>
          </div>
        </grid-item>
      </grid-layout>
      <button
        class="absolute bottom-4 left-4 px-4 py-2 bg-green-600 text-white text-sm rounded shadow hover:bg-green-700"
        @click="groupSelectedItems"
      >
        그룹화
      </button>
    </main>

    <!-- 우측 설정 패널 -->
    <aside
      class="w-1/4 p-4 border-l border-gray-200 bg-gray-50 overflow-y-auto"
      v-if="selectedItem"
    >
      <h2 class="text-lg font-bold mb-4">설정</h2>
      <div v-if="selectedItem.value.component === 'TextBlock'">
        <label class="block text-sm font-semibold mb-1">텍스트</label>
        <input
          type="text"
          v-model="selectedItem.value.props.text"
          class="w-full border border-gray-300 px-3 py-2 rounded mb-4"
        />
        <label class="block text-sm font-semibold mb-1">색상</label>
        <input type="color" v-model="selectedItem.value.props.color" class="w-full mb-2" />
      </div>
      <div v-else-if="selectedItem.value.component === 'ImageBlock'">
        <label class="block text-sm font-semibold mb-1">이미지 URL</label>
        <input
          type="text"
          v-model="selectedItem.value.props.src"
          class="w-full border border-gray-300 px-3 py-2 rounded mb-4"
        />
      </div>
    </aside>
  </div>
</template>

<script setup>
  import { GridItem, GridLayout } from 'grid-layout-plus';
  import { ref } from 'vue';
  import { VueDraggableNext as draggable } from 'vue-draggable-next';

  const components = ref([
    { type: 'TextBlock', label: '텍스트 블럭', component: 'TextBlock' },
    { type: 'ImageBlock', label: '이미지', component: 'ImageBlock' },
  ]);

  const layout = ref([]);
  const selectedItem = ref(null);
  const selectedIds = ref([]);

  function cloneComponent(comp) {
    return JSON.parse(JSON.stringify(comp));
  }

  function handleDrop(e) {
    const type = e.dataTransfer.getData('text/plain');
    const comp = components.value.find(c => c.type === type);
    if (!comp) return;
    const newItem = {
      x: 0,
      y: Infinity,
      w: 4,
      h: 2,
      i: Date.now().toString(),
      component: comp.component,
      props:
        comp.component === 'TextBlock'
          ? { text: '기본 텍스트', color: '#000000' }
          : { src: 'https://via.placeholder.com/150' },
    };
    layout.value.push(newItem);
  }

  function updateLayout(updated) {
    layout.value = updated;
  }

  function removeItem(id) {
    layout.value = layout.value.filter(item => item.i !== id);
    if (selectedItem.value?.i === id) selectedItem.value = null;
  }

  function duplicateItem(item) {
    const clone = JSON.parse(JSON.stringify(item));
    clone.i = Date.now().toString();
    clone.x = (item.x + 1) % 12;
    clone.y = item.y;
    layout.value.push(clone);
  }

  function groupSelectedItems() {
    const selected = layout.value.filter(item => selectedIds.value.includes(item.i));
    if (selected.length < 2) return alert('2개 이상의 항목을 선택하세요');
    const groupComponent = {
      component: 'GroupBlock',
      i: Date.now().toString(),
      x: selected[0].x,
      y: selected[0].y,
      w: 6,
      h: 4,
      props: { items: selected },
    };
    layout.value = layout.value.filter(item => !selectedIds.value.includes(item.i));
    layout.value.push(groupComponent);
    selectedIds.value = [];
  }
</script>

<style>
  @import 'tailwindcss';
</style>
