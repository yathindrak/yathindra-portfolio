import React, { createContext, useState } from "react";
const { createClient } = require('contentful');
// interface IProject {
//   name: string;
//   description: string;
//   image: string;
// }

export interface IContentfulConfig {
  accessToken: string;
  space: string;
}

export interface IContentfulContext {
  client: any;
}

interface Props {
  children: React.ReactNode;
  config: IContentfulConfig;
}

export const ContentfulContext = createContext<IContentfulContext>({} as any);

const ContentfulProvider = ({ children, config }: Props) => {
  const contentfulClient = createClient({
    accessToken: config.accessToken,
    space: config.space,
  });

  return (
    <ContentfulContext.Provider value={{ client: contentfulClient }}>
      {children}
    </ContentfulContext.Provider>
  );
};

export default ContentfulProvider;
