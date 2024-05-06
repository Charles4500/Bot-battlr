//Child component 
function BotsCard({ bot, clickEvent, deleteBot }) {
  return (
    <div class="shadow-xl  ">
      <div className="w-full place-items-center" key={bot.id} onClick={() => clickEvent(bot)}>
        <img
          src={bot.avatar_url}
          alt=""
          className="w-full h-[250px] object-cover"
        />

        <div className="">
          <h4 className="font-bold text-xl">{bot.name}</h4>
          <h4 className="font-bold text-xl">Health:{bot.health}</h4>
          <h4 className="font-bold text-xl">
            Damage:{bot.damage}</h4>
          <h4 className="font-bold text-xl">
            Armor:{bot.armor}</h4>
          <h5>Catchphrase:<small>{bot.catchphrase}</small></h5>

          <button className="bg-red-500 rounded-md "
            onClick={(event) => {
              event.stopPropagation();
              deleteBot(bot);
            }}
          >
           Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotsCard;
