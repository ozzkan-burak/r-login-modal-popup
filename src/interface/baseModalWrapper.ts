import { ReactNode } from "react";

export interface IBaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDrop: () => void;
  header: string;
  message?: string;
  content?: ReactNode
}

export interface IRWDModalProps {
  matches: any
}

export interface IComponentsProps {
  ContainerComponent :React.ComponentType<{}>;
  CloseButtonComponent: React.ComponentType<{
    onClick?: any;
  }>;
}
