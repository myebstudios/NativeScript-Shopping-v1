import Vue from 'nativescript-vue';
import Index from './views/Index';
import CollectionView from '@nativescript-community/ui-collectionview/vue';
Vue.use(CollectionView);


new Vue({
  render: (h) => h('frame', [h(Index)]),
}).$start();