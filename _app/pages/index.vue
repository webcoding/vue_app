<template>
  <div class="page" transition="app">
    <plus-navbar type="fixed">
      <span slot="center">H5_Plus</span>
      <span slot="right">Right</span>
    </plus-navbar>
    <div class="page-content">
        <div class="content-block-title">Welcome To H5_Plus@Vue&Framework7</div>
        <div class="content-block"><a href="#!/about" class="btn btn-primary btn-hollow btn-block">About H5_Plus</a></div>
        <div class="content-block hide">
          <p>H5_Plus：1、扩展 HTML 标签功能 2、提供经典布局供参考</p>
        </div>
        <div class="content-block-title">H5_Plus Components</div>
      </div>
      <plus-list-block :items="items"></plus-list-block>
      <!-- <List class="plus_list_block" :items="items"></List> -->
    </div>
  </div>
</template>

<script>

// import icon_nav_button from '../images/icon_nav_button.png';

// import Grid from './../../src/Grid.vue'
// import List from './../../src/List.vue'
import List from './../../html_plus/tags/list-block.vue'
import list_tags from './../../html_plus/list_tags'

export default {

  name: 'index',

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
