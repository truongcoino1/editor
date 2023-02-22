import { IconSnippet } from "./IconSnippet";
import { ImageSnippet } from "./ImageSnippet";
import { TextSnippet } from "./TextSnippet";

type TSnippet = {
  onDragEnd: (param: any) => void;
};
export const Snippets = ({ onDragEnd }: TSnippet) => {
  return (
    <div className=" flex flex-wrap gap-2 w-full h-fit pt-4 justify-center">
      <TextSnippet onDragEnd={onDragEnd} />
      <ImageSnippet onDragEnd={onDragEnd} />
      <IconSnippet />
    </div>
  );
};
