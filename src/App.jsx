import { useEffect, useState } from "react";
import Quotes from "./components/Quotes";
import "./App.css";
function App() {
  const [quote, setQuote] = useState([]);
  const [image, setImage] = useState("");
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

  return (
    <>
      <div className="  h-screen md:h-full text-center flex-col lg:h-screen p-2 bg-[#091949]">
        <div className=" flex h-[90%] cover justify-center items-center">
          {quote.length > 0 && console.log(getImageData(quote[0].anime))}
          {quote.length > 0 && (
            <Quotes
              key={quote[0].id}
              q={quote[0]}
              fetchData={fetchData}
              url={image}
              loading={loading}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

//
