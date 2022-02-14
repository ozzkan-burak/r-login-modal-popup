export interface IBaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDrop: () => void;
  header: string;
  message?: string;
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
