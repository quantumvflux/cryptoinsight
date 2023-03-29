"use client";
import React from "react";

interface Props {
  handlePrevPage: HandlePrevPage;
  handleNextPage: HandleNextPage;
}

type HandlePrevPage = () => void;
type HandleNextPage = () => void;

const ButtonContainer = ({ handleNextPage, handlePrevPage }: Props) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        className="bg-gradient-to-r from-rose-700 to-pink-600 p-2 rounded text-white font-semibold"
        onClick={handlePrevPage}
      >
        Previous page
      </button>
      <button
        className="bg-gradient-to-r from-rose-700 to-pink-600 p-2 rounded text-white font-semibold"
        onClick={handleNextPage}
      >
        Previous page
      </button>
    </div>
  );
};

export default ButtonContainer;
