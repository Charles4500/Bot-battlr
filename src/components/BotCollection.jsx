//Child component --> For the BotPage parent
//Parent to the BotsCard
import React from 'react';
import BotsCard from './BotsCard';
function BotsCollection({ bots, enlistBot, deleteBot }) {
  const botItem = bots.map((bot) => {
    return <BotsCard key={bot.id} bot={bot} 
   
    clickEvent={enlistBot}
    deleteBot={deleteBot}
    />;
  });
  return (
   
      <div className="grid grid-cols-4 gap-4 my-10 ">{botItem}</div>
    
  );
}
export default BotsCollection;
