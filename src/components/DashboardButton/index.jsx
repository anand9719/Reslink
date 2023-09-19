import React from "react";

import { Img, Text } from "components";

const DashboardButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-green-500_01 border border-green-500_01 border-solid flex flex-row gap-2 items-center justify-center px-5 py-[13px] rounded-lg shadow-bs w-auto md:w-full">
          <Img className="h-5 w-5" src="images/img_plus.svg" alt="plus" />
          <Text
            className="text-sm text-white-A700 w-auto"
            size="txtPoppinsSemiBold14"
          >
            {props?.buttontext}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardButton.defaultProps = { buttontext: "Create New Project" };

export default DashboardButton;
