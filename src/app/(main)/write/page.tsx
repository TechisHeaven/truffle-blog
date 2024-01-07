"use client";
import DragDrop from "@/components/DragDrop/DragDrop";
import React from "react";
import { remark } from "remark";
import html from "remark-html";
import Article from "./Article";
import { VscLoading } from "react-icons/vsc";

const getBlogData = async () => {
  const doc = `
# Pluto

Pluto is a dwarf planet in the Kuiper belt.

## Contents
![Alt text](https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg "a title")
## History

### Discovery

In the 1840s, Urbain Le Verrier used Newtonian mechanics to predict the position of…

### Name and symbol

The name Pluto is for the Roman god of the underworld, from a Greek epithet for Hades…

### Planet X disproved

Once Pluto was found, its faintness and lack of a viewable disc cast doubt…

## Orbit

Pluto's orbital period is about 248 years…
`;
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(doc);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return contentHtml;
};

interface ArticleProps {
  BlogData: string | null;
}

const page = () => {
  const [blogData, setBlogData] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean | null>(false);
  // const loading = useStore((state) => state?.loading);
  // const setLoading = useStore((state) => state?.setLoading);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const data = await getBlogData();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data (whether successful or not)
      }
    };

    fetchData();
  }, [setLoading]);

  return (
    <div className="relative">
      {/* <ContextMenu onSelectText={handleSelectText} /> */}
      <div className="absolute right-0">
        {loading ? (
          <button
            type="button"
            className="p-2 flex gap-2 px-4 bg-blue-600 text-white hover:bg-gray-900 transition-colors rounded-md font-medium"
          >
            Loading
            <VscLoading className="animate-spin text-xl" />
          </button>
        ) : (
          <button
            onClick={() => setLoading(true)}
            type="button"
            className="p-2 px-4 bg-blue-600 text-white hover:bg-gray-900 transition-colors rounded-md font-medium"
          >
            Publish
          </button>
        )}
      </div>
      <div className="Heading text-center my-4">
        <h2>The blog</h2>
        <input
          spellCheck={false}
          className="outline-none font-medium text-3xl my-2"
          placeholder="Title of the Blog post"
        />
        <p>
          Author:{" "}
          <span className="font-medium">Phoenix Baker, 19 Jan 2023</span>
        </p>
      </div>
      <div className="banner border my-4">
        <DragDrop />
      </div>
      {loading ? <h1>Loading</h1> : <Article BlogData={blogData} />}
    </div>
  );
};

export default page;
