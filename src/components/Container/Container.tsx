import React, { ReactNode } from "react";
import Navbar from '../Navbar/Navbar'
import NavbarBlog from "../Navbar/NavbarBlog";
interface ContainerProps {
  children: ReactNode;
  // Autres props spécifiques à Container, si nécessaire
}
export default function Container({ children }: ContainerProps) {
  return (
    <>
      <Navbar/>
      {/* <NavbarBlog /> */}
      {children}
    </>
  );
}
