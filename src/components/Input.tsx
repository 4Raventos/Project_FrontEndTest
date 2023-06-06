'use client'

import internal from 'stream'
import styles from './Input.module.css'

export default function Input({ label, id, type }: { label:string, id:string, type:number}) {
    
    if(type === 1){
        return (
            <div className={styles.input}>
                <label>{label}</label>
                <br />
                <input type="text" id={id}/>
            </div>
        )

    }else if(type === 2){
        return (
            <div className={styles.input}>
                <label>{label}</label>
                <br />
                <input type="paragraph" id={id}/>
            </div>
        )

    }else if(type === 3){
        return (
            <div className={styles.input}>
                <label>{label}</label>
                <input type="number" min={1} defaultValue={1} id={id}/>
                
            </div>
        )

    } else {
        // Si el tipo no coincide con ninguno de los casos anteriores, devuelve un elemento JSX nulo
        return null;
    }
    
  }