import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"
import type { techTypes } from "./types/techTypes";

const techFetch = async(): Promise<techTypes[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
}

function App() {

  const techPromise = techFetch(); 
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
      <Technologies techPromise={techPromise}/>
      </Suspense>
    </>
  )
}

export default App
