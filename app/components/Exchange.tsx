import React from "react";

type Props = {};

const Exchange = ({
  cotizaciones,
  form,
}: {
  cotizaciones: { nombre: string; compra: number; venta: number }[];
  form: { currency: string; value: number };
}) => {
  return (
    <section className="bg-emerald-800 w-full rounded-3xl h-72 p-4">
      <li className="grid grid-cols-3 items-center justify-between gap-4">
        <div className="col-span-1 text-emerald-100 font-semibold">
          Tipo de cambio
        </div>
        <div className="col-span-2 grid grid-cols-6 items-center gap-4">
          <div className="col-start-2 col-span-2 text-emerald-100 font-semibold text-right">
            Valor por unidad
          </div>
          {form.value ? (
            <div className="col-span-3 text-emerald-100 font-semibold text-right">
              Conversión
            </div>
          ) : null}
        </div>
      </li>
      <hr className="my-1 opacity-40" />
      {cotizaciones?.map(({ nombre, venta }) => {
        const total = form.value ? Number(form.value * venta) : venta;
        return (
          <li
            key={nombre}
            className="grid grid-cols-3 items-center justify-between gap-4"
          >
            <div className="col-span-1 text-emerald-100 font-semibold">
              {nombre}
            </div>
            <div className="col-span-2 grid grid-cols-6 items-center gap-4">
              <div className="col-start-2 col-span-2 text-xl font-bold text-emerald-400 text-right">
                {Number(venta).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </div>
              {form.value ? (
                <div className="col-span-3 text-2xl font-bold text-emerald-200 text-right">
                  {Number(total).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </section>
  );
};

export default Exchange;
