import React from'react'
import { TextField } from '@material-ui/core';
import PropTypes from "prop-types";
import { Field } from "formik";


const textfieldformik = ({ name, ...props})=>{
    const handleBlur = (e, field) => {
        field.onBlur(e);
        props.onBlur(e);
    };

    return (<Field name={name}>
        {({ field }) => (
            <TextField {...props} {...field} onBlur={e => handleBlur(e, field)} />
        )}
    </Field>)


}
textfieldformik.propTypes = {
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func
};

textfieldformik.defaultProps = {
    onBlur: () => {}
};

module.exports.textfieldformik = textfieldformik
