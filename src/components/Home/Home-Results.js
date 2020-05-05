import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class HomeResults extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fixed>
                    <Typography component="div" style={{ backgroundColor: '#eee6f0', height: '100vh' }} />
                </Container>
            </React.Fragment>
        );
    }
}

export default HomeResults;