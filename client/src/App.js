import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { Blog } from "./pages/blog/Blog"
import { Market } from "./pages/market/Market"
import { Contact } from "./pages/contact/Contact"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"

import { BrowserRouter , Route, Switch } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/market' component={Market} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
