"use client";

import React from "react";
import Image from "next/image";
import { Box, Tabs, Tab, Typography, LinearProgress } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabNavigation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderColor: "divider", marginTop: "1rem" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Basic Info" {...a11yProps(0)} />
          <Tab label="Files" {...a11yProps(1)} />
          <Tab label="Mutual Action Plan" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(2)} />
          <Tab
            label="Internal Actions"
            {...a11yProps(2)}
            style={{ marginLeft: "auto", marginRight: "0rem" }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <article className="flex gap-1 company-profile">
            <section className="overview-menu">
              <Typography className="heading">Overview</Typography>
              <ul>
                <li>Welcome</li>
                <li>Product Capabilities</li>
                <li>Customer Success Stories</li>
                <li>File sharing</li>
                <li>Our Deck</li>
              </ul>
            </section>
            <section className="w-full">
              <div className="flex justify-between items-center">
                <Typography className="heading-2">Company Profile</Typography>
                <section className="more-options-1">
                  <Image
                    src="/more-option-1.svg"
                    alt="more-options"
                    width={24}
                    height={24}
                  />
                </section>
                <div className="page-icons flex items-center">
                  <Image
                    src="/download-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <Image src="/pipe-icon.svg" alt="" width={24} height={24} />
                  <Image src="/eye-icon.svg" alt="" width={24} height={24} />
                  <Image src="/pipe-icon.svg" alt="" width={24} height={24} />
                  <Image src="/bin-icon.png" alt="" width={24} height={24} />
                </div>
              </div>
              <div className="poster-container">
                <div className="poster-action-container">
                  <span className="flex poster-actions">
                    <span className="flex items-center gap-05">
                      <Image
                        src="/pdf-icon.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                      <p>1/5</p>
                    </span>
                    <Image src="/pipe-icon.svg" alt="" width={24} height={24} />
                    <Image
                      src="/download-icon-2.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <Image src="/pipe-icon.svg" alt="" width={24} height={24} />
                    <Image
                      src="/zoom-in-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <Image src="/pipe-icon.svg" alt="" width={24} height={24} />
                    <Image
                      src="/zoom-out-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <Image src="/pipe-icon.svg" alt="" width={24} height={24} />
                    <Image
                      src="/external-icon.png"
                      alt=""
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
                <div className="inner-poster">
                  <Image
                    src="/poster-center.png"
                    alt="poster"
                    height={160}
                    width={420}
                    className="cursor-pointer inner-one"
                  />
                </div>
                <Image
                  src="/poster-2.svg"
                  alt="poster"
                  height={656}
                  width={500}
                  className="basic-poster"
                />
              </div>
              <div className="flex items-center">
                <span className="chat-icon-container">
                  <Image
                    src="/chat-icon.svg"
                    alt="chat-icon"
                    height={30}
                    width={30}
                  />
                  <p className="badge">8</p>
                </span>

                <Image src="/pipe-icon.svg" alt="pipe" width={24} height={24} />

                <Image
                  src="/share-icon.svg"
                  alt="share-icon"
                  height={23}
                  width={21}
                />
              </div>
            </section>
          </article>
        </TabPanel>
      </Box>
    </>
  );
};

export { TabNavigation };
