import React, { useState } from "react";
import CartWidget from "./Cartwidget";
import StepUp from "../assets/StepUp.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {

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
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <CartWidget/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;