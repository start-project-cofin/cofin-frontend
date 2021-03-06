import {Route, Routes} from 'react-router-dom'; 
import axios from 'axios';
//21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>

import { Geolocation, LocalMapPage, WorldMapPage } from 'features/map';
import { QnABoardPage, QnAViewPage, QnAWritePage } from 'features/QnA/index';

import MedptPage from "features/medpt/MedptPage";
import {MsgPage} from "features/message/index";
import {NewsPage} from "features/news/index";
import {LoginPage, UserPage} from "features/user/index";
import {ChartPage} from 'features/corona/index';
import ChatbotPage from 'features/chatbot/pages/ChatbotPage';

//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.

function App() {

  return(<>
    <Geolocation/>
    <Routes>

          <Route path="/" element= { <ChartPage/> }/>
          <Route path='/home' element= { '/' }/>
          <Route path='/main/corona' element={<ChartPage/>}/>


          <Route path="/QnA" element={<QnABoardPage/>}/>
          <Route path="/QnA/view" element={<QnAViewPage/>}/>
          <Route path="/write" element={<QnAWritePage/>}/>
          
          <Route path="/organ/chat" element={<ChatbotPage/>}/>
          <Route path="/organ/local" element={<LocalMapPage/>}/>
          <Route path='/organ/world' element= { <WorldMapPage/> }/>      

          <Route path='/medpts' element={<MedptPage/>}/>
          <Route path='/message' element={<MsgPage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/user' element={<UserPage/>}/>
          
      
    </Routes>  
</>)}







export default App;

