import React, { useState, useEffect } from 'react';
import FirstStep from '../../steps/FirtsStep';
import SecondStep from '../../steps/SecondStep';
import ThirdStep from '../../steps/ThirdStep';
import FourthStep from '../../steps/FourthStep';
import FifthStep from '../../steps/FifthStep';
import { useForm } from '../../useForm';

const StepsHolder = () => {
	const [step, setStep] = useState(0);
	const [values, handleChange] = useForm({
		carModel: '',
		customerName: '',
		customerEmail: '',
		customerPhone: '',
		problemDescription: '',
		cuponCode: '',
	});
	const [total, setTotal] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [isCuponValid, setIsCuponValid] = useState(false);
	const [isChecked, setIsChecked] = useState({
		isFilter: false,
		isBreaks: false,
		isTyers: false,
		isVentilation: false,
		isBalans: false,
		isOil: false,
	});

	const handleChecked = ({ target: { name, checked } }) => {
		setIsChecked({
			...isChecked,
			[name]: checked,
		});
	};

	useEffect(() => {
		if (isCuponValid) {
			const discount = 30 / 100;
			const totalDiscount = total - total * discount;
			setDiscount(totalDiscount);
		}
	}, [total, isCuponValid]);

	const props = {
		step,
		setStep,
		values,
		handleChange,
		isChecked,
		setIsChecked,
		handleChecked,
		total,
		setTotal,
		discount,
		setDiscount,
		isCuponValid,
		setIsCuponValid,
	};
	switch (step) {
		case 0:
			return <FirstStep {...props} />;
		case 1:
			return <SecondStep {...props} />;
		case 2:
			return <ThirdStep {...props} />;
		case 3:
			return <FourthStep {...props} />;
		case 4:
			return <FifthStep {...props} />;
	}
};

export default StepsHolder;
