"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import "../styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 font-bold">
        <Link className="pr-4" href="/">
          Home
        </Link>
        <Link className="pr-4" href="/todoList">
          Todo-List
        </Link>
        <Link className="pr-4" href="/summaryDepartment">
          Summary-User
        </Link>
      </nav>
      {children}
    </>
  );
};

export default RootLayout;
