import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'; 
import { getCharacters } from './state/actions';


function App(props) {
  useEffect(() => {
    props.getCharacters();
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty!</h1>
      {props.characters.map(character => {
        return (
          <div>
            <h3>{character.name}</h3>
            <div>
              <img src={character.image} alt={character.name} key={character.id}/>
            </div>
          </div>
        )
      })}
      {props.error && (<h1>{props.error}</h1>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.results,
    error: state.error
  };
}

export default connect(mapStateToProps, { getCharacters })(App);
