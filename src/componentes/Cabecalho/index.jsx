import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import Logo from './assets/logo.png'
import CabecalhoLink from 'componentes/CabecalhoLink'

export default function Cabecalho () {
    return (
            <header className={styles.cabecalho}>
                <Link>
                    <img src={Logo} alt='Logo Cine Tag'/>
                </Link>
                <nav>
                    <CabecalhoLink url="./" >
                        Home
                    </CabecalhoLink>
                    <CabecalhoLink url="/favoritos">
                        Favoritos
                    </CabecalhoLink>
                </nav>
            </header>
    )
}