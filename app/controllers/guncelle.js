import Controller from '@ember/controller';
import EmberObject from '@ember/object';
export default Controller.extend({
  actions:{
    guncelle(){
      let self = this;

      Ember.$.ajax({
        url: "http://localhost:8080/kitap/guncelle",
        type: "POST",
        data: JSON.stringify({
          id:this.get('model.id'),
          kitapAdi:this.get('model.kitapAdi'),
          yazarAdi:this.get('model.yazarAdi'),
          yayinEvi:this.get('model.yayinEvi'),
          basimTarihi:this.get('model.basimTarihi'),
          sayfaSayisi:this.get('model.sayfaSayisi')
        }),
         headers: {

                    'content-type':'application/json',
                },


      }).then(function(resp){
        window.location.href = '/';
      }).catch(function(error){
        alert("GÜNCELLEME SIRASINDA HATA OLUŞTU. GİRDİĞİNİZ BİLGİLERİ KONTROL EDİNİZ.")
      });
    }
  }
});
