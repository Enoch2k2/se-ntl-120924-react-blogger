import App from "./App"
import Blog from "./components/Blog"
import Example from "./components/Example"
import Form from "./components/Form"
import List from "./components/List"

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blogs",
        element: <List />,
        children: [
          {
            path: "/blogs/example",
            element: <Example />
          }
        ]
      },
      {
        path: "/blogs/new",
        element: <Form />
      },
      {
        path: "/blogs/:id",
        element: <Blog />
      }
    ]
  }
]