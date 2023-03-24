import { Chart } from "./chart";
import { Home } from "./home";
import { getData } from "./coins/services/coins.services";

const page = async () => {
  const data = await getData();
  const coins = data.slice(0, 20);
  return (
    <div>
      <Home data={coins} />
      <Chart data={coins} />
    </div>
  );
};

export default page;
