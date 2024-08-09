"use client";
import { useState } from "react";
import "./sign.css";
import axios from "axios";
import { useRouter } from "next/navigation";
// import gmail from "../../../public/G.png";

function SignUp() {
  const [usercheck, setusercheck] = useState<boolean>(true);
  const [sellercheck, setsellercheck] = useState<boolean>(false);
  const [name, setname] = useState<string>("");
  const [mail, setmail] = useState<string>("");
  const [password, setapassword] = useState<string>("");
  const router = useRouter();
  const changeCheckbox = (): void => {
    setusercheck(!usercheck);
    setsellercheck(!sellercheck);
  };
  const handlesign = (): void => {
    const newuser = {
      name: name,
      mail: mail,
      password: password,
      type: usercheck ? "client" : "seller",
    };
    axios
      .post("http://127.0.0.1:3000/users/register", newuser)
      .then((response) => {
        console.log(response);
        console.log("success");
        if (response.data.user.type === "client") {
          // line 23 user not users
          localStorage.setItem("token", response.data.token);
          router.push("/clientHome"); // navigate
        } else {
          router.push("/seller");
          // navigate to seller page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          placeholder="Email or phone number"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          onChange={(e) => {
            setmail(e.target.value);
          }}
        />
        client
        <input type="checkbox" checked={usercheck} onChange={changeCheckbox} />
        seller
        <input
          type="checkbox"
          checked={sellercheck}
          onChange={changeCheckbox}
        />
        <input
          placeholder="Password"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          onChange={(e) => {
            setapassword(e.target.value);
          }}
        />
        <button
          className="bg-red-600 text-white text-base p-2"
          onClick={handlesign}
        >
          Create account
        </button>
        <div className="sign in flex ">
          <button
            style={{ width: "300px" }}
            className="box-border border-2 border-gray-500 p-2 bg-white text-black hover:bg-gray-100 flex items-center space-x-4 "
          >
            <img style={{ width: "30px" }} src="/G.png" alt="" />
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
