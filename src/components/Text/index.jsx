import React from "react";

const sizeClasses = {
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular14WhiteA700a2: "font-normal font-poppins",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14Gray100: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
