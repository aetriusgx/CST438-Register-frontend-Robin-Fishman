import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import EditStudent from './EditStudent';
import DeleteStudent from './DeleteStudent';
import AddStudent from './AddStudent';

const AdminHome = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    // called once after intial render
    fetchStudents();
  }, [])


  const fetchStudents = () => {
    fetch('http://localhost:8080/student/all')
      .then(res => res.json())
      .then(data => {
        setStudentList(data);
      })
      .catch(err => console.log(err));
  }


  return (
    <div>
      <div margin="auto" >
        <h3>Student List</h3>
        {studentList.map(student => <div>
          {student.email} - {student.name}
        </div>)}
        <BrowserRouter>
          <div>
            <Link to='add'>Add Student</Link>{' '}
            <Link to='edit'>Edit Student</Link>{' '}
            <Link to='delete'>Delete Student</Link>{' '}

            <Switch>
              <Route path='/edit' component={EditStudent} />
              <Route path='/delete' component={DeleteStudent} />
              <Route path='/add' component={AddStudent} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default AdminHome;