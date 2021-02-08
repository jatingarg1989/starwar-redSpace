import React, {useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Dimmer,  Loader} from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Movies from './components/Movies';


function App() {
  const [people, setPeople] = useState([]); // people constant
  const [peopledetails, setPeopledetails] = useState([]); // people details constant

  const [planets, setPlanets] = useState([]); //planet constant
  const [movies, setMovies] = useState([]); // Movies constant
  const [loading, setLoading] = useState([true]); //indicate loading

  useEffect(() => {
    async function fetchPeople(){ //defining fetch people
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    } 

    // async function fetchPeopledetails(){ //defining fetch people details
    //   let res = await fetch('https://swapi.dev/api/people/:PeopleID?format=json');
    //   let data = await res.json();
    //   setPeopledetails(data);
    //   setLoading(false);
    // } 


    async function fetchPlanets(){ // defining fetch planets
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchMovies(){ // defining fetch planets
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setMovies(data.results);
      setLoading(false);
    }



    fetchPeople(); // calling fetch pople
    // fetchPeopledetails(); // calling fetch pople

    fetchPlanets();// calling fetch planets
    fetchMovies();// calling fetch planets


  }, [])

  //console.log('people', people);
  // console.log('planets', setPeopledetails);

  return (
    <>
        <Router>
          <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
              <Switch>
               <Route exact path='/'><Home /></Route>
               <Route exact path='/people'> <People data={people}/></Route>

               <Route exact path='/movies'> <Movies data={movies}/></Route>
               <Route exact path='/planets'> <Planets data={planets}/></Route>
             </Switch>
            )}
             
          </Container>
        </Router>
        
    </>
  );
}

export default App;
