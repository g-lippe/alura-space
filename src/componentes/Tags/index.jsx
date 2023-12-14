import React from 'react'
import styles from './Tags.module.scss'

export default function Tags() {
  return (
    <div className={styles.Tags__lista}>
      <p>Filtre por tags:</p>
      <ul >
        <li className={styles.Tags}>Estrelas</li>
        <li>Galáxias</li>
        <li>Lua</li>
        <li>Planetas</li>
      </ul>
    </div>
  )
}
