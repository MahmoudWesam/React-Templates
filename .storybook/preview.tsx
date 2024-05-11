import React from "react"

import type { Preview } from "@storybook/react"

import "../src/index.scss"

// maybe also change the decorator based on the feature to setup the appropriate context
const WithTheme = (Story, context): React.ReactElement => {
  return <Story {...context} />
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "Light",
      values: [
        {
          name: "Light",
          value: "#f8f9fa",
        },
        {
          name: "Dark",
          value: "#151718",
        },
      ],
    },
  },
  decorators: [WithTheme],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "globe",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Property that specifies if the name of the item will be displayed
        showName: true,
      },
    },
  },
}

export default preview
