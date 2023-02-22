import { useState } from "react";
import { useDraggable, TextEditorBlock } from "../../web-editor";
import type { TextEditorBlockProps } from "../../web-editor";
import { UseDraggableProps } from "../utils/types";

type TextProps = {
  defaultValue?: string;
  componentStyle?: TextEditorBlockProps;
};
export const Text = ({ defaultValue, componentStyle }: TextProps) => {
  return <div></div>;
};
