

import { Link } from "react-router-dom"
import "../App.css"

export default function landing() {
  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="navHeader">
            <h2>Apna Video Call</h2>
        </div>
        <div className="navlist">
            <p>Join as Guest</p>
            <p role="button">
              <Link style={{textDecoration:"none", color:"white"}} to={"/auth"}>Register</Link></p>
            <div role="button"> <Link style={{textDecoration:"none", color:"white"}} to={"/auth"}>Login</Link></div>
        </div>
      </nav>

      <div className="landingPageMainContainer">
        <div className="connectText">
            <h1> <span style={{color:"orange"}}>Connect</span> with your love ones</h1>
            <p>Cover a Distance with My VideoCall</p>
            <div role="button">
                <Link to={"/home"} style={{color:"white", textDecoration:"none" }}>Get Started</Link>
            </div>
        </div>
        <div className="mobileFoto">
            <img src="/public/mobile.png" alt="foto" />
        </div>
      </div>
    </div>
  )
}
