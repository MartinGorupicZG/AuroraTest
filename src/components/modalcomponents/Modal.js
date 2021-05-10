import React from 'react';
import StepsHolder from './StepsHolder';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import car from '../../images/servis.jpg';

const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 85vw;
	height: 80vh;
	transform: translate(-50%, -50%);
	border: 1px solid #000;
	display: grid;
	grid-template-columns: 40% 1fr;
	-webkit-box-shadow: 7px 5px 22px 10px #000000;
	box-shadow: 7px 5px 22px 10px #000000;
	background: #fff;
	z-index: 2;
`;

const Image = styled.div`
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	background: url(${car});
	background-position: center;
	background-repeat: no repeat;
	background-size: 100% 100%;
`;
const ConfigWrapper = styled.div`
	width: 100%;
	heigth: 100%;
`;

const Header = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 10%;
	border-bottom: 2px solid #000;
`;
const Title = styled.h2`
	font-size: 3rem;
	letter-spacing: 0.5rem;
	margin: 0 auto;
	text-align: center;
	color: #000033;
`;

const Modal = ({ showModal, setShowModal }) => {
	return (
		<>
			{showModal ? (
				<ModalWrapper>
					<Image />
					<ConfigWrapper>
						<Header>
							<Title>KONFIGURATOR SERVISA</Title>
							<FaTimes
								style={{
									fontSize: '3rem',
									marginRight: '3rem',
									color: '#000033',
								}}
								aria-label="Zatvori Konfigurator"
								onClick={() => setShowModal(false)}
							/>
						</Header>
						<StepsHolder />
					</ConfigWrapper>
				</ModalWrapper>
			) : null}
		</>
	);
};

export default Modal;
