// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({model: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('chq',function(model){
      console.log("update song queue");
      this.songQueueView.render();
    }, this);
    // this.model.on('change:songQueue', function(model){
    //   this.songQueue.render();
    // },this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      this.songQueueView.render()
      //new SongQueueView({collection: this.model.get('songQueue')}).render()
    ]);
  }

});
