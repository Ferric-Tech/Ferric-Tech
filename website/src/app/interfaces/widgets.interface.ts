export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export enum ButtonAction {
  NAVIGATE,
  SUMBIT,
}

export interface Button {
  type: ButtonType;
  text: string;
  action: ButtonAction;
  url?: string;
  internalUrl?: boolean;
}
