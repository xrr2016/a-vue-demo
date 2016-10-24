<template lang="html">
  <div class="" id="world">
    <el-card class="clearfix">
      <div class="clearfix" slot='header'>
        <h1 style="line-height:36px;color:#20a0ff;">豆瓣电影排行榜</h1>
      </div>
      <ul>
        <li v-for='article of articles' class="articleT text item">
          {{article.title}}
        </li>
      </ul>
    </el-card>
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
