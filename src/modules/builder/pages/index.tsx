import { TextEditorBlock, StyleEditorBlock } from "../../web-editor";
import { Header } from "../components/Header";
import { useState } from "react";
import { Snippets } from "../components/Snippets";
import { LeftSidebar } from "../components/LeftSidebar";
import { Themes } from "../components/Themes";

export const BuilderPage = () => {
  const [tabBar, setTabBar] = useState("Theme");
  const [themeSelected, setTheme] = useState<any>(null);
  const [objects, setObjects] = useState<any[]>([]);

  const onDragEnd = (data: any) => {
    let root = document.getElementById("theme-wrapper");
    if (!root) {
      root = document.getElementById("body-wrapper");
    }
    if (root) {
      const rect = root.getBoundingClientRect();
      const position = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      };
      if (
        data.x > position.left &&
        data.x < position.left + position.width &&
        data.y > position.top &&
        data.y < position.top + position.height
      ) {
        setObjects((pre) =>
          pre.concat({
            type: data.type,
            top: data.y - position.top,
            left: data.x - position.left,
            width: 100,
            height: data.type === "image" ? 100 : 24,
            value: "Text",
            size: 0.16,
            color: "red",
            fontStyle: "bebas-nenu",
            shape: "square",
            src: "http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
          })
        );
      }
    }
  };

  return (
    <>
      <Header />

      <div className="flex h-[calc(100%_-_60px)]">
        <div className="bg-[rgba(37,38,39)] h-full w-[300px] h-full flex">
          <LeftSidebar activeTab={tabBar} setTabBar={setTabBar} />
          {tabBar === "Theme" ? (
            <Themes selectTheme={setTheme} />
          ) : (
            <Snippets onDragEnd={onDragEnd} />
          )}
        </div>
        <div
          id="body-wrapper"
          className="relative flex items-center justify-center flex-1"
        >
          {themeSelected ? (
            <div id="theme-wrapper" className="h-[90%] relative">
              <img className="h-full" alt="" src={themeSelected.background} />
              {objects.map((item, index) =>
                item.type === "text" ? (
                  <TextEditorBlock
                    top={item.top}
                    key={index}
                    left={item.left}
                    initialText={item.value}
                    width={item.width}
                    height={item.height}
                    unit="px"
                    initialFontSize={item.size}
                    initialFontColor={item.color}
                    initialFontStyle={item.fontStyle}
                  />
                ) : (
                  <StyleEditorBlock
                    unit="px"
                    top={item.top}
                    key={index}
                    shape={item.shape}
                    left={item.left}
                    width={item.width}
                    height={item.height}
                    initialImage={item.src}
                  />
                )
              )}
              {themeSelected.objects.map((item: any) => {
                return item.type === "text" ? (
                  <TextEditorBlock
                    top={item.top}
                    key={item.id}
                    left={item.left}
                    initialText={item.value}
                    width={item.width}
                    height={item.height}
                    unit="px"
                    initialFontSize={item.size}
                    initialFontColor={item.color}
                    initialFontStyle={item.fontStyle}
                  />
                ) : (
                  <StyleEditorBlock
                    unit="px"
                    top={item.top}
                    key={item.id}
                    shape={item.shape}
                    left={item.left}
                    width={item.width}
                    height={item.height}
                    initialImage={item.src}
                  />
                );
              })}
            </div>
          ) : (
            <>
              {objects.map((item, index) =>
                item.type === "text" ? (
                  <TextEditorBlock
                    top={item.top}
                    key={index}
                    left={item.left}
                    initialText={item.value}
                    width={item.width}
                    height={item.height}
                    unit="px"
                    initialFontSize={item.size}
                    initialFontColor={item.color}
                    initialFontStyle={item.fontStyle}
                  />
                ) : (
                  <StyleEditorBlock
                    unit="px"
                    top={item.top}
                    key={index}
                    shape={item.shape}
                    left={item.left}
                    width={item.width}
                    height={item.height}
                    initialImage={item.src}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
