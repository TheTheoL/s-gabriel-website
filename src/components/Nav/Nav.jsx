
import './nav.scss';
import logo from '../../img/owlblack.png';

export const Nav = () => {
    return (
        <div className='navbar' id='navbar'>

            <button className='name' onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}>Susan Krantz Gabriel</button>


            <div className='logo'>
                <img className='logo-div' src={logo} alt="Owl icon" />
            </div>



            <ul className='links'>
                <li><a href="#about">About</a></li>
                <li><a href="#vita-section">Vita</a></li>
                <li><a href="#publications">Publications</a></li>
            </ul>
        </div>
    )
}
