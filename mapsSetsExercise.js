// Quick Question #1
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]); // A set with {1,2,3,4}
// Quick Question #2
// What does the following code return?

[...new Set("referee")].join(""); // returns: ref
// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // {[1,2,3] => true, [1,2,3] => false}

//Has Duplicate
const hasDuplicate = (array) => array.length !== new Set(array).size;

//vowelCount
function vowelCount(string) {
	const vowelMap = new Map();
	for (let letter of string) {
		const lowerCaseLetter = letter.toLowerCase();
		if ("aeiou".includes(lowerCaseLetter)) {
			if (vowelMap.has(lowerCaseLetter)) {
				vowelMap.set(
					lowerCaseLetter,
					vowelMap.get(lowerCaseLetter) + 1
				);
			} else {
				vowelMap.set(lowerCaseLetter, 1);
			}
		}
	}
	return vowelMap;
}
