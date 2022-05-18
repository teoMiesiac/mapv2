import styled from 'styled-components'

export const Wrapper = styled.div`
 position: absolute;
 width: 4px;
 height: 4px;
 border-radius: 50%;
 background-color: blue;
 top: ${props=>props.y}px;
 left: ${props=>props.x}px;
 z-index: 40;
 transform: translate(-50%,-50%);
`

export const InnerWrapper = styled.div`
position: relative;
width:100%;
height: 100%;
`

export const Pin = styled.img`
   position: absolute;
 width: 24px;
 height: 42px;
left: 2px;
bottom: 2px;
 z-index: 40;
 transform-origin: left bottom;
 margin: 0;
 max-width: none;
 cursor: pointer;
`
