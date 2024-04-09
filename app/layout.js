"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Bgcircle from "@/components/Bgcircle";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Bgcircle />
        <Header />
        {children}
      </body>
    </html>
  );
}
