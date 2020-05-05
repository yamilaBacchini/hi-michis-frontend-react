import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AdoptionCatCard from '../AdoptionCat/AdoptionCar-Card'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

class HomeResults extends React.Component {
    render() {
        let nums = Array.from(Array(9).keys());
        return (
            <React.Fragment>
                <Container fixed style={{backgroundColor:'#eee6f0', minHeight: '100vh', minWidth:'90vh', padding: 30 }}>
                    <GridList cols={3}>
                        {nums.map(n => {
                            return (
                                <GridListTile key={n} style={{height: 500}}>
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

export default HomeResults;