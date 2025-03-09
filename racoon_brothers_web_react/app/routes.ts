import type { Root } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { Welcome } from "./welcome/welcome";

export const router = createBrowserRouter([
    {
        path : "/" ,
        children : [
           {
             path : "client",
             element : <Welcome />

           }


        ]
    }  
]);