import { useRef } from "react";
import Draggable from "react-draggable";

export const TextSnippet = ({
  onDragEnd,
}: {
  onDragEnd: (param: any) => void;
}) => {
  const ref = useRef();
  const handleStart = (e: MouseEvent, data: Object) => {};

  const handleDrag = (e: MouseEvent, data: Object) => {};

  const handleStop = (e: MouseEvent, data: any) => {
    const element = document.getElementById("text-sippet");
    if (element) {
      element.style.transform = `none`;

      const textElement = document.getElementById("text-sippet");

      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        const position = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
        console.log("position", position, data);

        onDragEnd({
          ...data,
          x: data.lastX + position.left,
          y: data.lastY + position.top,
          type: "text",
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
        id="text-sippet"
        className="z-50 cursor-move bg-white flex justify-center items-center flex-col w-[80px] h-[80px]  border border-[rgb(221, 221, 221)] rounded-lg"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="font-case"
          className="w-[40px] h-[40px]"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M190.9 41.3c-4.75-12.4-25.12-12.4-29.87 0L1.069 458.2c-3.172 8.268 .9531 17.54 9.187 20.73c8.25 3.163 17.5-.9709 20.69-9.207l45.28-118H275.8l45.28 118C323.5 476.1 329.6 480 336 480c1.906 0 3.859-.3445 5.75-1.065c8.234-3.194 12.36-12.46 9.187-20.73L190.9 41.3zM88.54 319.7l87.47-227.9l87.47 227.9H88.54zM624 159.3c-8.844 0-15.1 7.172-15.1 16.03v28.29c-23.48-26.94-57.59-44.33-95.1-44.33c-70.58 0-127.1 57.53-127.1 128.3l-.002 64.35c0 70.75 57.42 128.1 127.1 128.1c38.41 0 72.52-17.4 96-44.33v28.29C608 472.8 615.2 480 624 480C632.8 480 640 472.8 640 463.1V175.3C640 166.5 632.8 159.3 624 159.3zM608 351.7c0 53.05-43.06 96.21-95.1 96.21c-52.94 0-95.1-43.16-95.1-96.21V287.6c0-53.05 43.06-96.21 95.1-96.21c52.94 0 95.1 43.16 95.1 96.21V351.7z"
          ></path>
        </svg>
        <span className="text-xs"> TEXT</span>
      </div>
    </Draggable>
  );
};
