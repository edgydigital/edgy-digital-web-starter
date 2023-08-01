import CloseSVG from '@/public/close.svg'
import {SVGComponentProps} from '@/common/types'

export default function CloseIcon({color = 'black', ...props}: SVGComponentProps) {
  return <CloseSVG color={color} {...props} />
}
