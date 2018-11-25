import Controller from '@ember/controller';
import EmberObject from '@ember/object';
export default Controller.extend({
  queryParams: ['query'],
  query: '',
  data:EmberObject.create(),
  init(){
this.set('data',this.send('sorgula',''));
},
    actions:{
      delete(gelen) {

        Ember.$.ajax({
            url: `http://localhost:8080/kitap/sil`,
            type: "DELETE",
            data: JSON.stringify({

              id:gelen
            }),
            headers: {
                'Content-Type': 'application/json'
              }
          }).then(function(resp){
            console.log("successful");
            window.location.reload(true);
          }).catch(function(error){
            console.log(error);
            console.log("negative");
          });

      },
      update(id) {
        alert(id),
        console.log(id+"***");
        let self = this;
        self.transitionToRoute("/guncelle/" + id);
      },
      sorgula(gelen){
        var Url="";
        if(gelen==="")
          Url="http://localhost:8080/kitap/kitaps";
        else {
          Url="http://localhost:8080/kitap/sorgu/"+gelen;
        }

        Ember.$.ajax({

          type:"GET",
          url:Url,
          headers:{
            'Content-type':'application/json'
          }
          }).then((resp)=>{

            this.set('data',resp);
          })

      }
    }
});
