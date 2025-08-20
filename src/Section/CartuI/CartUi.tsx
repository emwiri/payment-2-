import { useContext } from "react";
import Slider from "react-slick";
import { DataContext } from "../../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CartUiProps = {
  onClick: (card: any) => void;
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function CartUi({ onClick }: CartUiProps) {
  const bankNames: Record<string, string> = {
    "6037": "بانک ملی",
    "5892": "بانک سپه",
    "6362": "بانک آینده",
    "6104": "بانک ملت",
    "5859": "بانک تجارت",
    "6221": "بانک پارسیان",
    "6219": "بانک سامان",
    "6280": "بانک مسکن",
    "5041": "بانک رسالت",
  };

  const { dataCard } = useContext(DataContext);

  return (
    <div className=" w-[100%] rounded-2xl   max-w-[500px] m-auto">
      <Slider {...settings}>
        {dataCard.map((item: any, index: number) => {
          const bankCode = item.cardNumber?.slice(0, 4) || "";
          const bankName = bankNames[bankCode] || "بانک ناشناس";

          return (
            <div key={index} className=" ">
              <div className="cursor-pointer  " onClick={() => onClick(item)}>
                <div className="bg-blue-100 text-blue-400 w-full p-6 rounded-2xl  flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="bg-white p-2 w-20 rounded-xl text-center grid grid-cols-3 grid-row-3 ">
                      <div className="bg-yellow-200 p-3 rounded-2xl "></div>
                      <div className="bg-yellow-200 p-3  -ml-3"></div>
                     <div className="bg-yellow-200  rounded-r "></div>
                    </div>
                    <div className="text-lg font-semibold">{bankName}</div>
                  </div>
                  <div className="flex items-center justify-between m-1">
                    <p className="font-bold">cardNumber :</p>
                    <p className="font-bold">{item.cardNumber}</p>
                  </div>
                  <div className="flex justify-between text-sm m-1">
                    <p className="font-bold">date :</p>
                    <p className="font-bold">{item.date}</p>
                  </div>
                  <div className="flex items-center justify-between m-1">
                    <p className="font-bold">budjet :</p>
                    <span className="font-bold">
                      {item.newBalance !== undefined
                        ? item.newBalance
                        : item.budget}
                    </span>
                  </div>
                  <div className="text-lg font-medium flex items-center justify-center">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
