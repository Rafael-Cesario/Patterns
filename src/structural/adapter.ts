interface Items {
	name: string;
	price: number;
}

const shopItems: [string, number][] = [
	["RX 6750", 2149],
	["AMD Ryzen 7 5700X", 1248],
	["Logitech G Pro X", 1500],
];

const adapter = (shopItems: [string, number][]): Items[] => {
	const items: Items[] = [];

	shopItems.forEach((item) => {
		const [name, price] = item;
		items.push({ name, price });
	});

	return items;
};

const displayItems = adapter(shopItems);
console.log({ displayItems });
