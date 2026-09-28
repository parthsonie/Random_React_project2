import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";

function Page(){
  return(
    <>
        <div className="main">
            <div className="card">
            <img src={icon1} className="images"/>
            <h4>PERSONAL</h4>
            <hr/>
            <h6>CUSTOM DOMAIN</h6>
            <hr/>
            <h6>SLEEPS AFTER 30MINS OF <br/> INACTIVITY</h6>
            <h3>FREE</h3>
            <button className="btn">SIGN UP</button>
        </div>
        <div className="card-mid card">
            <img src={icon2} className="images"/>
            <h4>SMALL TEAM</h4>
            <hr/>
            <h6>NEVER SLEEPS</h6>
            <hr/>
            <h6>MULTIPLE WORKERS FOR MORE<br/> POWERFUL APPS</h6>
            <h3>$150</h3>
            <button className="btn-inverse">FREE TRAIL</button>
        </div>
        <div className="card">
            <img src={icon1} className="images"/>
            <h4>ENTERPRISE</h4>
            <hr/>
            <h6>DEDICATED</h6>
            <hr/>
            <h6>SIMPLE HORIZONTAL<br/> SCALABILITY</h6>
            <h3>$400</h3>
            <button className="btn">FREE TRAIL</button>
        </div>
        </div>
    </>
  )
}

export default Page