import React, {Component} from 'react';
import DisplayMovies from './DisplayMovies';

class Netflix extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const netflixMovies = [{movieName:'Pulp Fiction', yearReleased:'1994',genre:'Drama/Crime'},{movieName:'Kill la Kill',yearReleased:'2013',genre:'Action/Comedy'},{movieName:'Persona 3 the Movie #1: Spring of Birth', yearReleased:'2013',genre:'Action/Fantasy'}];
        return(
            <div>
                {netflixMovies.map(
                        (m) => {
                           return (<DisplayMovies name = {m.movieName} year = {m.yearReleased} genre = {m.genre}/>);
                        }
                )}
            </div>
        );
    }
}

export default Netflix;