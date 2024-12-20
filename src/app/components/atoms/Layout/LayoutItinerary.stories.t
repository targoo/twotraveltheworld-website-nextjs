import { Meta } from "@storybook/react";

import { Layout, LayoutNav, LayoutMain } from "./LayoutItinerary";

export default {
  title: "Components/Atoms/LayoutItinerary",
  component: Layout,
} as Meta;

const Template = () => (
  <Layout>
    <LayoutNav>
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
    </LayoutNav>
    <LayoutMain>
      <h1>Welcome to ThingStore</h1>
      <h2>Welcome to ThingStore</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <h2>Welcome to ThingStore</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for &apos;lorem ipsum&apos; will uncover many web sites
        still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for &apos;lorem ipsum&apos; will uncover many web sites
        still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
      <h2>Welcome to ThingStore</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for &apos;lorem ipsum&apos; will uncover many web sites
        still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for &apos;lorem ipsum&apos; will uncover many web sites
        still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for &apos;lorem ipsum&apos; will uncover many web sites
        still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>
    </LayoutMain>
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {};
