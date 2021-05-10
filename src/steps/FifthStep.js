import React from 'react';
import styled from 'styled-components';

const TextSalute = styled.div`
	width: 80%;
	height: 45%;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -65%);
`;
const SaluteTextBig = styled.h2`
	font-size: 4rem;
	text-align: center;
	color: #000033;
`;
const SaluteTextSmall = styled.h5`
	font-size: 2rem;
	text-align: center;
	margin-top: 6rem;
	color: #000033;
`;

const FifthStep = () => {
	return (
		<>
			<TextSalute>
				<SaluteTextBig>
					BOREALIS vas pozdravlja! Zaprimili smo vašu prijavu,očekujemo vas
					uskoro
				</SaluteTextBig>
				<SaluteTextSmall>
					PS :Ako je vaš proizvođač Zastava,nađite drugog servisera.
				</SaluteTextSmall>
			</TextSalute>
		</>
	);
};

export default FifthStep;
