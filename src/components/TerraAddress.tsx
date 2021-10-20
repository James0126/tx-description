import axios from "axios";
import { useQuery } from "react-query";
import { TERRA_ASSETS } from "../helpers/constants";
import { useNetwork } from "../helpers/NetworkProvider";
import TokenAddress from "./TokenAddress";
import FinderLink from "./FinderLink";

interface ContractInfo {
  protocol: string;
  name: string;
  icon: string;
}

type NetworkName = string;
type Address = string;
type Data = Record<NetworkName, Record<Address, ContractInfo>>;

const TerraAddress = ({ children: address }: { children: string }) => {
  const { name } = useNetwork();

  const { data: contracts } = useQuery("contracts", async () => {
    const { data: assets } = await axios.get<Data>("/cw20/contracts.json", {
      baseURL: TERRA_ASSETS,
    });

    return assets[name];
  });

  const getContractName = (address: string) => {
    const contract = contracts?.[address];
    if (!contract) return;
    const { protocol, name } = contract;
    return [protocol, name].join(" ");
  };

  return (
    <FinderLink address={address}>
      {getContractName(address) ?? <TokenAddress>{address}</TokenAddress>}
    </FinderLink>
  );
};

export default TerraAddress;
