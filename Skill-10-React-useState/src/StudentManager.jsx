import React, { useState } from 'react';
import './StudentManager.css';

const StudentManager = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ravi", course: "CSE" },
    { id: 2, name: "Priya", course: "ECE" },
    { id: 3, name: "Amit", course: "MECH" },
    { id: 4, name: "Sneha", course: "IT" },
    { id: 5, name: "Kiran", course: "CIVIL" }
  ]);

  const [newStudent, setNewStudent] = useState({ id: '', name: '', course: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addStudent = () => {
    if (newStudent.id && newStudent.name && newStudent.course) {
      setStudents([...students, { ...newStudent, id: Number(newStudent.id) }]);
      setNewStudent({ id: '', name: '', course: '' });
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h2>Student Manager</h2>

      <div className="form-group">
        <input
          type="number"
          name="id"
          placeholder="Student ID"
          value={newStudent.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={newStudent.course}
          onChange={handleChange}
        />
        <button className="add-btn" onClick={addStudent}>Add Student</button>
      </div>

      {students.length === 0 ? (
        <p className="no-students">No students available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentManager;
