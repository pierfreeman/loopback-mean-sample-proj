var async = require('async');

module.exports = function(app) {
  var mongoDs = app.dataSources.mongoDs;

  async.parallel({
    reviewers: async.apply(createReviewers),
    monsters: async.apply(createMonsters),
  }, function(err, results){
    if (err) throw err;
    createReviews(results.reviewers, results.monsters, function(err){
      console.log('> models created successfully');
    });
  });

  function createReviewers(cb) {
    mongoDs.automigrate('reviewer', function (err) {
      if (err) return cb(err);
      var Reviewer = app.models.reviewer;
      Reviewer.create([{
        email: 'foo@bar.com',
        password: 'foobar'
      }, {
        email: 'john@doe.com',
        password: 'johndoe'
      }, {
        email: 'jane@doe.com',
        password: 'janedoe'
      }], cb);
    });
  }

  function createMonsters(cb) {
    mongoDs.automigrate('monster', function(err){
      if (err) return cb(err);
      var Monster = app.models.monster;
      Monster.create([{
        name: 'Beholder',
        power: 9
      },{
        name: 'Gnoll',
        power: 1
      },{
        name: 'Litch',
        power: 10
      }], cb);
    })
  }

  function createReviews(reviewers, monsters, cb) {
    mongoDs.automigrate('review', function (err) {
      if (err) return cb(err);
      var Review = app.models.review;
      var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
      Review.create([{
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        rating: 5,
        comments: 'Very demanding boss.',
        publisherId: reviewers[0].id,
        monsterId: monsters[0].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        rating: 1,
        comments: 'Wear as an ant.',
        publisherId: reviewers[1].id,
        monsterId: monsters[1].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        rating: 3,
        comments: 'I am a noob so I found it very strong.',
        publisherId: reviewers[2].id,
        monsterId: monsters[1].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        rating: 5,
        comments: 'The strongest boss I ever met til now.',
        publisherId: reviewers[1].id,
        monsterId: monsters[2].id,
      }], cb);
    });
  }
}
