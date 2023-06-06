'use client'

import Button from '@/components/Button';
import styles from './PopUp.module.css'
import { useState } from 'react';

export default function PopUp() {
  const [isVisible, setIsVisible] = useState(true);
  const mostrar = JSON.parse(localStorage.getItem('pMostrar') || 'false');
  const state = JSON.parse(localStorage.getItem('pState') || 'false');

  const form = document.getElementById('event_form');

  const popUpStyle = {
    backgroundColor: state ? '#caffc1' : '#ffb5b5',
  };

  const popUpButtonClick = () => {
    //const popup = document.getElementById('popup');
    setIsVisible(false);
    if(form!=null){
      form.style.pointerEvents = "auto";
    }


  };

  if(mostrar){
    localStorage.setItem('pMostrar', JSON.stringify(false));

    if(form!=null){
      form.style.pointerEvents = "none";
    }


    //setIsVisible(true);
    if(state){
      return (
        <div className={styles.popupScreen}>
          <div className={styles.popup} id="popup" style={popUpStyle}>
            <div className={styles.popupcontent}>
              <div className={styles.poptitle}>
                <h4>Notification</h4>
                <h5>Succsess</h5>
              </div>
              <p id="pop_text">Data has been submited</p>
              <Button text="Close" onClick={popUpButtonClick} />
              
            </div>
          </div>
        </div>
        
      );
    }else{
      return (
        <div className={styles.popupScreen}>
          <div className={styles.popup} id="popup" style={popUpStyle}>
            <div className={styles.popupcontent}>
              <div className={styles.poptitle}>
                <h4>Notification</h4>
                <h5>Error</h5>
              </div>
              <p id="pop_text">There are some error !!</p>
              <Button text="Close" onClick={popUpButtonClick} />
            </div>
          </div>
        </div>
      );
    }
  }else{
    //setIsVisible(false);
    return (
     <div></div>
    );
  }
}
