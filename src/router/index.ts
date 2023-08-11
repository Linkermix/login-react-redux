import Login from "../pages/Login";
import Event from "../pages/Event";

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, element: Event}
]