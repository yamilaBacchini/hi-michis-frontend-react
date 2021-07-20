import React from 'react';
import LostAndFoundCatsFilters from './LostAndFoundCats-Filters';
import LostAndFoundCatsResults from './LostAndFoundCats-Results';
import './LostAndFoundCats.css';

class LostAndFoundCats extends React.Component {

    render() {
        return (
        <div style={{marginTop: 70}}>
            <LostAndFoundCatsFilters />
            <br /><br />
            <LostAndFoundCatsResults />
        </div>
        );
    }
}

export default LostAndFoundCats;