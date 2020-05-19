import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AsyncCreate, AsyncUser, AsyncUsers} from "./async.routes";

export const useRoutes = () => {
  return (
      <Switch>
        <Route path="/users" exact>
          <AsyncUsers/>
        </Route>

        <Route path="/users/:id">
          <AsyncUser/>
        </Route>

        <Route path="/create">
          <AsyncCreate/>
        </Route>

        <Redirect to="/users"/>
      </Switch>
  )
}