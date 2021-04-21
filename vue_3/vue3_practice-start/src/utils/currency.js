const formatter = new Intl.NumberFormat('ru-Ru', { currency: 'RUB', style: 'currency' });
export const currency = value => {
    return formatter.format(value);
};
