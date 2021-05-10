import React from 'react';
import service from '../components/formcomponents/service';
import { FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
import Form from '../components/formcomponents/Form';
import ContentWrapper from '../components/formcomponents/ContentWrapper';
import ButtonWrapper from '../components/formcomponents/ButtonWrapper';
import Title from '../components/formcomponents/Title';
import Button from '../components/formcomponents/Button';

const FourthStep = ({
	step,
	setStep,
	values,
	isChecked,
	isCuponValid,
	discount,
	total,
}) => {
	const Alert = styled.p`
		width: 100%;
		height: 30%;
		padding: 0 8% 0 8%;
		color: #000033;
		line-height: 1.7;
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 0.3rem;
	`;
	const InfoGrid = styled.div`
		width: 100%;
		height: 70%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 20% 80%;
	`;
	return (
		<Form>
			<Title>Korak broj 4 : Pregled i potvrda vaših podataka</Title>
			<ContentWrapper>
				<Alert>
					Molimo vas da još jednom pregledate i potvrdite unesene
					podatke.Ukoliko želite promjeniti neki unos, možete kliknuti na gumb
					za uređivanje pored svake od kategorija.Kada ste provjerili i
					potvrdili vaš unos kliknite na gumb pošalji na dnu,za slanje unosa na
					servis.
				</Alert>
				<InfoGrid>
					<div className="service__display">
						<div className="service__heading__holder">
							<h4 className="service__selection">Odabrane usluge </h4>
							<FaEdit
								style={{ fontSize: '2.6rem', marginRight: '3rem' }}
								aria-label="Uredi Model Vozila"
								onClick={() => setStep(1)}
							/>
						</div>
						<div className="service__options__holder">
							{isChecked.isFilter && (
								<h5 className="service">
									{service[0].service} : <span>{service[0].price}</span> Kn
								</h5>
							)}

							{isChecked.isBreaks && (
								<h5 className="service">
									{service[1].service} : <span>{service[1].price}</span> Kn
								</h5>
							)}
							{isChecked.isTyers && (
								<h5 className="service">
									{service[2].service} : <span>{service[2].price}</span> Kn
								</h5>
							)}
							{isChecked.isVentilation && (
								<h5 className="service">
									{service[3].service} : <span>{service[3].price}</span> Kn
								</h5>
							)}
							{isChecked.isBalans && (
								<h5 className="service">
									{service[4].service} : <span>{service[4].price}</span> Kn
								</h5>
							)}
							{isChecked.isOil && (
								<h5 className="service">
									{service[5].service} : <span>{service[5].price}</span> Kn
								</h5>
							)}
						</div>
						<div className="service__price__holder">
							{isCuponValid && (
								<div className="service__show__discount">
									Popust (30%) {(total - discount).toFixed(2)} Kn
								</div>
							)}
							<div className="service__show__price">
								UKUPNO : {isCuponValid ? discount.toFixed(2) : total} Kn
							</div>
						</div>
					</div>
					<div className="car__model__display">
						<h4 className="car__model__selection">
							Model vozila : {values.carModel}
						</h4>
						<FaEdit
							style={{ fontSize: '2.6rem', marginRight: '3rem' }}
							aria-label="Uredi Model Vozila"
							onClick={() => setStep(0)}
						/>
					</div>
					<div className="customer__contact__holder">
						<div className="customer__info__heading">
							<h4 className="customer__info">Osobni podatci</h4>
							<FaEdit
								style={{ fontSize: '2.6rem', marginRight: '3rem' }}
								aria-label="osobni podatci"
								onClick={() => setStep(2)}
							/>
						</div>
						<p className="customer__email__info">
							<span>IME I PREZIME : </span>
							{values.customerName}
						</p>
						<p className="customer__email__info">
							<span>EMAIL : </span>
							{values.customerEmail}
						</p>
						<p className="customer__email__info">
							<span>TELEFON/MOBITEL : </span>
							{values.customerPhone}
						</p>
						<p className="customer__email__info">
							<span>OPIS PROBLEMA : </span>
							{values.problemDescription}
						</p>
					</div>
				</InfoGrid>
			</ContentWrapper>
			<ButtonWrapper>
				<Button onClick={() => setStep(step - 1)}>NAZAD</Button>
				<Button onClick={() => setStep(step + 1)}>POŠALJI</Button>
			</ButtonWrapper>
		</Form>
	);
};

export default FourthStep;
