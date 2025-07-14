import { defineCustomElement } from 'vue';
import Example from './components/HelloWorld.ce.vue';


// register
customElements.define('hello-world', defineCustomElement(Example, { shadowRoot: false }))
