import '@testing-library/jest-dom/extend-expect';

import {
	fireEvent,
	getByLabelText,
	render,
	screen,
} from '@testing-library/react';
import React from 'react';

import Calculator from '../Calculator';

describe('Calculator', () => {
	it('should render the calculator', () => {
		render(<Calculator />);

		expect(screen.getByLabelText('Monthly repayment')).toBeInTheDocument();
	});

	it('should allow the user to update input values and see monthly repayment update', () => {
		render(<Calculator />);

		fireEvent.change(screen.getByLabelText('Property value'), {
			target: { value: '200000' },
		});

		fireEvent.change(screen.getByLabelText('Deposit available'), {
			target: { value: '20000' },
		});

		fireEvent.change(screen.getByLabelText('Interest rate'), {
			target: { value: '2.4' },
		});

		fireEvent.change(screen.getByLabelText('Mortgage term'), {
			target: { value: '25' },
		});

		expect(screen.getByLabelText('Monthly repayment')).toHaveValue(798.48);
	});
});
