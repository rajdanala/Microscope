Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    //post._id = Posts.insert(post);
    //Router.go('postPage', post);

    Meteor.call('postInsert', post, function(error, result){
      if(error){
        console.log('error', error);
        alert(error.reason);
      }
      if(result.postExists){
        alert('This Link has already been posted');
      }
      //Router.go('postPage',{_id:result._id});

    });
    Router.go('postsList');
  }
});
