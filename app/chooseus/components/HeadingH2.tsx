interface Props {
  text: string;
}
const HeadingH2 = ({ text }: Props) => {
  return (
    <h2 className="text-white text-center font-extrabold text-6xl p-12">
      {text}
    </h2>
  );
};

export default HeadingH2;
