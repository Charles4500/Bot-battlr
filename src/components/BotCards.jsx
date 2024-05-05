import React from 'react'
import { SimpleGrid,Card,CardHeader,Text,Button,CardBody,CardFooter, Img } from '@chakra-ui/react';

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCards({bot,clickEvent,deleteBot}) {
  return (
    <div>
      <SimpleGrid  columns={{ sm: 2, md: 4 }}
  spacing='4'
  p='10'
  textAlign='center'
  rounded='lg'
  color='gray.400'>
  <Card key={bot.id} onClick={() =>clickEvent(bot)} > 
   
    <CardBody>
    <Img alt='Oh no!'
src={bot.avatar_url}  />
  </CardBody>
  <CardHeader>
     {bot.name}
     <i className={botTypeClasses[bot.bot_class]} />
    </CardHeader>
    <CardFooter>
      <Button
         onClick={(event) => {
          event.stopPropagation();
          deleteBot(bot);
        }}
      >X</Button>
    </CardFooter>
  </Card>
 
</SimpleGrid>
    </div>
  )
}

export default BotCards;