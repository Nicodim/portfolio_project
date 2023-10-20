import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

const data = {
    country: Country.Ukraine,
    age: 30,
    first: 'Nick',
    lastname: 'Kravtsov',
    city: 'Dnipro',
    currency: Currency.USD,
    username: 'admin',
};
describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first or lastname', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
});
