'use strict';

module.exports = function(Monster) {
  Monster.getName = function(monsterId, cb){
    Monster.findById(monsterId, function(err, instance){
      var response = "Name of the monster is: " + instance.name;
      cb(null, response);
      console.log(response);
    });
  }

  Monster.remoteMethod(
    'getName',
    {
      http: {path: '/getname', verb:'get'},
      accepts: {arg: 'id', type: 'number', http: {source: 'query'}},
      returns: {arg: 'name', type: 'string'}
    }
  );
};
