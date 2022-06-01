import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import MyModal from './MyModal';

const Homepage = (props) => {
    
    const [currentCharacter, setCurrentCharacter] = useState(1);
    const [details, setDetails] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const showdetails = (character) => {
        const id = Number(character.url.split("/").slice(-2)[0]);
        setCurrentCharacter(id);
    };

    useEffect(() => {
        getcharacter(currentCharacter);
    }, [currentCharacter]);

    function getcharacter(id) {
        fetch('https://swapi.dev/api/people/' + id)
          .then(respuesta => respuesta.json())
          .then(data => setDetails(data)
          )
    }

    return (
        //Creacion de la tabla Homepage
        <div className='table-responsive container mt-2'>
            <table className='table table-bordered table-hover table-condensed'>
                <thead className='table-active bg-success'>
                    <tr>
                        <th>Personaje</th>
                        <th>Altura</th>
                        <th>Color de ojos</th>
                        <th>Año de nacimiento</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    {props.characters?.map((character) => (
                        <tr key={character.name}>
                            <td >{character.name}</td>
                            <td>{character.height}</td>
                            <td>{character.eye_color}</td>
                            <td>{character.birth_year}</td>
                            <td>{character.gender}</td>
                            { props.botonactivo > 0 &&
                                <h7>
                                <Button onClick={() => {setModalShow(true); showdetails(character)}}>
                                    Ver más
                                </Button>
                                {/*Modal*/}
                                <MyModal details={details} show={modalShow} onHide={() => setModalShow(false)} />
                                </h7>
                            }                         
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Homepage