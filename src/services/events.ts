

export default async function addEvent(data:any): Promise<void> {
    try {
      const url = 'http://localhost:3000/api/newEvent';
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      const response = await fetch(url, options);

      console.log(response);

      if (!response.ok) {
        localStorage.setItem('pMostrar', JSON.stringify(true));
        localStorage.setItem('pState', JSON.stringify(false));
        
        throw new Error('Error al enviar los datos');
        
      }else{
        localStorage.setItem('pMostrar', JSON.stringify(true));
        localStorage.setItem('pState', JSON.stringify(true));
      }

      const responseData = await response.json();
      console.log(responseData); // respuesta del popUp
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
