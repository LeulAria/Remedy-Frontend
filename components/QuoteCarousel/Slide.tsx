import React from "react";
// @ts-ignore
import { Slide } from "material-auto-rotating-carousel";

const index = (props: any) => {
  return (
    <Slide
      media={
        <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
      }
      title="This is a very cool feature"
      subtitle="Just using this will blow your mind."
    />
  );
};

export default index;
