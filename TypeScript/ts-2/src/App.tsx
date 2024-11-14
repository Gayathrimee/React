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


      <Container styles={{border: '1px solid black', padding:'1rem'}}/>

    </div>
  );
}

export default App;
