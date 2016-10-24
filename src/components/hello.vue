<template lang="html">
  <div class="" id="hello">
    <el-card class="clearfix">
      <ul>
        <li v-for='topic of topics' class="articleT text item">
          {{topic.title | trim}}
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
      topics:[]
    }
  },
  computed: {},
  mounted () {
    this.$http.get('https://cnodejs.org/api/v1/topics?limit=10',{},{
      headers:{},
      emulateJSON:true
    }).then((res)=>{
        let data = res.data.data
        for (var item of data) {
          this.topics.push(item)
        }
    },(res)=>{
      console.log(res)
    })
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
  .articleT{
    text-align: center;
  }
</style>
