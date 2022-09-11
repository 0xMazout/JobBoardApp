import "../styles/globals.css";
import MainLayout from "../components/MainLayout";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
// import { RootStoreProvider } from "../components/utilityComponents/rootStoreProvider";
import { getStores, RootStoreProvider } from "../providers/RootStoreProvider";
// import { RootStateContext, RootStateProvider } from "../components/utilityComponents/RootStateContext";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

const Apollo = () =>{
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });
  return (client)
}

export default function MyApp({
  Component,
  pageProps,
}: ComponentWithPageLayout) {

  

  // const stores = getstores()
  return (
    <>
    <ApolloProvider client={Apollo()}>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <RootStoreProvider >
            <Component {...pageProps} />
          </RootStoreProvider>
        </Component.PageLayout>
      ) : (
        <RootStoreProvider>
        <Component {...pageProps} />
        </RootStoreProvider>
      )}
      </ApolloProvider>
    </>
  );
}

// export default function MyApp({ Component, pageProps } : AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(<Component {...pageProps} />)}

// export default MyApp;
