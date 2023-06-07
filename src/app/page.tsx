'use client'

import Button from '@/components/Button';
import Input from '@/components/Input';
import PopUp from '@/components/PopUp';
import styles from './page.module.css';
import addEvent from '@/services/events';


export default function Home() {
  interface EventData {
    Event_Name: string;
    Event_Title: string | null;
    Event_Description: string | null;
    Quantity: number;
  }

  let  data:EventData;

  const handleButtonClick = () => {
    const eventNameInput = document.querySelector('#event_name') as HTMLInputElement;
    const eventTitleInput = document.querySelector('#event_title') as HTMLInputElement;
    const eventDescriptionInput = document.querySelector('#event_description') as HTMLInputElement;
    const eventQuantityInput = document.querySelector('#event_quantity') as HTMLInputElement;

    const eventData: EventData = {
      Event_Name: eventNameInput.value,
      Event_Title: eventTitleInput.value || null,
      Event_Description: eventDescriptionInput.value || null,
      Quantity: parseInt(eventQuantityInput.value),
    };

    if(eventNameInput.value.length==0 ){
      localStorage.setItem('pMostrar', JSON.stringify(true));
      localStorage.setItem('pState', JSON.stringify(false));
    }else{
      addEvent(eventData);
    }

    /*
    eventNameInput.value ="";
    eventTitleInput.value ="";
    eventDescriptionInput.value="";
    eventQuantityInput.value="0";
    return false;
    */
  }

  return (
    <main className={styles.unaClasse}>
      <PopUp/>
      <div className={styles.block}>
        <div className={styles.lPart}>
          <div>
            <img src="https://portal.t2client.com/Resources/Logo.png" id={styles.logo}></img>
            <span>
              Happy Christmas!
            </span>
          </div>
        </div>
        <form id="event_form"className={styles.rPart}>
          <Input label="Event Name" id="event_name" type={1} />
          <Input label="Event Title" id="event_title" type={1}/>
          <Input label="Description" id="event_description" type={2}/>
          <Input label="Quantity" id="event_quantity" type={3}/>
          <Button text='Submit' onClick={handleButtonClick}/>
        </form>
      </div>
    </main>
  )
}
