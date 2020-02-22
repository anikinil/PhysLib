class Quantity {
	constructor(symbol, name, unit, value, children, parents) {
		this.symbol = symbol;
		this.name = name;
		this.unit = unit;
		this.value = value;
		this.children = children;
		this.parents = parents;
	}
}
		
class Given {
	constructor(quantity, value) {
		this.quantity = quantity;
		this.value = value;
	}
}

class Parent {
	constructor(quantity, formulaID) {
		this.quantity = quantity;
		this.formulaID = formulaID;
	}

	getConnectingFormula = () => {
		return eval(this.quantity).children[this.formulaID];
	};
}

class MulFormula {
	constructor(parentQuantity, subQuantities) {
		this.parentQuantity = parentQuantity;
		this.subQuantities = subQuantities;
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		for (var i in this.subQuantities) {
			if (this.subQuantities[i].value == undefined) {
				arr.push(this.subQuantities[i]);
			}
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		this.parentQuantity = eval(this.parentQuantity);
		if (unknownQuantity == this.parentQuantity) {
			let calc = 1;
			for (var i in this.subQuantities) {
				calc *= this.subQuantities[i].value;
			}
			unknownQuantity.value = calc;
		} else if (this.subQuantities.includes(unknownQuantity)) {
			let calc = eval(this.parentQuantity).value;
			for (var i in this.subQuantities) {
				if (this.subQuantities[i].value != undefined) {
					calc /= this.subQuantities[i].value;
				}
			}
			unknownQuantity.value = calc;
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der MulFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}

class AddFormula {
	constructor(parentQuantity, subQuantities) {
		this.parentQuantity = parentQuantity;
		this.subQuantities = subQuantities;
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		for (var i in this.subQuantities) {
			if (this.subQuantities[i].value == undefined) {
				arr.push(this.subQuantities[i]);
			}
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			let calc = 0;
			for (var i in this.subQuantities) {
				calc += this.subQuantities[i].value;
			}
			unknownQuantity.value = calc;
		} else if (this.subQuantities.includes(unknownQuantity)) {
			let calc = eval(this.parentQuantity).value;
			for (var i in this.subQuantities) {
				if (this.subQuantities[i].value != undefined) {
					calc -= this.subQuantities[i].value;
				}
			}
			unknownQuantity.value = calc;
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der AddFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}

class DivFormula {
	constructor(parentQuantity, dividendQuantity, divisorQuantity) {
		this.parentQuantity = parentQuantity;
		this.dividendQuantity = dividendQuantity;
		this.divisorQuantity = divisorQuantity;
		this.subQuantities = [dividendQuantity, divisorQuantity];
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		if (this.dividendQuantity.value == undefined) {
			arr.push(this.dividendQuantity);
		}
		if (this.divisorQuantity.value == undefined) {
			arr.push(this.divisorQuantity);
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = eval(this.dividendQuantity).value / eval(this.divisorQuantity).value;
		} else if (unknownQuantity == this.dividendQuantity) {
			unknownQuantity.value = eval(this.parentQuantity).value * eval(this.divisorQuantity).value;
		} else if (unknownQuantity == this.divisorQuantity) {
			unknownQuantity.value = eval(this.dividendQuantity).value / eval(this.parentQuantity).value;
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der DivFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}

class PowFormula {
	constructor(parentQuantity, base, power) {
		this.parentQuantity = parentQuantity;
		this.base = base;
		this.power = power;
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		if (this.base.value == undefined) {
			arr.push(this.base);
		}
		if (this.power.value == undefined) {
			arr.push(this.power);
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.pow(this.base.value, this.power.value);
		} else if (unknownQuantity == this.base) {
			unknownQuantity.value = Math.pow(eval(this.parentQuantity).value, 1 / this.power.value);
		} else if (unknownQuantity == this.power) {
			unknownQuantity.value = Math.log(eval(this.parentQuantity).value) / Math.log(this.base.value);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der PowFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}

class SinFormula {
	constructor(parentQuantity, input) {
		this.parentQuantity = parentQuantity;
		this.input = input;
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		if (this.input.value == undefined) {
			arr.push(this.input);
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.sin(this.input.value * (Math.PI / 180));
		} else if (unknownQuantity == this.input) {
			unknownQuantity.value = Math.asin(eval(this.parentQuantity).value) * (180 / Math.PI);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der SinFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}

class CosFormula {
	constructor(parentQuantity, input) {
		this.parentQuantity = parentQuantity;
		this.input = input;
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		if (this.input.value == undefined) {
			arr.push(this.input);
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.cos(this.input.value * (Math.PI / 180));
		} else if (unknownQuantity == this.input) {
			unknownQuantity.value = Math.acos(eval(this.parentQuantity).value) * (180 / Math.PI);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der CosFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}

class TanFormula {
	constructor(parentQuantity, input) {
		this.parentQuantity = parentQuantity;
		this.input = input;
	}
	getUnknownSubQuantities = () => {
		let arr = [];
		if (this.input.value == undefined) {
			arr.push(this.input);
		}
		return arr;
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.tan(this.input.value * (Math.PI / 180));
		} else if (unknownQuantity == this.input) {
			unknownQuantity.value = Math.atan(eval(this.parentQuantity).value) * (180 / Math.PI);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.symbol + ' ist nicht in der TanFormula von ' + this.parentQuantity.symbol + ' vorhanden.');
		}
	};
}