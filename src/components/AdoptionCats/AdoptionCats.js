import React from 'react';
import AdoptionCatsFilters from './AdoptionCats-Filters';
import AdoptionCatsResults from './AdoptionCats-Results';
import './AdoptionCats.css';

class AdoptionCats extends React.Component {
    render() {
        return (
        <div style={{marginTop: 70}}>
            <AdoptionCatsFilters />
            <br /><br />
            <AdoptionCatsResults />
        </div>
        );
    }
}

export default AdoptionCats;