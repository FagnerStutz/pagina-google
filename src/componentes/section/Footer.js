import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}> 

        <p className={styles.brasil}>Brasil</p>

        <div className={styles.footerList}>

            <div className={styles.listEsquerda}>
                <p> Sobre </p>
                <p> Publicidade </p>
                <p> Negócios </p>
                <p> Como funciona a Pesquisa </p>
            </div>
                    
            <div className={styles.listDireita}>
                <p> Publicidade </p>
                <p> Termos </p>
                <p> Configurações </p>
            </div>
                
        </div>

        </footer>
    )
}

export default Footer