import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class HomeResults extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fixed>
                    <Typography component="div" style={{ backgroundColor: '#E3EBF7', height: '100vh' }} />
                </Container>
            </React.Fragment>
        );
    }
}

export default HomeResults;