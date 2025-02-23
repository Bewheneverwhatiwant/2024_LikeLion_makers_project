import styled from "styled-components";

// props 타입 정의
interface CustomBoxProps {
    width?: string;
    height?: string;
    gap?: string;
    display?: string;
    flexdirection?: string;
    alignitems?: string;
    justifycontent?: string;
    margin?: string;
    margintop?: string;
    padding?: string;
    paddingbottom?: string;
    backgroundcolor?: string;
    color?: string;
    border?: string;
    borderradius?: string;
    overflowy?: string;
    overflowx?: string;
    zindex?: string;
}

const CustomBox = styled.div<CustomBoxProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "5rem"};
  gap: ${(props) => props.gap || "1rem"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexdirection || 'column'};
  align-items: ${(props) => props.alignitems || "center"};
  justify-content: ${(props) => props.justifycontent || "center"};
  margin: ${(props) => props.margin || "0"};
  margin-top: ${(props) => props.margintop || '0'};
  padding: ${(props) => props.padding || "0"};
  padding-bottom: ${(props) => props.paddingbottom || "0"};
  background: ${(props) => props.backgroundcolor || "#1E1E1E"};
  color: ${(props) => props.color || "black"};
  padding: 0.75rem 1.5rem;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderradius || "0.5rem"};
  overflow-x: ${(props) => props.overflowx || "auto"};
  overflow-y: ${(props) => props.overflowy || "auto"};
  z-index: ${(props) => props.zindex || '3'};


  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1E1E1E;
    border-radius: 5px;
    border: none;
  }

`;

export default CustomBox;