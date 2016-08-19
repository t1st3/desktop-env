import test from 'ava';
import desktopEnv from './';

test('desktop-env', t => {
	return desktopEnv().then(data => {
		t.is(data, 'N/A');
	});
});
