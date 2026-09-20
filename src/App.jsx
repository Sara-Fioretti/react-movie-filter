import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Card from './assets/components/Card';

const film = [
  { index: 1, title: 'Inception', genre: 'Fantascienza' },
  { index: 2, title: 'Il Padrino', genre: 'Thriller' },
  { index: 3, title: 'Titanic', genre: 'Romantico' },
  { index: 4, title: 'Batman', genre: 'Azione' },
  { index: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { index: 6, title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
const [buttonOpened, setButtonOpened] = useState(false)
const[genereSelezionato, setGenereSelezionato] = useState ('tutti')
const [filmFiltrati, setFilmFiltrati] = useState(film)

const handleClick = ()=>{
  setButtonOpened (!buttonOpened)
}
const handleButtonClick = (genere)=>{
  setGenereSelezionato (genere)
  setButtonOpened(!buttonOpened)
}

useEffect(()=>{
   
    if(genereSelezionato == 'tutti'){
      setFilmFiltrati(film)
    }else{
      const risultato = film.filter((item) => item.genre === genereSelezionato)
      setFilmFiltrati(risultato)
    }
}, [genereSelezionato])

  return (
    <>
      <div className="dropdown text-start">
        <button onClick={handleClick} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Seleziona genere
        </button>
        <ul className={buttonOpened ? "dropdown-menu ": "dropdown-menu show"} >
          <li><button onClick={()=>handleButtonClick('tutti')} className="dropdown-item" href="#">Mostra tutti i generi</button></li>
          <li><button onClick={()=>handleButtonClick('Fantascienza')} className="dropdown-item" href="#">Fantascienza</button></li>
          <li><button onClick={()=>handleButtonClick('Thriller')} className="dropdown-item" href="#">Thriller</button></li>
          <li><button onClick={()=>handleButtonClick('Romantico')} className="dropdown-item" href="#">Romantico</button></li>
          <li><button onClick={()=>handleButtonClick('Azione')} className="dropdown-item" href="#">Azione</button></li>
        </ul>
      </div>
<br />
<br />
<br />
      {filmFiltrati.map((item) => (
        <Card
          key={item.index}
          title={item.title}
          genre={item.genre}>
        </Card>
      ))
      }

    </>
  )
}

export default App
