import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TeamMemberForm from './Form'

function App() {
  
  const initialFormValues = {name: '', email: '', role: ''};
  const initialTeamMembers = [
    {name:"John", email: "johnny@gmail.com", role: "Backend engineer"},
    {name:"Joseph", email: "joey@gmail.com", role: "Frontend engineer"},
    {name:"Jolene", email: "jojo@gmail.com", role: "Designer"},
  ]
  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;

    setTeamMembers([...teamMembers, newTeamMember]);
  }
  return (
    <div>
      <h1>Team Member Form</h1>
      <TeamMemberForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {
        teamMembers.map((member, index) => {
          return <div key={index}>{member.name} is a {member.role}, their email is {member.email}.</div>
        }) 
      }
    </div>
  );
}

export default App;
