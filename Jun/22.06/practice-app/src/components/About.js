import React from 'react';
import { useContext } from 'react';
import {DataContext} from '../context'


function About() {
    const data = useContext(DataContext)
    return (
        <div>
            {data.map((item)=>(<div>
                <h1>{item.name}</h1>
                <h2>{item.job}</h2>
            </div>
            ))}
        </div>
    )
}

export default About
