import { useContext } from "react";
import { DataContext } from "../App";

export function History() {
  const { Historry } = useContext(DataContext);
  console.log(history)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {Historry.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-blue-300 shadow-2xl rounded-2xl p-5"
        >
          
          <div className="text-3xl text-center font-mono tracking-widest mb-3 pb-3 font-bold border-b  ">
            {item.name}
          </div>
          
          <div className="flex justify-between items-center mt-4">
           
            <span className="font-extrabold text-xl"> From:</span>
          <div className="text-lg  tracking-widest mb-3 font-bold">
            {item.cardNumber}
          </div>
          
          </div>

          <div className="flex items-center justify-between">
          <span className="font-extrabold text-xl">To:</span>
          <div className="text-lg tracking-widest mb-3 font-bold">
            {item.destonyCardNumber}
          </div>
          </div>
          
         
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-xl" >Money Send:</span>
            <span className="text-xl font-bold">{item.budget} $</span>
          </div>

  
          <div className="flex justify-between items-center mt-2">
            <span className="font-extrabold text-xl">New Balance:</span>
            <span className="font-bold text-xl ">{item.newBalance} $</span>
          </div>

       
          <div className="absolute bottom-3 right-4 text-xs opacity-80">
            Transaction #{index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
