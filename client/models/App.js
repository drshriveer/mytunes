// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    // this.songQueue = params.songQueue;

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // params.songQueue.on('enqueue', function(song){
    //   this.trigger('changed:queue', this); 
    // }, this);

    // params.songQueue.on('queue', function(song){
    //   this.trigger('chq', this); 
    // }, this);


    params.library.on('enqueue', function(song){
      this.get('songQueue').enqueue(song);
      this.trigger('chq',this);

    }, this);

  }


});
