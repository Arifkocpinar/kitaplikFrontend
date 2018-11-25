import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  items: [],
  actions: {
    onRemove: function (item) {
      this.sendAction('onRemove', item);
    },
    onAdd: function (item) {
      var insertAt = this.items.indexOf(item) + 1;
      this.sendAction('onAdd', insertAt);
    }
  }
});
