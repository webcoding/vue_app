<template>
  <div class="page">
    <plus-container class="page-content">
      <div class="content-block">
        <p>没必要搞得很复杂，镂空悬浮无颜色变化，或很少变化，简单可行，且扩展很方便就可以了，不要做循环实现</p>
      </div>
      <div class="content-block-title">基本样式</div>
      <div class="content-block">
        <plus-btn>Default</plus-btn>
        <plus-btn active>Active</plus-btn>
        <plus-btn disabled>Disabled</plus-btn>
        <br>
        <plus-btn class="btn-primary">Primary</plus-btn>
        <plus-btn class="btn-secondary">Secondary</plus-btn>
        <plus-btn class="btn-success">Success</plus-btn>
        <plus-btn class="btn-warning">Warning</plus-btn>
        <plus-btn class="btn-alert">Alert</plus-btn>
        <plus-btn class="btn-dark">Dark</plus-btn>
        <br>
        <plus-btn class="btn-block">Default Block</plus-btn>
        <plus-btn class="btn-primary btn-block">Primary Block</plus-btn>
        <br>
        <plus-btn class="btn-xs">Default xs</plus-btn>
        <plus-btn class="btn-sm">Default sm</plus-btn>
        <plus-btn>Default</plus-btn>
        <plus-btn class="btn-lg">Default lg</plus-btn>
        <plus-btn class="btn-xl">Default xl</plus-btn>
        <br>
        <plus-btn class="btn-hollow">镂空</plus-btn>
      </div>
      <div class="content-block-title">扩展按钮组</div>
      <div class="content-block">
        <div class="btn-group">
          <plus-btn>Left</plus-btn>
          <plus-btn>Center</plus-btn>
          <plus-btn>Right</plus-btn>
        </div>
        <div class="btn-group">
          <plus-btn class="btn-primary">Left</plus-btn>
          <plus-btn class="btn-success">Center</plus-btn>
          <plus-btn class="btn-warning">Right</plus-btn>
        </div>
        <div class="btn-group">
          <plus-btn class="btn-success btn-hollow">Left</plus-btn>
          <plus-btn class="btn-success btn-hollow">Center</plus-btn>
          <plus-btn class="btn-success btn-hollow">Right</plus-btn>
        </div>
        <div class="btn-group">
          <plus-btn class="btn-xs">Left</plus-btn>
          <plus-btn class="btn-xs">Center</plus-btn>
          <plus-btn class="btn-xs">Right</plus-btn>
        </div>
        <div class="btn-group btn-group-justify">
          <plus-btn class="btn-primary">Left</plus-btn>
          <plus-btn class="btn-primary">Center</plus-btn>
          <plus-btn class="btn-primary">Right</plus-btn>
        </div>
        <div class="btn-group btn-group-stacked">
          <plus-btn class="btn-primary">Left</plus-btn>
          <plus-btn class="btn-primary">Center</plus-btn>
          <plus-btn class="btn-primary">Right</plus-btn>
        </div>
      </div>
    </plus-container>
  </div>
</template>
