import React, { useState } from 'react';
import styled from 'styled-components';

export const CreateForm = ({ initial = {}, onSucsess}) => {
	const [ data, setData ] = useState({
		title: '',
		text: '',
		color: '#EBD1CC'
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setData((data) => ({
			...data,
			[name]: value
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let canSubmit = false;
		if (data.title !== '' && data.text !== '') {
			canSubmit = true;
		} else alert('please fill all of the fields');
		if (canSubmit) {
			onSucsess(data);
		}
	};

	return (
		<Form onSubmit={onSubmit}>
			<Input
				type="text"
				name="title"
				value={data.title}
				onChange={onChange}
				placeholder="Enter your heading..."
			/>

			<Textarea 
				type="text" 
				name="text" 
				value={data.text} 
				onChange={onChange} 
				placeholder="Enter your Note..." />

			<ColorContainer>
				<div>
					<ColorLabel color="#EDE9E6">
						<input
							type="radio"
							name="color"
							value="#EDE9E6"
							onChange={onChange}
							checked={data.color === '#EDE9E6'}
						/>
						<span />
					</ColorLabel>
					<ColorLabel color="#E1C5DB">
						<input
							type="radio"
							name="color"
							value="#E1C5DB"
							onChange={onChange}
							checked={data.color === '#E1C5DB'}
						/>
						<span />
					</ColorLabel>
					<ColorLabel color="#D68E4D">
						<input
							type="radio"
							name="color"
							value="#D68E4D"
							onChange={onChange}
							checked={data.color === '#D68E4D'}
						/>
						<span />
					</ColorLabel>
				</div>
				<Button>Create</Button>
				<div>
					<ColorLabel color="#EBD1CC">
						<input
							type="radio"
							name="color"
							value="#EBD1CC"
							onChange={onChange}
							checked={data.color === '#EBD1CC'}
						/>
						<span />
					</ColorLabel>
					<ColorLabel color="#FFBAB3">
						<input
							type="radio"
							name="color"
							value="#FFBAB3"
							onChange={onChange}
							checked={data.color === '#FFBAB3'}
						/>
						<span />
					</ColorLabel>
					<ColorLabel color="#C6C5DB">
						<input
							type="radio"
							name="color"
							value="#C6C5DB"
							onChange={onChange}
							checked={data.color === '#C6C5DB'}
						/>
						<span />
					</ColorLabel>
				</div>
			</ColorContainer>
		</Form>
	);
};
const Form = styled.form`
	max-width: 1300px;
	height: 500px;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	margin: 50px;
	padding: 30px 90px;
	background-color: #f0d1c5;
	border-radius: 15px;
	box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.75);
`;

const Input = styled.input`
	display: block;
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	margin-bottom: 20px;
	font-size: 15px;
	transition: all 0.3s ease;
	background-color: #eae8dd;
	margin-top: 20px;
	color: #523a28;
	border: 2px solid #523a28;

	&:focus {
		border-color: #f9521e;
		background-color: #eae8dd;
		outline: none;
	}
`;
const Textarea = styled.textarea`
	display: block;
	width: 100%;
	font-size: 24px;
	padding: 10px 10px;
	background-color: white;
	color: #523a28;
	transition: all 0.3s ease;
	border: 2px solid #523a28;
	border-radius: 10px;

	&:focus {
		border-color: #f9521e;
		outline: none;
	}
	height: 90%;
	background-color: #eae8dd;
	resize: none;
`;
const Button = styled.button`
	display: block;
	font-size: 20px;
	border: 2px solid #523a28;
	padding: 12px;
	font-weight: bold;
	transition: all 0.3s ease-in;
	border-radius: 10px;
	background-color: white;
	width: 360px;
	outline: none;
	margin: 0 55px 0 55px;

	&:hover {
		border-color: #f9521e;
		color: #f9521e;
		outline: none;
	}
	background-color: #eae8dd;
	color: #f9521e;
`;
const ColorContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-around;
	margin: 20px 0;
`;
const ColorLabel = styled.label`
	input {
		display: none;
	}
	span {
		display: inline-block;
		width: 40px;
		background-color: ${(p) => p.color};
		border: 1px solid #523a28;
		transition: all 0.3s ease;
		cursor: pointer;
		height: 40px;
		border-radius: 100%;
		margin: 0 15px;
	}

	input:checked + span {
		border: 3px solid #f9521e;
		box-shadow: 2px 11px 82px 2px rgba(0, 0, 0, 0.29);
	}
`;
