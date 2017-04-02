'use strict';

exports.register = function register(skill) {
  skill.onIntent('LaunchIntent', () => ({ reply: 'Intent.waitForPrompt', to: 'entry' }));

  skill.onIntent('QueryPoemIntent', (alexaEvent) => {
    alexaEvent.model.topic =  alexaEvent.intent.params.topic || '';
    return ({ reply: 'Intent.ReadPoem', to: 'die' })
  });

  skill.onIntent('RandomPoemIntent', () => {
    return ({ reply: 'Intent.ReadPoem', to: 'die' })
  });
  // skill.onIntent('AMAZON.HelpIntent', () => ({ reply: 'Intent.Help', to: 'die' }));

  // skill.onState('readpoem', (alexaEvent) => {
  //   return { reply: 'Intent.waitForPrompt', to: 'die' };
  // });

};
