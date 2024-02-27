import React from "react";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      {/* gep-app gives the dark background to this section */}
      <div className="get-app">
        {/*
         * L side of app on bigger screens, or top if on mobile
         * z-20 appears on top
         * flex-1 so it expands naturally
         */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            get for free now
          </h2>
          <p className="regular-16 text-gray-10">Availabe on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row ">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
             <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
