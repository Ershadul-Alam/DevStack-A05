import { Suspense } from "react";
import Banner from "./components/Banner"
// @ts-expect-error Loading is a JavaScript component without TypeScript declarations.
import Loading from "./components/Loading"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies"
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
      <Suspense fallback={<Loading />}>
      <Technologies techPromise={techPromise}/>
      </Suspense>
    </>
  )
}

export default App
