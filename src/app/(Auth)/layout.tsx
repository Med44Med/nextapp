import React from "react";




export const metadata: Metadata = {
    title: "Next App | Register",
    description: "this the register page",
  };

function Authlayout({ children,}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col justify-center align-middle min-h-screen items-center gap-3 bg-neutral-100 py-10' >
      <div className="w-24 h-24 bg-green-400 rounded-full" ></div>
      {children}
    </main>
  );
}

export default Authlayout;
