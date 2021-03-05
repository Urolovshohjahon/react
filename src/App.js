import logo from './logo.svg';
//import './App.css';
import { Best } from './components/Best';
import Welcome from './components/Welcome';
import Alpha from './components/jsx';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditonalComponent from './components/ConditonalComponent'
import NameList from './components/NameList'
import Inline from './components/Inline'
import Stylesheet from './components/Stylesheet'
import Fragment from './components/Fragment'
import ParentComp from './components/MemoComp'
import RefDemo from './components/RefDemo'
import Input from "./components/Input"
import Portal from './components/Portal'
import Errors from './components/Errors'
import ErrorBound from './components/ErrorBound';
import Counter from './components/Counter';
import TheFirst from './components/TheFirst';
import User from './components/User'
import ClickCounter from './components/ClickCounter'
import ComponentF from './components/ComponentF'
import { UserProvider } from './components/userContext';
import PostList from './components/HTTPGET';
import HTTPPOST from './components/HTTPPOST'
import HooksClick from './components/HooksClick'
import HooksObject from './components/HooksObject'
import HooksArray from './components/HooksArray'
import HooksUseEffects from './components/HooksUseEffects'
import ClassCoords from './components/ClassCoords'
import HooksCoords from './components/HooksCoords'
import HooksDisplay from './components/HooksDisplay'
import HooksTimer from './components/HooksTimer'
import HooksGET from './components/HooksGET'
import HooksGETReal from './components/HooksGETReal'
import HooksGETReal_2 from './components/HooksGETReal_2'
import Example from './components/HooksGETReal_example';
import React, { useReducer } from 'react';
import HooksContext1 from './components/HooksContext1';
import HooksContext1Between from './components/HooksContext1Between';
import HooksCounterOne from './components/HooksCounterOne';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import HooksUmumiyImport from './components/HooksUmumiyImport';
export const Context = React.createContext();
export const Channel = React.createContext();
export const UseContext = React.createContext();

//const initialState = 0
//const reduce = (state, action) => {
//  switch (action) {
//    case 'increment':
//      return state + 1
//    case 'decrement':
//      return state - 1
//    case 'reset':
//      return initialState
//    default:
//      return state
//  }
//}


function App() {

 //const [count, dispatch] = useReducer(reduce, initialState)


  return (
    <div className="App">
      {/*<Best name="Shohjahon"><p>Pu paragraf</p></Best>
      <Welcome />
      <Alpha />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <ConditonalComponent/>
      <NameList/>
      <Inline/>
      <Stylesheet />
      <Fragment/>
      <ParentComp/>
      <RefDemo/>
      <Input />
      <Portal/>
      <ErrorBound>
        <Errors hero="Joker" />
      </ErrorBound>
      <ErrorBound>
        <Errors hero="Superman" />
      </ErrorBound>
      <TheFirst/>
      <Counter render={(count, Clicked) => <ClickCounter count={count} Clicked={Clicked} />} />
      <User render={(isLogin) => isLogin ? 'Vishwas' : 'Guest'} />
      <UserProvider value='jack'>
        <ComponentF />
      </UserProvider>
      <ComponentF />
      <PostList/>
      <HTTPPOST/>
      <HooksClick/>
      <HooksObject/>
      <HooksArray/>
      <HooksUseEffects/>
      <ClassCoords/>
      <HooksCoords/>
      <HooksDisplay/>
      <HooksTimer />
      <HooksGET/>
      <HooksArray/>
      <HooksGETReal/>
      <Example/>
      
      <Context.Provider value='Boriga baraka'>
        <Channel.Provider value="Zo'rTV">
          <HooksContext1Between />
        </Channel.Provider>
      </Context.Provider>
      
      <HooksCounterOne />

      <UseContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>
          Count - {count}
          <ComponentB/>
          <ComponentA/>
        </div>
      </UseContext.Provider>
      <HooksGETReal_2 />
      <DataFetchingOne/>*/}
      <DataFetchingTwo/>
      <HooksUmumiyImport/>

    </div>
  );
}

export default App;
