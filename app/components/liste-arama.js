import Component from '@ember/component';

export default Component.extend({
  
  actions:{
    sorgula(){

      this.sendAction('sorgula',this.get('query'));
    }
  }
});
