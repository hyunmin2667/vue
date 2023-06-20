import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'


document.body.addEventListener('touchstart', function(e) {
  if ( (e.touches.length > 1) || e.targetTouches.length > 1) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}, {passive: false});

createApp(App).mount('#app')