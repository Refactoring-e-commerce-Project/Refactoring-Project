"use client";
import axios from "axios";
import { ChangeEvent, FC, useEffect, useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";
// const user =  {
//   ProdName: string,
//   price: number
// },[]
const Login: FC = () => {
  // function components
  const [mail, setmail] = useState<string>("");
  const [password, setapassword] = useState<string>("");
  const router = useRouter(); 
  useEffect(() => {
   
  }, []);
  const handlelog = (): void => {
    // function without return (void)
    const user = { mail: mail, password: password };
    axios
      .post("http://127.0.0.1:3000/users/login", user)
      .then((response) => {
        console.log(response);
        console.log("success");
        if (mail === "admin@gmail.com") {
          router.push("/admin");
          console.log("aaaa");
          localStorage.setItem("user", JSON.stringify(response.data.user));

          localStorage.setItem("token", response.data.token);
          console.log(localStorage);
        }
        console.log(response.data);
        if (response.data.user.type === "client") {
          // line 23 user not users
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          // navigate
          router.push("/");
        } else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          // navigate to seller page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full  flex items-center justify-center gap-16 bg-white">
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
          placeholder="Email or phone number"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setapassword(e.target.value);
          }}
        />
        <button
          className="bg-red-600 text-white text-base p-2"
          onClick={handlelog}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
