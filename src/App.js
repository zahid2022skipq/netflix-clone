import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
