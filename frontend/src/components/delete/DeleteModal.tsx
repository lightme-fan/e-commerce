import React, { FC, useRef } from "react";
import { ProductType } from "../../types";

const DeleteModal: FC<any> = ({ state }) => {
  const ref = useRef(null);
  const productToDelete = state?.products?.find((product: ProductType | null | undefined) => product?.id === state?.productId);

  return (
    <div
      ref={ref}
      className="min-w-[496px] w-[40%] absolute opacity-100 start-2/4 top-[50%] -translate-x-[50%] -translate-y-[50px] shadow-cyan-500/50 shadow-lg border-slate-200 p-8 bg-[#d0d0d0] border rounded-lg z-50"
    >
      <h2 className="text-slate-600 my-6 font-bold text-2xl text-center">
        {`Are you sure you want to delete ${productToDelete?.name}?`}
      </h2>
      <div className="mt-8 flex justify-center gap-4">
        <button
          className={`md:self-end self-center w-40 mt-2 py-2.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center "cursor-pointer"`}
          onClick={() => state.handleConfirmDeleteProduct()}
        >
          Confirm
        </button>
        <button
          className="md:self-end self-center w-40 mt-2 py-2 border border-red-400 hover:bg-red-400 rounded-md bg-transparent text-center"
          onClick={() => state.handleCancelDeleteProduct()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
