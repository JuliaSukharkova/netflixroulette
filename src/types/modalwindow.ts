export interface IModal {
  active: boolean;
  setActive: any;
  children?: React.ReactNode;
  onClose: ()=> void;
}