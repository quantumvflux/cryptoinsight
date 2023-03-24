interface Props {
  name: string;
  price: string;
  children: React.ReactNode;
}

const Card = ({ name, price, children }: Props) => {
  return (
    <li className="bg-purple-600 w-20 p-2 flex flex-col justify-center items-center rounded-lg">
      {children}
      <span>{name}</span>
      <span className="text-lg">${price}</span>
    </li>
  );
};

export default Card;
