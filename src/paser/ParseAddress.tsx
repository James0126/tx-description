import { ValAddress } from "@terra-money/terra.js";
import ValidatorAddress from "./ValidatorAddress";
import TerraAddress from "./Address";

const ParseAddress = ({ children: address }: { children: string }) => {
  return ValAddress.validate(address) ? (
    <ValidatorAddress>{address}</ValidatorAddress>
  ) : (
    <TerraAddress>{address}</TerraAddress>
  );
};

export default ParseAddress;
