'use client'
import './sign.css'

function SignUp() {

  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-16 bg-white">
      {/* <div className="w-80 h-80 bg-red-600"></div> */}
      <img
        style={{ width: "600px", height: "450px" }}
        className="w-80 h-80 bg-red-600"
        src="https://www.chilliapple.co.uk/blog/app/uploads/2023/03/chilliapple-Blog-Image-benefits-of-Having-Mobile-App-for-eCommerce-Business.jpg"
      />
      <div className="flex flex-col w-60 gap-5">
        <h3 className="font-medium text-2xl">Create an account</h3>
        <span className="font-small">Enter your detail below</span>
        <input
          placeholder="Name"
          className="w-70 h-10 border-b-2 border-grey outline-none "
        
        />
        <input
          placeholder="Email or phone number"
          className="w-70 h-70 border-b-2 border-grey outline-none"
         
        />
        client
        <input type="checkbox"  
         />
         seller
          <input type="checkbox" 
         />
        <input
          placeholder="Password"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          
        />
        <button className="bg-red-600 text-white text-base p-2"  >
          Create account
        </button>
        <div className="sign in flex ">
          <button
            style={{ width: "300px" }}
            className="box-border border-2 border-gray-500 p-2 bg-white text-black hover:bg-gray-100 flex items-center space-x-4 "
          >
            <img style={{ width: "30px" }} src='{gmail' alt="" />
            Sign up with google
          </button>
        </div>
        <span>
          Already have account ?{" "}
          <a href="login" style={{ textDecoration: "underline" }}>
            log in
          </a>
        </span>
      </div>
    </div>
  );
}

export default SignUp;