'use strict';

const views = (function views() {
  return {
    Intent: {
      Launch: {
        ask: 'Welcome to Poetry Now! Would you like me to recite a random poem or a poem about a specific topic?',
      },
      ReadPoem: {
        say: '{poem}'
      },
      Help: {
        say: 'You can say things like read me a random poem if you are feeling lucky, or if you are feeling more romantic then you can say things like read me a poem about love. Enjoy dear, Poet!',
      },
      WaitForPrompt: {
        ask: 'Would you like a random poem or a poem about a particular topic?'
      },
      Welcome: {
        say: 'Welcome to Poetry Now!'
      }
    },
  };
}());

module.exports = views;
