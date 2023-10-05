import React, { useState } from 'react';

const AddStudent = (props) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [status, setStatus] = useState('');
	const [statusCode, setStatusCode] = useState(0);
	const [response, setResponse] = useState('');

	let onChangeEmail = (e) => {
		setEmail(e.target.value);
	}

	let onChangeName = (e) => {
		setName(e.target.value);
	}

	let onChangeStatus = (e) => {
		setStatus(e.target.value);
	}

	let onChangeStatusCode = (e) => {
		setStatusCode(e.target.value);
	}

	let handleStudentAdd = () => {
		fetch(`http://localhost:8080/student/add?email=${email}&name=${name}&status=${status}&status_code=${statusCode}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (res.ok()) {
					setResponse(`Successfully added ${email}`);
				} else {
					setResponse('Could not add student.');
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<div>
			<h3>Add Student Information</h3>
			<label>Email: </label>
			<input type="email" name="email" value={email} onChange={onChangeEmail}></input>
			<br></br>
			<label>Edit Name: </label>
			<input type="text" name="name" value={name} onChange={onChangeName}></input>
			<br></br>
			<label>Edit Status: </label>
			<input type="text" name="status" value={status} onChange={onChangeStatus}></input>
			<br></br>
			<label>Edit Status Code: </label>
			<input type="number" name="status_code" value={statusCode} onChange={onChangeStatusCode}></input>
			<button onClick={handleStudentAdd}>Save Changes</button>
			<div>{response}</div>
		</div>
	)
}

export default AddStudent;