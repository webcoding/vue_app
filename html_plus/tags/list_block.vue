<style lang="sass">

@import "../_styles/components/_list-block";

</style>

// 结构应该内容部分可传入
// 结构用于场景，太过复杂，应该只考虑最简化的模型，通过组合来实现

<template>

<div class="_list-block">
  <ul class="item-line">
    <li v-for="item in items">
      <a class="item item-link item-line" v-link="item.link">
        <div v-if="item.icon" class="item-media iconfont {{item.icon}}"></div>
        <div class="item-content">
          <div class="item-title">{{ item.title }} <small>{{ item.enTitle }}</small></div>
          <div class="item-subtitle">{{ item.subTitle }}</div>
          <div class="item-desc">{{ item.description }}</div>
        </div>
        <div class="item-after">{{ item.badge }}</div>
      </a>
    </li>
  </ul>
</div>

</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
  },
}

</script>
