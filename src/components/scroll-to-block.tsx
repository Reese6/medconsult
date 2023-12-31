type Props = {
  id: string;
};

export const ScrollToBlock = ({ id }: Props) => {
  return <div id={id} className="absolute top-[-68px] md:top-[-88px] opacity-0" />;
};
