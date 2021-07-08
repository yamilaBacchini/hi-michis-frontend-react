import React from 'react';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Fab from "@material-ui/core/Fab";
import SearchIcon from '@material-ui/icons/Search';

class AdoptionCatsFilters extends React.Component {

    render() {
        return (
            <div>
                <form >
                    <TextField style={{marginRight: 15}} id="name" label="Nombre" />
                    <TextField style={{marginRight: 15}} id="age" label="Edad" />
                    <TextField style={{marginRight: 15}} id="color" label="Color" />
                    <FormControl style={{marginRight: 50}}>
                        <InputLabel id="demo-simple-select-label">Género</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            style={{minWidth:120}}
                        >
                            <MenuItem value={"M"}>Macho</MenuItem>
                            <MenuItem value={"F"}>Hembra</MenuItem>
                        </Select>
                    </FormControl>
                        <Fab color="primary" aria-label="add">
                            <SearchIcon />
                        </Fab>
                </form>
            </div>
        );
    }
}

export default AdoptionCatsFilters;