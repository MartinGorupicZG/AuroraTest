import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/modalcomponents/Modal';

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	width: 25rem;
	height: 8rem;
	border: 3px solid #000033;
	color: #000033;
	font-size: 2.2rem;
	font-weight: bold;
`;

function App() {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<>
			<Container>
				<Button onClick={openModal}>KONFIGURATOR SERVISA</Button>
				<Modal showModal={showModal} setShowModal={setShowModal} />
			</Container>
		</>
	);
}

export default App;
