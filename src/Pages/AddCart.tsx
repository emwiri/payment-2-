import { useContext, useState } from "react";
import Input from "../SystemDesine/Input";
import { DataContext } from "../App";
import CartUi from "../Section/CartuI/CartUi";

export default function AddCart() {
  const [nameLastName, SetNameLastName] = useState("");
  const [cardNumber, SetCardNumber] = useState("");
  const [month, SetMonth] = useState("");
  const [year, setYeare] = useState("");
  const [budjet, setBudjet] = useState("");

  const {setDataCard } = useContext(DataContext);
  function mmd() {
    return "";
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-8">
      <CartUi  onClick={mmd}/>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white border rounded-2xl shadow-md flex flex-col gap-4 p-6 w-[400px]"
      >
        <h1 className="text-xl font-semibold text-gray-700 text-center">
          Add New Card
        </h1>

        <Input
          placeholder="Name-LastName"
          type="text"
          value={nameLastName}
          onChange={(e) => SetNameLastName(e.target.value)}
        />
        <Input
          placeholder="Card Number"
          type="text"
          value={cardNumber}
          onChange={(e) => SetCardNumber(e.target.value)}
        />

        <div className="flex gap-2">
          <Input
            placeholder="Year"
            type="number"
            value={year}
            onChange={(e) => setYeare(e.target.value)}
          />
          <Input
            placeholder="Month"
            type="number"
            value={month}
            onChange={(e) => SetMonth(e.target.value)}
          />
        </div>

        <Input
          placeholder="Budget Wallet"
          type="number"
          value={budjet}
          onChange={(e) => setBudjet(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
          onClick={() => {
            if (!budjet||!cardNumber||!month||!year||!nameLastName) {
              return alert("complate all feaild");
            }
            const newData = {
              name: nameLastName,
              cardNumber,
              date: `${month}/${year}`,
              budget: budjet,
            };
            setDataCard((p: any) => [...p, newData]);
            setBudjet("")
            SetCardNumber("")
            SetMonth("")
            setYeare("")
            SetNameLastName("")
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
