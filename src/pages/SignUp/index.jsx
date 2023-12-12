import React from 'react'
import Navigation from "../comonents/Navigation";
// import Navigation from "../comonents/Navigation";
import Footer from "../comonents/Footer";
const SignUp = () => {
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
          }} />
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
          }} />
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
          }} />
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
            }} />
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
          }} />
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
          }} />
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
          }} />
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
          }}>Sign Up</button>
        </div>
      </div>
        <Footer />
    </>

  )
}

export default SignUp