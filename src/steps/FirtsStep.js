import React, { useState } from 'react';
import Button from '../components/formcomponents/Button';
import ButtonWrapper from '../components/formcomponents/ButtonWrapper';
import ContentWrapper from '../components/formcomponents/ContentWrapper';
import Form from '../components/formcomponents/Form';
import Title from '../components/formcomponents/Title';
import Radio from '../components/formcomponents/Radio';

const FirtsStep = ({ step, setStep, values, handleChange }) => {
	const [error1, setError1] = useState(false);

	const checkIfError = (e) => {
		e.preventDefault();

		if (values.carModel === '') {
			setError1(true);
			setTimeout(function () {
				setError1(false);
			}, 500);
		} else {
			setStep(step + 1);
		}
	};

	const props = { values, handleChange };
	return (
		<Form>
			<Title>Korak 1 : Odaberite svog proizvođača</Title>
			<ContentWrapper>
				<Radio {...props} />
				{error1 && <p className="error">Obavezan odabir proizvođača</p>}
			</ContentWrapper>
			<ButtonWrapper>
				<Button onClick={checkIfError}>DALJE</Button>
			</ButtonWrapper>
		</Form>
	);
};

export default FirtsStep;
