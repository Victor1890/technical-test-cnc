import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";
import { CountryI } from "../providers/server/server.interface";

interface Props {
    countries: CountryI[]
}

function Router({ countries }: Props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage countries={countries} /> },
                {
                    path: "/:id",
                    element: <DetailPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;

}

export default Router