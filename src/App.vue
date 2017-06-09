<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>child tell me :{{childWords}}</p>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.
      isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>

    <component-a msgfromdad="the vuedemo!" v-on:child-tell-me-something="listenToMyBoy"></component-a>
  </div>
</template>

<script>
  import store from './store'
  import ComponentA from './components/componentA'

  export default {
    data: function () {
      return {
        title: 'this is a todo list',
        items: [],
        newItem: '',
        childWords: ''
      }
    },

    mounted() {
      this.items = store.fetch()
    },

    components: {ComponentA},
    watch: {
      items: {
        handler(items){
          store.save(items)
        },
        deep: true
      }
    },
    methods: {
      toggleFinish(item){
        item.isFinished = !item.isFinished
      },
      addNew(){
        this.items.push({
          label: this.newItem,
          isFinished: false
        })
        this.newItem = ''
        store.save(this.items)
      },
      listenToMyBoy: function (msg) {
        console.log(msg);
        this.childWords = msg;
      }
    }
  }
</script>

<style>
  .finished {
    color: red;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
