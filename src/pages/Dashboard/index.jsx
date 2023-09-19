import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import DashboardButton from "components/DashboardButton";
import DashboardLargeinput from "components/DashboardLargeinput";
import DashboardRowavatar from "components/DashboardRowavatar";

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_barchart2.svg"
          alt="barchartTwo"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_file.svg" alt="file" />,
      label: "Projects",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_users.svg" alt="users" />,
      label: "Staffing",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_menu.svg" alt="menu" />,
      label: "Messages",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <div className="h-[960px] md:px-5 relative w-1/5 md:w-full">
          <Img
            className="h-[275px] my-auto object-cover rotate-[14deg] rounded-[72px] w-[52%]"
            src="images/img_divheroblurbg.png"
            alt="divheroblurbg"
          />
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!relative !w-[250px] bg-white-A700_05 border border-solid border-white-A700_14 bottom-[270px] flex md:hidden inset-x-[0] items-start justify-start mx-auto overflow-auto"
          >
            <Img
              className="h-[10%] mb-2 mt-[3px] w-[280px]"
              src="images/img_header.svg"
              alt="header"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "10px 10px 10px 11px",
                  gap: "12px",
                  color: "#f2f3f6",
                  fontWeight: 500,
                  fontSize: "18px",
                  borderRadius: "6px",
                  [`&:hover, &.ps-active`]: {
                    backgroundColor: "#101215ff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-3.5 mt-3 pt-2.5 sm:px-5 px-[30px] w-[79%]"
            >
              <div className="flex flex-col md:gap-3.5 gap-px items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col md:gap-[11px] gap-px items-center justify-end mt-[100px] relative top-[370px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[7px] w-6"
                      src="images/img_barchart2.svg"
                      alt="barchartTwo_One"
                    />
                  }
                >
                  <Text className="mb-[5px] mt-0.5 text-base w-auto">
                    Support
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[7px] w-6"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                >
                  <Text className="mb-[5px] mt-0.5 text-base w-auto">
                    Settings
                  </Text>
                </MenuItem>
              </div>
            </Menu>
            {!collapsed && (
              <Line className="bg-blue_gray-700 h-px mb-24 mt-[863px] mx-4 w-[89%]" />
            )}
            {!collapsed && (
              <div className="bottom-[600px] flex flex-row items-center justify-between mb-[31px] mt-2 mx-4 relative w-60">
                <DashboardRowavatar className="flex flex-row gap-3 items-center justify-start w-auto" />
                <div className="flex flex-col h-9 items-center justify-start w-9">
                  <div className="flex flex-col items-start justify-start rounded-lg w-9">
                    <Button className="flex h-9 items-center justify-center p-2 rounded-lg w-9">
                      <Img className="h-5" src="images/img_cut.svg" alt="cut" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Sidebar>
        </div>
        <div className="h-[1014px] md:px-5 relative w-[81%] md:w-full">
          <div className="absolute h-[1014px] inset-y-[0] my-auto right-[0] w-[85%] md:w-full">
            <Img
              className="h-[1014px] m-auto object-cover rotate-[14deg] rounded-[492px] w-full"
              src="images/img_divheroblurbg_1014x985.png"
              alt="divheroblurbg_One"
            />
            <div className="absolute flex flex-row gap-[9px] items-center justify-center right-[5%] top-[3%] w-[26%]">
              <div className="flex flex-col items-start justify-start px-2 py-[7px] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_notification.svg"
                  alt="notification"
                />
              </div>
              <DashboardButton className="flex flex-col items-start justify-start rounded-lg w-auto" />
            </div>
          </div>
          <DashboardLargeinput
            className="absolute bg-cover bg-no-repeat flex flex-col h-[46px] items-start justify-start left-[4%] p-3 top-[3%] w-[30%]"
            style={{ backgroundImage: "url('images/img_largeinput.svg')" }}
          />
          <div className="absolute bottom-[6%] flex flex-col gap-[22px] inset-x-[0] justify-start mx-auto w-full">
            <Line className="bg-white-A700_5e h-px w-full" />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[52px]">
              <Text
                className="text-sm text-white-A700_7e"
                size="txtPoppinsRegular14"
              >
                Copyright © 2023. Reslink. All rights reserved.
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[1055px] mx-auto top-[14%] w-full">
            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[51px] w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-between max-w-[1053px] w-full">
                  <div className="flex flex-col gap-1 items-start justify-start max-w-[814px] w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                      size="txtPoppinsMedium30"
                    >
                      Welcome back, Olivia
                    </Text>
                    <Text
                      className="text-base text-gray-100_01 w-full"
                      size="txtPoppinsRegular16"
                    >
                      Track, manage researchers and submissions.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row gap-6 inset-x-[0] items-center justify-between max-w-[1054px] mx-auto top-[24%] w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700_0a border border-solid border-white-A700_21 flex flex-row gap-1.5 items-center justify-center sm:px-5 rounded-lg w-auto">
                <div className="flex flex-col items-start justify-start w-[72%]">
                  <div className="flex flex-col items-end justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-full"
                        size="txtPoppinsSemiBold36"
                      >
                        07
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      Active Projects
                    </Text>
                  </div>
                </div>
                <Button className="bg-green-500_01 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <Img
                    className="h-6"
                    src="images/img_fluentperson32regular.svg"
                    alt="fluentperson32r"
                  />
                </Button>
              </div>
              <div className="bg-white-A700_0a border border-solid border-white-A700_21 flex flex-row gap-1.5 items-center justify-center p-6 sm:px-5 rounded-lg w-auto">
                <div className="flex flex-col items-start justify-start w-[72%]">
                  <div className="flex flex-col items-end justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-full"
                        size="txtPoppinsSemiBold36"
                      >
                        04
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      Proposals
                    </Text>
                  </div>
                </div>
                <Button className="bg-green-500_01 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <Img
                    className="h-6"
                    src="images/img_basileditoutline.svg"
                    alt="basileditoutlin"
                  />
                </Button>
              </div>
              <div className="bg-white-A700_0a border border-solid border-white-A700_21 flex flex-row gap-1.5 items-center justify-center p-6 sm:px-5 rounded-lg w-auto">
                <div className="flex flex-col items-start justify-start w-[72%]">
                  <div className="flex flex-col items-end justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-full"
                        size="txtPoppinsSemiBold36"
                      >
                        03
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      Active Jobs
                    </Text>
                  </div>
                </div>
                <Button className="bg-green-500_01 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <Img
                    className="h-6"
                    src="images/img_solarbookmarkbroken.svg"
                    alt="solarbookmarkbr"
                  />
                </Button>
              </div>
            </List>
            <div className="bg-white-A700_0a border border-solid border-white-A700_21 flex flex-row gap-1.5 items-center justify-center p-6 sm:px-5 rounded-lg w-auto">
              <div className="flex flex-col items-start justify-start w-[72%]">
                <div className="flex flex-col items-end justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-full"
                      size="txtPoppinsSemiBold36"
                    >
                      240
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    Application
                  </Text>
                </div>
              </div>
              <div className="bg-green-500_01 flex flex-col h-[50px] items-center justify-start p-[13px] rounded-[50%] w-[50px]">
                <div className="md:h-4 h-6 py-[3px] relative w-6">
                  <Img
                    className="h-4 m-auto"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Img
                    className="absolute h-[9px] inset-[0] justify-center m-auto w-[9px]"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[20%] flex md:flex-col flex-row md:gap-[52px] inset-x-[0] items-center justify-between max-w-[1054px] mx-auto w-full">
            <div className="bg-white-A700_0a border border-solid border-white-A700_21 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[9px] relative rounded-lg top-10 w-[49%] md:w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start relative top-5 w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-[90%] md:w-full">
                    <Text
                      className="font-semibold text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtPoppinsSemiBold22"
                    >
                      Posted Projects
                    </Text>
                    <Text
                      className="mt-1 text-sm text-white-A700_ab underline"
                      size="txtPoppinsMedium14"
                    >
                      See All{" "}
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-800 h-px w-full" />
                </div>
                <div className="flex flex-col items-start justify-start p-0.5 relative w-auto sm:w-full">
                  <List
                    className="bottom-[17px] flex flex-col gap-px items-center mt-px relative w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-900_7f flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Thermal protective performance and mult
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-end w-[36%] sm:w-full">
                        <div className="bg-orange-A100 h-3 my-1 rounded-[50%] w-3"></div>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Resume review
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_7f flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Effect of heat flux and moisture content on the thermal
                        protective performance of outer layer of fire pro
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                        <div className="flex flex-row gap-[7px] items-center justify-start sm:pl-5 pl-6 w-[149px]">
                          <div className="bg-red-300_01 h-3 rounded-[50%] w-3"></div>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            Interview
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_7f flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Thermal protective performance and mult
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                        <div className="flex flex-row gap-[7px] items-center justify-start sm:pl-5 pl-6 w-[149px]">
                          <div className="bg-teal-200 h-3 rounded-[50%] w-3"></div>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            Task
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_7f flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Testing and evaluation of functional textiles
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                        <div className="flex flex-row gap-[7px] items-center justify-start sm:pl-5 pl-6 w-[149px]">
                          <div className="bg-green-400 h-3 rounded-[50%] w-3"></div>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            Payment
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_7f flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Development of thermal liner for Extreme Heat Protective
                        Clothing
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                        <div className="flex flex-row gap-[7px] items-center justify-start sm:pl-5 pl-6 w-[149px]">
                          <div className="bg-blue_gray-100_01 h-3 rounded-[50%] w-3"></div>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            Closed
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_7f flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Testing and evaluation of functional textiles
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                        <div className="flex flex-row gap-[7px] items-center justify-start sm:pl-5 pl-6 w-[149px]">
                          <div className="bg-green-400 h-3 rounded-[50%] w-3"></div>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            Payment
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white-A700_0a border border-solid border-white-A700_21 flex md:flex-1 flex-col md:gap-3 gap-px items-start justify-end pb-[17px] pt-[11px] relative rounded-lg top-2.5 w-[49%] md:w-full">
              <Text
                className="md:ml-[0] ml-[30px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Recent Activities
              </Text>
              <Line className="bg-blue_gray-800 h-px w-full" />
              <List
                className="flex flex-col gap-2.5 items-start md:ml-[0] ml-[25px] w-auto"
                orientation="vertical"
              >
                <div className="bg-gray-900_7f flex flex-row gap-2.5 items-center justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                  <div className="bg-teal-200 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Interview is scheduled for 12PM
                  </Text>
                  <div className="flex flex-col items-center justify-start px-0.5 w-auto">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      6:29PM
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_7f flex sm:flex-col flex-row gap-2.5 items-center justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                  <div className="bg-orange-A100 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Applicant applied on Technical researcher
                  </Text>
                  <div className="flex flex-col items-center justify-start px-0.5 w-auto">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      8:21PM
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_7f flex flex-row gap-2.5 items-center justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                  <div className="bg-red-300_02 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Interview is cancelled
                  </Text>
                  <div className="flex flex-col items-center justify-start px-0.5 w-auto">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      7:10PM
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_7f flex sm:flex-col flex-row gap-2.5 items-center justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                  <div className="bg-orange-A100 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Applicant applied on Technical researcher
                  </Text>
                  <div className="flex flex-col items-center justify-start px-0.5 w-auto">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      6:29PM
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_7f flex flex-row gap-2.5 items-center justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                  <div className="bg-green-400_01 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Recieved Proposal
                  </Text>
                  <div className="flex flex-col items-center justify-start px-0.5 w-auto">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      6:29PM
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_7f flex flex-row gap-2.5 items-center justify-start sm:px-5 px-[21px] py-3 rounded w-auto sm:w-full">
                  <div className="bg-teal-200 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Interview is scheduled for 12PM
                  </Text>
                  <div className="flex flex-col items-center justify-start px-0.5 w-auto">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      6:29PM
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
