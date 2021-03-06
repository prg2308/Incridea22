import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Input2 } from './StyledComponentsLogin';

const InputField = ({ placeholder, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Input2
				placeholder={placeholder}
				autocomplete='off'
				required={true}
				className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''
					}`}
				{...field}
				{...props}
			/>
			<ErrorMessage
				component='div'
				name={field.name}
				className='text-red-500 invalid-feedback'
			/>
		</>
	);
};

export default InputField;
