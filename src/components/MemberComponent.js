import { useEffect, useState } from 'react';

function MemberComponent(){
    const [clients, setClients] = useState([]);
  
    useEffect(()=>{
      const getClients = async() => {      
        const response = await fetch(
          '/clients'
        );
      
      const data  = await response.json();
      setClients(data);
    };
    getClients();
    },[]);

    return (
        <div className='App'>
        <header className='App-header'>
          <div className='App-intro'>
            <h2>Members</h2>
            {clients.map((client) => (
          <div key={client.id}>
          <h2>Item: {client.name} ({client.email})</h2>
         </div>
        ))}
          </div>
        </header>
        
      </div>
    )
}

export default MemberComponent;