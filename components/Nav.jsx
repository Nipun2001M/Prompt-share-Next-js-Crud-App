"use client";
import React, { useEffect, useState } from "react";
import {
  SignIn,
  SignOut,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const {data:session}=useSession()
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false)
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
      // console.log('res',res)
    };
    fetchProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 ">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptophia</p>
      </Link>
      {/* desktop */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button onClick={signOut} type="button" className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image src={session.user.image} height={37} width={37} />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    SignIn
                  </button>
                ))
              }
          </>
        )}
      </div>

      {/* mobile */}
      <div  className="sm:hidden flex relative">
        {session?.user?(
          <div className="flex">
             {/* <Link href="/profile"> */}
              <Image 
              onClick={()=>{settoggleDropdown((prev)=>!prev)}}
              src={session.user.image} height={37} width={37} />
            {/* </Link> */}

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                href="/profile"
                className="dropdown_link"
                onClick={()=>settoggleDropdown(false)}

                
                >
                  MyProfile
                </Link>
                <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={()=>settoggleDropdown(false)}

                
                >
                  Create
                </Link>
                <button type="button"
                onClick={()=>{
                  settoggleDropdown(false)
                  signOut()
                }}
                className="mt-5 w-full black_btn"
                >
                  Sign Out

                </button>
              </div>
            )}

          </div>
        ):<>
        
            {providers &&
              Object.values( providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    SignIn
                  </button>
                ))
              }
        </>}

      </div>
     



    </nav>
  );
};

export default Nav;
