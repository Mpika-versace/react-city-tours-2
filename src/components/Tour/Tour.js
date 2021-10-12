import React,{useState} from 'react';
import { FaTimes,FaRegCaretSquareDown } from "react-icons/fa";

export default function Tour({id,name,city,info,img,removeCart}) 
{
    const [showInfo, setShowInfo] = useState(false)
    
    
    return (
        
            <article className="card" >
                <img src={img} alt="..." />
                <div className="card-body">
                    <span className="card-close" onClick={()=> removeCart(id)}>
                        <FaTimes className="fatimes" />
                    </span>
                    <h3 className="card-title">{city}</h3>
                    <p className="card-text">{name}</p>
                    <h3 onClick={()=>setShowInfo(!showInfo)}>
                        info
                        
                        <span > <FaRegCaretSquareDown className="down" /></span>
                    </h3>
                    {showInfo&& <p>{info}</p>}
                    

                    
                </div>
            </article>
        
    )
}
