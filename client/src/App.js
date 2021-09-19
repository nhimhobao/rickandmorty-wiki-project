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
import BookmarksPage from "./routes/bookmarks/BookmarksPage";

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
              <LogoutPage path="logout" />
              <BookmarksPage path="bookmarks" />
              <NotFoundPage path="*" />
            </Router>
          </Layout>
          <ToastContainer />
        </MuiThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
