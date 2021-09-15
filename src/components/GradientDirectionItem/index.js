// Write your code here

import {DirectionItemList, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, active, onClick} = props
  const {directionId, value, displayText} = directionDetails

  const onClickDirectionButton = () => onClick(directionId, value)

  return (
    <DirectionItemList>
      <CustomButton active={active} onClick={onClickDirectionButton}>
        {displayText}
      </CustomButton>
    </DirectionItemList>
  )
}

export default GradientDirectionItem
