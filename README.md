##### UpTask - Node Express TypeScript Mongoose Tailwindcss ReactQuery

#### Start

`npm i vite@latest`

Choose React & TS project with SWC

#### Install Tailwindcss

`npm install -D tailwindcss
npx tailwindcss init`

##### Configure following tailwind home page steps

#### Install React Router Dom

`npm i react-router-dom`

#### Install Node

`npm i -D @types/node`

We change syntax =>
` "../src/components/Logo"` to `"@/components/Logo"`

#### Add in tsconfig.app.json

```
import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
resolve: {
alias: {
"@": fileURLToPath(new URL("./src", import.meta.url)),
},
},
})

```

#### Modified tsconfig.json to update about this change

Add this lines before
`/* Bundler mode */`

```
..."compilerOptions": {

...
"baseUrl": "src",
"paths": {
      "@/components/*": ["components/*"]
    },
/* Bundler mode */

...
}
```

After that we can build of production without errors because is a syntax that knows

#### Install headlessui and heroicons dependencies (from tailwindcss)

`npm i @headlessui/react @heroicons/react`

#### Install React hook form

` npm i react-hook-form`

#### Install Zod

`npm i zod`

#### Install Axios

`npm i axios`

#### Install React-toastify library

`npm i react-toastify`

#### Install react-query library

`npm i @tanstack/react-query`
