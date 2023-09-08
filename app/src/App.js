import logo from './logo.svg';
import './App.css';
import { Layout,Menu,Typography} from 'antd';
import {Link,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import Matches from './components/matches';
import Teams from './components/teams';
import Chart from './components/chart';
import Homepage from './components/Homepage';
import Team from './components/Team';
import Player from './components/Player';
import Footter from "./components/Footter"
const {Header}=Layout
function App() {
  return (
    <>
        <Layout className="layout">

               <Navbar/>

              <Layout>
              <div id='routes'>
              <Routes >
                <Route exact path='/' element={ <Homepage/>}/>
                <Route exact path='/teams' element={ <Teams/>}/>
                <Route exact path='/matches' element={ <Matches/>}/>
                <Route exact path='/chart' element={ <Chart/>}/>
                <Route exact path='/teams/:teamId' element={ <Team/>}/>
                <Route exact path='/player/:playerId' element={ <Player/>}/>




                </Routes>
              </div>
               

<Footter/>





              </Layout>




      </Layout>
    </>
  );
}

export default App;
