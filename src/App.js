import { useState, useEffect } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/images.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [retrievalUrl, setRetrievalUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const resp = await fetch(retrievalUrl)
    const data = await resp.json()
    console.log(data)
    setRetrievalUrl(data.next)

    function createPokemonObject(result) {
      result.forEach(async element => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
        const data = await res.json()
        setAllPokemon(currentList => [...currentList, data])
      });
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Toms Pokedex
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="app-container">
        <div className="pokemon-container">
          <div>
            <Container className="all-container">
              <br></br>
              <Row xs={1} md={4} className="g-4">
                {allPokemon.map((pokemon, index) =>

                  <Col>
                    <PokemonThumbnail
                      id={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.sprites.other.dream_world.front_default}
                      type={pokemon.types[0].type.name}
                      key={index}>
                    </PokemonThumbnail>
                  </Col>
                )

                }
              </Row>
              <br></br>

              <Button className="load-more" onClick={() => getAllPokemon()}>Load More</Button>
            </Container>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
