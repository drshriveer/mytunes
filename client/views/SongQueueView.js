// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",
  intialize: function(){

  },

  render: function() {
     this.$el.children().detach();

    return this.$el.html('<th>Queue</th>').append(
      _(this.model.queue).map(function(song){
         return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
