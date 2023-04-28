import React from "react";
import { fetchQuote } from "../utils";

interface IQuoteProps {
  isVisible: boolean;
}

interface IQuote {
  text?: string;
  author?: string;
}

function Quote({ isVisible }: IQuoteProps) {
  const [quote, setQuote] = React.useState<IQuote>({});
  const [isLoading, setIsLoading] = React.useState(true)

  const getQuote = async () => {
    try {
      setIsLoading(true);
      const data = await fetchQuote()
      setQuote({
        text: data.content,
        author: data.author,
      });
    } catch (error) {
      setQuote({
        text: "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
        author: "Ada Lovelace",
      });
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getQuote();
  }, []);

  return (
    <div
      className={`grid grid-cols-[1fr_max-content] items-start gap-x-4 transition-opacity ${
        isVisible ? "visible" : "collapse"
      }`}
    >
      <div
        className={`text-xs transition-opacity md:text-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="leading-[1.375rem]">{`“${quote.text || "-"}”`}</p>
        <p className="mt-2 font-bold">{quote.author || "-"}</p>
      </div>
      <button className={isLoading ? "animate-spin" : ""} onClick={getQuote}>
        <img src="/assets/desktop/icon-refresh.svg" alt="refresh" />
      </button>
    </div>
  )
}

export default Quote;
