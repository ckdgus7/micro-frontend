import { defineCustomElement } from 'vue';
import CKEditor from './components/CkEditor.ce.vue';
import QuillEditor from './components/QuillEditor.ce.vue';

// register
customElements.define('quill-editor', defineCustomElement(QuillEditor, { shadowRoot: false }))
customElements.define('ck-editor', defineCustomElement(CKEditor, { shadowRoot: false }))
