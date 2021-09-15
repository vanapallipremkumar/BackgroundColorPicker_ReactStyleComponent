// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => `to ${props.direction}`},
    ${props => props.color1},
    ${props => props.color2}
  );
`
export const ColumnContainer = styled.div`
  width: 50%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainHeading = styled.h1`
  color: #fff;
  text-align: center;
  margin: 0 0 16px 0;
`

export const Paragraph = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 16px 0;
`
export const DirectionsContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  list-style-type: none;
  @media (max-width: 767px) {
    padding: 0;
    justify-content: space-evenly;
  }
`

export const ColorPickersContainer = styled(ColumnContainer)`
  width: 100%;
  max-width: 500px;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`

export const ColorPicker = styled.input`
  width: 90px;
  height: 40px;
  border: none;
  outline: none;
  background-color: ${props => props.bgColor};
`

export const GenerateButton = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin: 30px 0 0 0;
  background-color: #00c9b7;
  color: #014f7b;
  font-size: 16px;
  font-weight: bold;
`

export default null
