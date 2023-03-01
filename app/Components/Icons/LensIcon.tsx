type Props = {
  color: string
}

const LensIcon = ({ color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill='none'
  >
    <path
      d="M19.96 11.48a8.45 8.45 0 0 1-2.458 5.971 8.438 8.438 0 0 1-6.022 2.51 8.48 8.48 0 1 1 8.48-8.48Z"
      stroke={color}
      strokeWidth={2}
    />
    <path
      d="m18.155 18.155 3.732 3.732"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)

export default LensIcon
