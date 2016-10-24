<template lang="html">
  <div class="" id="world">
    <h2>Another component from world </h2>
    <p>
      我是第二个页面
    </p>
    <ul>
      <li v-for='article of articles' class="articleT">
        {{article.title}}
      </li>
    </ul>
    <a href="https://github.com/xrr2016">written by {{author}}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author:'xrr2016',
      articles:[]
    }
  },
  computed: {},
  mounted () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
      headers:{},
      emulateJSON:true
    }).then(function(res){
      this.articles = res.data.subjects
    },function(res){
      console.log(res)
    })
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
.articleT{
  display: block;
  margin-top: 12px;
}
</style>
