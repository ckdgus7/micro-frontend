import { defineCustomElement } from 'vue';
import Example from './components/HelloWorld.ce.vue';

console.log(Example.styles) // ['/* css content */']

// register
customElements.define('hello-world', defineCustomElement(Example))
