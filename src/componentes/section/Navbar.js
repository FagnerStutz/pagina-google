import styles from './Navbar.module.css'
import iconMenu from '../../image/iconMenu.svg'
import avatar from '../../image/avatar.svg'

function Navbar(){
    return(
        <ul className={styles.navbar}>
            <li> Gmail </li>
            <li> Imagens </li>
            <li> <img src={iconMenu} /> </li>
            <li> <img src={avatar}/> </li>
        </ul>       
    )
}

export default Navbar