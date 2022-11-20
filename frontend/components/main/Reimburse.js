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
    addressOrName: "0xae5c8A495486fC0E14c6833f5772018976c5cD9a",
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
      <h1 className="text-center">Get your Stake back</h1>
      <div className="grid grid-cols-2 gap-8">
        <p>
          Womenhack NY 2023 was a huge success and we are so glad you could
          share this beautiful experience with us. If you hold the two requested
          POAPs, you will receive your staked tokens back.
        </p>
        <p>
          If you hold the two requested POAPs, you will receive your staked
          tokens back.{" "}
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Button disabled={!write || isLoading} onClick={() => write()}>
          Reimburse
        </Button>

        {/* TODO: pop-up for error message  */}
        {(isPrepareError || isError) && (
          <div>
            {" "}
            {(prepareError || error)?.message?.includes(
              "You already got reimbursed"
            )
              ? "You already got reimbursed"
              : error?.message}
          </div>
        )}
      </div>
    </div>
  );
}
