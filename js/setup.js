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
	unknownSubQuantities = () => {
		let count = 0;
		for (var i in this.subQuantities) {
			if (this.subQuantities[i].value == undefined) {
				count++;
			}
		}
		return count;
	};
	getUnknownSubQuantity = () => {
		for (var i in this.subQuantities) {
			if (this.subQuantities[i].value == undefined) {
				return this.subQuantities[i];
			}
		}
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
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der MulFormula von ' + this.parentQuantity + ' vorhanden.');
		}
	};
}

class AddFormula {
	constructor(parentQuantity, subQuantities) {
		this.parentQuantity = parentQuantity;
		this.subQuantities = subQuantities;
	}
	unknownSubQuantities = () => {
		let count = 0;
		for (var i in this.subQuantities) {
			if (this.subQuantities[i].value == undefined) {
				count++;
			}
		}
		return count;
	};
	getUnknownSubQuantity = () => {
		for (var i in this.subQuantities) {
			if (this.subQuantities[i].value == undefined) {
				return this.subQuantities[i];
			}
		}
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
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der AddFormula von ' + this.parentQuantity + ' vorhanden.');
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
	unknownSubQuantities = () => {
		let count = 0;
		if (this.dividendQuantity.value == undefined) {
			count++;
		}
		if (this.divisorQuantity.value == undefined) {
			count++;
		}
		return count;
	};
	getUnknownSubQuantity = () => {
		if (this.dividendQuantity.value == undefined) {
			return this.dividendQuantity;
		}
		if (this.divisorQuantity.value == undefined) {
			return this.divisorQuantity;
		}
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = eval(this.dividendQuantity).value / eval(this.divisorQuantity).value;
		} else if (unknownQuantity == this.dividendQuantity) {
			unknownQuantity.value = eval(this.parentQuantity).value * eval(this.divisorQuantity).value;
		} else if (unknownQuantity == this.divisorQuantity) {
			unknownQuantity.value = eval(this.dividendQuantity).value / eval(this.parentQuantity).value;
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der DivFormula von ' + this.parentQuantity + ' vorhanden.');
		}
	};
}

class PowFormula {
	constructor(parentQuantity, base, power) {
		this.parentQuantity = parentQuantity;
		this.base = base;
		this.power = power;
	}
	unknownSubQuantities = () => {
		if (this.base.value == undefined && this.power.value == undefined) {
			return 2;
		}
		if (this.base.value == undefined || this.power.value == undefined) {
			return 1;
		}
		return 0;
	};
	getUnknownSubQuantity = () => {
		if (this.base.value == undefined) {
			return this.base;
		}
		if (this.power.value == undefined) {
			return this.power;
		}
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.pow(this.base.value, this.power.value);
		} else if (unknownQuantity == this.base) {
			unknownQuantity.value = Math.pow(eval(this.parentQuantity).value, 1 / this.power.value);
		} else if (unknownQuantity == this.power) {
			unknownQuantity.value = Math.log(eval(this.parentQuantity).value) / Math.log(this.base.value);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der PowFormula von ' + this.parentQuantity + ' vorhanden.');
		}
	};
}

class SinFormula {
	constructor(parentQuantity, input) {
		this.parentQuantity = parentQuantity;
		this.input = input;
	}
	unknownSubQuantities = () => {
		if (this.input.value == undefined) {
			return 1;
		}
		return 0;
	};
	getUnknownSubQuantity = () => {
		if (this.input.value == undefined) {
			return this.input;
		}
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.sin(this.input.value * (Math.PI / 180));
		} else if (unknownQuantity == this.input) {
			unknownQuantity.value = Math.asin(eval(this.parentQuantity).value) * (180 / Math.PI);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der SinFormula von ' + this.parentQuantity + ' vorhanden.');
		}
	};
}

class CosFormula {
	constructor(parentQuantity, input) {
		this.parentQuantity = parentQuantity;
		this.input = input;
	}
	unknownSubQuantities = () => {
		if (this.input.value == undefined) {
			return 1;
		}
		return 0;
	};
	getUnknownSubQuantity = () => {
		if (this.input.value == undefined) {
			return this.input;
		}
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.cos(this.input.value * (Math.PI / 180));
		} else if (unknownQuantity == this.input) {
			unknownQuantity.value = Math.acos(eval(this.parentQuantity).value) * (180 / Math.PI);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der CosFormula von ' + this.parentQuantity + ' vorhanden.');
		}
	};
}

class TanFormula {
	constructor(parentQuantity, input) {
		this.parentQuantity = parentQuantity;
		this.input = input;
	}
	unknownSubQuantities = () => {
		if (this.input.value == undefined) {
			return 1;
		}
		return 0;
	};
	getUnknownSubQuantity = () => {
		if (this.input.value == undefined) {
			return this.input;
		}
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.tan(this.input.value * (Math.PI / 180));
		} else if (unknownQuantity == this.input) {
			unknownQuantity.value = Math.atan(eval(this.parentQuantity).value) * (180 / Math.PI);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der TanFormula von ' + this.parentQuantity + ' vorhanden.');
		}
	};
}