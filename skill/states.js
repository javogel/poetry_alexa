'use strict';

exports.register = function register(skill) {
  skill.onIntent('LaunchIntent', () => ({ reply: 'Intent.Welcome', to: 'waiting' }));

  skill.onIntent('QueryPoemIntent', (alexaEvent) => {
    alexaEvent.model.topic =  alexaEvent.intent.params.topic || '';
    return ({ reply: 'Intent.ReadPoem', to: 'waiting' })
  });

  skill.onIntent('RandomPoemIntent', (alexaEvent) => {
    alexaEvent.model.topic =  '';
    return ({ reply: 'Intent.ReadPoem', to: 'waiting' })
  });

  skill.onIntent('AMAZON.HelpIntent', () => ({ reply: 'Intent.Help', to: 'entry' }));

  skill.onState('waiting', (alexaEvent) => {
    return { reply: 'Intent.WaitForPrompt', to: 'entry' };
  });

};
