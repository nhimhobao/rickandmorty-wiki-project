import { Router } from "@reach/router";
import HomePage from "./routes/home/HomePage";
import NotFoundPage from "./routes/not-found/NotFoundPage";
import CallbackPage from "./routes/callback/CallbackPage";
import LogoutPage from "./routes/logout/LogoutPage";
import AuthContextProvider from "./components/AuthContext";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-placeholder/lib/reactPlaceholder.css";

import BookmarksPage from "./routes/bookmarks/BookmarksPage";
import CallbackKeycloakPage from "./routes/callback-keycloak/CallbackKeycloakPage";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Router>
              <HomePage path="/" />
              <CallbackPage path="callback" />
              <CallbackKeycloakPage path="callback-keycloak" />
              <LogoutPage path="logout" />
              <BookmarksPage path="bookmarks" />
              <NotFoundPage path="*" />
            </Router>
          </Layout>
          <ToastContainer autoClose={1000} hideProgressBar />
        </MuiThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
