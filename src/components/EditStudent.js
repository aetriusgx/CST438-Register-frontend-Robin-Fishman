import React, { useState } from 'react';

const EditStudent = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [statusCode, setStatusCode] = useState(0);

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

    let handleStudentEdit = () => {
        fetch('http://localhost:8080/student/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                status: status,
                statusCode: statusCode
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.name !== '') {
                    console.log("Change successful");
                }
            }).catch(err => console.log(err));
    }

    return (
        <div>
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
            <button onClick={handleStudentEdit}>Save Changes</button>
        </div>
    )
}

export default EditStudent;