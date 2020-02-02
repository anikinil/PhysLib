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
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der MulFormula ' + this.parentQuantity + ' vorhanden.');
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
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der AddFormula ' + this.parentQuantity + ' vorhanden.');
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
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der DivFormula ' + this.parentQuantity + ' vorhanden.');
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
		if (this.base == undefined && this.power == undefined) {
			return 2;
		}
		if (this.base == undefined || this.power == undefined) {
			return 1;
		}
		return 0;
	};
	getUnknownSubQuantity = () => {
		if (this.base == undefined) {
			return this.base;
		}
		if (this.power == undefined) {
			return this.power;
		}
	};
	calculateAndSetValue = (unknownQuantity) => {
		if (unknownQuantity == eval(this.parentQuantity)) {
			unknownQuantity.value = Math.pow(this.base.value, this.power.value);
		} else if (unknownQuantity == this.base) {
			unknownQuantity.value = Math.pow(
				eval(this.parentQuantity).value,
				1 / this.power.value
			);
		} else if (unknownQuantity == this.pow) {
			unknownQuantity.value == Math.log(eval(this.parentQuantity).value) / Math.log(this.base.value);
		} else {
			throw new Error('Die angegebene Größe ' + unknownQuantity.name + ' ist nicht in der PowFormula ' + this.parentQuantity + ' vorhanden.');
		}
	};
}