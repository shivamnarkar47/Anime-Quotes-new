import { useEffect, useState } from "react";
import Quotes from "./components/Quotes";
import "./App.css"
function App() {
  const [quote, setQuote] = useState([]);
  const [image,setImage] = useState('')
  const fetchData =async () => {
      
    
    await fetch("https://katanime.vercel.app/api/getrandom")
      .then((json) => json.json())
      .then((quotes) => {
        setQuote(quotes.result);
      });
  };

  const getImageData = async (a) => {
    await fetch(`https://api.jikan.moe/v4/anime?page=1&q=${a}`)
    .then((json)=>json.json())
    .then((images) => {
        console.log(images.data[0].images.webp.large_image_url)
        setImage(images.data[0].images.webp.large_image_url);
      });
  };

  useEffect(() => {
  
    fetchData();
  }, []);

  
  return (
    <>
      {quote.length > 0 && console.log(getImageData(quote[0].anime))}
      {quote.length > 0 && 
       
      (
        <div className="flex cover justify-center items-center h-screen p-2 md:bg-contain bg-no-repeat bg-center" style={{background:`url('${image}') `, backgroundSize:'cover'}}>
          <Quotes key={quote[0].id} q={quote[0]} />
        </div>
      ) }
    </>
  );
}

export default App;

//