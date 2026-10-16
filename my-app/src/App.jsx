import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({firstName: "",email: "",age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Registration Form</h2>

        <label>Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br></br>

        <label>Email ID</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
         <br></br>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </div>
      <br></br>

      <div className="details-box">
        <h2>Entered Details</h2>
        <p>Name: {form.firstName}</p>
        <p>Email: {form.email}</p>
        <p>Age: {form.age}</p>
      </div>
    </div>
  );
}

export default App;