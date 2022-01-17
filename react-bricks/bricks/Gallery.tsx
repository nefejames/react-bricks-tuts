import React from "react";
import { types, Repeater } from "react-bricks/frontend";

const Gallery: types.Brick = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center">Gallery</h1>
      <div className="sm:grid grid-cols-3 gap-5">
        <Repeater propName="thumbnails" />
      </div>
    </div>
  );
};

Gallery.schema = {
  name: "gallery",
  label: "Gallery",
  getDefaultProps: () => ({
    thumbnails: [
      {
        title: "Hello, world!",
        description: "Lorem ipsum dolor sit amet.",
        hasShadow: true,
        bgColor: { color: "#45660a", className: "bg-green-500" },
      },
      {
        title: "Hello, worlds!",
        description: " sit amet.",
        hasShadow: true,
        bgColor: { color: "#be7a12", className: "bg-red-500" },
      },
    ],
  }),
  repeaterItems: [
    {
      name: "thumbnails",
      itemType: "thumbnail",
      itemLabel: "Thumbnail",
      max: 3,
    },
  ],
};

export default Gallery;
