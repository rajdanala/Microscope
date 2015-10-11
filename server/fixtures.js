if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope collection',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    author: 'Raj Danala'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

Meteor.publish('posts', function() {
  return Posts.find({title:'Meteor'},{fields: {author:false}
});
});
