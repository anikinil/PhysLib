
let c0 = new Quantity(
    'c0',
    '0',
    '',
    0,
    [],
    []
);

let c0_5 = new Quantity(
    'c0_5',
    '0.5',
    '',
    0.5,
    [],
    [new Parent('ω', 0)],
);

let c1 = new Quantity(
    'c1',
    '1',
    '',
    1,
    [],
    [new Parent('cε_0', 0)],
);

let c_1 = new Quantity(
    'c_1',
    '-1',
    '',
    -1,
    [],
    [new Parent('F_D', 0)],
);

let c2 = new Quantity(
    'c2',
    '2',
    '',
    2,
    [],
    [new Parent('cc_0$pc2', 0), new Parent('c2$mcπ', 0), new Parent('ω', 1), new Parent('v$pc2', 0)],
);

let cπ = new Quantity(
    'cπ',
    'π',
    '',
    Math.PI,
    [],
    [new Parent('c2$mcπ', 0), new Parent('ω', 1)],
);

let cc_0 = new Quantity(
    'cc_0',
    'Lichtgeschwindigkeit',
    'm/s',
    299792458,
    [],
    [new Parent('cc_0$pc2', 0)],
);

let cμ_0 = new Quantity(
    'cμ_0',
    'magnetische Feldkonstante',
    'N/A²',
    0.00000125663706212,
    [],
    [new Parent('cμ_0$m$occ_0$pc2$c', 0)],
);

let cc_0$pc2 = new Quantity(
    'cc_0$pc2',
    'c_0²',
    '',
    89875517873681764n,
    [new PowFormula('cc_0$pc2', cc_0, c2)],
    [new Parent('cμ_0$m$occ_0$pc2$c', 0)],
);

let cμ_0$m$occ_0$pc2$c = new Quantity(
    'cμ_0$m$occ_0$pc2$c',
    'μ_0*c_0²',
    '',
    11294090673729700118077917968n,
    [new MulFormula('cμ_0$m$occ_0$pc2c', [cμ_0, cc_0$pc2])],
    [new Parent('cε_0', 0)],
);

let cε_0 = new Quantity(
    'cε_0',
    'ε_0',
    'As/Vm',
    0.0000000000088541878128,
    [new DivFormula('cε_0', c1, cμ_0$m$occ_0$pc2$c)],
    [new Parent('C', 0)],
);

let t = new Quantity(
	't',
	'Zeit',
	's',
	undefined,
	[],
	[new Parent('s', 0), new Parent('a', 0), new Parent('I', 0), new Parent('n_Perioden', 0), new Parent('c', 0), new Parent('φ_Phase', 0)],
);

let r = new Quantity(
	'r',
	'Radius',
	'm',
	undefined,
	[],
	[new Parent('v_Bahn', 0), new Parent('F_z', 0)],
);

let ρ = new Quantity(
	'ρ',
	'Dichte',
	'kg/m³',
	undefined,
	[],
	[new Parent('m', 0)],
);

let V = new Quantity(
	'V',
	'Volumen',
	'm³',
	undefined,
	[],
	[new Parent('m', 0)],
);

let m = new Quantity(
	'm',
	'Masse',
	'kg',
	undefined,
	[new MulFormula('m', [ρ, V])],
	[new Parent('D$dm', 0), new Parent('F_z', 0), new Parent('F_kin', 0)],
);

let v = new Quantity(
	'v',
	'Geschwindigkeit',
	'm/s',
	undefined,
	[],
	[new Parent('s', 0), new Parent('a', 0), new Parent('v$pc2', 0)],
);
    
let v$pc2 = new Quantity(
    'v$pc2',
    'v²',
    '',
    undefined,
    [new PowFormula('v$pc2', v, c2)],
    [new Parent('F_z', 0)],
);

let s = new Quantity(
	's',
	'Strecke',
	'm',
	undefined,
	[new MulFormula('s', [v, t])],
	[new Parent('c', 0), new Parent('F_D', 0)],
);

let a = new Quantity(
	'a',
	'Beschleunigung',
	'm/s²',
	undefined,
	[new DivFormula('a', v, t)],
	[new Parent('F_kin', 0)],
);

let A = new Quantity(
	'A',
	'Fläche',
	'm²',
	undefined,
	[],
	[new Parent('A$dd_Kond', 0)],
);

let d_Kond = new Quantity(
	'd_Kond',
	'Kondensatorplattenabstand',
	'm',
	undefined,
	[],
	[new Parent('A$dd_Kond', 0), new Parent('U', 0)],
);

let A$dd_Kond = new Quantity(
	'A$dd_Kond',
	'A/d_Kond',
	'',
	undefined,
	[new DivFormula('A$dd_Kond', A, d_Kond)],
	[new Parent('C', 0)],
);

let ε_r = new Quantity(
	'ε_r',
	'Dielektrizitätszahl',
	'',
	undefined,
	[],
	[]
);

let Q = new Quantity(
	'Q',
	'Ladung',
	'As',
	undefined,
	[],
	[new Parent('I', 0), new Parent('C', 1)],
);

let R = new Quantity(
	'R',
	'Widerstand',
	'Ω',
	undefined,
	[],
	[new Parent('U', 1)],
);

let I = new Quantity(
	'I',
	'Stromstärke',
	'Ω',
	undefined,
	[new DivFormula('I', Q, t)],
	[new Parent('U', 1), new Parent('P', 0)],
);

let E_el = new Quantity(
	'E_el',
	'elektrische Feldstärke',
	'N/C oder V/m',
	undefined,
	[],
	[new Parent('U', 0)],
);

let U = new Quantity(
	'U',
	'Spannung',
	'V',
	undefined,
	[new MulFormula('U', [E_el, d_Kond]), new MulFormula('U', [R, I])],
	[new Parent('C', 1), new Parent('P', 0)],
);

let C = new Quantity(
	'C',
	'Kapazität',
	'F',
	undefined,
	[new MulFormula('C', [cε_0, A$dd_Kond]), new DivFormula('C', Q, U)],
	[]
);

let P = new Quantity(
	'P',
	'Leistung',
	'W',
	undefined,
	[new MulFormula('P', [U, I])],
	[]
);

let T = new Quantity(
	'T',
	'Periodendauer',
	's',
	undefined,
	[],
	[new Parent('n_Perioden', 0), new Parent('ω', 2)],
);

let n_Perioden = new Quantity(
	'n_Perioden',
	'Periodenanzahl',
	'',
	undefined,
	[new DivFormula('n_Perioden', t, T)],
	[]
);

let λ = new Quantity(
	'λ',
	'Wellenlänge',
	'm',
	undefined,
	[],
	[new Parent('f', 0)],
);

let c = new Quantity(
	'c',
	'Ausbreitungsgeschwindigkeit',
	'm/s',
	undefined,
	[new DivFormula('c', s, t)],
	[new Parent('f', 0)],
);

let f = new Quantity(
	'f',
	'Frequenz',
	'Hz',
	undefined,
	[new DivFormula('f', c, λ)],
	[new Parent('ω', 1)],
);

let D = new Quantity(
	'D',
	'Federkonstante',
	'N/m oder kg/s²',
	undefined,
	[],
	[new Parent('D$dm', 0), new Parent('F_D', 0)],
);

let D$dm = new Quantity(
	'D$dm',
	'D/m',
	'',
	undefined,
	[new DivFormula('D$dm', D, m)],
	[new Parent('ω', 0)],
);

let c2$mcπ = new Quantity(
	'c2$mcπ',
	'2π',
	'',
	2 * Math.PI,
	[new MulFormula('c2$mcπ', [c2, cπ])],
	[new Parent('ω', 2)],
);

let ω = new Quantity(
	'ω',
	'Winkelgeschwindigkeit',
	'rad/s',
	undefined,
	[new PowFormula('ω', D$dm, c0_5), new MulFormula('ω', [c2, cπ, f]), new DivFormula('ω', c2$mcπ, T)],
	[new Parent('v_Bahn', 0), new Parent('φ_Phase', 0)],
);

let φ_Phase = new Quantity(
	'φ_Phase',
	'Phase',
	'°',
	undefined,
	[new MulFormula('φ_Phase', [ω, t])],
	[]
);

let v_Bahn = new Quantity(
	'v_Bahn',
	'Bahngeschwindigkeit',
	'm/s',
	undefined,
	[new MulFormula('v_Bahn', [ω, r])],
	[]
);

let F_z = new Quantity(
	'F_z',
	'Zentripetalkraft',
	'N',
	undefined,
	[new MulFormula('F_z', [r, m, v$pc2])],
	[]
);

let F_kin = new Quantity(
	'F_kin',
	'kinetische Kraft',
	'N',
	undefined,
	[new MulFormula('F_kin', [m, a])],
	[]
);

let F_D = new Quantity(
	'F_D',
	'Federkraft',
	'N',
	undefined,
	[new MulFormula('F_D', [c_1, D, s])],
	[]
);
