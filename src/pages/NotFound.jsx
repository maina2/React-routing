import "./notfound.css"
import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div class="error" >
        <div>
        <h2>404 Not found </h2>

        </div>
        <div>
        <h4>Hit the link below to redirect to the home page</h4>
        </div>
        <div className="button">
      
          <button><Link  to='./' > Home</Link></button>
        </div>
    
    <br />    
   

    </div>
  )
}

export default NotFound