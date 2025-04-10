import React from "react";

const CustomButton = ({ text }) => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-black-900">
      <DrawOutlineButton>{text}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-cyan-400"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default CustomButton;
