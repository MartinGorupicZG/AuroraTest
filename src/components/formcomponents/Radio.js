import React from 'react';
import styled from 'styled-components';
import Mercedes from '../../images/logos/Img1.png';
import Ford from '../../images/logos/Img2.png';
import Bmw from '../../images/logos/Img3.png';
import Wolk from '../../images/logos/Img4.png';
import Audi from '../../images/logos/Img5.png';
import Opel from '../../images/logos/Img6.png';
import Toyota from '../../images/logos/Img7.png';
import Maybach from '../../images/logos/Img8.png';
import Porsche from '../../images/logos/Img9.png';
import Ferrari from '../../images/logos/Img10.png';
import Lamborghini from '../../images/logos/Img11.png';
import Yugo from '../../images/logos/Img12.png';

function doNothing() {
	return null;
}

const images = [
	Mercedes,
	Ford,
	Bmw,
	Wolk,
	Audi,
	Opel,
	Toyota,
	Maybach,
	Porsche,
	Ferrari,
	Lamborghini,
	Yugo,
];

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 1fr 1fr 10%;
	padding: 0 8% 0 8%;
`;
const RadioContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Car = styled.p`
	font-size: 1.3rem;
	color: #000;
	text-align: center;
	width: 80%;
	display: inline-block;
	text-transform: uppercase;
	margin-top: 2rem;
	font-weight: 700;
`;

const radios = [
	{
		key: '1',
		name: 'carModel',
		value: 'Mercedes',
		id: 'r1',
	},
	{
		key: '2',
		name: 'carModel',
		value: 'Ford',
		id: 'r2',
	},
	{
		key: '3',
		name: 'carModel',
		value: 'Bmw',
		id: 'r3',
	},
	{
		key: '4',
		name: 'carModel',
		value: 'Wolkswagen',
		id: 'r4',
	},
	{
		key: '5',
		name: 'carModel',
		value: 'Audi',
		id: 'r5',
	},
	{
		key: '6',
		name: 'carModel',
		value: 'Opel',
		id: 'r6',
	},
	{
		key: '7',
		name: 'carModel',
		value: 'Toyota',
		id: 'r7',
	},
	{
		key: '8',
		name: 'carModel',
		value: 'Maybach',
		id: 'r8',
	},
	{
		key: '9',
		name: 'carModel',
		value: 'Porsche',
		id: 'r9',
	},
	{
		key: '10',
		name: 'carModel',
		value: 'Ferrari',
		id: 'r10',
	},
	{
		key: '11',
		name: 'carModel',
		value: 'Lamborghini',
		id: 'r11',
	},
	{
		key: '12',
		name: 'carModel',
		value: 'Zastava',
		id: 'r12',
	},
];

const Radio = ({ handleChange, values }) => {
	return (
		<Container onChange={handleChange}>
			{radios.map((item, i) => {
				return (
					<RadioContainer key={item.key}>
						<label className="radio__label" htmlFor={item.id}>
							<input
								className="radio__input"
								type="radio"
								name="carModel"
								value={item.value}
								checked={values.carModel === item.value}
								id={item.id}
								onChange={doNothing}
							/>
							<img className="radio__img" src={images[i]} alt={item.name} />
						</label>
						<Car>{item.value}</Car>
					</RadioContainer>
				);
			})}

			<h2
				className={
					values.carModel !== '' ? 'car__model__h2  active' : 'car__model__h2'
				}
			>
				Odabrali ste :<span>{values.carModel}</span>
			</h2>
		</Container>
	);
};

export default Radio;
