import { useState } from 'react';
import Characters from './components/Characters';
import imageRickMorty from './img/rick-morty.png';

function App() {
  const[characters, setCharacters]= useState(null);

  const reqAi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi.results);
   
  };

  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty </h1>
        {characters ? (
           <Characters characters={characters} setCharacters={setCharacters} />
        ) :(
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-home'/>
          <button onClick={reqAi} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
       
      </header>
    </div>
  );
}

export default App;
