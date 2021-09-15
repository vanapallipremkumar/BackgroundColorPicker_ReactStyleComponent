import {Component} from 'react'

// importing styled components
import {
  AppContainer,
  MainHeading,
  Paragraph,
  DirectionsContainer,
  ColorPickersContainer,
  ColumnContainer,
  ColorPicker,
  GenerateButton,
} from './styledComponents'

// importing local components
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    linearGradientDirection: gradientDirectionsList[0].value,
    linearGradientBg1: '#8ae323',
    linearGradientBg2: '#014f7b',
  }

  onClickDirectionItem = (activeDirectionId, direction) => {
    this.setState({activeDirectionId, direction})
  }

  renderDirectionItems = () => {
    const {activeDirectionId} = this.state
    return (
      <DirectionsContainer>
        {gradientDirectionsList.map(details => (
          <GradientDirectionItem
            directionDetails={details}
            active={activeDirectionId === details.directionId}
            onClick={this.onClickDirectionItem}
            key={details.directionId}
          />
        ))}
      </DirectionsContainer>
    )
  }

  onPickColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onPickColor2 = event => {
    this.setState({color2: event.target.value})
  }

  renderColorPicker = (color, onChangeColor) => (
    <ColumnContainer>
      <Paragraph>{color}</Paragraph>
      <ColorPicker
        type="color"
        value={color}
        bgColor={color}
        onChange={onChangeColor}
      />
    </ColumnContainer>
  )

  updateBackground = () => {
    const {direction, color1, color2} = this.state
    this.setState({
      linearGradientDirection: direction,
      linearGradientBg1: color1,
      linearGradientBg2: color2,
    })
  }

  render() {
    const {color1, color2} = this.state
    const {
      linearGradientDirection,
      linearGradientBg1,
      linearGradientBg2,
    } = this.state
    return (
      <AppContainer
        direction={linearGradientDirection}
        color1={linearGradientBg1}
        color2={linearGradientBg2}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Paragraph>Choose Direction</Paragraph>
        {this.renderDirectionItems()}
        <Paragraph>Pick the Colors</Paragraph>
        <ColorPickersContainer>
          {this.renderColorPicker(color1, this.onPickColor1)}
          {this.renderColorPicker(color2, this.onPickColor2)}
        </ColorPickersContainer>
        <GenerateButton type="button" onClick={this.updateBackground}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
