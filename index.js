import React from'react'
import { TextField } from '@material-ui/core';
import PropTypes from "prop-types";
import { Field } from "formik";


const FormikTextField = ({ name, ...props})=>{
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
FormikTextField.propTypes = {
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func
};

FormikTextField.defaultProps = {
    onBlur: () => {}
};

module.exports.FormikTextField = FormikTextField
