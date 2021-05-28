<template>
  <div id="app">
    <h1>{{ttt}} :: <span v-if="isVisible">{{visit}}</span></h1>
    <h2>{{tttvisit}}</h2>
    <input type="text" @keyup="visit ++" v-model="ttt">
    <button @click="visitCount()">Visit Count</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      ttt:'my name is Junsoo',
      visit: 0,
      isVisible: false
    }
  },
  methods: {
    visitCount(){
      this.visit++;
      this.isVisible = true;
    }
  },
  computed:{
    tttvisit(){
      return 'Hi- ' + this.ttt + ' You are' + this.visit + ' Times visitor.'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
