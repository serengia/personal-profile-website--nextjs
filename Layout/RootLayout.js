import React from "react";

import { useSelector } from "react-redux";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function RootLayout({ children }) {
  const { modalOpen } = useSelector((state) => state.modal);
  return (
    <>
      <Header />
      {children}
      <Footer />
      <div className="modal-container">{modalOpen && <Modal />}</div>
    </>
  );
}

export default RootLayout;
