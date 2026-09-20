import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Card from './assets/components/Card';
import Form from './assets/components/Form';

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
  const [genereSelezionato, setGenereSelezionato] = useState('tutti')
  const [genereInserito, setGenereInserito] = useState('')
  const [filmFiltrati, setFilmFiltrati] = useState(film)
  const [listaFilm, setListaFilm] = useState(film)
 
  const addFilm = (nuovoFilm) => {
    setListaFilm([...listaFilm, nuovoFilm])
  }

  const handleClick = () => {
    setButtonOpened(!buttonOpened)
  }
  const handleButtonClick = (genere) => {
    setGenereSelezionato(genere)
    setButtonOpened(!buttonOpened)
  }
  const handleInputChange = (e) => {
    setGenereInserito(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    let risultato = listaFilm;
    if (genereSelezionato !== 'tutti') {
      risultato = listaFilm.filter((item) => item.genre === genereSelezionato)
    }

    if (genereInserito !== '') {
      risultato = listaFilm.filter((item) => item.genre === genereInserito)

    }
    setFilmFiltrati(risultato)
  }, [genereSelezionato, genereInserito, listaFilm])



  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form onSubmit={handleSubmit} className="form-inline">
          <input onChange={handleInputChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        <div className="dropdown text-start">
          <button onClick={handleClick} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Seleziona genere
          </button>
          <ul className={buttonOpened ? "dropdown-menu show" : "dropdown-menu "} >
            <li><button onClick={() => handleButtonClick('tutti')} className="dropdown-item" href="#">Mostra tutti i generi</button></li>
            <li><button onClick={() => handleButtonClick('Fantascienza')} className="dropdown-item" href="#">Fantascienza</button></li>
            <li><button onClick={() => handleButtonClick('Thriller')} className="dropdown-item" href="#">Thriller</button></li>
            <li><button onClick={() => handleButtonClick('Romantico')} className="dropdown-item" href="#">Romantico</button></li>
            <li><button onClick={() => handleButtonClick('Azione')} className="dropdown-item" href="#">Azione</button></li>
          </ul>
        </div >
      </nav>
      <br />
      <br />
      <br />
      {
        filmFiltrati.map((item) => (
          <Card
            key={item.index}
            title={item.title}
            genre={item.genre}>
          </Card>

        ))
      }

      <Form addFilm={addFilm} />
    </>
  )
}

export default App
