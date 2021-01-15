interface ButtonEventTarget extends EventTarget {
  name?: string;
  value?: string;
}

export interface ButtonEvent extends React.MouseEvent<HTMLButtonElement> {
  target: ButtonEventTarget;
}
