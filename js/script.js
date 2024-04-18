
function assignValues(given) {
	for (var i in given) {
		given[i].quantity.value = given[i].value;
	}
}

function assignEquations(equations) {
	for (var i in equations) {
		let children = eval(equations[i].parentQuantity).children;
		children.push(equations[i]);
		givenArr.push(new Given(eval(equations[i].parentQuantity), undefined));
		let subQuantities = equations[i].subQuantities;
		for (var j in subQuantities) {
			subQuantities[j].parents.push(new Parent(equations[i].parentQuantity, children.length - 1));
			givenArr.push(new Given(subQuantities[j], subQuantities[j].value));
		}
	}
}

function getSolution(given, searched) {
	for (i = 0; i < given.length; i++) { // for each given
		if (given[i].value !== undefined) { // if given is defined
			if (given[i].quantity.parents.length > 0) { // if given has parents
				let givenParents = given[i].quantity.parents;
				for (var j in givenParents) { // for each parent of given
					let givenParentFormula = givenParents[j].getConnectingFormula();
					if (eval(givenParentFormula.parentQuantity).value != undefined) { // if the parent is known
						let unknownSubQuantities = givenParentFormula.getUnknownSubQuantities();
						if (unknownSubQuantities.length == 1) { // if there is only one unknown subQuantity in the formula
							let unknownSubQuantity = unknownSubQuantities[0];
							givenParentFormula.calculateAndSetValue(unknownSubQuantity); // calc and set value in quantity
							givenArr.push(new Given(unknownSubQuantity, unknownSubQuantity.value)); // add new known to givenArr
							if (unknownSubQuantity == searched && !isNaN(unknownSubQuantity.value)) { // if the calculated quantity is searched
								return unknownSubQuantity; // return searched subQuantity
							}
						} else if (unknownSubQuantities.length == 2) {
							for (var k in unknownSubQuantities) {
								console.log('unbekannt: ' + unknownSubQuantities[k].symbol)
							}
						}
					} else { // if the parent is unknown
						if (givenParentFormula.getUnknownSubQuantities().length == 0) { // if all subQuantities of parentFormula are known
							let unknownParentQuantity = eval(givenParentFormula.parentQuantity);
							givenParentFormula.calculateAndSetValue(unknownParentQuantity); // calc and set value in quantity
							givenArr.push(new Given(unknownParentQuantity, unknownParentQuantity.value)); // add new known to givenArr
							if (unknownParentQuantity == searched && !isNaN(unknownParentQuantity.value)) { // if the calculated quantity is searched
								return unknownParentQuantity; // return searched subQuantity
							}
						}
					}
				}
			}
			if (given[i].quantity.children.length > 0) { // if given has children
				for (var j in given[i].quantity.children) { // for each formula of given
					let givenFormula = given[i].quantity.children[j];
					let unknownSubQuantities = givenFormula.getUnknownSubQuantities();
					if (unknownSubQuantities.length == 1) { // if givenFormula has only one unknown subQuantity
						let unknownSubQuantity = unknownSubQuantities[0];
						console.log(unknownSubQuantity.symbol);
						givenFormula.calculateAndSetValue(unknownSubQuantity); // calc and set value in quantity
						givenArr.push(new Given(unknownSubQuantity, unknownSubQuantity.value)); // add new known to givenArr
						if (unknownSubQuantity == searched && !isNaN(unknownSubQuantity.value)) { // if the calculated quantity is searched
							return unknownSubQuantity; // return searched subQuantity
						}
					} else if (unknownSubQuantities.length == 2) {
						for (var k in unknownSubQuantities) {
							console.log('unbekannt: ' + unknownSubQuantities[k].symbol)
						}
					}
				}
			}
		}
		if (given[i].value === undefined) { // if given is undefined
			if (given[i].quantity.parents.length > 0) { // if given has parents
				let givenParents = given[i].quantity.parents;
				for (var j in givenParents) { // for each parent of given
					let givenParentFormula = givenParents[j].getConnectingFormula();
					if (eval(givenParentFormula.parentQuantity) !== undefined) { // if parent is known (else: calculation impossible)
						if (givenParentFormula.unknownSubQuantities == 1) { // if there is only one unknown subQuantity (else: calculation impossible)
							givenParentFormula.calculateAndSetValue(given[i].quantity); // calc and set value in quantity
							if (given[i].quantity == searched) { // if calculated quantity is searched
								return given[i].quantity; // return calculated quantity
							}
						}
					}
				}
			}
			if (given[i].quantity.children.length > 0) { // if given has children
				for (var j in given[i].quantity.children) { // for each formula of given
					let givenFormula = given[i].quantity.children[j];
					if (givenFormula.unknownSubQuantities == 0) { // if givenFormula has no unknown subQuantities (else: calculation impossible)
						givenFormula.calculateAndSetValue(given[i].quantity); // calc and set value in quantity
						if (given[i].quantity == searched) { // if calculated quantity is searched
							return given[i].quantity; // return calculated quantity
						}
					}
				}
			}
		}
	}
}


let givenArr = [new Given(H, 12), new Given(μ, 30), new Given(B, 30), new Given(t, 10), new Given(α_1, 27), new Given(α_2, 25), new Given(c_1, 200000000)];
let eqtArr = [];
let searched = δ;


assignValues(givenArr);
assignEquations(eqtArr);

let prev = givenArr.length;
let	curr = 0;

function run(given, searched) {
	if (prev == curr) return 'this problem is unsolveable';
	prev = given.length;

	let solution = getSolution(given, searched);
	if (solution === Infinity) {
		return 'division by zero?';
	}
	if (solution !== undefined) {
		return ('solution: ' + solution.symbol + ' = ' + solution.value + ' ' + solution.unit);
	}
	curr = given.length;
	return run(given, searched);
}

console.log(run(givenArr, searched));
