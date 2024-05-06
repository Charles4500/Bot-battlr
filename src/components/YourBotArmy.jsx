//Child component
import React from 'react'
import BotsCard from './BotsCard'
function YourBotArmy({bots,removeBot,deleteBot}) {
  const botsArmy = bots.map((bot)=>{

  
  return(
    <BotsCard
    key={bot.id} bot={bot} 
    clickEvent={removeBot}
    deleteBot={deleteBot}
    />
  );
})

  return (
    < div className='bg-lime-300 rounded-md'>
    <div className="grid grid-cols-4 gap-4 my-10 ">
{botsArmy}
    </div>
    </div>
  )
}

export default YourBotArmy;