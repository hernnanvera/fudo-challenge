import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

/**
 * Styles
 */
// import mainStyles from "./styles/main.scss";
// ...
import desktopStyles from "~/styles/desktop.css";
import mobileStyles from "~/styles/mobile.css";


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

// export function dynamicLinks() {
//   return [{href: mainStyles, rel: 'stylesheet'}];
// }

export function links() {
  return [
    { rel: "stylesheet", href: mobileStyles },
    { rel: "stylesheet", href: desktopStyles, media: "(min-width: 680px)"}
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
