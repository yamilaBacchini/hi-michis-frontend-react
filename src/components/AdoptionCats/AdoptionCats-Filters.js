import React from 'react';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';
import { Container, Row, Col, Image } from 'react-bootstrap';

class AdoptionCatsFilters extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <Row style={{marginLeft: '32%'}}>
                        <FormControl style={{marginRight: 20}}>
                            <InputLabel id="age-select-label">Edad</InputLabel>
                            <Select
                                labelId="age-select-label"
                                id="age-select"
                                style={{minWidth:200}}
                            >
                                <MenuItem value=""><em>-</em></MenuItem>
                                <MenuItem value={"0"}>Bebe (Menor a 1 año)</MenuItem>
                                <MenuItem value={"1"}>Adulto (de 1 a 6 años)</MenuItem>
                                <MenuItem value={"2"}>Adulto mayor (Mayor a 6 años)</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField style={{marginRight: 15}} id="color" label="Color" />
                        <FormControl style={{marginRight: 50}}>
                            <InputLabel id="gender-select-label">Género</InputLabel>
                            <Select
                                labelId="gender-select-label"
                                id="gender-select"
                                style={{minWidth:120}}
                            >
                                <MenuItem value=""><em>-</em></MenuItem>
                                <MenuItem value={"M"}>Macho</MenuItem>
                                <MenuItem value={"F"}>Hembra</MenuItem>
                            </Select>
                        </FormControl>
                        <Fab color="primary" aria-label="add">
                            <SearchIcon />
                        </Fab>
                        </Row>
                        <Row>
                            <Icon className="fa fa-chevron-down"/>
                        </Row>

                        
                </form>
            </div>
        );
    }
}

export default AdoptionCatsFilters;