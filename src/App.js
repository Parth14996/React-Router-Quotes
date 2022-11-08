import React, {  Suspense } from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
// import { AllQuotes } from "./pages/AllQuotes";
// This component is Lazily loaded - import { NewQuote } from "./pages/new-quote";
// import { NotFound } from "./pages/NotFound";
import { QuoteDetail } from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./pages/NewQuote').then((module) => ({default: module.NewQuote})))
// const NewQuote = lazy(() => import('./pages/NewQuote'))- this does not work
const NotFound = React.lazy(() => import("./pages/NotFound").then((module) => ({default: module.NotFound})))
const AllQuotes = React.lazy(() => import('./pages/AllQuotes').then((module) => ({default: module.AllQuotes})))


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
      <Routes>
        <Route path='/' element={<Navigate replace to='/quotes' />} />
        <Route path='/quotes' element={<AllQuotes />} />
        <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
          <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
