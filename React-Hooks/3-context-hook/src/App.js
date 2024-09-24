import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';

export const UserContext = React.createContext()  
export const ChannelContext = React.createContext()           

function App() {
  return (
    <div className="App">
      
      <UserContext.Provider value = {'She'}>
        <ChannelContext.Provider value={'codevolution'}>
            <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
                                                                