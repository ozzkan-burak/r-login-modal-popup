export interface IBaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDrop: () => void;
  header: string;
  message?: string;
}