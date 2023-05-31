'use client'

import styles from './Button.module.css'

export default function Button({ text, onClick }: { text:string, onClick?: () => any}) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}
