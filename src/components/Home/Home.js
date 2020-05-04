import React from 'react';
import HomeFilters from "./Home-Filters";
import HomeResults from "./Home-Results";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
        <div>
            <h1>Adopciones</h1>
            <br />
            <HomeFilters />
            <br /><br />
            <HomeResults />
        </div>
        );
    }
}

export default Home;