import { BiMenuAltRight } from "react-icons/bi";
import { Chart } from "./chart";
import ChooseUs from "./chooseus/ChooseUs";
import { getData } from "./coins/services/coins.services";
import Footer from "./footer/Footer";
import { Home } from "./home";
import JoinUs from "./joinus/JoinUs";

const page = async () => {
  const data = await getData();

  return (
    <div>
      <Home data={data} />
      <Chart data={data} />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default page;
