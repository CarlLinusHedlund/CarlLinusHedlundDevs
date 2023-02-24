import React, {useState, useRef, useContext } from 'react'
import { supabase } from '../../../supabase';
import { UserContext } from './auth/UserContext';


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef();
  // const [user, setUser] = 
  // const msg = useContext(UserContext)
  const { setUser } = useContext(UserContext)

  
  const handleSignIn = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error);
      setMessage(error.message);
      messageRef.current.classList.add('text-red-400')
    } else {
      console.log(data);
      messageRef.current.classList.add('text-primaryWhite')
      setUser(data.user)
      setMessage(`U are now logged in with: ${data.user.email}`)
    }
  }

  return (
    <>
      <form
      onSubmit={handleSignIn}
        className=" flex w-full max-w-[400px] flex-col items-center justify-center gap-5 text-primaryWhite md:max-w-[350px] "
      >
        <h1 className=" text-textLG font-bold uppercase">Sign In</h1>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col">
            <label htmlFor="email">Email</label>
            <input
              className=" h-10 rounded-xl border border-primaryWhite bg-primaryDark  p-1 "
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="password">Password</label>
            <input
              className=" h-10 rounded-xl border  border-primaryWhite bg-primaryDark p-1 "
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <p ref={messageRef} className='text-white' >{message}</p>
        <button
          type="submit"
          className="lg:hover:hoverShadow btn mt-4 flex h-10 w-3/4 items-center justify-center font-medium duration-300 lg:hover:scale-105 "
        >
          Sign In
        </button>
      </form>
    </>
  )
}

export default SignIn;