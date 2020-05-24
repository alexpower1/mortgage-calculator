import React, { useState } from 'react';

interface FormInputProps {
	inputId: string;
	inputType: string;
	inputValue: number | string;
	inputLabel: string;
	inputStep?: string;
	inputDisabled?: boolean;
	onChange: Function;
}

const FormInput: React.FunctionComponent<FormInputProps> = ({
	inputId,
	inputType,
	inputValue,
	inputLabel,
	inputStep,
	inputDisabled,
	onChange,
}) => {
	return (
		<React.Fragment>
			<label htmlFor={inputId}>{inputLabel}</label>
			<input
				id={inputId}
				className="px-3 py-2 mb-3 leading-tight text-gray-700 border border-gray-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline disabled:bg-gray-100"
				type={inputType}
				value={inputValue}
				placeholder={inputLabel}
				step={inputStep}
				disabled={inputDisabled}
				onChange={(e) => onChange(e.target.value)}
			/>
		</React.Fragment>
	);
};

export default FormInput;
