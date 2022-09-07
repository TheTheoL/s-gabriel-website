import React from 'react';
import './about.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export const About = () => {
    return (
        <div className='about-section'>
            <div className='section-title'>
                <h1>ABOUT</h1>
            </div>
            <div className='about'>
                <p>
                    Thirty-five years in the classroom, now focused on research and writing.
                </p>
                <p>
                    Professor emerita, Department of Philosophy, Saint Anselm College, Manchester NH, USA.
                </p>
            </div>
            <div className='quote'>
                <p>
                    <RiDoubleQuotesL />No matter how often philosophy may have misjudged her boundaries, she retains a sphere of questions answers to which must not be renounced and, in the interest of humankind, cannot be avoided.  Therefore, philosophy has without doubt a role to play among the sciences, and her future is assured.  Thus, the loss of confidence in philosophy, which in our day has taken hold far too widely, proves to be entirely unfounded.<RiDoubleQuotesR /> <br></br>
                    <span className='quote-author'>Franz Brentano, Eintrittsvorlesung, 1874</span>
                </p>

            </div>

        </div>
    )
}
