import React from 'react';
import AssistantCard from './AssistantCard';

export default function App() {
  const assistants = [
    {
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Amazon_Alexa_blue_logo.svg/180px-Amazon_Alexa_blue_logo.svg.png',
      name: 'Alexa',
      handle: 'alexa99',
      description: "I'll help you buy stuff off Amazon",
    },
    {
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/250px-Microsoft_Cortana_transparent.svg.png',
      name: 'Cortana',
      handle: 'cortana12',
      description: "Personal assistant by Microsoft",
    },
    {
      avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/8/8e/AppleSiriIcon2017.png/280px-AppleSiriIcon2017.png',
      name: 'Siri',
      handle: 'siri44',
      description: "I don't get a lot of updates anymore",
    },
  ];

  return (
    <div className="container mt-6">
      <div className="columns is-centered">
        {assistants.map((assistant) => (
          <div key={assistant.handle} className="column is-narrow">
            <AssistantCard {...assistant} />
          </div>
        ))}
      </div>
    </div>
  );
}
