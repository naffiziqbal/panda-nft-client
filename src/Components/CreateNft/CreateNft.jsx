import React from "react";

const CreateNft = () => {
  return (
    <div className="text-center mx-auto my-10">
      <h1 className="text-3xl font-bold ">Create And Sell Your NFTs</h1>

      <div className="cards grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-16">
        <div className="card-1   rounded-xl p-5 bg-slate-700  hover:bg-transparent hover:border  duration-300  h-52">
          <h3 className="text-xl font-bold">Setup Your Wallet</h3>
          <p>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </div>
        <div className="card-2     rounded-xl p-5 bg-slate-700  hover:bg-transparent hover:border duration-300">
          <h3 className="text-xl font-bold">Add Your NFTs</h3>
          <p>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </div>
        <div className="card-3   rounded-xl p-5 bg-slate-700  hover:bg-transparent hover:border hover:duration-300">
          <h3 className="text-xl font-bold">List Them For Sale</h3>
          <p>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
