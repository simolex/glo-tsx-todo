import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
    const getActiveClass = ({ isActive }: { isActive: boolean }): string => isActive ? `${styles.active} ${styles.link}` : styles.link
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" className={getActiveClass}>Main</NavLink>
                <NavLink to="/todo" className={getActiveClass}>ToDo</NavLink>
            </div>
        </header>
    )
}