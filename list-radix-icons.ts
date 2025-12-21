import * as Radix from "@radix-ui/react-icons";

const icons = Object.keys(Radix).filter(
	(key) => !["IconProps", "default"].includes(key),
);
console.log("Available Radix UI Icons:");
icons.sort().forEach((icon) => console.log(icon));
console.log(`\nTotal: ${icons.length} icons`);
