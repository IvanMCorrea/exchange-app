"use client";
import { useState } from "react";
import Form from "./components/Form";

const Client = () => {
  const [form, setForm] = useState({ currency: "USD", value: 0 });
  return (
    <article className="bg-neutral-100 w-4/5 max-w-[48rem] p-8 rounded-3xl shadow-lg">
      <Form form={form} setForm={setForm} />
    </article>
  );
};

export default Client;
