export const getInitialName = (name: string): string => {
    const words = name.split(' ');
    return words
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join('');
};
