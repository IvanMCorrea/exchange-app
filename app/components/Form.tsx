"use client";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  form: { currency: string; value: number };
  setForm: Dispatch<SetStateAction<{ currency: string; value: number }>>;
};

const Form = ({ form, setForm }: Props) => {
  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form className="w-full mb-3">
      <label htmlFor="currency" className="block space-y-3 text-lg">
        <span>Moneda</span>
        <input
          type="text"
          name="currency"
          value={form.currency}
          className="block w-full rounded-full bg-gray-200 p-2 text-xl"
          onChange={onChange}
        />
      </label>
      <label htmlFor="value" className="block space-y-3 text-lg">
        <span>Monto en ARS (pesos argentinos)</span>
        <input
          type="number"
          name="value"
          value={form.value}
          className="block w-full rounded-full bg-gray-200 p-2 text-right text-xl"
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default Form;
