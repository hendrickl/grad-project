import React from 'react';
import Gradients from "./components/Gradients"
import gradients from "./gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"




function App() {
  return (
    <>
      <GradientsHeader list={gradients}>
        <h1 className="display-1">GreenTeam App Gradients Alyra</h1>
        <p className="tagline">La GreenTeam c'est pas du thé vert mais c'est full color!</p>
      </GradientsHeader>
      <Gradients />
      <Footer />
    </>
  )
}


export default App;
