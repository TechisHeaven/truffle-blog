"use client";
import React, { useEffect } from "react";

const ContextMenu = ({ onSelectText }: any) => {
  const handleSelect = () => {
    const selectedText = window.getSelection();
    // Add your custom logic or context menu handling here
    // return selectedText?.toString();
    onSelectText(selectedText?.toString());
  };

  useEffect(() => {
    const element = document.querySelector(".content");

    element?.addEventListener("selectstart", handleSelect);
    return () => {
      document.removeEventListener("selectstart", handleSelect);
    };
  }, []); // Empty dependency array ensures that the effect runs once after mounting

  return null;
};

export default ContextMenu;
