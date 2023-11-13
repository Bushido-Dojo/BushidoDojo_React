
import React from 'react'
import img from '../images/logo.png'
import book from "../images/book.svg"
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>
                <img src={img} alt="logo do bushido" />
                <h1>BUSHIDO <span>DOJO</span></h1>
            </a>
            <div className={styles.options}>
                <a href="#" className={styles.about}>
                    <img src={book} alt="Imagem de Livro" />
                    <p>About us.</p>
                </a>
            </div>
        </header>
    )
}

export default Header