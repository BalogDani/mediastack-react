import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import "./App.scss";
import CategoryPage from "./pages/CategoryPage";
import SearchContextProvider from "./store/search-context";

function App() {
  return (
    <SearchContextProvider>
      <Layout>
        <Switch>
          <Route path="/technology" exact>
            <CategoryPage category="technology" />
          </Route>
          <Route path="/sports" exact>
            <CategoryPage category="sports" />
          </Route>
          <Route path="*">
            <Redirect to="technology" />
          </Route>
        </Switch>
      </Layout>
    </SearchContextProvider>
  );
}

export default App;
