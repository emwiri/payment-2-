import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddCart from "./Pages/AddCart";
import Transfareoney from "./Pages/Transfareoney";

import Navbar from "./Section/Navbar/Navbar";
import History from "./Pages/History";


export const DataContext = createContext<any>(null);

function App() {
  const [dataCard, setDataCard] = useState([]);
  const [Historry, setHistory] = useState([]);
  const [selectedCard, setSelectedCard] = useState<any>(null);


  return (
    <DataContext.Provider value={{ dataCard, setDataCard,selectedCard, setSelectedCard,Historry, setHistory }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddCart />} />
        <Route path="/transfare" element={<Transfareoney />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
