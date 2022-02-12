import React, { createContext, lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import higherOrderComponent from "./components/Hoc";
import Header from "./components/Header";
import counterReducer from "./reducers/CounterReducer";
const SampleRenderProps = lazy(() => import("./components/SampleRenderProps"));
const I18Component = lazy(() => import("./components/I18Component"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const CounterComponent = lazy(() => import("./components/CounterComponent"));
const SignUpForm = lazy(() => import("./components/SIgnUpForm"));
const SumNumbers = lazy(() => import("./components/SumNumbers"));
const TaskScreen = lazy(() => import("./components/TaskScreen"));
const Photos = lazy(() => import("./components/Photos"));
const ReduxCounter = lazy(() => import("./components/ReduxCounter"));

export const AnupamaContext = createContext({ favCharacter: "Anupama" });
export const BreakingBadContext = createContext({
  favCharacter: "Walter White",
});

const myReduxStore = createStore(counterReducer);

const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
  });

  const anupamaContent = useContext(AnupamaContext);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>{anupamaContent.favCharacter}</div>}>
          <Routes>
            <Route path={"/"} element={<h1>This is on Home Page</h1>} />
            <Route
              path={"/contact"}
              element={<h1>This is on Contact Page</h1>}
            />
            <Route path={"/about"} element={<h1>This is on About Page</h1>} />
            <Route
              path={"/signup"}
              element={
                <ErrorBoundary>
                  <SignUpForm />
                </ErrorBoundary>
              }
            >
              <Route path={"sum"} element={<SumNumbers />} />
            </Route>
            <Route path={"/tasks"} element={<TaskScreen />} />
            <Route
              path={"/counter"}
              element={
                <ErrorBoundary>
                  <CounterComponent />
                </ErrorBoundary>
              }
            />
            <Route path={"/photos"} element={<Photos />} />
            <Route path={"/test"} element={<TestApp />} />
            <Route path={"/sample"} element={<SampleRenderProps />} />
            <Route path={"/international"} element={<I18Component />} />
            <Route path={"/redux-counter"} element={<ReduxCounter />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

const MyApp = () => (
  <Provider store={myReduxStore}>
    <AnupamaContext.Provider
      value={{
        favCharacter: "Anupama",
        favVillain: "Vanraj",
        loudest: "Kavya",
      }}
    >
      <BreakingBadContext.Provider
        value={{ favCharacter: "Walter White", mostHatedCharacter: "Jessie" }}
      >
        <App />
      </BreakingBadContext.Provider>
    </AnupamaContext.Provider>
  </Provider>
);

export default MyApp;
