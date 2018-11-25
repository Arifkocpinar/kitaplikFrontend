import DS from 'ember-data';

export default DS.Model.extend({

  kitapAdi: DS.attr('string'),
  yayinEvi: DS.attr('string'),
  yazarAdi:DS.attr(),
  basimTarihi: DS.attr('string'),
  sayfaSayisi: DS.attr('number')

});
