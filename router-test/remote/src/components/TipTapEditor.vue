<template>
  <EditorContent :editor="editor" />
</template>

<script>
  import StarterKit from '@tiptap/starter-kit';
  import { Document, EditorContent, Paragraph, Text, useEditor } from '@tiptap/vue-3';
  export default {
    components: {
      EditorContent,
    },

    setup() {
      const editor = useEditor({
        content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
        extensions: [StarterKit, Document, Paragraph, Text],
      });

      return { editor };
    },
  };
</script>
