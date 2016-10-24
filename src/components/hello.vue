<template lang="html">
  <div class="" id="hello">
    <h2> A component from hello </h2>
    <p>
      我是第一个页面
    </p>
    <a href="https://github.com/xrr2016">written by {{author}}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author:'xrr2016'
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
