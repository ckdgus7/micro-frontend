<template>
  <editor-content :editor="editor" />
</template>

<script setup>
  import StarterKit from '@tiptap/starter-kit';
  import { EditorContent, useEditor } from '@tiptap/vue-3';

  const editor = useEditor({
    content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
    extensions: [StarterKit],
  });
</script>
