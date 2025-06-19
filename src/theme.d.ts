import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      boxShadowColor: string;
      tertiaryColor: string;
      inputFocusColor: string;
      placeholderModalColor: string;
      checkBoxModalColor: string;
      borderColor: string;
      hover: string;
      lineColor: string;
      bright: string;
    };
    background: {
      bgColorTransparent: string;
      bgHoverDrop: string;
      bgColorOpacity: string;
      bgColorBtn: string;
      bgModalContainer: string;
      bgColorInput: string;
      bgColor: string;
      bgFooter: string;
      bgInputModal: string;
      bgCheckBoxItem: string;
      card: string;
    };
    media: {
      portraitTablets: string;
      medDesktops: string;
      smallDesktops: string;
    };
    fontSize: {
      fontSizeL: string;
      fontSizeM: string;
      fontSizeXs: string;
      fontSizeS: string;
    };
  }
}
