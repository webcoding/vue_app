'use strict'

// const VueH5Plus = {
//   loading: require('./tags/loading.vue'),
// }
// export default VueH5Plus;


// import f7Textarea from './form/textarea';
export default {
  install( Vue ) {
    Vue.component('plus-list-block', require('./tags/list-block.vue'));
    Vue.component('plus-panel', require('./tags/panel.vue'));
    Vue.component('plus-page', require('./tags/page.vue'));
    Vue.component('plus-container', require('./tags/container.vue'));
    Vue.component('plus-navbar', require('./tags/navbar.vue'));
    Vue.component('plus-btn', require('./tags/btn.vue'));
    // Vue.component('plus-modal', require('./tags/modal.vue'));
    //
    // Vue.component('plus-content-block', require('./tags/content-block/content-block.vue'));
    // Vue.component('plus-content-block-title', require('./tags/content-block/content-block-title.vue'));
    //
    // Vue.component('plus-views', require('./tags/views.vue'));
    // Vue.component('plus-view', require('./tags/view.vue'));
    // Vue.component('plus-pages', require('./tags/pages.vue'));
    // Vue.component('plus-page', require('./tags/page.vue'));
    // Vue.component('plus-page-content', require('./tags/page-content.vue'));
    //
    // Vue.component('plus-navbar', require('./tags/navbar.vue'));
    //
    // Vue.component('plus-toolbar', require('./tags/toolbar/toolbar.vue'));
    // Vue.component('plus-toolbar-item', require('./tags/toolbar/toolbar-item.vue'));
    //
    // Vue.component('plus-tabbar', require('./tags/tabbar/tabbar.vue'));
    // Vue.component('plus-tabbar-item', require('./tags/tabbar/tabbar-item.vue'));
    // Vue.component('plus-tabbar-label', require('./tags/tabbar/tabbar-label.vue'));
    //
    // Vue.component('plus-badge', require('./tags/badge.vue'));
    // Vue.component('plus-icon', require('./tags/icon.vue'));
    //
    // Vue.component('plus-searchbar', require('./tags/searchbar.vue'));
    //
    // Vue.component('plus-side', require('./tags/side.vue'));
    //
    // Vue.component('plus-row', require('./tags/grid/row.vue'));
    // Vue.component('plus-col', require('./tags/grid/col.vue'));
    //
    // Vue.component('plus-popup', require('./tags/popup.vue'));
    //
    // Vue.component('plus-list-block', require('./tags/list/list-block.vue'));
    // Vue.component('plus-list-group', require('./tags/list/list-group.vue'));
    // Vue.component('plus-list-group-title', require('./tags/list/list-group-title.vue'));
    // Vue.component('plus-list', require('./tags/list/list.vue'));
    // Vue.component('plus-list-label', require('./tags/list/list-label.vue'));
    // Vue.component('plus-list-item', require('./tags/list/list-item.vue'));
    // Vue.component('plus-list-divider', require('./tags/list/list-divider.vue'));
    //
    // Vue.component('plus-checkbox', require('./tags/form/form-switch.vue'));
    // Vue.component('plus-range', require('./tags/form/form-slider.vue'));
    // Vue.component('plus-checkbox-group', require('./tags/form/checkbox-group.vue'));
    // Vue.component('plus-radio-group', require('./tags/form/radio-group.vue'));
    // Vue.directive('Plus-textarea', f7Textarea );
    //
    // Vue.component('plus-button', require('./tags/buttons/button.vue'));
    // Vue.component('plus-buttons-row', require('./tags/buttons/buttons-row.vue'));
    // Vue.component('plus-list-button', require('./tags/buttons/list-button.vue'));
    //
    // Vue.component('plus-actions', require('./tags/action-sheet/actions.vue'));
    // Vue.component('plus-action-group', require('./tags/action-sheet/action-group.vue'));
    // Vue.component('plus-action-button', require('./tags/action-sheet/action-button.vue'));
    //
    // Vue.component('plus-picker', require('./tags/picker/picker.vue'));
    // Vue.component('plus-picker-inner', require('./tags/picker/picker-inner.vue'));
  }
};
