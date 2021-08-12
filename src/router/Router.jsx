import { Switch, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { memo } from "react";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { path } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${path}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

{
  /* <Route exact path={path}>
              <Home />
            </Route>
            <Route path={`${path}/user_management`}>
              <UserManagement />
            </Route>
            <Route path={`${path}/setting`}>
              <Setting />
            </Route> */
}
