import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';

const Calculator = () => {
	const [mortgagePayment, setMortgagePayment] = useState('');
	const [propertyValue, setPropertyValue] = useState('187500');
	const [depositAvailable, setDepositAvailable] = useState('18750');
	const [interestRate, setInterestRate] = useState('2.51');
	const [mortgageTerm, setMortgageTerm] = useState('35');

	useEffect(() => {
		const monthlyInterestRate: number = parseFloat(interestRate) / 100 / 12;

		const numberOfPayments: number = parseInt(mortgageTerm) * 12;

		const x: number =
			monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);

		const y: number = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

		const result: number =
			(parseInt(propertyValue) - parseInt(depositAvailable)) * (x / y);

		setMortgagePayment(result.toFixed(2).toString());
	}, [propertyValue, depositAvailable, interestRate, mortgageTerm]);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			className="container flex flex-col justify-center py-10 mx-auto"
			onSubmit={(e) => handleFormSubmit(e)}
		>
			<FormInput
				inputId="property-value"
				inputType="number"
				inputValue={propertyValue}
				inputLabel="Property value"
				onChange={(value: React.SetStateAction<string>) =>
					setPropertyValue(value)
				}
			/>

			<FormInput
				inputId="deposit-available"
				inputType="number"
				inputValue={depositAvailable}
				inputLabel="Deposit available"
				onChange={(value: React.SetStateAction<string>) =>
					setDepositAvailable(value)
				}
			/>

			<FormInput
				inputId="interest-rate"
				inputType="number"
				inputValue={interestRate}
				inputLabel="Interest rate"
				inputStep="0.01"
				onChange={(value: React.SetStateAction<string>) =>
					setInterestRate(value)
				}
			/>

			<FormInput
				inputId="mortgage-term"
				inputType="number"
				inputValue={mortgageTerm}
				inputLabel="Mortgage term"
				onChange={(value: React.SetStateAction<string>) =>
					setMortgageTerm(value)
				}
			/>

			<FormInput
				inputId="monthly-repayment"
				inputType="number"
				inputValue={mortgagePayment}
				inputLabel="Monthly repayment"
				inputStep="0.01"
				inputDisabled
				onChange={(value: React.SetStateAction<string>) =>
					setMortgagePayment(value)
				}
			/>
		</form>
	);
};

export default Calculator;
