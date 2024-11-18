import { Meta } from "@storybook/react";
import * as NextImage from "next/image";

import { Image, ImageSepia } from "./Image";

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
  title: "Components/Atoms/Image",
  component: Image,
} as Meta;

const TemplatePrimary = (args) => (
  <Image
    src="/blogs/warner-brothers-studio-tour.jpg"
    width={400}
    height={300}
    alt="Picture"
    placeholder="blur"
    {...args}
  />
);
export const Primary = TemplatePrimary.bind({});
Primary.args = {};

const TemplateSepia = (args) => (
  <ImageSepia
    src="/blogs/warner-brothers-studio-tour.jpg"
    width={400}
    height={300}
    alt="Picture"
    placeholder="blur"
    {...args}
  />
);

export const Sepia = TemplateSepia.bind({});
Sepia.args = {};
