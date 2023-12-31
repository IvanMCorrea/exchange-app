"use client";
import { useState } from "react";
import Form from "./components/Form";
import Exchange from "./components/Exchange";

const Client = ({
  cotizaciones,
}: {
  cotizaciones: { nombre: string; compra: number; venta: number }[];
}) => {
  const [form, setForm] = useState({ currency: "USD", value: 0 });
  return (
    <article className="bg-neutral-100 w-4/5 max-w-[48rem] p-8 rounded-3xl shadow-lg">
      <Form form={form} setForm={setForm} />
      <Exchange cotizaciones={cotizaciones} form={form} />
    </article>
  );
};

export default Client;
