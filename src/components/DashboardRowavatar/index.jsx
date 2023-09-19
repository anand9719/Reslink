import React from "react";

import { Img, Text } from "components";

const DashboardRowavatar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-10 md:h-auto rounded-[50%] w-10"
          src="images/img_avatar.png"
          alt="avatar"
        />
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-sm text-white-A700 w-auto"
            size="txtPoppinsSemiBold14"
          >
            {props?.username}
          </Text>
          <Text
            className="text-gray-100 text-sm w-auto"
            size="txtPoppinsRegular14Gray100"
          >
            {props?.useremail}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardRowavatar.defaultProps = {
  username: "Olivia Rhye",
  useremail: "olivia@untitledui.com",
};

export default DashboardRowavatar;
