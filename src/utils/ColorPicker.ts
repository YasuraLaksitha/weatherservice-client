const bgColors: string[] = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-400',
    'bg-purple-600',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-orange-500',
];

const colorMap:Map<string,string> = new Map();

export const pickRandomColor = (cityName:string) => {
    if (colorMap.has(cityName)){
        return colorMap.get(cityName);
    }

    const randomIndex: number = Math.floor(Math.random() * bgColors.length);
    colorMap.set(cityName,bgColors[randomIndex]);

    return bgColors[randomIndex];
}