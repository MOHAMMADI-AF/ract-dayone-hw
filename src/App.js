import "./App.css";
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/Averagerating";
import SentimentalAnalysis from "./components/Sentimentanalysis";
import WebsiteVisitors from "./components/WebsiteVisitors";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <div className="page-contants">
          <div className="page-top">
            <Reviews />
            <AverageRating />
            <SentimentalAnalysis />
          </div>
          <WebsiteVisitors />
        </div>
      </div>
    </div>
  );
}

export default App;
