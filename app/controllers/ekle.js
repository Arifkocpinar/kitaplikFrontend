import Controller from '@ember/controller';
import Ember from 'ember';
import $ from 'jquery';
export default Controller.extend({

yazarlar:[],

  actions:{
        remove(item) {
          this.yazarlar.removeObject(item);
        },
        add(index) {
          this.yazarlar.insertAt(index, {
            yazarAdi: this.get('yadi0')
          });
        },
    yazar(){
      alert(this.get('yadi0')),
      this.get('dizi').pushObject(this.get('yadi1'))
    },
    ekle(){

      var Json="";

      let kayit={
        id:this.get('isbn'),
        kitapAdi:this.get('kadi'),
        yayinEvi:this.get('yevi'),
        basimTarihi:this.get('tarih'),
        sayfaSayisi:this.get('sayfa'),
        yazarAdi:this.yazarlar,
      }

      Json=JSON.stringify(kayit);


       Ember.$.ajax({
          url: "http://localhost:8080/kitap/ekle",
          type: "POST",
          data: Json,
          headers: {
          'Content-Type': 'application/json'
        }
        }).then(function(resp){
            window.location.href="/";
        }).catch(function(error){
          alert("EKLEME SIRASINDA HATA OLUŞTU. GİRDİĞİNİZ BİLGİLERİ KONTROL EDİNİZ."+error)
        });


    }
  }
});
