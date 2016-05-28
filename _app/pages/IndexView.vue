<template>
  <div class="page" transition="app">
    <div class="hd">
        <h1 class="page_title">demo</h1>
        <p class="page_desc">组件方向：1、HTML 标签扩展 2、经典布局以供参考</p>
    </div>
    <div class="bd">
      <List :items="items"></List>
    </div>
</div>
</template>

<script>

import icon_nav_button from '../images/icon_nav_button.png';

// import Grid from './../../src/Grid.vue'
// import List from './../../src/List.vue'
import List from './../../html_plus/tags/list_block.vue'
import list_tags from './../../html_plus/list_tags'

export default {

  name: 'IndexView',

  components: {
    List
  },

  data () {
    return {
      items: list_tags
    }
  },

  route: {
    data ({ to }) {
    }
  },

  created () {
    // store.on('topstories-updated', this.update)
  },

  destroyed () {
    // store.removeListener('topstories-updated', this.update)
  },

  methods: {
    update () {
      // store.fetchItemsByPage(this.page).then(items => {
      //   this.items = items
      // })
    }
  },

  filters: {
  }
}
</script>

<style lang="stylus">

</style>
