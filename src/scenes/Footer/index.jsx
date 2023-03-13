import React from "react";

import profile1 from "@/assets/images/Profile1.jpg";

const Footer = () => {
  return (
    <footer className="bg-mono-800 py-16 text-mono-100">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-[150px]" alt="Me" src={profile1} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p className="font-bold text-tertiaryOrange-300 drop-shadow-lg">
            Kelvin Chao
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-mono-300 drop-shadow-lg">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-mono-300 drop-shadow-lg">Contact Me</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
