import React from 'react'
import Styles from './visual.module.css'

function Visual() {
    return (
        <visual className={Styles.visual}>
            <div className={Styles.params}>
                <p>Descubra o poder que</p>
                <p>existe <span>dentro de você.</span></p>
                <div className={Styles.params2}>
                    <p>Desenvolva técnicas de defesa pessoal, melhore sua forma física, desenvolva disciplina e autoconfiança.</p>
                </div>
            </div>
        </visual>
    )
}

export default Visual