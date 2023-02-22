type UseDraggableProps = {
  left: number;
  top: number;
  width: number;
  height: number;
  dragBoardOption?: DragBoardOption;
  unit: string;
};

type ResizeBoardOption = {
  width: number;
  height: number;
};

type UseResizeProps = {
  left: number;
  top: number;
  width: number;
  height: number;
  resizeBoardOption?: ResizeBoardOption;
  unit: string;
  onResize: Dispatcher<ComponentStyle>; // It is a setState. Its state is Componentstyle.
};

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

type ComponentStyle = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type DragBoardOption = {
  width: number;
  height: number;
};

type UseImageProps = {
  initialImage?: string;
};

type UseColorProps = {
  initialColor?: string;
};

export type {
  UseDraggableProps,
  Dispatcher,
  ComponentStyle,
  DragBoardOption,
  UseResizeProps,
  ResizeBoardOption,
  UseImageProps,
  UseColorProps,
};
