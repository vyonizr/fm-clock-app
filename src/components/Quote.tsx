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
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [quote, setQuote] = React.useState<IQuote | undefined>()
  const [isLoading, setIsLoading] = React.useState(true)
  const [containerHeight, setContainerHeight] = React.useState<
    number | undefined
  >()

  const getQuote = React.useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await fetchQuote()
      setQuote({
        text: data.content,
        author: data.author,
      })
    } catch (error) {
      setQuote({
        text: "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
        author: "Ada Lovelace",
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  React.useEffect(() => {
    getQuote()
  }, [getQuote])

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight)
    }
  }, [containerRef])

  const containerStyle = React.useMemo(() => {
    return {
      maxHeight: isVisible ? `${containerHeight}px` : "0px",
    }
  }, [containerHeight, isVisible])

  return (
    <div
      className={`grid grow grid-cols-[max-content_max-content] items-start gap-x-4 overflow-hidden transition-all ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={containerRef}
      style={containerStyle}
    >
      <div
        className={`w-auto max-w-[18.125rem] text-xs transition-opacity md:max-w-[33.75rem] md:text-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="leading-[1.375rem]">{`“${quote?.text || "-"}”`}</p>
        <p className="mt-2 font-bold">{quote?.author || "-"}</p>
      </div>
      <button className={isLoading ? "animate-spin" : ""} onClick={getQuote}>
        <img src="/assets/desktop/icon-refresh.svg" alt="refresh" />
      </button>
    </div>
  )
}

export default Quote;
