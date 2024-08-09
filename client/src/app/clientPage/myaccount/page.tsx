// import React from 'react';
// import './myAccount.css';  

// const MyAccount = () => {
//   return (
//     <div className="profile-container">
//       {/* Sidebar */}
//       <aside className="sidebarr">
//         <div className="logo">
//           <a href="/" className="logo-text">Home / My Account</a>
//         </div>
//           <h4>Manage My Account</h4>
          
//         <nav className="nav">
//           <ul style={{marginTop:"25px"}}>
//             <li   className="active">My Profile</li>
//             <li  style={{marginLeft:"20px"}} >Address Book</li>
//             <li  style={{marginLeft:"20px"}} >My Payment Options</li>
           
           
//             <h3 style={{marginTop:"20px"}}    >My Orders  </h3>
//             <li style={{marginTop:"20px",marginLeft:"20px"}  } >My Returns</li>
//             <li style={{marginLeft:"20px"}} >My Cancellations</li>
//             <h3 >My Wishlist</h3>   
//           </ul>
//         </nav>
//       </aside>

      
//       <main className="main-content">
        


//         <div className="welcome">
//           <span>Welcome! <a href="#" className="user-name">Md Rimel</a></span>
//         </div>


//         <h4 className="title">Edit Your Profile</h4>
//         <form className="form">
//           <div className="form-group">
//             <div className="form-control">
//               <label>Enter your FullName</label>
//               <input type="text" placeholder="FullName"  style={{backgroundColor:'#f5f5f5',width:'18.7%'}} />
//             </div>

            
//           </div>

//          <div  className="form-group2"   > 
//           <div className="form-control">
//             <label>Enter Your Email</label>
//             <input style={{backgroundColor:'#f5f5f5',width:'18.7%'}} type="email" placeholder="example@gmail.com" disabled />
//           </div>

          
//          </div>



//             <div>
//             <h3>Password Changes</h3>
//             </div>
//           <div className="password-section">
            
//             <div className="form-group3" style={{display:'flex', flexDirection:'column',gap:'3px'}}>
//               <div className="form-control">
               
//                 <input style={{backgroundColor:'#f5f5f5',width:'18.6%'}} type="password" placeholder='Change Your Password'  />
//               </div>
              
//             </div>
//           </div>
          

//           <div className="form-actions">
//             <button type="button" className="cancel-button">Cancel</button>
//             <button type="submit" className="save-button">Save Changes</button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default MyAccount;

'use client'
import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import './myAccount.css';  

// Define a User type for user data
interface User {
  id: number;
  name: string;
  mail: string;
  password: string;
  type: string; // or use a more specific type if applicable
}

const MyAccount: React.FC = () => {
  // Define state types
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch user ID from localStorage
    const id = JSON.parse(localStorage.getItem('user') || '{}').id;
    setUserId(id);

    // Fetch user data from backend
    axios.get<User>(`http://localhost:3000/users/getall/${id}`)
      .then(response => {
        const user = response.data;
        setFullName(user.name);
        setEmail(user.mail);
      })
      .catch(err => console.error(err));
  }, []);

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.put<User>(`http://localhost:3000/users/update/${userId}`, {
        name: fullName,
        mail: email,
        password: password || undefined, // Only include if password is provided
        type: 'client' // Replace with the actual user type or remove if not needed
      });
      alert('Profile updated successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebarr">
        <div className="logo">
          <a href="/" className="logo-text">Home / My Account</a>
        </div>
        <h4>Manage My Account</h4>
        <nav className="nav">
          <ul style={{ marginTop: "25px" }}>
            <li className="active">My Profile</li>
            <li style={{ marginLeft: "20px" }}>Address Book</li>
            <li style={{ marginLeft: "20px" }}>My Payment Options</li>
            <h3 style={{ marginTop: "20px" }}>My Orders</h3>
            <li style={{ marginTop: "20px", marginLeft: "20px" }}>My Returns</li>
            <li style={{ marginLeft: "20px" }}>My Cancellations</li>
            <h3>My Wishlist</h3>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="welcome">
          <span>Welcome! <a href="#" className="user-name">Md Rimel</a></span>
        </div>

        <h4 className="title">Edit Your Profile</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-control">
              <label>Enter your FullName</label>
              <input
                type="text"
                placeholder="FullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ backgroundColor: '#f5f5f5', width: '18.7%' }}
              />
            </div>
          </div>

          <div className="form-group2">
            <div className="form-control">
              <label>Enter Your Email</label>
              <input
                style={{ backgroundColor: '#f5f5f5', width: '18.7%' }}
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled // Keep email disabled if you don’t want it to be updated
              />
            </div>
          </div>

          <div>
            <h3>Password Changes</h3>
          </div>
          <div className="password-section">
            <div className="form-group3" style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div className="form-control">
                <input
                  style={{ backgroundColor: '#f5f5f5', width: '18.6%' }}
                  type="password"
                  placeholder="Change Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save Changes</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MyAccount;
