<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <span v-once>message: {{msg}}</span>
    <input type = "text" v-model="msg">
    <span v-html="msg"></span> <span class="red">{{reverseMessage}}</span>
    <button :disabled="isButtonDisabled" @click="isButtonDisabled = !isButtonDisabled">disabled Button</button>

    <div :class="{red:isButtonDisabled}">REDDDDD</div>

    <TodoItem v-for="item in groceryList"
      :key="item.id">
    </TodoItem>

    <!-- <TodoItem :todo="groceryList[0]"></TodoItem> -->
    <!-- <TodoItem :todo="{id:999, text:'999999'}"></TodoItem> -->

    <HelloWorld v-if="isButtonDisabled" msg="Welcome to Your Vue.js App"/>
    <div v-else>Noooooo</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from '@/components/todoitem.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld, TodoItem
  },

  computed: {
    reverseMessage: function(){
      return this.msg.split('').reverse().join('')
    }
  },

  watch: {
    msg: function(){
      console.log("..........", this.msg)
    }
  },

  method: {
    aaa(e) {
      console.log("AAAAAAAAAAAAAAA", e)
    },

    bbb() {
      console.log("BBBBBBBBBBBBBBB")
    }
  },

  data(){
    return {
      msg: '<strong>AAAA</strong>',
      isButtonDisabled: false,
      groceryList: [ 
        { id:0, text: 'someting special'},
        { id:1, text: 'Cheese'},
        { id:2, text: 'Whatever else humans are supposed to eat'}
      ] 
    }
  }
}
</script>

<style>
.red { color :  red}
</style>
