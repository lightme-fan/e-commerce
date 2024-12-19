import React, { Fragment, useState } from "react";
import { Footer, Header, Input } from "../components";
import { Link } from "react-router-dom";

// const clientId = 449035564387-dn7o8dvg5apkf5veso9or1kgqij069df.apps.googleusercontent.com
const Login = () => {
  const [authData, setAuthData] = useState("");

  return (
    <Fragment>
      <div className={`relative h-[100vh] overflow-y-scroll`}>
        <Header />
        <main className='mt-[74px] mb-60'>
          <div className="my-36 max-w-screen-2xl w-full mx-auto px-6">
            <h2 className='text-center text-3xl my-10 text-slate-600'>Login</h2>
            <div className="max-w-md m-auto flex flex-col gap-6">
              <Input type="text" name="username" label="Username or Email" />
              <Input type="passowrd" name="password" label="Password" />
              <button className="hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center py-4">
                Sign in
              </button>
              <div className="self-center">
                Don't have an account yet? Please 
                <Link to={"/signup"} className="text-blue-500 hover:underline"> sing up</Link>!
              </div>
              <div className="self-center my-8">Or</div>
              <div className="self-center">Log in with Google</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Login;
