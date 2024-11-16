import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/1-Greet'
import { Person } from './Components/2-Person';
import { PersonList } from './Components/3-PersonList';

import {Status} from './Components/4-Status'
import { Heading } from './Components/5-Heading';
import { Oscar } from './Components/6-Oscar';

import { Button } from './Components/7-Button';
import { Input } from './Components/8-input';

import { Container } from './Components/9-Container';

import { ThemeContextProvider } from './Components/2-Context/ThemeContext';
import { Box } from './Components/2-Context/Box';
import { UserContextProvider } from './Components/2-Context/UserContext';
import { User } from './Components/1-State/4-User';

import { Counter } from './Components/4-class/1-Counter';

import { Private } from './Components/5-auth/Private';
import { Profile } from './Components/5-auth/Profile';

import { List2 } from './Components/6-generics/List2';
import { List3 } from './Components/6-generics/List3';
import { RandomNumber } from './Components/7-restrictions/RandomNumbers';
import { Toast } from './Components/8-templateliterals/Toast';

import { CustomButton } from './Components/9-html/Button';
import { Text } from './Components/10-polymorphic/Text';

function App() {
 
  // const personName  = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first:'Bruce',
  //     last:'Wayne'
  //   },
  //   {
  //     first:'Clark',
  //     last:'Kent'
  //   },
  //   {
  //     first:'Princess',
  //     last:'Diana'
  //   }
  // ]


  return (
    <div className="App">
      
      {/* <Greet name = 'Vishwas' messageCount={20} isLoggedIn = {true}/> 
      <Person name={personName}/>
      <PersonList names = {nameList} /> */}


      {/* <Status status ='error'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Greet name='vishwas' isLoggedIn = {true}/> */}


      {/* <Button handleClick={(event,id) => {
        console.log('Button Clicked', event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/> */}


      {/* <Container styles={{border: '1px solid black', padding:'1rem'}}/> */}

      {/* <ThemeContextProvider>
      <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Counter message='The count value is' /> */}

      {/* <Private isLoggedIn = {true} component={Profile} /> */}

      {/* <List2 
          items={['Batman','Superman','Wonder Woman']}
          onClick={(item) => console.log(item)}
      />
      <List2 items = {[1,2,3]} onClick={(item) => console.log(item)}
       /> */}
      {/* <List3 
        items = {[
          {
            id:1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id:2,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id:3,
            first: 'Bruce',
            last: 'Wayne'
          }  
        ]}
        onClick={(item) => console.log(item)}
      /> */}

        {/* <RandomNumber value={10} isPositive/> */}

        {/* <Toast position='center'/>  */}

        {/* <CustomButton variant='primary' onClick={() => console.log('clicked')}>
          Primary Button 
        </CustomButton>  */}

        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p' size='md'>Paragraph</Text>
        <Text as='label' htmlFor = 'someId' size='sm' color='secondary'>Label</Text>

    </div>
  ); 
}

export default App;
 