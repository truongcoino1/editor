import styled from "styled-components";

import { EditorProps } from "../../types/ui";

const EditorBlockWrapper = styled.div.attrs<EditorProps>(
  ({ left, top, width, height, unit }) => ({
    style: {
      top: top && `${top}${unit}`,
      left: left && `${left}${unit}`,
      width: width && `${width}${unit}`,
      height: left && `${height}${unit}`,
    },
  })
)<EditorProps>`
  position: absolute;
  border: 1px dotted rgb(231, 233, 235);
`;

export default EditorBlockWrapper;
