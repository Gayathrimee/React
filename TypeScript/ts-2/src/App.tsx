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

      <UserContextProvider>
        <User />
      </UserContextProvider>
      
    </div>
  );
}

export default App;
