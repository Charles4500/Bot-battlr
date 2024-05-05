import React from 'react'
import { SimpleGrid,Card,CardHeader,Text,Button,CardBody,Heading,CardFooter } from '@chakra-ui/react';
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
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    </div>
  )
}

export default BotCards;