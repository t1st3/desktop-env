import test from 'ava';
import desktopEnv from './';

test('desktop-env', async t => {
	t.is(await desktopEnv(), 'N/A');
});
