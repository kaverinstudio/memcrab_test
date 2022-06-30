import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({id, label, labelId, arrValue, handleChange, value}) {


    return (
        <FormControl sx={{m: 1, minWidth: 160}} size="small">
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={labelId}
                name={id}
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
