import React,{useState} from 'react';
import logo from "../../logo.png";
import { FaBars,FaTimes } from "react-icons/fa";

export default function NavBars() 
{
    const [hambergMenu, setHambergMenu] = useState(false)
    return (
        <nav >
            <div className="container">
                <div className="nav">
                    <div className="nav-logo"><img src={logo} alt="" /></div>
                    
                    <ul className={`nav-list ${(hambergMenu)&&'open'}`}>
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Tours</a></li>
                    </ul>
                    <div className="bars">
                        <FaBars className={`fabars ${(hambergMenu)&&'open'}`} onClick={()=>setHambergMenu(!hambergMenu)} />
                        {hambergMenu && <FaTimes onClick={()=>setHambergMenu(!hambergMenu)} />}
                        
                    </div>
                </div>
                
            </div>
            
        </nav>
    )
}
