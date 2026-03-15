import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const getUsers = () => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = () => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ name: name })
    })
      .then((data) => {
        getUsers();
        setName('');
      })
  }

  return (
    <>
      <div style={{ padding: '20px' }}>
      <h1>유저 관리 시스템</h1>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="이름을 입력하세요"
      />
      <button onClick={addUser}>등록</button>

      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App
