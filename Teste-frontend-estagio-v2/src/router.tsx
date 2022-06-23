import { useRoutes } from "react-router-dom"
import MapView from "./pages/MapView/mapView"
import StatusHistory from "./pages/StatusHistory/StatusHistory"

export const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MapView />
        },
        {
            path: '/states:equipamentId',
            element: <StatusHistory />
        }
    ])
}