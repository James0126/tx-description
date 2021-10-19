import { useQuery } from "react-query";
import { truncate } from "terra-utils";
import FinderLink from "./FinderLink";
import { useLCDClient } from "./NetworkProvider";

const ValidatorAddress = ({ children: address }: { children: string }) => {
  const lcd = useLCDClient();
  const { data } = useQuery("validators", () => lcd.staking.validators());
  const moniker = data?.find(
    ({ operator_address }) => operator_address === address
  )?.description.moniker;

  return (
    <FinderLink address={address} validator>
      {moniker ?? truncate(address)}
    </FinderLink>
  );
};

export default ValidatorAddress;
