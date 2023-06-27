/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


function Quotes({q}) {

  return (
    <div className='m-6 sm:mx-auto md:m-auto md:w-1/2 h-auto border  p-3 md:p-7 rounded-lg hover:scale-110 bg-black text-white transition-all'>
        <p className="my-4 md:text-3xl">"{q.english}"</p>
        <p className="italic text-gray-600">- {q.character}</p>
        <p className=" animate-pulse ">{q.anime}</p>
    </div>
  )
}

export default Quotes