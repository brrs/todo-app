"use client"

import Header from "./header";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header></Header>

      <div className="flex mt-6 flex-grow pt-4">
        <NavBar></NavBar>
      </div>







      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
