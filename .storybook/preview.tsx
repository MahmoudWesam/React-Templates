import React, { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

import { StyledEngineProvider } from "@mui/material"

import type { Preview } from "@storybook/react"
import { lightTheme, darkTheme, ThemeProvider, NotificationProvider } from "@synapse-analytics/synapse-ui"

import { CurrentProjectAndModelContext } from "../src/store/CurrentProjectAndModelContext"
import { Deployment } from "../src/types/generated/api/Deployment"

import "../src/index.scss"

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

// Function to obtain the intended theme
const queryClient = new QueryClient()
// TODO:: refactor when we have more components and use presentation container architecture
// maybe also change the decorator based on the feature to setup the appropriate context
const WithTheme = (Story, context): React.ReactElement => {
  const theme = themes[context.globals.theme]
  const [currentProject, setCurrentProject] = useState<Deployment | undefined>(undefined)
  const [currentModel, setCurrentModel] = useState<string>("")

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <NotificationProvider maxSnack={3} />
          <BrowserRouter>
            <CurrentProjectAndModelContext.Provider
              value={{ currentProject, setCurrentProject, currentModel, setCurrentModel }}
            >
              <Story {...context} />
            </CurrentProjectAndModelContext.Provider>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  )
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
