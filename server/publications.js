Meteor.publish('posts', function() {
  return Posts.find({title:'Meteor'},{fields: {author:false}
});
});
