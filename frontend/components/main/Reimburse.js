"use client";

import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import Button from "/components/core/Button";

export default function Reimburse(props) {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: "0xb190182D59351b9E525c73097f24646438D85D63",
    contractInterface: [
      {
        inputs: [],
        name: "withdraw",

        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "withdraw",
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <h1>Terms of Service</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex gap-4">
            <Button disabled={!write || isLoading} onClick={() => write()}>
              Reimburse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
