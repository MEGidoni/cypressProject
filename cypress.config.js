import { defineConfig } from "cypress";

export default defineConfig({
  projectId:'m96n65',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://localhost:5173",
    viewportWidth:1450,
    viewportHeight:1000
  },
  env:{
    TOKEN_NAME:'acsses_Token',
    TOKEN_VALUE:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQzMDYzOTU3LCJleHAiOjE3NDU2NTU5NTd9.X1OIvJu9JTMGm1SuTml-yp922WvEDC5tgwqZiKiayxY'
  }
});
