import React from 'react';
import styled from 'styled-components';

const ToolTip = styled.div`
position: absolute;
z-index: 2;
cursor: pointer;
left: ${props => props.x ? (props.x - 80)+"px" : "50%"};
top: ${props => props.y ? (props.y + 5)+"px" : "10%"};
margin-bottom: 5px;
padding: 7px;
width: 160px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
background-color: #000;
background-color: hsla(0, 0%, 20%, 0.9);
color: #fff;
content: attr(data-tooltip);
text-align: center;
font-size: 14px;
line-height: 1.2;
&: after{
    position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-bottom: 5px solid #000;
  border-bottom: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: '\u25b2';
  font-size: 0;
  line-height: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  pointer-events: none;
}
`;

function Tooltip(props) {
    return (
        <ToolTip x={props.x} y={props.y}>
            {props.children}
        </ToolTip>
    )
}

export default Tooltip;