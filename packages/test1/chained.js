////////////////////
export const Chained = {
	width: 800,
	render: (graphics, context) => {
		const { x, y, width, height,color } = context;
		graphics
			.beginFill(color, 1)
			.drawRect(x, y, width, height)
			.endFill()

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};