import { Navigate, Route, Routes, Link } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AllQuotes } from "./pages/AllQuotes";
import { NewQuote } from "./pages/new-quote";
import { NotFound } from "./pages/NotFound";
import { QuoteDetail } from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";


function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;