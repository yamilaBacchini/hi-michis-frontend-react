import React from 'react';
import Container from "@material-ui/core/Container";
import AdoptionCatCard from '../AdoptionCats/AdoptionCat-Card'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

class AdoptionCatsResults extends React.Component {
    render() {
        let nums = Array.from(Array(9).keys());
        return (
            <React.Fragment>
                <Container fixed style={{backgroundColor:'#eee6f0', minHeight: '100vh', minWidth:'90vh', padding: 30 }}>
                    <GridList cols={3} style={{alignContent: "center"}}>
                        {nums.map(n => {
                            return (
                                <GridListTile key={n} style={{height: 500, padding: 30}}>
                                    <AdoptionCatCard />
                                </GridListTile>
                            );
                        })}
                    </GridList>
                </Container>
            </React.Fragment>
        );
    }
}

export default AdoptionCatsResults;