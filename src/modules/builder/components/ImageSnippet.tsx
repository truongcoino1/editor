import { useRef } from "react";
import Draggable from "react-draggable";

export const ImageSnippet = ({
  onDragEnd,
}: {
  onDragEnd: (param: any) => void;
}) => {
  const ref = useRef();
  const handleStart = (e: MouseEvent, data: Object) => {};

  const handleDrag = (e: MouseEvent, data: Object) => {};

  const handleStop = (e: MouseEvent, data: any) => {
    const element = document.getElementById("image-snippet");
    if (element) {
      element.style.transform = `none`;
      const textElement = document.getElementById("image-snippet");

      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        const position = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
        onDragEnd({
          ...data,
          x: data.lastX + position.left,
          y: data.lastY + position.top,
          type: "image",
        });
      }
      if (ref.current) {
        //@ts-ignore
        ref.current.setState({
          dragging: false,
          dragged: false,
          x: 0,
          y: 0,
          prevPropsPosition: {},
          slackX: 0,
          slackY: 0,
          isElementSVG: false,
        });
      }
    }
  };
  return (
    //@ts-ignore
    <Draggable
      ref={ref}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        id="image-snippet"
        className="z-50 cursor-move bg-white justify-center flex items-center flex-col w-[80px] h-[80px] border border-[rgb(221, 221, 221)] rounded-lg"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="image"
          className="w-[40px] h-[40px]"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M324.9 157.8c-11.38-17.38-39.89-17.31-51.23-.0625L200.5 268.5L184.1 245.9C172.7 229.1 145.9 229.9 134.4 245.9l-64.52 89.16c-6.797 9.406-7.75 21.72-2.547 32C72.53 377.5 83.05 384 94.75 384h322.5c11.41 0 21.8-6.281 27.14-16.38c5.312-10 4.734-22.09-1.516-31.56L324.9 157.8zM95.8 352l62.39-87.38l29.91 41.34C191.2 310.2 196.4 313.2 201.4 312.6c5.25-.125 10.12-2.781 13.02-7.188l83.83-129.9L415 352H95.8zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V416zM144 192C170.5 192 192 170.5 192 144S170.5 96 144 96S96 117.5 96 144S117.5 192 144 192zM144 128c8.822 0 15.1 7.178 15.1 16S152.8 160 144 160S128 152.8 128 144S135.2 128 144 128z"
          ></path>
        </svg>
        <span className="text-xs">IMAGE</span>
      </div>
    </Draggable>
  );
};
