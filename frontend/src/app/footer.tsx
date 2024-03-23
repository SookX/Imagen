import React from "react";
import { useState } from 'react';

function Footer() {
  return (
    <footer className="w-full text-white py-6 ">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Imagen.AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;