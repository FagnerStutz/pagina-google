import styles from './Principal.module.css'
import logo from '../../image/logo1.png'
import safe from '../../image/safe.svg'
import { FaSearch, FaMicrophone, FaKeyboard } from 'react-icons/fa';

function Principal(){
    return(
        <div className={styles.principal}>
            
            <img className={styles.imgLogo} src={logo}/>

            <div className={styles.inputPesquisa}>
                <div className={styles.iconEsquerda}>
                    <FaSearch />
                </div>
                <div className={styles.iconDireita}>
                    <div className={styles.iconTeclado}><FaKeyboard /></div>
                    <div><FaMicrophone /></div>
                </div>

            </div>

                <button>Pesquisa Google</button>
                <button>Estou com sorte</button>

                <div className={styles.check}>
                    <img src={safe} />
                    <h5>Faça o Check-up de privacidade</h5>
                </div>
        </div>
    )
}

export default Principal