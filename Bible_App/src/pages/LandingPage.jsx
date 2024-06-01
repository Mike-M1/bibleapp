import React from 'react'

export default function LandingPage() {
  return (
    <>
      <div id="main" className="w-screen h-screen bg-slate-300 justify-center  items-center flex flex-col">
        <div className='flex flex-col h-fit p-[20px]  w-[500px] justify-between items-center'>
          <div className='mb-[200px] text-[5rem]'>Bible App</div>

          <div>
            <a href="/Credentials" className="border-[5px] p-[10px]">
              Log In or Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
