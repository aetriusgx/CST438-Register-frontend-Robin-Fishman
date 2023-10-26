import React, { useState } from 'react';
import fetchStudents from './AdminHome';

const DeleteStudent = (props) => {
	const [email, setEmail] = useState('');
	const [forceDelete, setForceDelete] = useState(true);
	const [response, setResponse] = useState('');

	let onChangeEmail = (e) => {
		setEmail(e.target.value);
	}

	let onChangeForce = (e) => {
		setForceDelete(e.target.checked);
	}

	let handleStudentDelete = () => {
		fetch(`http://localhost:8080/student/${email}?force=${forceDelete}`, {
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
		fetchStudents();
	}

	return (
		<div>
			<h3>Student to delete</h3>
			<label>Email: </label>
			<input type="email" name="email" value={email} onChange={onChangeEmail}></input>
			<br></br>
			<label>Force Delete </label>
			<input type="checkbox" name="force" onChange={onChangeForce}></input>
			<button onClick={handleStudentDelete}>Delete Student</button>
			<div>{response}</div>
		</div>
	)
}

export default DeleteStudent;
