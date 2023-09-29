import React, { useState } from 'react';

const DeleteStudent = (props) => {
	const [email, setEmail] = useState('');
	const [response, setResponse] = useState('');

	let onChangeEmail = (e) => {
		setEmail(e.target.value);
	}

	let handleStudentDelete = () => {
		fetch(`http://localhost:8080/student/${email}?force=true`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (res.ok()) {
					setResponse("Successfully deleted student");
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<div>
			<h3>Student to delete</h3>
			<label>Email: </label>
			<input type="email" name="email" value={email} onChange={onChangeEmail}></input>
			<br></br>
			<button onClick={handleStudentDelete}>Delete Student</button>
			<div>{response}</div>
		</div>
	)
}

export default DeleteStudent;
