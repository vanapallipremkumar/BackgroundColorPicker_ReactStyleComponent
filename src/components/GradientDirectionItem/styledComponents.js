// Style your elements here
import styled from 'styled-components'

export const DirectionItemList = styled.li`
  width: 40%;
  height: 40px;
  margin: 10px;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 120px;
    margin: 0 8px;
  }
`

export const CustomButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  color: #014f7b;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`

export default null
