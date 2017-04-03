'use strict';




const variables = {


  poem: function(model) {

    return model.createPoem().then((poem) => {
      let wait = '<break strength="x-strong"/>';
      let wait_short = '<break time="1s"/> ';
      let wait_long = '<break time="2s"/>';
      let intro = poem.title + wait + " by " + poem.author + wait_short;
      let end = wait_short + 'end of poem' + wait_long;
      let lines = poem.lines.map((line) => {
        return line.replace(/[^\w\s]/gi, '')
      }).join(wait);
      return intro + lines + end;
    });
  }
};

module.exports = variables;
