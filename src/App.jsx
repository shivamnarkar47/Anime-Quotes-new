import { useEffect, useState } from "react";
import Quotes from "./components/Quotes";
import "./App.css";
import { cn } from "../cna";
function App() {
  const [quote, setQuote] = useState([]);
  const [image, setImage] = useState("");
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    await fetch("https://katanime.vercel.app/api/getrandom")
      .then((json) => json.json())
      .then((quotes) => {
        setQuote(quotes.result);
      });
    setLoading(true);
  };

  const getImageData = async (a) => {
    await fetch(`https://api.jikan.moe/v4/anime?page=1&q=${a}`)
      .then((response) => response.json())
      .then((images) => {
        console.log(images.data[0].images.webp.large_image_url);
        setImage(images.data[0].images.webp.large_image_url);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(quote);
    if (quote.length > 0) {
      getImageData(quote[0].anime);
    }
  }, [quote]);

  return (
    <>
      <div
        className={cn(
          "h-screen md:h-full text-center flex-col lg:h-screen p-2 transition-all duration-500 ease-in-out"
        )}
        style={
          // colors.colors !== undefined && {
          {
            background:
              colors.colors !== undefined ? colors.colors[0] : "#111111",
          }
        }
      >
        <div className=" flex h-[90%] cover justify-center items-center">
          {/* {quote.length > 0 && console.log(getImageData(quote[0].anime))} */}
          {quote.length > 0 && (
            <Quotes
              key={quote[0].id}
              q={quote[0]}
              fetchData={fetchData}
              url={image}
              loading={loading}
              setColorsBase={setColors}
            />
          )}
          {/* {console.log(colors)} */}
        </div>
      </div>
    </>
  );
}

export default App;

//
