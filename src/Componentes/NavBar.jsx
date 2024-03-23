import React, { useState } from "react";
import CartWidget from "./Cartwidget";
import StepUp from "../assets/StepUp.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {

const [MostrarCategorias, SetMostrarCategorias] = useState(false)

  return (
    <div className="flex flex-col h-[96px] items-start gap-px px-[80px] py-[32px] relative bg-white">
      <div className="flex items-center justify-between relative flex-1 self-stretch w-full grow">
        <div>
        <NavLink to={`/`}><img src={StepUp} alt="StepUp" /></NavLink>
        </div>
        <div className="inline-flex gap-[72px] relative list-none font-semibold justify-center">
          <NavLink to={`/category/hombre`}>HOMBRE</NavLink>
          <NavLink to={`/category/mujer`}>MUJER</NavLink>
          <NavLink to={`/category/niño`}>NIÑOS</NavLink>
          <li>
            <button href="" onClick={() => SetMostrarCategorias(!MostrarCategorias)}>(TALLES)</button>
            {MostrarCategorias && (
              <ul className="absolute bg-white border rounded-md p-2">
                {/* Estilos adicionales para centrar y dar formato al desplegable */}
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>X</li>
              </ul>
            )}
          </li>
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <CartWidget/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;