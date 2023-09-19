import React from "react";

import { Img, Text } from "components";

const DashboardLargeinput = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_largeinput.svg')" }}
      >
        <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[7px] w-[23%] md:w-full">
          <Img
            className="h-[11px] w-[11px]"
            src="images/img_search.svg"
            alt="search"
          />
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-sm text-white-A700_a2 tracking-[-0.28px]"
              size="txtPoppinsRegular14WhiteA700a2"
            >
              {props?.searchtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardLargeinput.defaultProps = { searchtext: "Search" };

export default DashboardLargeinput;
