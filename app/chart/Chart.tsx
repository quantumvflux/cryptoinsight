import { Coin } from "../coins/models/coins.models";
import ChartItem from "./components/ChartItem";

interface Props {
  data: Coin[];
}

const Chart = ({ data }: Props) => {
  return (
    <section className="md:w-10/12 m-auto rounded-3xl bg-white pb-4">
      <h2 className="text-center font-extrabold text-3xl p-4">Chart</h2>
      <article className="flex flex-col justify-centerk">
        <ul className="flex justify-around">
          <li>Name</li>
          <li>Price</li>
          <li>Variation</li>
        </ul>
        <div className="w-full">
          {data.map((coin) => (
            <ChartItem key={coin.id} data={coin} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Chart;
