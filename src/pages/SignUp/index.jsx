import React, { useState } from 'react'
import Navigation from "../comonents/Navigation";
import Footer from "../comonents/Footer";
import Router from 'next/router';
const SignUp = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');
  useEffect(()=>{
    try{
      const url=localStorage.getItem('url');
      setUrl(url);
    }
    catch(err){
      console.log(err)
    }
  
  },[url])

  const SignUpBtn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          username,
          password,
          cpassword,
          phone,
          url
        })
      })
      console.log(res.status);
      if (res.status == 200) {
        alert("Registered Successfully");
        Router.push("/LogIn");

      }
      else {
        alert("Invalid Username or Password");
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navigation />
      <div style={{
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
        backgroundColor: '#34495e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150vh'
      }}>
        <div className="box" style={{
          width: '300px',
          padding: '40px',
          background: '#191919',
          textAlign: 'center',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)'
        }}>
          <label>
            <input type='text' name='fname' placeholder='First Name' style={{
              border: '2px solid #3498db',
              background: 'none',
              display: 'block',
              margin: '20px auto',
              textAlign: 'center',
              padding: '14px 10px',
              width: '200px',
              outline: 'none',
              color: 'white',
              borderRadius: '20px',
              transition: '0.25s'
            }}
              onChange={(e) => { setFname(e.target.value) }}
            />
          </label>
          <label>
            <input type='text' name='lname' placeholder='Last Name' style={{
              border: '2px solid #3498db',
              background: 'none',
              display: 'block',
              margin: '20px auto',
              textAlign: 'center',
              padding: '14px 10px',
              width: '200px',
              outline: 'none',
              color: 'white',
              borderRadius: '20px',
              transition: '0.25s'
            }}
              onChange={(e) => { setLname(e.target.value) }}
            />
          </label>
          <label>
            <input type='text' name='email' placeholder='Email' style={{
              border: '2px solid #3498db',
              background: 'none',
              display: 'block',
              margin: '20px auto',
              textAlign: 'center',
              padding: '14px 10px',
              width: '200px',
              outline: 'none',
              color: 'white',
              borderRadius: '20px',
              transition: '0.25s'
            }}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </label>

          <label>
            <input type="text" name="username" placeholder="Username" style={{
              border: '2px solid #3498db',
              background: 'none',
              display: 'block',
              margin: '20px auto',
              textAlign: 'center',
              padding: '14px 10px',
              width: '200px',
              outline: 'none',
              color: 'white',
              borderRadius: '20px',
              transition: '0.25s'
            }}
              onChange={(e) => { setUsername(e.target.value) }}
            />
          </label>
          <label></label>
          <input type="password" name="password" placeholder="Password" style={{
            border: '2px solid #3498db',
            background: 'none',
            display: 'block',
            margin: '20px auto',
            textAlign: 'center',
            padding: '14px 10px',
            width: '200px',
            outline: 'none',
            color: 'white',
            borderRadius: '20px',
            transition: '0.25s'
          }}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <label>
            <input type='text' name='cpassword' placeholder='Confirm Password' style={{
              border: '2px solid #3498db',
              background: 'none',
              display: 'block',
              margin: '20px auto',
              textAlign: 'center',
              padding: '14px 10px',
              width: '200px',
              outline: 'none',
              color: 'white',
              borderRadius: '20px',
              transition: '0.25s'
            }}
              onChange={(e) => { setCpassword(e.target.value) }}
            />
          </label>
          <label>
            <input type='text' name='phone' placeholder='Phone' style={{
              border: '2px solid #3498db',
              background: 'none',
              display: 'block',
              margin: '20px auto',
              textAlign: 'center',
              padding: '14px 10px',
              width: '200px',
              outline: 'none',
              color: 'white',
              borderRadius: '20px',
              transition: '0.25s'
            }}
              onChange={(e) => { setPhone(e.target.value) }}
            />
          </label>
          <button type="submit" style={{
            border: '2px solid #2ec712',
            background: 'none',
            display: 'block',
            margin: '20px auto',
            textAlign: 'center',
            textDecoration: 'none',
            padding: '14px 10px',
            width: '200px',
            outline: 'none',
            color: 'white',
            borderRadius: '20px',
            transition: 'background-color 0.25s',
            cursor: 'pointer'
          }}
            onClick={SignUpBtn}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default SignUp