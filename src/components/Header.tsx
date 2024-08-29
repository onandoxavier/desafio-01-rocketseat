import rocketLogo from '../assets/rocket-logo.svg'
import styles from './Header.module.css'

export function Header(){
    return (
        <>
            <header>
                <img src={rocketLogo}/>
                <h1>
                    <span className={styles.to}>to</span><span className={styles.do}>do</span>
                </h1>
            </header>
        </>
    );
}