import { isNativeDenom, readDenom } from "terra-utils";

interface Props {
  children: string;
  bold: boolean;
}

const ParseWord = ({ children: word, bold }: Props) => {
  const words = isNativeDenom(word) ? readDenom(word) : word;
  return bold ? <strong>{words}</strong> : <span>{words}</span>;
};

export default ParseWord;
