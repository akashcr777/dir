import { useState } from "react";

function StudentCard({ name, course, onDelete }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{course}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  function addStudent() {
    if (name && course) {
      setStudents([...students, { name, course }]);
      setName("");
      setCourse("");
    }
  }

  function deleteStudent(index) {
    setStudents(students.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Student Directory</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      <div>
        {students.map((s, i) => (
          <StudentCard
            key={i}
            name={s.name}
            course={s.course}
            onDelete={() => deleteStudent(i)}
          />
        ))}
      </div>
    </div>
  );
}


