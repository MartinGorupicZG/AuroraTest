import { useState } from 'react';

export const useForm = (startValues) => {
	const [values, setValues] = useState(startValues);

	return [
		values,
		(e) => {
			setValues({
				...values,
				[e.target.name]: e.target.value,
			});
		},
	];
};
