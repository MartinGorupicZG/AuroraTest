import React, { useState } from 'react';

import Form from '../components/formcomponents/Form';
import ContentWrapper from '../components/formcomponents/ContentWrapper';
import ButtonWrapper from '../components/formcomponents/ButtonWrapper';
import Title from '../components/formcomponents/Title';
import Button from '../components/formcomponents/Button';

const ThirdStep = ({ setStep, step, values, handleChange }) => {
	const [error3, setError3] = useState(false);

	const checkIfError3 = (e) => {
		e.preventDefault();
		const errorArray = [
			values.customerName,
			values.customerEmail,
			values.customerPhone,
		];
		if (errorArray.includes('')) {
			setError3(true);
			setTimeout(() => {
				setError3(false);
			}, 500);
		} else {
			setStep(step + 1);
		}
	};

	return (
		<Form>
			<Title>Korak broj 3 : Odaberite uslugu</Title>
			<ContentWrapper>
				<div className="info__div__container">
					<div key="info1" className="info__input__wrap">
						<input
							id="input1"
							className={
								values.customerName.length > 3
									? 'info__input valid'
									: 'info__input'
							}
							required
							type="text"
							name="customerName"
							value={values.customerName}
							onChange={handleChange}
						></input>
						<label
							htmlFor="input1"
							className={
								values.customerName.length > 3
									? 'info__input__label valid'
									: 'info__input__label'
							}
						>
							Ime i prezime *
						</label>
					</div>

					<div key="info2" className="info__input__wrap">
						<input
							id="input2"
							className={
								values.customerEmail.length > 7 &&
								values.customerEmail.includes('@')
									? 'info__input valid'
									: 'info__input'
							}
							required
							type="text"
							name="customerEmail"
							value={values.customerEmail}
							onChange={handleChange}
						></input>
						<label
							htmlFor="input2"
							className={
								values.customerEmail.length > 7 &&
								values.customerEmail.includes('@')
									? 'info__input__label valid'
									: 'info__input__label'
							}
						>
							Email *
						</label>
					</div>

					<div key="info3" className="info__input__wrap">
						<input
							id="input3"
							className={
								values.customerPhone.length > 7
									? 'info__input valid'
									: 'info__input'
							}
							required
							type="text"
							name="customerPhone"
							value={values.customerPhone}
							onChange={handleChange}
						></input>
						<label
							htmlFor="input3"
							className={
								values.customerPhone.length > 7
									? 'info__input__label valid'
									: 'info__input__label'
							}
						>
							Telefon/Mobitel *
						</label>
					</div>

					<div key="info4" className="info__input__wrap">
						<input
							id="input4"
							className={
								values.problemDescription.length > 7
									? 'info__input valid'
									: 'info__input'
							}
							required
							type="textarea"
							name="problemDescription"
							value={values.problemDescription}
							onChange={handleChange}
						></input>
						<label
							htmlFor="input4"
							className={
								values.problemDescription.length > 7
									? 'info__input__label valid'
									: 'info__input__label'
							}
						>
							Opišite problem
						</label>
					</div>

					{error3 && (
						<p className="error">Polja označena zvijezdicom (*) su obavezna</p>
					)}
					<h5 className="info__bottom__message">
						Napomena polja označena sa ( * ) su obavezna!!!
					</h5>
				</div>
			</ContentWrapper>
			<ButtonWrapper>
				<Button onClick={() => setStep(step - 1)}>NAZAD</Button>
				<Button onClick={checkIfError3}>DALJE</Button>
			</ButtonWrapper>
		</Form>
	);
};

export default ThirdStep;
