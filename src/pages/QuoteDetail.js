import {useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { useHttp } from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export const QuoteDetail = () => {
  const params = useParams();
  // const match = useRouteMatch(): this hook does not work in React router v6 or above
  const{ quoteId } = params
  console.log(`/quotes/${quoteId}`)

  const{sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
    
  },[sendRequest, quoteId])

  if(status === 'pending'){
    <div className="centered">
      <LoadingSpinner />
    </div>
  }
  if(error){
    <p className="centered">{error}</p>
  }
  if(!loadedQuote){
    return <NoQuotesFound />
  }

 
  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
      {/* react router v5 code */}
      {/* <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route> */}
    </>
  );
};
