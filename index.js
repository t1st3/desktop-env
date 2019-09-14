'use strict';

const isCinnamon = require('is-cinnamon');
const isGnome = require('is-gnome');
const isKde = require('is-kde');
const isLxde = require('is-lxde');
const isMate = require('is-mate');
const isSugar = require('is-sugar');
const isUnity = require('is-unity');
const isXfce = require('is-xfce');
const pify = require('pify');

module.exports = pify(cb => {
	if (process.platform === 'linux' || process.platform === 'freebsd') {
		let de = 'N/A';
		const desktopChecks = [isCinnamon, isGnome, isKde, isLxde, isMate, isSugar, isUnity, isXfce];

		Promise.all(desktopChecks).then(values => { // eslint-disable-line promise/prefer-await-to-then
			const desktopNames = ['Cinnamon', 'Gnome', 'KDE', 'LXDE', 'Mate', 'Sugar', 'Unity', 'XFCE'];
			values.map((v, k) => {
				if (v === true) {
					de = desktopNames[k];
				}

				return de;
			});

			cb(null, de);
		}).catch(error => {
			cb(error, null);
		});
	}

	if (process.platform === 'win32') {
		cb(null, 'Aero');
	}

	if (process.platform === 'darwin') {
		cb(null, 'Aqua');
	}
});
