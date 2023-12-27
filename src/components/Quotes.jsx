/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { RefreshCw } from "lucide-react";

function Quotes({ q, fetchData, url, loading }) {
  return (
    <>
      <div className="w-[70%] lg:h-[50%]  text-white text-3xl">
        <div className="lg:flex">
          <div className="lg:w-[50%] h-full">
            {url && (
              <img
                className="w-[520px] lg:w-[320px] p-4 md:ml-6 md:mt-4 rounded-[54px]"
                src={url}
              />
            )}
          </div>
          {q && (
            <div className="text-white lg:w-[50%] mr-12 p-5 flex flex-col">
              <div className="text-[#F6ECA9] md:text-[60px] text-xl font-black text-left leading-none  py-6">
                {q.anime}
              </div>
              <hr />
              <div className="text-xs md:text-2xl py-4 tracking-tighter text-left">
                {" "}
                {q.english}
              </div>
              <div className="text-xs md:text-lg italic text-right text-gray-400">
                {" "}
                - {q.character}
              </div>
              <Button
                className="my-3 self-start lg:w-auto mt-4  w-full"
                isLoading={loading}
                bg={"#596FB7"}
                textColor={"white"}
                letterSpacing={"-1px"}
                md:fontSize={"xl"}
                md:size={"lg"}
                size={"md"}
                transition={"all 0.2s ease-in-out"}
                _hover={{ bg: "#314381" }}
                onClick={fetchData}
              >
                Generate <RefreshCw className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Quotes;
