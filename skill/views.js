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
        ask: 'You can say things like read me a random poem, or you can ask me for a poem about any topic, like love. Enjoy dear Poet!',
      },
      WaitForPrompt: {
        ask: 'Would you like a random poem or a poem about a topic?'
      },
      Welcome: {
        say: 'Welcome to Poetry Now!'
      }
    },
  };
}());

module.exports = views;
