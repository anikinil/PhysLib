
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
    [new Parent('ω', 0), new Parent('c_1$mc0_5$ma$m$ot$p2$c', 0), new Parent('W_kin', 1), new Parent('W_spann', 0), new Parent('W_el_Kond', 0), new Parent('W_el_Kond', 1), new Parent('F_W', 0), new Parent('ρ_el', 1), new Parent('W_m', 0)]
);

let c1 = new Quantity(
    'c1',
    '1',
    '',
    1,
    [],
    [new Parent('cε_0', 0)]
);

let c_1 = new Quantity(
    'c_1',
    '-1',
    '',
    -1,
    [],
    [new Parent('F_D', 0), new Parent('c_1$mc0_5$ma$m$ot$p2$c', 0), new Parent('c_1$mR$mt', 0)]
);

let c2 = new Quantity(
    'c2',
    '2',
    '',
    2,
    [],
    [new Parent('cc_0$pc2', 0), new Parent('c2$mcπ', 0), new Parent('ω', 1), new Parent('v$pc2', 0), new Parent('t$p2', 0), new Parent('U$pc2', 0), new Parent('c2$mcπ$mr', 0), new Parent('ω$pc2', 0), new Parent('T$pc2', 0), new Parent('cπ$pc2', 0), new Parent('E_el$pc2', 0), new Parent('n_Windungen$pc2', 0), new Parent('I$pc2', 0), new Parent('c2$mcμ_0$mμ_r', 0), new Parent('B$pc2', 0)]
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
	[new Parent('m$mc4$mcπ$pc2$mr', 0)]
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
    'Lichtgeschwindigkeit',
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
    [new Parent('cμ_0$m$occ_0$pc2$c', 0), new Parent('B', 0), new Parent('μ_r', 0), new Parent('L', 0), new Parent('c2$mcμ_0$mμ_r', 0)]
);

let cc_0$pc2 = new Quantity(
    'cc_0$pc2',
    'c_0²',
    '',
    89875517873681764n,
    [new PowFormula('cc_0$pc2', cc_0, c2)],
    [new Parent('cμ_0$m$occ_0$pc2$c', 0)]
);

let cμ_0$m$occ_0$pc2$c = new Quantity(
    'cμ_0$m$occ_0$pc2$c',
    'μ_0*c_0²',
    '',
    11294090673729700118077917968n,
    [new MulFormula('cμ_0$m$occ_0$pc2c', [cμ_0, cc_0$pc2])],
    [new Parent('cε_0', 0)]
);

let cε_0 = new Quantity(
    'cε_0',
    'ε_0',
    'As/Vm',
    0.0000000000088541878128,
    [new DivFormula('cε_0', c1, cμ_0$m$occ_0$pc2$c)],
    [new Parent('C', 0), new Parent('σ', 1), new Parent('ρ_el', 1)]
);

let t = new Quantity(
	't',
	'Zeit',
	's',
	undefined,
	[],
	[new Parent('s', 0), new Parent('a', 0), new Parent('I', 0), new Parent('n_Perioden', 0), new Parent('c', 0), new Parent('φ_Phase', 0), new Parent('t$p2', 0), new Parent('v_0$mt', 0), new Parent('W_el', 0), new Parent('W_el', 1), new Parent('v_D', 0), new Parent('c_1$mR$mt', 0)]
);

let t$p2 = new Quantity(
	't$p2',
	't²',
	'',
	undefined,
	[new PowFormula('t$p2', t, c2)],
	[new Parent('c_1$mc0_5$ma$m$ot$p2$c', 0)]
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
	[new Parent('F_kin', 0), new Parent('c_1$mc0_5$ma$m$ot$p2$c', 0)]
);

let c_1$mc0_5$ma$m$ot$p2$c = new Quantity(
	'c_1$mc0_5$ma$m$ot$p2$c',
	'0.5*a*t²',
	'',
	undefined,
	[new MulFormula('c_1$mc0_5$ma$m$ot$p2$c', [c_1, c0_5, a, t$p2])],
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
	[new Parent('m', 0), new Parent('ρ_el', 0), new Parent('ρ_m', 0)]
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
	[new MulFormula('s', [v, t]), new AddFormula('s', [c_1$mc0_5$ma$m$ot$p2$c, v_0$mt])],
	[new Parent('c', 0), new Parent('F_D', 0), new Parent('W_kin', 0), new Parent('v_D', 0)]
);

let s_0 = new Quantity(
	's_0',
	'Anfangsstrecke',
	'm',
	undefined,
	[],
	[]
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
	[new Parent('A$dd_Kond', 0), new Parent('σ', 0), new Parent('F_W', 0), new Parent('φ', 0), new Parent('A$dl_Spule', 0)]
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
	[new Parent('C', 0), new Parent('σ', 1), new Parent('ρ_el', 1)]
);

let Q = new Quantity(
	'Q',
	'Ladung',
	'As',
	undefined,
	[],
	[new Parent('I', 0), new Parent('C', 1), new Parent('σ', 0), new Parent('W_el_Kond', 0), new Parent('E_el', 0)]
);

let R = new Quantity(
	'R',
	'Widerstand',
	'Ω',
	undefined,
	[],
	[new Parent('U', 1), new Parent('c_1$mR$mt', 0)]
);

let I = new Quantity(
	'I',
	'Stromstärke',
	'Ω',
	undefined,
	[new DivFormula('I', Q, t)],
	[new Parent('U', 1), new Parent('P', 0), new Parent('W_el', 0), new Parent('H', 0), new Parent('B', 0), new Parent('F_L', 1), new Parent('I$pc2', 0)]
);

let H = new Quantity(
	'H',
	'magnetische Feldstärke',
	'A/m',
	undefined,
	[new DivFormula('H', I, c2$mcπ$mr)],
	[new Parent('μ', 0)]
);

let T = new Quantity(
	'T',
	'Periodendauer',
	's',
	undefined,
	[],
	[new Parent('n_Perioden', 0), new Parent('ω', 2), new Parent('v_Bahn', 1), new Parent('T$pc2', 0)]
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

let n_Windungen$dl_Spule = new Quantity(
	'n_Windungen$dl_Spule',
	'n_Windungen/l_Spule',
	'',
	undefined,
	[new DivFormula('n_Windungen$dl_Spule', n_Windungen, l_Spule)],
	[new Parent('B', 0)]
);

let B = new Quantity(
	'B',
	'magnetische Flussdichte',
	'T',
	undefined,
	[new MulFormula('B', [cμ_0, μ_r, I, n_Windungen$dl_Spule])],
	[new Parent('μ', 0), new Parent('F_L', 0), new Parent('F_L', 1), new Parent('U_H', 0), new Parent('U_ind', 0), new Parent('φ', 0), new Parent('B$pc2', 0)]
);

let φ = new Quantity(
	'φ',
	'magnetischer Fluss',
	'Wb',
	undefined,
	[new MulFormula('φ', [B, A])],
	[]
);

let d_Leiter = new Quantity(
	'd_Leiter',
	'Breite des Leiterstückes',
	'm',
	undefined,
	[],
	[new Parent('U_H', 0), new Parent('U_ind', 0)]
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

let μ = new Quantity(
	'μ',
	'Permeabilität',
	'Vs/Am',
	undefined,
	[new DivFormula('μ', B, H)],
	[new Parent('μ_r', 0)]
);

let μ_r = new Quantity(
	'μ_r',
	'Permeabilitätszahl',
	'Vs/Am',
	undefined,
	[new DivFormula('μ_r', μ, cμ_0)],
	[new Parent('B', 0), new Parent('L', 0), new Parent('c2$mcμ_0$mμ_r', 0)]
);

let λ = new Quantity(
	'λ',
	'Wellenlänge',
	'm',
	undefined,
	[],
	[new Parent('f', 0)]
);

let c = new Quantity(
	'c',
	'Ausbreitungsgeschwindigkeit',
	'm/s',
	undefined,
	[new DivFormula('c', s, t)],
	[new Parent('f', 0)]
);

let f = new Quantity(
	'f',
	'Frequenz',
	'Hz',
	undefined,
	[new DivFormula('f', c, λ)],
	[new Parent('ω', 1)]
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

let c2$mcπ = new Quantity(
	'c2$mcπ',
	'2π',
	'',
	2 * Math.PI,
	[new MulFormula('c2$mcπ', [c2, cπ])],
	[new Parent('ω', 2)]
);

let ω = new Quantity(
	'ω',
	'Winkelgeschwindigkeit',
	'rad/s',
	undefined,
	[new PowFormula('ω', D$dm, c0_5), new MulFormula('ω', [c2, cπ, f]), new DivFormula('ω', c2$mcπ, T)],
	[new Parent('v_Bahn', 0), new Parent('φ_Phase', 0), new Parent('ω$pc2', 0)]
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

let F_el = new Quantity(
	'F_el',
	'elektrische Kraft',
	'N',
	undefined,
	[],
	[new Parent('E_el', 0)]
);

let E_el = new Quantity(
	'E_el',
	'elektrische Feldstärke',
	'N/C oder V/m',
	undefined,
	[new DivFormula('E_el', F_el, Q)],
	[new Parent('U', 0), new Parent('σ', 1), new Parent('E_el$pc2', 0)]
);

let U = new Quantity(
	'U',
	'Spannung',
	'V',
	undefined,
	[new MulFormula('U', [E_el, d_Kond]), new MulFormula('U', [R, I])],
	[new Parent('C', 1), new Parent('P', 0), new Parent('W_el', 0), new Parent('W_el_Kond', 0), new Parent('U$pc2', 0)]
);

let U$pc2 = new Quantity(
	'U$pc2',
	'U²',
	'',
	undefined,
	[new PowFormula('U$pc2', U, c2)],
	[new Parent('W_el_Kond', 1)]
);

let C = new Quantity(
	'C',
	'Kapazität',
	'F',
	undefined,
	[new MulFormula('C', [cε_0, ε_r, A$dd_Kond]), new DivFormula('C', Q, U)],
	[new Parent('W_el_Kond', 1)]
);

let P = new Quantity(
	'P',
	'Leistung',
	'W',
	undefined,
	[new MulFormula('P', [U, I])],
	[new Parent('W_el', 1)]
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
	[new MulFormula('F_D', [c_1, D, s])],
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

let W_el = new Quantity(
	'W_el',
	'elektrische Energie',
	'J',
	undefined,
	[new MulFormula('W_el', [U, I, t]), new MulFormula('W_el', [P, t])],
	[new Parent('ρ_el', 0)]
);

let E_el$pc2 = new Quantity(
	'E_el$pc2',
	'E_el²',
	'',
	undefined,
	[new PowFormula('E_el$pc2', E_el, c2)],
	[new Parent('ρ_el', 1)]
);

let ρ_el = new Quantity(
	'ρ_el',
	'elektrische Energiedichte',
	'J/m³',
	undefined,
	[new DivFormula('ρ_el', W_el, V), new MulFormula('ρ_el', [c0_5, cε_0, ε_r, E_el$pc2])],
	[]
);

let W_el_Kond = new Quantity(
	'W_el_Kond',
	'elektrische Energie im Kondensator',
	'J',
	undefined,
	[new MulFormula('W_el_Kond', [c0_5, Q, U]), new MulFormula('W_el_Kond', [c0_5, C, U$pc2])],
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
	[new Parent('W_m', 0), new Parent('$oc_1$mR$mt$$c$dL', 0)]
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

let c2$mcμ_0$mμ_r = new Quantity(
	'c2$mcμ_0$mμ_r',
	'2*μ_0*μ_r',
	'',
	undefined,
	[new MulFormula('c2$mcμ_0$mμ_r', [c2, cμ_0, μ_r])],
	[new Parent('ρ_m', 1)]
);

let B$pc2 = new Quantity(
	'B$pc2',
	'B²',
	'',
	undefined,
	[new PowFormula('B$pc2', B, c2)],
	[new Parent('ρ_m', 1)]
);
