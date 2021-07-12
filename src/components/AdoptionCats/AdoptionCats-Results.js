import React from 'react';
import Container from "@material-ui/core/Container";
import AdoptionCatCard from '../AdoptionCats/AdoptionCat-Card'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import axios from 'axios';

class AdoptionCatsResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adoptionCats: []
          }
    };

    componentDidMount() {
        const url = process.env.REACT_APP_BASE_URL;
        axios.get(`${url}/getAllAdoptionCats`)
          .then(res => {
            const cats = res.data;
            this.setState({ adoptionCats: cats });
          })
      }

    render() {
        return (
            <React.Fragment>
                <Container fixed style={{backgroundColor:'#eee6f0', minHeight: '100vh', minWidth:'90vh', padding: 30 }}>
                    <GridList cols={3} style={{alignContent: "center"}}>
                        {this.state.adoptionCats.map(adoptionCat => {
                            return (
                                <GridListTile key={adoptionCat} style={{height: 500, padding: 30}}>
                                    <AdoptionCatCard cat={adoptionCat}/>
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