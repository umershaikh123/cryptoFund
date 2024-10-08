export interface donationTableDataType {
  address: string
  donation: string
  chain: string
  txHash: string
}

export const donationTableData: Record<
  number,
  { address: string; donation: string; chain: string; txHash: string }[]
> = {
  1: [
    {
      address: "0×8a770B..........1C5901",
      donation: "0.002",
      chain: "Sepolia",
      txHash: "0×5a352....",
    },
    {
      address: "0×8a770B..........1C5901",
      donation: "1.002",
      chain: "Arbitrum",
      txHash: "0×5a352....",
    },
    {
      address: "0×8a770B..........1C5901",
      donation: "3.002",
      chain: "Holesky",
      txHash: "0×5a352....",
    },
    {
      address: "0×8a770B..........1C5901",
      donation: "2.244",
      chain: "Base",
      txHash: "0×5a352....",
    },
    {
      address: "0×8a770B..........1C5901",
      donation: "6.222",
      chain: "RootStock",
      txHash: "0×5a352....",
    },
    {
      address: "0×8a770B..........1C5901",
      donation: "6.222",
      chain: "RootStock",
      txHash: "0×5a352....",
    },
  ],

  2: [
    {
      address: "0×E1370B..........1C5901",
      donation: "0.002",
      chain: "Sepolia",
      txHash: "0×5a352....",
    },
    {
      address: "0×E1370B..........1C5901",
      donation: "1.002",
      chain: "Arbitrum",
      txHash: "0×5a352....",
    },
    {
      address: "0×E1370B..........1C5901",
      donation: "3.002",
      chain: "Holesky",
      txHash: "0×5a352....",
    },
    {
      address: "0×E1370B..........1C5901",
      donation: "2.244",
      chain: "Base",
      txHash: "0×5a352....",
    },
    {
      address: "0×E1370B..........1C5901",
      donation: "6.222",
      chain: "RootStock",
      txHash: "0×5a352....",
    },
    {
      address: "0×E1370B..........1C5901",
      donation: "6.222",
      chain: "RootStock",
      txHash: "0×5a352....",
    },
  ],
}
