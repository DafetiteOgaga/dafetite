import './logo.css'

function NameLogo({ color = "white", width = 320, height = 90 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 18 320 90" width={width} height={height}>
      <text
        x="50%"
        y="72"
        textAnchor="middle"
        style={{ fontFamily: 'Delafield', fontSize: '68px', fill: color }}
      >
        Dafetite
      </text>
    </svg>
  )
}
export { NameLogo }