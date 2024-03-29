Posts = new Mongo.Collection('posts');

// Posts.allow({
//   insert: function(userId,doc) {
//     //only allow postings if you're logged in
//     return !!  userId;
//   }
// });

Meteor.methods({
  postInsert:function(postAttributes){
    check(this.userId,String);
    check(postAttributes,{
      title: String,
      url: String
    });
    // if(Meteor.isServer){
    //   postAttributes.title += "(server)";
    //   Meteor._sleepForMs(5000);
    // }
    // else{
    //   postAttributes.title += "(client)";
    // }

    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if(postWithSameLink){
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    }
    var user = Meteor.user();
    var post = _.extend(postAttributes,{
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }
});
