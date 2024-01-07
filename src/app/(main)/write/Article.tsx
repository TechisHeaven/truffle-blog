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
  const articleRef = React.useRef(null);
  const [blogData, setBlogData] = React.useState<object | null | any>();

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

  React.useEffect(() => {
    setBlogData(BlogData);
  }, [BlogData]);

  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const [isH1, setIsH1] = React.useState(false);

  const handleFormat = (format: any) => {
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      switch (format) {
        case "bold":
          document.execCommand("bold", false, null);
          setIsBold(document.queryCommandState("bold"));
          break;
        case "italic":
          document.execCommand("italic", false, null);
          setIsItalic(document.queryCommandState("italic"));
          break;
        case "underline":
          document.execCommand("underline", false, null);
          setIsUnderline(document.queryCommandState("underline"));
          break;
        case "h1":
          const isAlreadyH1 =
            document.queryCommandState("formatBlock") &&
            document.queryCommandValue("formatBlock") === "H1";
          document.execCommand("formatBlock", false, isAlreadyH1 ? "p" : "h1");
          setIsH1(!isAlreadyH1);
          break;
        default:
          break;
      }
    }
  };

  const handleInput = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Get the selection and range
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);

      // Check if the range is within the article element
      if (range.commonAncestorContainer === articleRef.current) {
        // Clone the range
        const clonedRange = range.cloneRange();

        // Set the cloned range to the edited content
        clonedRange.selectNodeContents(articleRef.current);

        // Get the edited content within the range
        const editedContent = clonedRange.extractContents();

        // Replace the selected content in the cloned range with the edited content
        range.deleteContents();
        range.insertNode(editedContent);

        // Update the state with the modified HTML
        setBlogData(articleRef.current.innerHTML);
      }
    }
  };
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
        <>
          <div className="flex gap-2">
            <button
              className={`p-2 px-4 hover:bg-gray-100 border rounded-md ${
                isBold ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFormat("bold")}
            >
              Bold
            </button>
            <button
              className={`p-2 px-4 hover:bg-gray-100 border rounded-md ${
                isH1 ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFormat("h1")}
            >
              h1
            </button>
            <button
              className={`p-2 px-4 hover:bg-gray-100 border rounded-md ${
                isItalic ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFormat("italic")}
            >
              Italic
            </button>
            <button
              className={`p-2 px-4 hover:bg-gray-100 border rounded-md ${
                isUnderline ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFormat("underline")}
            >
              Underline
            </button>
          </div>

          <article
            spellCheck={false}
            ref={articleRef}
            onInput={handleInput}
            className="prose lg:prose-base outline-none"
            contentEditable={blogData ? true : false}
            dangerouslySetInnerHTML={{ __html: blogData }}
          />
        </>
      )}
    </>
  );
};

export default ArticleComp;
