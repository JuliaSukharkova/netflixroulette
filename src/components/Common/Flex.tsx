import styled from "styled-components";

type Props = {
  direction?: string;
  align?: string;
  justify?: string;
  marginb?: number;
  margin?: number;
  position?: string;
  wrap?: string;
  gap?: number;
};

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "align",
})<Props>`
  display: flex;
  position: ${(props) => props.position || "inherit"};
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin-top: ${(props) => (props.margin || 0) + "px"};
  margin-bottom: ${(props) => (props.marginb || 0) + "px"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => (props.gap || 0) + "px"};
`;

export const Margin = styled.div<{ $margin?: number }>`
  margin-left: ${(props) => (props.$margin ? `${props.$margin}px` : "0")};
`;
