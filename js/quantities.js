
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
    [new Parent('ω', 0), new Parent('c__1$mc0_5$ma$m$bot$p2$bc', 0), new Parent('W_kin', 1), new Parent('W_spann', 0), new Parent('W_el_Kond', 0), new Parent('W_el_Kond', 1), new Parent('F_W', 0), new Parent('ρ_el', 1), new Parent('W_m', 0), new Parent('c2$pc0_5', 0), new Parent('k$ac0_5', 0)]
);

let c_0_5 = new Quantity(
    'c_0_5',
    '-0.5',
    '',
    -0.5,
    [],
    [new Parent('c', 1)]
);

let c1 = new Quantity(
    'c1',
    '1',
    '',
    1,
    [],
    [new Parent('cε_0', 0)]
);

let c__1 = new Quantity(
    'c__1',
    '-1',
    '',
    -1,
    [],
    [new Parent('F_D', 0), new Parent('c__1$mc0_5$ma$m$bot$p2$bc', 0), new Parent('c__1$m$bos$dc$bc', 0), new Parent('c2$mk$ac__1', 0)]
);

let c2 = new Quantity(
    'c2',
    '2',
    '',
    2,
    [],
    [new Parent('cc_0$pc2', 0), new Parent('c2$mcπ', 0), new Parent('ω', 1), new Parent('v$pc2', 0), new Parent('t$p2', 0), new Parent('U$pc2', 0), new Parent('c2$mcπ$mr', 0), new Parent('ω$pc2', 0), new Parent('T$pc2', 0), new Parent('cπ$pc2', 0), new Parent('E_el$pc2', 0), new Parent('n_Windungen$pc2', 0), new Parent('I$pc2', 0), new Parent('c2$mcμ_0$mμ_r', 0), new Parent('B$pc2', 0), new Parent('c2$pc0_5', 0), new Parent('$boL$mC$bc$pc0_5', 0), new Parent('λ$dc2', 0), new Parent('c2$mk', 0)]
);

let ce = new Quantity(
	'ce',
	'e',
	'',
	Math.E,
	[],
	[]
);

let cπ = new Quantity(
    'cπ',
    'π',
    '',
    Math.PI,
    [],
    [new Parent('c2$mcπ', 0), new Parent('ω', 1), new Parent('c2$mcπ$mr', 0), new Parent('cπ$pc2', 0)]
);

let cπ$pc2 = new Quantity(
	'cπ$pc2',
	'π²',
	'',
	undefined,
	[new PowFormula('cπ$pc2', cπ, c2)],
	[new Parent('m$mc4$mcπ$pc2$mr', 0)]
);

let c4 = new Quantity(
	'c4',
	'4',
	'',
	4,
	[],
	[new Parent('m$mc4$mcπ$pc2$mr', 0), new Parent('λ$dc4', 0)]
);

let cq_e = new Quantity(
	'cq_e',
	'Elektronenladung',
	'C',
	0.00000000000000000016021773,
	[],
	[new Parent('F_L', 0)]
);

let cc_0 = new Quantity(
    'cc_0',
    'Lichtgeschwindigkeit (Vakuum)',
    'm/s',
    299792458,
    [],
    [new Parent('cc_0$pc2', 0)]
	);

let cμ_0 = new Quantity(
    'cμ_0',
    'magnetische Feldkonstante',
    'N/A²',
    0.00000125663706212,
    [],
    [new Parent('cμ_0$m$bocc_0$pc2$bc', 0), new Parent('B', 0), new Parent('μ_r', 0), new Parent('L', 0), new Parent('c2$mcμ_0$mμ_r', 0), new Parent('cε_0$mε_r$mcμ_0$mμ_r', 0)]
);

let cc_0$pc2 = new Quantity(
    'cc_0$pc2',
    'c_0²',
    '',
    89875517873681764n,
    [new PowFormula('cc_0$pc2', cc_0, c2)],
    [new Parent('cμ_0$m$bocc_0$pc2$bc', 0)]
);

let cμ_0$m$bocc_0$pc2$bc = new Quantity(
    'cμ_0$m$bocc_0$pc2$bc',
    'μ_0*c_0²',
    '',
    11294090673729700118077917968n,
    [new MulFormula('cμ_0$m$bocc_0$pc2c', [cμ_0, cc_0$pc2])],
    [new Parent('cε_0', 0)]
);

let cε_0 = new Quantity(
    'cε_0',
    'ε_0',
    'As/Vm',
    0.0000000000088541878128,
    [new DivFormula('cε_0', c1, cμ_0$m$bocc_0$pc2$bc)],
    [new Parent('C', 0), new Parent('σ', 1), new Parent('ρ_el', 1), new Parent('cε_0$mε_r$mcμ_0$mμ_r', 0)]
);

let t = new Quantity(
	't',
	'Zeit',
	's',
	undefined,
	[],
	[new Parent('s', 0), new Parent('a', 0), new Parent('Q', 1), new Parent('n_Perioden', 0), new Parent('c', 0), new Parent('φ_Phase', 0), new Parent('t$p2', 0), new Parent('v_0$mt', 0), new Parent('W_el', 0), new Parent('W_el', 1), new Parent('v_D', 0), new Parent('ω$mt', 0), new Parent('t$a$boc__1$m$bos$dc$bc$bc', 0)]
);

let t$p2 = new Quantity(
	't$p2',
	't²',
	'',
	undefined,
	[new PowFormula('t$p2', t, c2)],
	[new Parent('c__1$mc0_5$ma$m$bot$p2$bc', 0)]
);

let v = new Quantity(
	'v',
	'Geschwindigkeit',
	'm/s',
	undefined,
	[],
	[new Parent('s', 0), new Parent('a', 0), new Parent('v$pc2', 0), new Parent('p', 0)]
);

let a = new Quantity(
	'a',
	'Beschleunigung',
	'm/s²',
	undefined,
	[new DivFormula('a', v, t)],
	[new Parent('F_kin', 0), new Parent('c__1$mc0_5$ma$m$bot$p2$bc', 0)]
);

let c__1$mc0_5$ma$m$bot$p2$bc = new Quantity(
	'c__1$mc0_5$ma$m$bot$p2$bc',
	'-0.5*a*t²',
	'',
	undefined,
	[new MulFormula('c__1$mc0_5$ma$m$bot$p2$bc', [c__1, c0_5, a, t$p2])],
	[new Parent('s', 1)]
);
	
let r = new Quantity(
	'r',
	'Radius',
	'm',
	undefined,
	[],
	[new Parent('v_Bahn', 0), new Parent('F_z', 0), new Parent('c2$mcπ$mr', 0), new Parent('F_z', 1), new Parent('F_z', 1), new Parent('m$mc4$mcπ$pc2$mr', 0)]
);

let c2$mcπ$mr = new Quantity(
	'c2$mcπ$mr',
	'2*π*r',
	'',
	undefined,
	[new MulFormula('c2$mcπ$mr', [c2, cπ, r])],
	[new Parent('v_Bahn', 1), new Parent('H', 0)]
);

let ρ = new Quantity(
	'ρ',
	'Dichte',
	'kg/m³',
	undefined,
	[],
	[new Parent('m', 0), new Parent('F_W', 0)]
);

let V = new Quantity(
	'V',
	'Volumen',
	'm³',
	undefined,
	[],
	[new Parent('m', 0), new Parent('W_el', 0), new Parent('ρ_m', 0)]
);

let m = new Quantity(
	'm',
	'Masse',
	'kg',
	undefined,
	[new MulFormula('m', [ρ, V])],
	[new Parent('D$dm', 0), new Parent('F_z', 0), new Parent('F_kin', 0), new Parent('W_pot', 0), new Parent('W_kin', 1), new Parent('p', 0), new Parent('m$mv$pc2', 0), new Parent('F_z', 1), new Parent('m$mc4$mcπ$pc2$mr', 0)]
);

let p = new Quantity(
	'p',
	'Impuls',
	'N*s',
	undefined,
	[new MulFormula('p', [m, v])],
	[]
);

let m$mc4$mcπ$pc2$mr = new Quantity(
	'm$mc4$mcπ$pc2$mr',
	'm*4*π²*r',
	'',
	undefined,
	[new MulFormula('m$mc4$mcπ$pc2$mr', [m, c4, cπ$pc2, r])],
	[new Parent('F_z', 2)]
);

let v_0 = new Quantity(
	'v_0',
	'Anfangsgeschwindigkeit',
	'm/s',
	undefined,
	[],
	[new Parent('v_0$mt', 0)]
);

let v_0$mt = new Quantity(
	'v_0$mt',
	'v_0*t',
	'',
	undefined,
	[new MulFormula('v_0$mt', [v_0, t])],
	[new Parent('s', 1)]
);

let v$pc2 = new Quantity(
    'v$pc2',
    'v²',
    '',
    undefined,
    [new PowFormula('v$pc2', v, c2)],
    [new Parent('W_kin', 1), new Parent('W_spann', 0), new Parent('m$mv$pc2', 0), new Parent('F_W', 0)]
);

let m$mv$pc2 = new Quantity(
	'm$mv$pc2',
	'm*v²',
	'',
	undefined,
	[new MulFormula('m$mv$pc2', [m, v$pc2])],
	[new Parent('F_z', 0)]
);

let s = new Quantity(
	's',
	'Strecke',
	'm',
	undefined,
	[new MulFormula('s', [v, t]), new AddFormula('s', [c__1$mc0_5$ma$m$bot$p2$bc, v_0$mt])],
	[new Parent('c', 0), new Parent('F_D', 0), new Parent('W_kin', 0), new Parent('v_D', 0), new Parent('s$dc', 0)]
);

let s_0 = new Quantity(
	's_0',
	'Anfangsstrecke',
	'm',
	undefined,
	[],
	[]
);

let x_max = new Quantity(
	'x_max',
	'maximale Auslenkung',
	'm',
	undefined,
	[],
	[new Parent('x', 0)]
);

let v_D = new Quantity(
	'v_D',
	'Driftgeschwindigkeit',
	'm/s',
	undefined,
	[new DivFormula('v_D', s, t)],
	[new Parent('F_L', 0), new Parent('U_H', 0), new Parent('U_ind', 0)]
);

let s_Leiter = new Quantity(
	's_Leiter',
	'Leiterlänge',
	'm',
	undefined,
	[],
	[new Parent('F_L', 1)]
);

let A = new Quantity(
	'A',
	'Fläche',
	'm²',
	undefined,
	[],
	[new Parent('A$dd_Kond', 0), new Parent('σ', 0), new Parent('F_W', 0), new Parent('φ', 0), new Parent('A$dl_Spule', 0), new Parent('P', 1)]
);

let c_W = new Quantity(
	'c_W',
	'Strömungswiderstandskoeffizient',
	'',
	undefined,
	[],
	[new Parent('F_W', 0)]
);

let F_W = new Quantity(
	'F_W',
	'Strömungswiderstand',
	'N',
	undefined,
	[new MulFormula('F_W', [c0_5, c_W, ρ, A, v$pc2])],
	[]
);

let d_Kond = new Quantity(
	'd_Kond',
	'Kondensatorplattenabstand',
	'm',
	undefined,
	[],
	[new Parent('A$dd_Kond', 0), new Parent('U', 0)]
);

let A$dd_Kond = new Quantity(
	'A$dd_Kond',
	'A/d_Kond',
	'',
	undefined,
	[new DivFormula('A$dd_Kond', A, d_Kond)],
	[new Parent('C', 0)]
);

let ε_r = new Quantity(
	'ε_r',
	'Dielektrizitätszahl',
	'',
	undefined,
	[],
	[new Parent('C', 0), new Parent('σ', 1), new Parent('ρ_el', 1), new Parent('cε_0$mε_r$mcμ_0$mμ_r', 0)]
);

let C = new Quantity(
	'C',
	'Kapazität',
	'F',
	undefined,
	[new MulFormula('C', [cε_0, ε_r, A$dd_Kond])],
	[new Parent('Q', 0), new Parent('W_el_Kond', 1), new Parent('L$mC', 0)]
);

let R = new Quantity(
	'R',
	'Widerstand',
	'Ω',
	undefined,
	[],
	[new Parent('U', 1)]
);

let c2$pc0_5 = new Quantity(
	'c2$pc0_5',
	'√2',
	'',
	undefined,
	[new PowFormula('c2$pc0_5', c2, c0_5)],
	[new Parent('U_eff', 0), new Parent('I_eff', 0)]
);

let D = new Quantity(
	'D',
	'Federkonstante',
	'N/m oder kg/s²',
	undefined,
	[],
	[new Parent('D$dm', 0), new Parent('F_D', 0), new Parent('W_spann', 0)]
);

let D$dm = new Quantity(
	'D$dm',
	'D/m',
	'',
	undefined,
	[new DivFormula('D$dm', D, m)],
	[new Parent('ω', 0)]
);

let λ = new Quantity(
	'λ',
	'Wellenlänge',
	'm',
	undefined,
	[],
	[new Parent('f', 0), new Parent('k', 0), new Parent('λ$dc2', 0), new Parent('λ$dc4', 0), new Parent('k$mλ', 0), new Parent('λ$dn_Spalten', 0), new Parent('$bok$ac0_5$bc$mλ', 0)]
);

let μ = new Quantity(
	'μ',
	'Permeabilität',
	'Vs/Am',
	undefined,
	[],
	[new Parent('μ_r', 0), new Parent('B', 1)]
);

let μ_r = new Quantity(
	'μ_r',
	'Permeabilitätszahl',
	'Vs/Am',
	undefined,
	[new DivFormula('μ_r', μ, cμ_0)],
	[new Parent('B', 0), new Parent('L', 0), new Parent('c2$mcμ_0$mμ_r', 0), new Parent('cε_0$mε_r$mcμ_0$mμ_r', 0)]
);

let cε_0$mε_r$mcμ_0$mμ_r = new Quantity(
	'cε_0$mε_r$mcμ_0$mμ_r',
	'ε_0*ε_r*μ_0*μ_r',
	'',
	undefined,
	[new MulFormula('cε_0$mε_r$mcμ_0$mμ_r', [cε_0, ε_r, cμ_0, μ_r])],
	[new Parent('c', 1)]
);

let c = new Quantity(
	'c',
	'Ausbreitungsgeschwindigkeit',
	'm/s',
	undefined,
	[new DivFormula('c', s, t), new PowFormula('c', cε_0$mε_r$mcμ_0$mμ_r, c_0_5)],
	[new Parent('f', 0), new Parent('s$dc', 0), new Parent('S', 0)]
);

let s$dc = new Quantity(
	's$dc',
	's/c',
	'',
	undefined,
	[new DivFormula('s$dc', s, c)],
	[new Parent('c__1$m$bos$dc$bc', 0)]
);

let c__1$m$bos$dc$bc = new Quantity(
	'c__1$m$bos$dc$bc',
	'-(s/c)',
	'',
	undefined,
	[new MulFormula('c__1$m$bos$dc$bc', [c__1, s$dc])],
	[new Parent('t$a$boc__1$m$bos$dc$bc$bc', 0)]
);

let t$a$boc__1$m$bos$dc$bc$bc = new Quantity(
	't$a$boc__1$m$bos$dc$bc$bc',
	't-(s/c)',
	'',
	undefined,
	[new AddFormula('t$a$boc__1$m$bos$dc$bc$bc', [t, c__1$m$bos$dc$bc])],
	[new Parent('$s$bot$a$boc__1$m$bos$dc$bc$bc$bc', 0)]
);

let $s$bot$a$boc__1$m$bos$dc$bc$bc$bc = new Quantity(
	'$s$bot$a$boc__1$m$bos$dc$bc$bc$bc',
	'sin(t-(s/c))',
	'',
	undefined,
	[new SinFormula('$s$bot$a$boc__1$m$bos$dc$bc$bc$bc', t$a$boc__1$m$bos$dc$bc$bc)],
	[new Parent('x', 0)]
);

let f = new Quantity(
	'f',
	'Frequenz',
	'Hz',
	undefined,
	[new DivFormula('f', c, λ)],
	[new Parent('ω', 1)]
);

let c2$mcπ = new Quantity(
	'c2$mcπ',
	'2π',
	'',
	2 * Math.PI,
	[new MulFormula('c2$mcπ', [c2, cπ])],
	[new Parent('ω', 2), new Parent('T', 0), new Parent('k', 0)]
);

let n_Windungen = new Quantity(
	'n_Windungen',
	'Anzahl der Windungen',
	'',
	undefined,
	[],
	[new Parent('n_Windungen$pc2', 0), new Parent('n_Windungen$dl_Spule', 0)]
);

let n_Windungen$pc2 = new Quantity(
	'n_Windungen$pc2',
	'n_Windungen²',
	'',
	undefined,
	[new PowFormula('n_Windungen$pc2', n_Windungen, c2)],
	[new Parent('L', 0)]
);

let l_Spule = new Quantity(
	'l_Spule',
	'Spulenlänge',
	'm',
	undefined,
	[],
	[new Parent('n_Windungen$dl_Spule', 0), new Parent('A$dl_Spule', 0)]
);

let A$dl_Spule = new Quantity(
	'A$dl_Spule',
	'A/l_Spule',
	'',
	undefined,
	[new DivFormula('A$dl_Spule', A, l_Spule)],
	[new Parent('L', 0)]
);

let L = new Quantity(
	'L',
	'Induktivität',
	'H',
	undefined,
	[new MulFormula('L', [cμ_0, μ_r, n_Windungen$pc2, A$dl_Spule])],
	[new Parent('W_m', 0), new Parent('L$mC', 0)]
);

let L$mC = new Quantity(
	'L$mC',
	'L*C',
	'',
	undefined,
	[new MulFormula('L$mC', [L, C])],
	[new Parent('$boL$mC$bc$pc0_5', 0)]
);

let $boL$mC$bc$pc0_5 = new Quantity(
	'$boL$mC$bc$pc0_5',
	'√(L*C)',
	'',
	undefined,
	[new PowFormula('$boL$mC$bc$pc0_5', L$mC, c2)],
	[new Parent('T', 0)]
);

let T = new Quantity(
	'T',
	'Periodendauer',
	's',
	undefined,
	[new MulFormula('T', [c2$mcπ, $boL$mC$bc$pc0_5])],
	[new Parent('n_Perioden', 0), new Parent('ω', 2), new Parent('v_Bahn', 1), new Parent('T$pc2', 0)]
);

let ω = new Quantity(
	'ω',
	'Winkelgeschwindigkeit',
	'rad/s',
	undefined,
	[new PowFormula('ω', D$dm, c0_5), new MulFormula('ω', [c2, cπ, f]), new DivFormula('ω', c2$mcπ, T)],
	[new Parent('v_Bahn', 0), new Parent('φ_Phase', 0), new Parent('ω$pc2', 0), new Parent('ω$mt', 0), new Parent('x', 0)]
);

let x = new Quantity(
	'x',
	'Auslenkung',
	'm',
	undefined,
	[new MulFormula('x', [x_max, $s$bot$a$boc__1$m$bos$dc$bc$bc$bc, ω])],
	[]
);

let ω$mt = new Quantity(
	'ω$mt',
	'ω*t',
	'',
	undefined,
	[new MulFormula('ω$mt', [ω, t])],
	[new Parent('$s$boω$mt$bc', 0)]
);

let $s$boω$mt$bc = new Quantity(
	'$s$boω$mt$bc',
	'sin(ω*t)',
	'',
	undefined,
	[new SinFormula('$s$boω$mt$bc', ω$mt)],
	[new Parent('U', 2), new Parent('I', 1)]
);

let I_max = new Quantity(
	'I_max',
	'maximale Stromstärke',
	'A',
	undefined,
	[],
	[new Parent('I', 1), new Parent('I_eff', 0)]
);

let I_eff = new Quantity(
	'I_eff',
	'Effektivwert der Stromstärke',
	'A',
	undefined,
	[new DivFormula('I_eff', I_max, c2$pc0_5)],
	[]
);

let T$pc2 = new Quantity(
	'T$pc2',
	'T²',
	'',
	undefined,
	[new PowFormula('T$pc2', T, c2)],
	[new Parent('F_z', 2)]
);

let n_Perioden = new Quantity(
	'n_Perioden',
	'Periodenanzahl',
	'',
	undefined,
	[new DivFormula('n_Perioden', t, T)],
	[]
);

let n_Windungen$dl_Spule = new Quantity(
	'n_Windungen$dl_Spule',
	'n_Windungen/l_Spule',
	'',
	undefined,
	[new DivFormula('n_Windungen$dl_Spule', n_Windungen, l_Spule)],
	[new Parent('B', 0)]
);

let c2$mcμ_0$mμ_r = new Quantity(
	'c2$mcμ_0$mμ_r',
	'2*μ_0*μ_r',
	'',
	undefined,
	[new MulFormula('c2$mcμ_0$mμ_r', [c2, cμ_0, μ_r])],
	[new Parent('ρ_m', 1)]
);

let d_Leiter = new Quantity(
	'd_Leiter',
	'Breite des Leiterstückes',
	'm',
	undefined,
	[],
	[new Parent('U_H', 0), new Parent('U_ind', 0)]
);

let ω$pc2 = new Quantity(
	'ω$pc2',
	'ω²',
	'',
	undefined,
	[new PowFormula('ω$pc2', ω, c2)],
	[new Parent('F_z', 1)]
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
	[new MulFormula('v_Bahn', [ω, r]), new DivFormula('v_Bahn', c2$mcπ$mr, T)],
	[]
);

let U_max = new Quantity(
	'U_max',
	'maximale Spannung',
	'V',
	undefined,
	[],
	[new Parent('U', 2), new Parent('U_eff', 0)]
);

let U_eff = new Quantity(
	'U_eff',
	'Effektivwert der Spannung',
	'V',
	undefined,
	[new DivFormula('U_eff', U_max, c2$pc0_5)],
	[]
);

let E_el = new Quantity(
	'E_el',
	'elektrische Feldstärke',
	'N/C oder V/m',
	undefined,
	[],
	[new Parent('F_el', 0), new Parent('U', 0), new Parent('σ', 1), new Parent('E_el$pc2', 0)]
);

let I = new Quantity(
	'I',
	'Stromstärke',
	'Ω',
	undefined,
	[new MulFormula('I', [I_max, $s$boω$mt$bc])],
	[new Parent('Q', 1), new Parent('U', 1), new Parent('P', 0), new Parent('W_el', 0), new Parent('H', 0), new Parent('B', 0), new Parent('F_L', 1), new Parent('I$pc2', 0)]
);

let U = new Quantity(
	'U',
	'Spannung',
	'V',
	undefined,
	[new MulFormula('U', [E_el, d_Kond]), new MulFormula('U', [R, I]), new MulFormula('U', [U_max, $s$boω$mt$bc])],
	[new Parent('Q', 0), new Parent('P', 0), new Parent('W_el', 0), new Parent('W_el_Kond', 0), new Parent('U$pc2', 0)]
);

let Q = new Quantity(
	'Q',
	'Ladung',
	'As',
	undefined,
	[new MulFormula('Q', [C, U]), new MulFormula('Q', [I, t])],
	[new Parent('F_el', 0), new Parent('σ', 0), new Parent('W_el_Kond', 0)]
);

let F_el = new Quantity(
	'F_el',
	'elektrische Kraft',
	'N',
	undefined,
	[new MulFormula('F_el', [E_el, Q])],
	[]
);

let H = new Quantity(
	'H',
	'magnetische Feldstärke',
	'A/m',
	undefined,
	[new DivFormula('H', I, c2$mcπ$mr)],
	[new Parent('B', 1)]
);

let B = new Quantity(
	'B',
	'magnetische Flussdichte',
	'T',
	undefined,
	[new MulFormula('B', [cμ_0, μ_r, I, n_Windungen$dl_Spule]), new MulFormula('B', [H, μ])],
	[new Parent('F_L', 0), new Parent('F_L', 1), new Parent('U_H', 0), new Parent('U_ind', 0), new Parent('φ', 0), new Parent('B$pc2', 0)]
);

let U_H = new Quantity(
	'U_H',
	'Hallspannung',
	'V',
	undefined,
	[new MulFormula('U_H', [v_D, B, d_Leiter])],
	[]
);

let F_L = new Quantity(
	'F_L',
	'Lorentzkraft',
	'N',
	undefined,
	[new MulFormula('F_L', [B, cq_e, v_D]), new MulFormula('F_L', [B, I, s_Leiter])],
	[]
);

let φ = new Quantity(
	'φ',
	'magnetischer Fluss',
	'Wb',
	undefined,
	[new MulFormula('φ', [B, A])],
	[]
);

let B$pc2 = new Quantity(
	'B$pc2',
	'B²',
	'',
	undefined,
	[new PowFormula('B$pc2', B, c2)],
	[new Parent('ρ_m', 1)]
);

let U$pc2 = new Quantity(
	'U$pc2',
	'U²',
	'',
	undefined,
	[new PowFormula('U$pc2', U, c2)],
	[new Parent('W_el_Kond', 1)]
);

let σ = new Quantity(
	'σ',
	'Flächenladungsdichte',
	'C/m²',
	undefined,
	[new DivFormula('σ', Q, A), new MulFormula('σ', [cε_0, ε_r, E_el])],
	[]
);

let F_z = new Quantity(
	'F_z',
	'Zentripetalkraft',
	'N',
	undefined,
	[new DivFormula('F_z', m$mv$pc2, r), new MulFormula('F_z', [m, ω$pc2, r]), new DivFormula('F_z', m$mc4$mcπ$pc2$mr, T$pc2)],
	[]
);

let F_kin = new Quantity(
	'F_kin',
	'kinetische Kraft',
	'N',
	undefined,
	[new MulFormula('F_kin', [m, a])],
	[new Parent('W_kin', 0)]
);

let F_D = new Quantity(
	'F_D',
	'Federkraft',
	'N',
	undefined,
	[new MulFormula('F_D', [c__1, D, s])],
	[]
);

let g = new Quantity(
	'g',
	'Ortsfaktor',
	'm/s²',
	undefined,
	[],
	[new Parent('W_pot', 0)]
);

let h = new Quantity(
	'h',
	'Höhe',
	'm',
	undefined,
	[],
	[new Parent('W_pot', 0)]
);

let W_pot = new Quantity(
	'W_pot',
	'potentielle Energie',
	'J',
	undefined,
	[new MulFormula('W_pot', [m, g, h])],
	[]
);

let W_kin = new Quantity(
	'W_kin',
	'kinetische Energie',
	'J',
	undefined,
	[new MulFormula('W_kin', [F_kin, s]), new MulFormula('W_kin', [c0_5, m, v$pc2])],
	[]
);

let W_spann = new Quantity(
	'W_spann',
	'Spannenergie',
	'J',
	undefined,
	[new MulFormula('W_spann', [c0_5, D, v$pc2])],
	[]
);

let E_el$pc2 = new Quantity(
	'E_el$pc2',
	'E_el²',
	'',
	undefined,
	[new PowFormula('E_el$pc2', E_el, c2)],
	[new Parent('ρ_el', 1)]
);

let W_el_Kond = new Quantity(
	'W_el_Kond',
	'elektrische Energie im Kondensator',
	'J',
	undefined,
	[new MulFormula('W_el_Kond', [c0_5, Q, U]), new MulFormula('W_el_Kond', [c0_5, C, U$pc2])],
	[]
);

let ρ_el = new Quantity(
	'ρ_el',
	'elektrische Energiedichte',
	'J/m³',
	undefined,
	[new MulFormula('ρ_el', [c0_5, cε_0, ε_r, E_el$pc2])],
	[new Parent('W_el', 0), new Parent('S', 0)]
);

let S = new Quantity(
	'S',
	'Bestrahlungsstärke',
	'W/m²',
	undefined,
	[new MulFormula('S', [ρ_el, c])],
	[new Parent('P', 1)]
);

let P = new Quantity(
	'P',
	'Leistung',
	'W',
	undefined,
	[new MulFormula('P', [U, I]), new MulFormula('P', [S, A])],
	[new Parent('W_el', 1)]
);

let W_el = new Quantity(
	'W_el',
	'elektrische Energie',
	'J',
	undefined,
	[new MulFormula('W_el', [ρ_el, V]), new MulFormula('W_el', [U, I, t]), new MulFormula('W_el', [P, t])],
	[]
);

let U_ind = new Quantity(
	'U_ind',
	'Induktionsspannung',
	'V',
	undefined,
	[new MulFormula('U_ind', [B, d_Leiter, v_D])],
	[]
);

let I$pc2 = new Quantity(
	'I$pc2',
	'I²',
	'',
	undefined,
	[new PowFormula('I$pc2', I, c2)],
	[new Parent('W_m', 0)]
);

let W_m = new Quantity(
	'W_m',
	'magnetische Feldenergie der Spule',
	'J',
	undefined,
	[new MulFormula('W_m', [c0_5, L, I$pc2])],
	[new Parent('ρ_m', 0)]
);

let ρ_m = new Quantity(
	'ρ_m',
	'magnetische Energiedichte',
	'J/m³',
	undefined,
	[new DivFormula('ρ_m', W_m, V), new DivFormula('ρ_m', B$pc2, c2$mcμ_0$mμ_r)],
	[]
);

let k = new Quantity(
	'k',
	'Wellenzahl',
	'',
	undefined,
	[new DivFormula('k', c2$mcπ, λ)],
	[new Parent('l_Wellenträger_1', 0), new Parent('c2$mk', 0), new Parent('k$mλ', 0), new Parent('k$ac0_5', 0)]
);

let λ$dc2 = new Quantity(
	'λ$dc2',
	'λ/2',
	'',
	undefined,
	[new DivFormula('λ$dc2', λ, c2)],
	[new Parent('l_Wellenträger_1', 0)]
);

let l_Wellenträger_1 = new Quantity(
	'l_Wellenträger_1',
	'Länge des Wellenträgers (beide Enden frei/fest)',
	'm',
	undefined,
	[new MulFormula('l_Wellenträger_1', [k, λ$dc2])],
	[]
);

let c2$mk = new Quantity(
	'c2$mk',
	'2*k',
	'',
	undefined,
	[new MulFormula('c2$mk', [c2, k])],
	[new Parent('c2$mk$ac__1', 0)]
);

let c2$mk$ac__1 = new Quantity(
	'c2$mk$ac__1',
	'2*k-1',
	'',
	undefined,
	[new AddFormula('c2$mk$ac__1', [c2$mk, c__1])],
	[new Parent('l_Wellenträger_2', 0)]
);

let λ$dc4 = new Quantity(
	'λ$dc4',
	'λ/4',
	'',
	undefined,
	[new DivFormula('λ$dc4', λ, c4)],
	[new Parent('l_Wellenträger_2', 0)]
);

let l_Wellenträger_2 = new Quantity(
	'l_Wellenträger_2',
	'Länge des Wellenträgers (ein Ende frei, ein Ende fest)',
	'm',
	undefined,
	[new MulFormula('l_Wellenträger_2', [c2$mk$ac__1, λ$dc4])],
	[]
);

let c_1 = new Quantity(
	'c_1',
	'Ausbreitungsgeschwindigkeit im dünneren Medium',
	'm/s',
	undefined,
	[],
	[new Parent('$sα_2$mc_1', 0)]
);

let c_2 = new Quantity(
	'c_2',
	'Ausbreitungsgeschwindigkeit im dichteren Medium',
	'm/s',
	undefined,
	[],
	[new Parent('$sα_2$mc_1', 1)]
);

let α_1 = new Quantity(
	'α_1',
	'Brechungswinkel im dünneren Medium',
	'°',
	undefined,
	[],
	[new Parent('$sα_1', 0)]
);

let α_2 = new Quantity(
	'α_2',
	'Brechungswinkel im dichteren Medium',
	'°',
	undefined,
	[],
	[new Parent('$sα_2', 0)]
);

let $sα_1 = new Quantity(
	'$sα_1',
	'sin(α_1)',
	'',
	undefined,
	[new SinFormula('$sα_1', α_1)],
	[new Parent('$sα_2$mc_1', 1)]
);

let $sα_2 = new Quantity(
	'$sα_2',
	'sin(α_2)',
	'',
	undefined,
	[new SinFormula('$sα_2', α_2)],
	[new Parent('$sα_2$mc_1', 0)]
);

let $sα_2$mc_1 = new Quantity(
	'$sα_2$mc_1',
	'sin(α_2)*c_1',
	'',
	undefined,
	[new MulFormula('$sα_2$mc_1', [$sα_2, c_1]), new MulFormula('$sα_2$mc_1', [$sα_1, c_2])],
	[]
);

let ϑ = new Quantity(
	'ϑ',
	'Austrittswinkel beim Spalt',
	'°',
	undefined,
	[],
	[new Parent('$sϑ', 0), new Parent('$tϑ', 0)]
);

let $sϑ = new Quantity(
	'$sϑ',
	'sin(ϑ)',
	'',
	undefined,
	[new SinFormula('$sϑ', ϑ)],
	[new Parent('δ', 0), new Parent('k$mλ', 1), new Parent('δ', 2)]
);

let $tϑ = new Quantity(
	'$tϑ',
	'tan(ϑ)',
	'',
	undefined,
	[new TanFormula('$tϑ', ϑ)],
	[new Parent('d_Maxima', 0)]
);

let g_Spalt = new Quantity(
	'g_Spalt',
	'Spaltmittenabstand',
	'm',
	undefined,
	[],
	[new Parent('δ', 0), new Parent('k$mλ', 1)]
);

let ϑ_Min_Einzelspalt = new Quantity(
	'ϑ_Min_Einzelspalt',
	'Winkel des k-ten Minimums beim Einzelspalt',
	'°',
	undefined,
	[],
	[new Parent('$sϑ_Min_Einzelspalt', 0)]
);

let $sϑ_Min_Einzelspalt = new Quantity(
	'$sϑ_Min_Einzelspalt',
	'sin(ϑ_Min_Einzelspalt)',
	'',
	undefined,
	[new SinFormula('$sϑ_Min_Einzelspalt', ϑ_Min_Einzelspalt)],
	[new Parent('k$mλ', 2)]
);

let b_Einzelspalt = new Quantity(
	'b_Einzelspalt',
	'Breite des Einzelspalts',
	'm',
	undefined,
	[],
	[new Parent('δ', 2), new Parent('k$mλ', 2), new Parent('$bok$ac0_5$bc$mλ', 1)]
);

let k$mλ = new Quantity(
	'k$mλ',
	'k*λ',
	'',
	undefined,
	[new MulFormula('k$mλ', [k, λ]), new MulFormula('k$mλ', [$sϑ, g_Spalt]), new MulFormula('k$mλ', [$sϑ_Min_Einzelspalt, b_Einzelspalt])],
	[new Parent('δ', 1)]
);

let n_Spalten = new Quantity(
	'n_Spalten',
	'Spaltenzahl beim Gitter',
	'',
	undefined,
	[],
	[new Parent('λ$dn_Spalten', 0)]
);

let λ$dn_Spalten = new Quantity(
	'λ$dn_Spalten',
	'λ/n_Spalten',
	'',
	undefined,
	[new DivFormula('λ$dn_Spalten', λ, n_Spalten)],
	[new Parent('δ', 1)]
);

let δ = new Quantity(
	'δ',
	'Gangunterschied',
	'm',
	undefined,
	[new MulFormula('δ', [$sϑ, g_Spalt]), new AddFormula('δ', [k$mλ, λ$dn_Spalten]), new MulFormula('δ', [$sϑ, b_Einzelspalt])],
	[]
);

let a_Bild = new Quantity(
	'a_Bild',
	'Abstand der Abbildung zur Blende',
	'm',
	undefined,
	[],
	[new Parent('d_Maxima', 0)]
);

let d_Maxima = new Quantity(
	'd_Maxima',
	'Abstand zweier Maxima',
	'm',
	undefined,
	[new MulFormula('d_Maxima', [$tϑ, a_Bild])],
	[]
);

let ϑ_Max_Einzelspalt = new Quantity(
	'ϑ_Max_Einzelspalt',
	'Winkel des k-ten Maximums beim Einzelspalt',
	'°',
	undefined,
	[],
	[new Parent('$sϑ_Max_Einzelspalt', 0)]
);

let $sϑ_Max_Einzelspalt = new Quantity(
	'$sϑ_Max_Einzelspalt',
	'sin(ϑ_Max_Einzelspalt)',
	'',
	undefined,
	[new SinFormula('$sϑ_Max_Einzelspalt', ϑ_Max_Einzelspalt)],
	[new Parent('$bok$ac0_5$bc$mλ', 1)]
);

let k$ac0_5 = new Quantity(
	'k$ac0_5',
	'k+0.5',
	'',
	undefined,
	[new AddFormula('k$ac0_5', [k, c0_5])],
	[new Parent('$bok$ac0_5$bc$mλ', 0)]
);

let $bok$ac0_5$bc$mλ = new Quantity(
	'$bok$ac0_5$bc$mλ',
	'(k+0.5)*λ',
	'',
	undefined,
	[new MulFormula('$bok$ac0_5$bc$mλ', [k$ac0_5, λ]), new MulFormula('$bok$ac0_5$bc$mλ', [$sϑ_Max_Einzelspalt, b_Einzelspalt])],
	[]
);
