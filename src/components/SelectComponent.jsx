import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({name, label, labelId, arrValue, handleChange, value}) {


    return (
        <FormControl sx={{m: 1, minWidth: 160}} size="small">
            <InputLabel id={name}>{label}</InputLabel>
            <Select
                labelId={labelId}
                name={name}
                value={value}
                label={label}
                onChange={e => handleChange(e)}
            >
                {arrValue.map((val, i) =>
                    <MenuItem key={i} value={val}>{val}</MenuItem>
                )}

            </Select>
        </FormControl>
    );
}
