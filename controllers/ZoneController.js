var Zone = require('../models/Zone')

module.exports = {

  find: function(params, callback){
    // mongo stuff
    Zone.find(params, function(err, zones){
      // error
      if (err){
        callback(err, null)
        return
      }
      // desired data
      callback(null, zones)
    })
  },

  findById: function(){

  },

  update: function(){

  },

  create: function(){

  },

  destroy: function(){

  }


}