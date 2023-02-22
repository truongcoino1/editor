import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
//@ts-ignore
import domtoimage from "dom-to-image";
import { useState } from "react";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const exportImage = () => {
    let root = document.getElementById("theme-wrapper");
    if (!root) {
      root = document.getElementById("body-wrapper");
    }
    if (root) {
      toPng(root)
        .then((rs) => {
          console.log(rs);
        })
        .catch((err) => console.log(err));
    }
  };

  const openPreview = () => {
    setModal(true);

    const modal = document.getElementById("modal-preview");
    if (modal) {
      const nodeInModal = modal.querySelector("#theme-wrapper");
      if (nodeInModal) {
        nodeInModal.remove();
      }
      let root = document.getElementById("theme-wrapper");
      if (!root) {
        root = document.getElementById("body-wrapper");
      }
      root && modal?.appendChild(root?.cloneNode(true));
    }
  };

  return (
    <>
      <div className="flex item-center justify-between px-4 h-[60px] bg-slate-600">
        <span className="text-lg font-semibold text-white flex items-center">
          Wedding Card
        </span>
        <div className="flex items-center">
          <div
            onClick={openPreview}
            className="cursor-pointer h-10 w-20 bg-slate-800 rounded-md flex justify-center items-center text-white font-medium"
          >
            Preview
          </div>
          <div
            onClick={exportImage}
            className="cursor-pointer h-10 w-20 bg-orange-400 rounded-md flex justify-center items-center text-white font-medium ml-2"
          >
            Export
          </div>
        </div>
      </div>
      <div
        id="modal-preview"
        onClick={() => setModal(false)}
        className={`fixed top-0 z-50 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.4)] flex items-center justify-center ${
          modal ? "flex" : "hidden"
        }`}
      ></div>
    </>
  );
};
