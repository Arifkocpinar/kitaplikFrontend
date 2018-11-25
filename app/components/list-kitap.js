import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateBook(param){
      alert(param),
      this.sendAction('update', param);
    },
    deleteBook(param){
      this.sendAction('delete', param);
    }
  }
});
