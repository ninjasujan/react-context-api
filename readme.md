## React Utility

**1. React strict mode.**
StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

**StrictMode currently helps with**

- Identifying components with unsafe lifecycles.
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API
- Ensuring reusable state

**2. Source Map**
Creates link between compiled output file and source file.
Helps to debug easy in case of an error in browser - In dev mode
It is a best practises to hide the source map in production mode to prevent accessing the source code.

**3. React Context-API**
Context API is uded to pass state and props between component easily.
All component which are wrapped with context provider will have access to the context state.
2 hooks used in context API to manage the state.

- useContext
- createContext
