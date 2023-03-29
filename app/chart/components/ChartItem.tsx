import { Coin } from "@/app/coins/models/coins.models";
import Image from "next/image";
import { BsFillTriangleFill } from "react-icons/bs";

interface Props {
  data: Coin;
}
const ChartItem = ({ data }: Props) => {
  return (
    <ul className="flex justify-around items-center py-2 px-4 lg:px-40 border border-gray-300">
      <li className="w-1/3 mr-4">
        <div className="w-full flex items-center justify-start gap-2">
          <Image src={data.image} width="20" height="20" alt={data.name} />
          <span>{data.name}</span>
        </div>
      </li>
      <li className="w-1/3 text-start">
        <p>${data.current_price}</p>
      </li>
      <li className="w-1/3">
        <div className="flex justify-end items-center gap-1">
          <BsFillTriangleFill
            className={
              data.price_change_percentage_24h >= 0
                ? "text-green-500  text-sm"
                : "text-red-500 rotate-180  text-sm"
            }
          />
          <p className="w-16">
            {data.price_change_percentage_24h.toString().slice(0, 4)}%
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ChartItem;
