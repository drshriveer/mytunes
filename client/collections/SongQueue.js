// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: Song,
  

  initialize: function(param){
    this. queue = [];
  },

  enqueue: function(song){
    console.log("song enqueue");
    this.queue.push(song);
    this.trigger('chq',this);
  },

  dequeue: function(song){
    console.log("song dequeue");
    delete this.get('queue')[this.get('queue').indexOf(song)];
  }


});


