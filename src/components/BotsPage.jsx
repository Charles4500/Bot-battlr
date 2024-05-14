//Parent component --> I want this parent component to have two children components
//This is where i will also have to fetch my data

import React, { useState, useEffect } from "react";
import BotsCollection from "./BotsCollection";
import YourBotArmy from "./YourBotArmy";
function BotsPage() {
  const [bots, setBots] = useState([]);
 
  //run fetch whenever the page loads
  //Function to fetch data
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Charles4500/Bot-battlr/bots")
      .then((resp) => resp.json())
      .then((bots) => {
        setBots(bots);
      });
  }, []);
  
  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }
  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }
  function deleteBot(bot) {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots((bots) => deletedBot);
  }
  return (
    <div>
      <YourBotArmy 
      bots={bots.filter((b) => b.army)}
      removeBot={removeBot}
      deleteBot={deleteBot}
      />
 <BotsCollection bots={bots}
 enlistBot={enlistBot} deleteBot={deleteBot}
 />
    </div>
  )
}

export default BotsPage;
