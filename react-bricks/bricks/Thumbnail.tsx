import React from "react";
import { types, Text, RichText, Image } from "react-bricks/frontend";

interface ThumbnailProps {
  hasShadow: boolean;
  bgColor: types.IColor;
}

const Thumbnail: types.Brick<ThumbnailProps> = ({
  hasShadow,
  bgColor,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`my-6 p-6 text-center border rounded-lg ${
        hasShadow ? "shadow-xl" : ""
      } ${bgColor?.className}`}
    >
      <Image
        propName="image"
        alt="Fallback alt tag"
        maxWidth={200}
        imageClassName="mb-6"
      />
      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-2xl font-bold">{children}</h1>
        )}
        placeholder="Type a title..."
      />
      <RichText
        propName="description"
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Link,
        ]}
        renderHighlight={({ children }) => (
          <span className="px-1 rounded bg-blue-200 text-blue-900">
            {children}
          </span>
        )}
      />
    </div>
  );
};

Thumbnail.schema = {
  name: "thumbnail",
  label: "Thumbnail",
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: "Hello, world!",
    description: "Lorem ipsum dolor sit amet.",
    hasShadow: true,
    bgColor: { color: "#700e0e", className: "bg-red-500" },
  }),
  sideEditProps: [
    {
      name: "hasShadow",
      label: "Shadow",
      type: types.SideEditPropType.Boolean,
    },
    {
      name: "bgColor",
      label: "Background",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: "Red",
            value: { color: "#700e0e", className: "bg-red-800" },
          },
          {
            label: "Dark blue",
            value: { color: "#092e5f", className: "bg-blue-800" },
          },
        ],
      },
    },
  ],
};

export default Thumbnail;
