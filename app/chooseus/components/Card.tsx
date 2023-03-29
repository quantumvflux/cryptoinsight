interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}
const Card = ({ children, title, description }: Props) => {
  return (
    <article className="bg-gradient-to-r from-rose-700 to-pink-600 text-white  rounded-xl flex items-center gap-4 h-36 xl:h-24 w-96 xl:w-80 p-2">
      {children}
      <div>
        <h3 className="font-extrabold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
