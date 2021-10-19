import axios from "axios";
import { useQuery } from "react-query";
import { TERRA_ASSETS } from "./constants";
import { useNetwork } from "./NetworkProvider";
import TokenAddress from "./TokenAddress";
import FinderLink from "./FinderLink";

interface ContractInfo {
  protocol: string;
  name: string;
  icon: string;
}

type NetworkName = string;
type TerraAddress = string;

const useContracts = () => {
  const { name } = useNetwork();

  return useQuery("contracts", async () => {
    const { data: assets } = await axios.get<
      Record<NetworkName, Record<TerraAddress, ContractInfo>>
    >("/cw20/contracts.json", { baseURL: TERRA_ASSETS });
    return assets[name];
  });
};

const Address = ({ children: address }: { children: string }) => {
  const { data: contracts } = useContracts();

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

export default Address;
