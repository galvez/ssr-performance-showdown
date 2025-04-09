
export default function Home () {
  const wrapperWidth = 960
  const wrapperHeight = 720
  const cellSize = 10
  const centerX = wrapperWidth / 2
  const centerY = wrapperHeight / 2

  let angle = 0
  let radius = 0

  const tiles = []
  const step = cellSize

  let x
  let y
  while (radius < Math.min(wrapperWidth, wrapperHeight) / 2) {
    x = centerX + Math.cos(angle) * radius
    y = centerY + Math.sin(angle) * radius

    if (x >= 0 && x <= wrapperWidth - cellSize && y >= 0 && y <= wrapperHeight - cellSize) {
      x = x.toFixed(2)
      y = y.toFixed(2)
      tiles.push({ x, y, id: `${x}:${y}` })
    }

    angle += 0.2
    radius += step * 0.015
  }

  return (
    <div id="wrapper">
      {tiles.map(({ x, y, id }) => (
        <div
          key={id}
          className="tile"
          style={{
            left: `${x}px`,
            top: `${y}px`
          }} />
      ))}
    </div>
  );
}
