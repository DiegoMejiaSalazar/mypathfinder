import React from 'react';
import { Link } from 'react-router-dom';

export default function Root() {
    return <section className='full-height'>
        <section className='top-navigation-bar'>
            <section className='application'>
                
            </section>
            <section className='go-to-app is-bold'>
                <Link to="/algo">Go to app</Link>
            </section>
        </section>
        <section className='algo-info'>
            <h1>A*</h1>
            <section className='algo-content'>
                <section className='a-star-image'>
                    <img src="./astar.gif" width="500" height="400" alt="A STAR ALGORITHM" />
                </section>
                <section className='a-star-description'>
                    <p className='big-font-size'>
                    Informally speaking, A* Search algorithms, unlike other traversal techniques, it has “brains”. What it means is that it is really a smart algorithm which separates it from the other conventional algorithms. This fact is cleared in detail in below sections. 
And it is also worth mentioning that many games and web-based maps use this algorithm to find the shortest path very efficiently (approximation).
                    </p>
                </section>
            </section>

        </section>
    </section>
}