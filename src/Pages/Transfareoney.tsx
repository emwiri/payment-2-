import { useContext, useState } from "react";
import CartUi from "../Section/CartuI/CartUi";
import Input from "../SystemDesine/Input";
import { DataContext } from "../App";

export default function Transfareoney() {
  const [nameLastName, SetNameLastName] = useState("");
  const [cardNumber, SetCardNumber] = useState("");
  const [month, SetMonth] = useState("");
  const [year, setYeare] = useState("");
  const [budjet, setBudjet] = useState("");
 let mmd :string |number | null = null
  // Destony State 👇
  const [destonyCardNumber, SetDestonyCardNumber] = useState<string>("");
  const [numberDestony, SetNumberDestony] = useState<string>("");
  const numberDes = Number(numberDestony);
  const oldBudjet = Number(budjet);

  const newBalance = parseFloat(budjet) - parseFloat(numberDestony);

  const { selectedCard, setSelectedCard, setDataCard, setHistory } = useContext(DataContext);

  const handleCardClick = (card: any) => {
    SetNameLastName(card.name || "");
    SetCardNumber(card.cardNumber || "");
    setBudjet(card.budget || "");
    if (card.date) {
      const [m, y] = card.date.split("/");
      SetMonth(m || "");
      setYeare(y || "");
    }
    // setBudjet(newBalance?newBalance:card.budget)
    setSelectedCard(card);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-8">
      <CartUi onClick={handleCardClick} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white border rounded-2xl shadow-md flex flex-col gap-4 p-6 w-[450px]"
      >
        <h1 className="text-xl font-semibold text-gray-700 text-center">
          Transfer Section
        </h1>

        <div className="flex items-center justify-between gap-2">
          <Input
            placeholder="Name-LastName"
            type="text"
            value={nameLastName}
            disabled
          />
          <Input
            placeholder="Card Number"
            type="text"
            value={cardNumber}
            disabled
          />
        </div>

        <Input
          placeholder="Destination Card Number"
          type="string"
          value={destonyCardNumber}
          onChange={(e) => {
            SetDestonyCardNumber(e.target.value);
          }}
        />
        <Input
          placeholder="How much Money U Wanna Send:$"
          type="number"
          value={numberDestony}
          onChange={(e) => {
            SetNumberDestony(e.target.value);
          }}
        />

        <div className="flex gap-2">
          <Input placeholder="Year" type="number" value={year} disabled />
          <Input placeholder="Month" type="number" value={month} disabled />
        </div>

        <Input
          placeholder="Budget Wallet"
          type="number"
          value={budjet}
          disabled
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
          onClick={() => {
            if (!destonyCardNumber && !newBalance) {
              return alert("complate all the file");
            }

            console.log(numberDes)
            if (numberDes > oldBudjet) {
              return alert(" too high Stuuped !");
            }
            const newData = {
              ...selectedCard,
              destonyCardNumber: destonyCardNumber,
              newBalance: newBalance,
            };
            setHistory((prev: any) => [...prev, newData]);
            // console.log(Historry);

            setDataCard((prev: any) =>
              prev.map((card: any) =>
                card.cardNumber === selectedCard.cardNumber
                  ? { ...card, budget: newBalance }
                  : card
              )
            );

            setBudjet("");
            SetCardNumber("");
            SetMonth("");
            setYeare("");
            SetNameLastName("");
            SetDestonyCardNumber("");
            SetNumberDestony("");
          }}
        >
          Confirm Transfer
        </button>
      </form>
    </div>
  );
}
