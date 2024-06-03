"use client";
import React, { useRef, useState, ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isButtonVisible, setButtonVisible] = useState(
    value && value.length > 0
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setButtonVisible(inputValue.length > 0);
    onChange && onChange(e);
  };

  const handleButtonClick = () => {
    if (isButtonVisible) {
      inputRef.current!.value = "";
      setButtonVisible(false);
      onChange &&
        onChange({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
    }
  };

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        inputRef.current!.value = text;
        setButtonVisible(true);
        onChange && onChange({ target: { value: text } } as ChangeEvent<HTMLInputElement>);
      }
    } catch (error) {
      console.error("Error al pegar desde el portapapeles:", error);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        className="form-input h-16 w-full rounded text-sm sm:px-16 sm:text-base"
        id="search"
        type="text"
        placeholder="Busca o pega el enlace aquí..."
        required
        autoComplete="off"
        value={value}
        onChange={handleInputChange}
      />
      {!isButtonVisible ? (
        <button
          className="absolute h-12 px-4 rounded btn right-2 top-2 bg-slate-100 hover:bg-slate-200"
          type="button"
          onClick={handlePasteClick}
          aria-label="Pegar"
        >
          <svg className="ic">
            <use href="/assets/ic.svg#ic-paste"></use>
          </svg>
          <span className="hidden text-xs font-bold uppercase sm:block">
            Pegar
          </span>
        </button>
      ) : (
        <button
          className="absolute h-12 px-4 rounded btn right-2 top-2 bg-rose-100 text-rose-500 hover:bg-rose-200"
          type="button"
          onClick={handleButtonClick}
        >
          <svg className="ic">
            <use href="/assets/ic.svg#ic-close"></use>
          </svg>
          <span className="hidden text-xs font-bold uppercase sm:block">
            Borrar
          </span>
        </button>
      )}
    </>
  );
}
