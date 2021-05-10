import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Form from '../components/formcomponents/Form';
import ContentWrapper from '../components/formcomponents/ContentWrapper';
import ButtonWrapper from '../components/formcomponents/ButtonWrapper';
import Title from '../components/formcomponents/Title';
import Button from '../components/formcomponents/Button';
import service from '../components/formcomponents/service';

const Container = styled.div`
	width: 100%;
	height: 50%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	padding: 0 8% 0 8%;
	gap: 2rem;
`;
const TextContainer = styled.div`
	width: 100%;
	height: 50%;
	display: grid;
	grid-template-columns: 2fr 1fr;
	padding: 0 8% 0 8%;
`;
const CheckBoxTextContainer = styled.div`
	width: 100%;
	heigth: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CheckBoxText = styled.h4`
	font-size: 1.5rem;
	letter-spacing: 0.2em;
	width: 90%;
	font-weight: 700;
	text-align: center;
`;
const PriceWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-column: 1fr;
	grid-template-rows: 75% 25%;
	place-items: end start;
`;

const checkboxes = [
	{
		key: '1',
		name: 'isFilter',
		htmlFor: 'isFilter',
	},
	{
		key: '2',
		name: 'isBreaks',
		htmlFor: 'isBreaks',
	},
	{
		key: '3',
		name: 'isTyers',
		htmlFor: 'isTyers',
	},
	{
		key: '4',
		name: 'isVentilation',
		htmlFor: 'isVentilation',
	},
	{
		key: '5',
		name: 'isBalans',
		htmlFor: 'isBalans',
	},
	{
		key: '6',
		name: 'isOil',
		htmlFor: 'isOil',
	},
];
const SecondStep = ({
	step,
	setStep,
	isChecked,
	handleChecked,
	discount,
	total,
	setTotal,
	values,
	handleChange,
	isCuponValid,
	setIsCuponValid,
}) => {
	const [error2, setError2] = useState(false);
	const checkIfError2 = (e) => {
		e.preventDefault();
		if (Object.values(isChecked).includes(true)) {
			setStep(step + 1);
		} else {
			setError2(true);
			setTimeout(() => {
				setError2(false);
			}, 500);
		}
	};

	const checkTotal = (e) => {
		e.target.checked
			? setTotal(total + parseInt(e.target.value))
			: setTotal(total - parseInt(e.target.value));
	};

	useEffect(() => {
		if (values.cuponCode.toLowerCase() === 'tokić123') {
			setIsCuponValid(true);
		} else {
			setIsCuponValid(false);
		}
	}, [values.cuponCode]);

	return (
		<Form>
			<Title>Korak broj 2 : Odaberite uslugu</Title>
			<ContentWrapper>
				<Container>
					{checkboxes.map((item, i) => {
						return (
							<CheckBoxTextContainer key={item.key} onChange={checkTotal}>
								<input
									id={item.htmlFor}
									className="checkbox__input"
									type="checkbox"
									name={item.name}
									checked={isChecked[item.name] === true}
									onChange={handleChecked}
									value={service[i].price}
								/>
								<label className="checkbox__label" htmlFor={item.htmlFor} />
								<CheckBoxText>
									{service[i].service} <br /> cijena : {service[i].price} Kn
								</CheckBoxText>
							</CheckBoxTextContainer>
						);
					})}
				</Container>
				<TextContainer>
					{error2 && (
						<p className="error">Odabir barem jedne usluge je obavezan</p>
					)}
					<PriceWrapper>
						{isCuponValid && (
							<div className="discount__price__wrap">
								<div className="discount__price__top">
									OSNOVICA : {total} Kn
								</div>
								<div className="discount__price">
									Sniženje (30%) - {(total - discount).toFixed(2)} Kn
								</div>
							</div>
						)}

						{isCuponValid ? (
							<div className="total__price">
								UKUPNO : {discount.toFixed(2)} Kn
							</div>
						) : (
							<div className="total__price"> UKUPNO : {total} Kn</div>
						)}
					</PriceWrapper>
					<div className="cupon__input__wrap">
						<input
							className={isCuponValid ? 'cupon__input valid' : 'cupon__input'}
							required
							id="cupon"
							type="text"
							name="cuponCode"
							value={values.cuponCode}
							onChange={handleChange}
						/>
						<label
							className={
								isCuponValid
									? 'cupon__input__label valid'
									: 'cupon__input__label'
							}
							htmlFor="cupon"
						>
							{isCuponValid ? 'Kupon ispravan' : 'Imaš kupon ?'}
						</label>
					</div>
				</TextContainer>
			</ContentWrapper>
			<ButtonWrapper>
				<Button onClick={() => setStep(step - 1)}>NAZAD</Button>
				<Button onClick={checkIfError2}>DALJE</Button>
			</ButtonWrapper>
		</Form>
	);
};

export default SecondStep;
