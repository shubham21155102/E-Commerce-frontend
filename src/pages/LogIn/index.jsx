import React from 'react';
import Navigation from "../comonents/Navigation";
import Footer from "../comonents/Footer";
import Router from 'next/router';
const LogIn = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const LogInBtn = async (e) => {
    e.preventDefault();
    // console.log("username: ", username);
    // console.log("password: ", password);
    try {
      const res = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      console.log(res.status);
      if (res.status == 200) {
        localStorage.setItem("username", username);
        try{
          console.log("username: ",username)
          const res=await fetch('api/getcart',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username
            })
          })
          const data=await res.json();
          console.log(data);
        }
        catch(err){
          console.log(err);
        }

        Router.push("/");
      }
      else {
        alert("Invalid Username or Password");
      }
    } catch (err) {
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
        height: '100vh'
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
            <input
              type="text"
              name="username"
              placeholder="Username"
              style={{
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
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
              onChange={(e) => setPassword(e.target.value)}
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
          }} onClick={LogInBtn}>Log In</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
