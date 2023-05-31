'use client'

import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {

  const handleButtonClick = () => {
    console.log("Has clickado el boton!")
  }

  return (
    <main className={styles.unaClasse}>
      <div>
        <span>Bienvenido a la prueba técnica de T2C!</span>
      </div>
      <div>
        <span>
          Cómo pequeña ayudita te dejamos aqui un boton de ejemplo para que puedas familiarizarte en como funciona el framework.
        </span>
        <span>
          <Button text='Click me!' onClick={handleButtonClick} />
        </span>
      </div>
    </main>
  )
}
