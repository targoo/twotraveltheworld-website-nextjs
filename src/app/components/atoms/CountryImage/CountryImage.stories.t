import { Meta } from "@storybook/react";
import ImageNext from "next/image";
import * as NextImage from "next/image";

import { CountryImage } from "./CountryImage";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});

export default {
  title: "Components/Atoms/CountryImage",
  component: CountryImage,
} as Meta;

const TemplatePrimary = (args) => (
  <CountryImage label="label" {...args}>
    <ImageNext
      src="/countries/australia/australia-sidney-1.jpeg"
      width={600}
      height={400}
      alt="Picture"
      placeholder="blur"
      layout="responsive"
      {...args}
    />
  </CountryImage>
);

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
