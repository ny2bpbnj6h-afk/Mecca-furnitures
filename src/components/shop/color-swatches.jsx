function ColorSwatches({ colors }) {
  return (
    <div className="mt-auto flex gap-2 pt-2">
      {colors.map((color, index) => (
        <div
          key={color}
          className={`h-4 w-4 cursor-pointer rounded-full border border-outline-variant ${
            index === 0 ? 'ring-1 ring-primary ring-offset-2' : ''
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}

export default ColorSwatches
