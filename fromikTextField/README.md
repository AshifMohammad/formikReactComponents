# React components using Formik 

In-built React components using Formik library to for UI validations

installations:
`npm i FormikTextField --save` 

Usages: 

```
import {FormikTextField} from 'FormikTextField'

const CustomTextFields = props => <FormikTextField
  name="myComponentTextfield" // mandatory prop
  obBlur= e => handleOnblur(e) // handle on blur
  value = 12234   // value can also be  passed from props/state
  ...props  // rest of the props supported by TextFields
 />
}


```

Props supported:
`name` | `string` - Mandatory prop for identification of the textfield 

`Name` | `Type`	| `Default	Description`

`autoComplete` | `string` This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the specification.

`autoFocus`	`bool` 		If true, the input element will be focused during the first mount.

`classes` |	`object`		Override or extend the styles applied to the component. See CSS API below for more details.

`defaultValue` | `	any	`	The default value of the input element.

`disabled` | `bool`		If true, the input element will be disabled.

`error`| 	`bool`		If true, the label will be displayed in an error state.

`FormHelperTextProps`|	`object`		Props applied to the FormHelperText element.

`fullWidth`	|`bool`		If true, the input will take up the full width of its container.

`helperText`|	`node`		The helper text content.


#Author : `Ashif Zafar `




