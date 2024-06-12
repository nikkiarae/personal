import {
    createBrowserRouter,
} from "react-router-dom";
import * as Pages from '@pages/index'
import { Layout } from '@components/layouts'
import * as k from "@services/constants";
  
const Router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
            index: true,
            element: <Pages.Home />,
        },
        {
            path: k.PROJECTS,
            element: <Pages.Projects />,
        },
        {
          path: `${k.PROJECTS}/:id`,
          element: <Pages.Project />
        },
        {
          path: k.ABOUT,
          element: <Pages.About />,
        },
        {
          path: k.CONTACT,
          element: <Pages.Contact />,
        },
      ],
    }
], {
    basename: "/",
});

export default Router