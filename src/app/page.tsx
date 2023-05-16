"use client";
import Image from "next/image";
import "./page.scss";
import "./globals.scss";
import { Typography, Button, Box, Tabs, Tab } from "@mui/material";
import React from "react";
import { theme } from "../muitheme";
import { ThemeProvider } from "@mui/material";
import { TabNavigation } from "./components";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ width: "100%" }}>
        <section
          className="flex items-center justify-between"
          style={{ padding: "10px 0px" }}
        >
          <Typography className="heading">WeWork + Salesforce</Typography>
          <Button variant="contained" className="btn font-bold">
            Publish/Share
          </Button>
        </section>
        <section className="proposal-poster">
          <Image src="/poster.svg" alt="poster" fill />
          <Image
            src="/badge-poster.png"
            alt="poster"
            width={246}
            height={101}
            className="badge-poster"
          />
        </section>
        <section className="flex justify-between">
          <Typography className="heading-2" style={{ marginTop: "5rem" }}>
            Project Scope Recap
          </Typography>
          <div className="flex flex-col">
            <span className="flex justify-between items-center mutual-action-container">
              <p className="title">Mutual Action Plan</p>
              <p className="percent-value">3%</p>
            </span>
            <Image
              src="/loader.png"
              alt="progress-bar"
              width={192}
              height={8}
            />
          </div>
        </section>
        <TabNavigation />
      </main>
    </ThemeProvider>
  );
}
