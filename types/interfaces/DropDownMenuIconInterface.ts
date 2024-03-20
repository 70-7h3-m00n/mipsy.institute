export default interface IconProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  small?: boolean
  selected?: boolean;
  className?: string;
}