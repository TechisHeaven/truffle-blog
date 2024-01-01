"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
interface ArticleProps {
  BlogData: string | null;
}

const ArticleComp: React.FC<ArticleProps> = ({ BlogData }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type");
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea && type === "b") {
      const updateTextareaHeight = () => {
        // Set the number of rows based on the textarea's scrollHeight
        const numberOfRows = Math.ceil(
          textarea.scrollHeight /
            parseFloat(getComputedStyle(textarea).lineHeight)
        );
        textarea.rows = numberOfRows;
      };

      // Update textarea height when content changes
      textarea.addEventListener("input", updateTextareaHeight);
      updateTextareaHeight(); // Initial update

      return () => {
        textarea.removeEventListener("input", updateTextareaHeight);
      };
    }
  }, [type]);

  if (type !== "b" && type !== "m") {
    router.push("/");
  }
  return (
    <>
      {type === "b" && (
        <textarea
          ref={textareaRef}
          name="article"
          id="article"
          placeholder="Blog Content here"
          rows={10}
          className="outline-none w-full h-full"
        ></textarea>
      )}
      {type === "m" && (
        <article
          spellCheck={false}
          className="prose lg:prose-base outline-none"
          contentEditable={BlogData ? true : false}
          dangerouslySetInnerHTML={
            BlogData ? { __html: BlogData } : { __html: "something went wrong" }
          }
        />
      )}
    </>
  );
};

export default ArticleComp;
