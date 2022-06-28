export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export interface Button {
  type: ButtonType;
  text: string;
  url?: string;
  internalUrl: boolean;
}
