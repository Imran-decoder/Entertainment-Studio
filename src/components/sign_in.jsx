import React,{useState} from 'react'


function sign_in() {
  return (<> 
  <div className='bg-signimg bg-cover w-screen h-screen text-white flex justify-center'>
   <div className='bg-white/20 backdrop-blur-sm p-10 rounded-lg shadow-md w-80 h-'>
   <form action="" >
      <h1>DETAILS</h1>
      <div><input type="text" required /> <label htmlFor="">Enter Name</label></div>
      <div><input type="email" required /> <label htmlFor="">Enter the Gmail</label></div>
      <div><input type="tel" required /> <label htmlFor="">Enter the Phone NO.</label></div>
      <div><input type="password" required /> <label htmlFor="">Enter the Password</label></div>
      <div><input type="checkbox" required />REMEMBER ME.  <a href=""> Forgot Password?</a></div>
    </form>
    <div></div>
   </div>
  </div>
 </>
    )
}

// export default sign_in

// import React, { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     Name: "",
//     Email_id: "",
//     number: "",
//     Password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const formValidation = (e) => {
//     e.preventDefault();
//     const { Name, Email_id, Password, number } = formData;

//     if (!Name) {
//       alert("Name can't be blank");
//     } else if (Password.length < 6) {
//       alert("Password can't be less than 6 digits");
//     } else if (number.length < 9) {
//       alert("Invalid Number");
//     } else {
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-start h-screen bg-cover bg-center" style={{ backgroundImage: "url(wallpaperflare.com_wallpaper.jpg)" }}>
//       <div className="bg-white/20 backdrop-blur-sm p-10 rounded-lg shadow-md w-80">
//         <form onSubmit={formValidation} className="flex flex-col items-center">
//           <h1 className="text-2xl mb-6">DETAILS</h1>
//           <div className="relative w-full mb-4">
//             <input
//               type="text"
//               name="Name"
//               value={formData.Name}
//               onChange={handleInputChange}
//               required
//               className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-white py-2 text-white placeholder-transparent"
//             />
//             <label className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white transition-all">Enter Name</label>
//           </div>

//           <div className="relative w-full mb-4">
//             <input
//               type="email"
//               name="Email_id"
//               value={formData.Email_id}
//               onChange={handleInputChange}
//               required
//               className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-white py-2 text-white placeholder-transparent"
//             />
//             <label className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white transition-all">Enter Email</label>
//           </div>

//           <div className="relative w-full mb-4">
//             <input
//               type="tel"
//               name="number"
//               value={formData.number}
//               onChange={handleInputChange}
//               required
//               className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-white py-2 text-white placeholder-transparent"
//             />
//             <label className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white transition-all">Enter Phone Number</label>
//           </div>

//           <div className="relative w-full mb-4">
//             <input
//               type="password"
//               name="Password"
//               value={formData.Password}
//               onChange={handleInputChange}
//               required
//               className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-white py-2 text-white placeholder-transparent"
//             />
//             <label className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white transition-all">Enter Password</label>
//           </div>

//           <div className="flex justify-between items-center w-full text-white text-sm mb-4">
//             <label>
//               <input type="checkbox" id="remember" className="mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="text-white">Forgot password?</a>
//           </div>

//           <button type="submit" className="bg-white/20 border-2 border-white py-2 px-6 rounded-full text-white hover:bg-white/40 hover:scale-105 transition-all">
//             Submit
//           </button>
//         </form>
//         <div className="text-white mt-6 text-sm">
//           Don't have an account? <a href="#" className="underline">Register</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;
