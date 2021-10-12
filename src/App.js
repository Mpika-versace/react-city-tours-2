import React from 'react';
import NavBars from './components/NavBars/NavBars';
import TourLists from './components/TourLists/TourLists';
import  './sass/style.scss'

export default function App() 
{
    return (
        <>
            <NavBars />
            <TourLists />
        </>
    )
}
