<template>
  <h2 class="heading" v-on:click="displayMessage">Hello from {{text}}</h2>
</template>

<style>
body {
  background-color: black;
}
</style>
<style lang="scss" type="text/scss" scoped>
  .heading {
    color: white;
  }
</style>

<script lang="ts" type="text/typescript">
import * as Vue from 'vue';
import Component from 'vue-class-component';
import App from './native/App';

@Component
export default class Greeter extends Vue {
  public text : string = '';

  public async displayMessage() {
    return await App.displayMessage('Hello!');
  }
}
</script>
