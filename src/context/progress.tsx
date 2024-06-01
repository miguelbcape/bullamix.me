"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#f43f5e"
        options={{ showSpinner: false }}
      />
      {children}
    </>
  );
}
