export async function axeAcessibilityReporter() {
  if (process.env.NODE_ENV === "development" && typeof window !== undefined) {
    const axe = await require("@axe-core/react");
    const ReactDOM = await require("react-dom");
    const React = await require("react");

    axe(React, ReactDOM, 1000);
  }
}
