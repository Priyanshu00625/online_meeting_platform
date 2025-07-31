import "./App.css"
import { BrowserRouter as  Router , Route , Routes } from "react-router-dom"
import LandingPage from "./pages/landing"
import Authentication from "./pages/Authentication"
import { AuthProvider } from "./context/AuthContext"
import VideoMeetComponent from "./pages/videomeet"
import  HomeComponent  from "./pages/home"
import History from "./pages/history"

export default function App() {
  return (
   <>
   <Router>
    <AuthProvider>
    <Routes>
        {/* <Route path="/home" element = {}></Route> */}
        <Route path="/" element = {<LandingPage/>}></Route>
        <Route path="/auth" element = {<Authentication/>}></Route>
        <Route path="/home" element = {<HomeComponent/>}></Route>
       <Route path='/history' element={<History />} />
        <Route path="/:url" element = {<VideoMeetComponent/>}></Route>
    </Routes>
    </AuthProvider>
   </Router>
   </>
  )
}
