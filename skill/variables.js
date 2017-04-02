'use strict';
// var pry = require('pryjs')



const variables = {


  poem: function(model) {

    return model.createPoem().then((poem) => {
      let wait = '<break strength="x-strong"/>'
      let description = poem.title + wait + " by " + poem.author + wait
      return description + poem.lines.join(wait)
    });
  }
};

module.exports = variables;
