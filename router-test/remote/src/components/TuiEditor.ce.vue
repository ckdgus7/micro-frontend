<script setup>
  import { Editor } from 'tui-editor-vue3';
  import 'tui-editor-vue3/dist/tui-editor-vue3.css';
  import { ref } from 'vue';

  const content = ref('');
</script>

<template>
  <Editor
    v-model="content"
    :options="{
      minHeight: '200px',
      language: 'en-US',
      useCommandShortcut: true,
      usageStatistics: true,
      hideModeSwitch: false,
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ],
    }"
    height="500px"
    initialEditType="wysiwyg"
    previewStyle="vertical"
  />
</template>
