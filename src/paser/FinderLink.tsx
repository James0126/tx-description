import { useNetwork } from "./NetworkProvider";
import { FINDER } from "./constants";
import { FC } from "react";

interface Props {
  address: string;
  validator?: boolean;
}

const FinderLink: FC<Props> = ({ children, address, validator }) => {
  const { chainID } = useNetwork();
  const path = validator ? "validator" : "address";
  return (
    <a
      href={`${FINDER}/${chainID}/${path}/${address}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default FinderLink;
