import React from 'react';
import HomeFilters from "./Home-Filters";
import HomeResults from "./Home-Results";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
        <div style={{marginTop: 70}}>
            <HomeFilters />
            <br /><br />
            <HomeResults />
        </div>
        );
    }
}

export default Home;