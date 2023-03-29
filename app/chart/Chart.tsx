"use client";
import { useState } from "react";
import { Coin } from "../coins/models/coins.models";
import { ButtonContainer, ChartItem } from "./components";

interface Props {
  data: Coin[];
}

const Chart = ({ data }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  const lastIndex = currentPage * coinsPerPage;
  const firstIndex = lastIndex - coinsPerPage;

  const handleNextPage = () => {
    currentPage >= coinsPerPage
      ? setCurrentPage(10)
      : setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () =>
    currentPage <= 1
      ? setCurrentPage(1)
      : setCurrentPage((prevPage) => prevPage - 1);

  return (
    <section
      id="market"
      className="scroll-mt-24 md:w-10/12 m-auto rounded-3xl bg-white pb-4"
    >
      <h2 className="text-center font-extrabold text-3xl p-8">Chart</h2>
      <article className="flex flex-col justify-centerk">
        <ul className="flex justify-around">
          <li>Name</li>
          <li>Price</li>
          <li>Variation</li>
        </ul>
        <div className="w-full">
          {data.slice(firstIndex, lastIndex).map((coin) => (
            <ChartItem key={coin.id} data={coin} />
          ))}
        </div>
      </article>
      <ButtonContainer
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </section>
  );
};

export default Chart;
