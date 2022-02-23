import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

const didShoshMessage = false;

function showmessage() {
  const message = 'I like logs';
  for (let i = 0; i < 5; i++) {
    console.log(message);
  }
}

showmessage();
const test = {
  name: 'ali',
  age: 12,
};
const personne = test['name'];
const foo = { class: 'CS 101' };
const x = foo['class'];
