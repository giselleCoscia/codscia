import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#1F1E21" },
        secondary: { value: "#333333" },
        terceary : {value:"#444345"},
        text: {value:"#D9D9D9"}
      },
      fonts: {
       titulo: {
        body: { value: "system-ui, sans-serif" },
        sinze :{value: "4xl"}
       } 
      
    },
       

   
  }},
})

export default createSystem(defaultConfig, config)