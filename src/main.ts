import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const showMessage = () => {
  let message = "I like logs";
  for (let i = 0; i < 5; i++) {
    console.log(message);
  }
};

showMessage();
const test = { name: "ali", age: 12 };
const foo = { class: "CS 101" };
const x = foo.class;
