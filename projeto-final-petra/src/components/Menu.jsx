import { Link } from 'react-router-dom'
import style from '../styles/components/menu.module.css'
import logo from '../assets/logosemmunicipio1.png'

const Menu = () => {
    return (
        <nav className={style.menuContainer}>
            <img src={logo} alt="conectação social logo" />
            <li>
                <Link className={style.menuLink} to='/'>HOME</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/sobre'>SOBRE</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/voluntarios'>VOLUNTÁRIOS</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/contato'>CONTATO</Link>
            </li>
        </nav>
    )
}

export default Menu