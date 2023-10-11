import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticleById } from './fetchArticleById';

const data = {
    country: Country.Ukraine,
    age: 30,
    first: 'Nick',
    lastname: 'Kravtsov',
    city: 'Dnipro',
    currency: Currency.USD,
    username: 'admin',
};
describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('2');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
