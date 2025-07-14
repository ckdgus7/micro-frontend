import { defineCustomElement } from 'vue';
import AgGrid from './components/grid/AgGrid.ce.vue';

// register
customElements.define('wcc-ag-grid', defineCustomElement(AgGrid, { shadowRoot: false }))
