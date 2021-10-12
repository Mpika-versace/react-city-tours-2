import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import {tourData} from '../../data/dataCity'

export class TourLists extends Component 
{
    state=
    {
        tours:tourData
    };
    removeCart=(id)=>
    {
        console.log(id);
        const{tours}=this.state;
        let sortedTours=tours.filter(tour=>tour.id!==id);
        this.setState({tours:sortedTours})
    }
    
    render() 
    {
        const {tours}=this.state;
    
        
        return (
            <section className="tourlists">
                <div className="container">
                    <div className="tourlists-flex">
                        {tours.map(({id,name,img,city,info},index)=><Tour
                         key={id} 
                         id={id}
                         name={name}
                         img={img}
                         city={city}
                         info={info}
                         removeCart={this.removeCart}
                         />)}
                         
                         
                         
                    </div>
                    
                </div>
                
            </section>
        )
    }
}

export default TourLists
