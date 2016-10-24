<template>
  <div id="app">
    <img src="./assets/logo.png" alt="VUE"/>
    <h1>{{msg}}</h1>
    <ul>
      <li><router-link to='/hello'>CNode社区</router-link></li>
      <li><router-link to='/world'>豆瓣电影</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import hello from './components/hello.vue'
import world from './components/world.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: ' Vue.js App',
    }
  },
  components:{
    hello,
    world
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
