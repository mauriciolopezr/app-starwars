import React, { useEffect, useState, useRef } from 'react'
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar.js';

function App() {

  const apiurl = 'https://swapi.dev/api/people'; //Url del Api

  //Declaracion de estados
  const [characters, setCharacters] = useState([])
  const [page, setpage] = useState(1)
  const inputSearch = useRef(null)
  const [textsearch, settextsearch] = useState('')
  const [botonactivo, setbotonactivo] = useState(0)
  
  //Llamada a la api
  const fetchCharacters = (apiurl) => {
    fetch(apiurl)
      .then(respuesta => respuesta.json())
      .then(data => setCharacters(data)
      )
      .catch(error => console.log(error))
  }

  //Funcion de busqueda en la api
  function searchcharacters(name) {
    fetch('https://swapi.dev/api/people/?search=' + name)
      .then(respuesta => respuesta.json())
      .then(data => setCharacters(data)
      )
  }

  //Funcion del numero de pagina
  const onChangePage = (pagenext) => {
  if (page + pagenext < 1) return;
  if (page + pagenext > 9) return;
  setpage(page + pagenext);
  }

  //evento del input de texto
  const onchangetextsearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    settextsearch(text);
  }

  //captura del texto de busqueda
  const onsearchsubmit = (event) => {
    if (event.key !== 'Enter') return;
    inputSearch.current.value = '';
    searchcharacters(textsearch);
    setbotonactivo(1);
    setpage(1);
  }

  useEffect(() => {
    fetchCharacters(apiurl);
  }, [])

  const clicknext = () => {
    fetchCharacters(characters.next)
  }

  const clickprevious = () => {
    fetchCharacters(characters.previous)
  }

  return (
    <>
      < Navbar titulo='Star Wars App' />

      {/*Input*/}
      <div className='container pagination mt-2'>
        <h5 className='mt-2'>Buscar: </h5>
        <input ref={inputSearch} className='col-sm-2 mx-sm-2'
          onChange={onchangetextsearch}
          onKeyDown={onsearchsubmit}
          type='text' placeholder='Busca un personaje' />
      </div>

      <Homepage characters={characters.results} botonactivo={botonactivo}/>

      {/*Paginacion*/}
      <section className='pagination justify-content-center mb-3'>
        {(characters.previous) ? (
          <button className='page-link' onClick={() => { onChangePage(-1); clickprevious() }} >Previa</button>
        )
          : null
        }
        <h5 className=' mt-2'> |{page}| </h5>
        {(characters.next) ? (

          <button className='page-link' onClick={() => { onChangePage(1); clicknext() }} >Siguiente</button>
        )
          : null
        }
      </section>
    </>
  );
}

export default App;
