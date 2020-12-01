describe('convertNumbersToWords', function () {
	it('Should convert 1 properly', function () {
		const wm = new WordManipulator();
		expect(wm.convertNumbersToWords(1)).toEqual('one');
	});
});

describe('Reversify', function () {
	it('Should reverse abcd', function () {
		const wm = new WordManipulator();
		expect(wm.reverseString('abcd')).toEqual('dcba');
	});

	it('When passed a number, reverse as a string', function () {
		const wm = new WordManipulator();
		expect(wm.reverseString(10111)).toEqual('11101');
	});
});

describe('titleCase', function () {
	it('null should return null', function () {
		const wm = new WordManipulator();
		expect(wm.titleCase(null)).toEqual(null);
	});

	it('all lowercase', function () {
		const wm = new WordManipulator();
		expect(wm.titleCase('this is a string all in lowercase')).toEqual("This Is A String All In Lowercase");
	});
	// ALL UPPERCASE
	// oneword
	// Many different words
	// non-string
	// Numbers mixed in
	// asdfajk234 afdsjkj2 aj 2
	// bjclark2020
});
