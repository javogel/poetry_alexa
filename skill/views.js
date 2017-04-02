'use strict';

const views = (function views() {
  return {
    Intent: {
      Launch: {
        ask: 'Welcome to Poetry Now! Would me to recite a random poem or a poem about a particular topic?',
      },
      ReadPoem: {
        ask: '{poem}'
      },
      Help: {
        say: 'Some help text here.',
      },
      waitForPrompt: {
        ask: 'Would you like a random poem or a poem about a particular topic?'
      }
    },
  };
}());

module.exports = views;
