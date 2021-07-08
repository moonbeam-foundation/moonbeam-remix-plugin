(this['webpackJsonpmoonbeam-remix-plugin'] = this['webpackJsonpmoonbeam-remix-plugin'] || []).push([
	[0],
	{
		274: function (e, t, a) {},
		289: function (e, t) {},
		312: function (e, t) {},
		314: function (e, t) {},
		404: function (e, t) {},
		406: function (e, t) {},
		438: function (e, t) {},
		443: function (e, t) {},
		445: function (e, t) {},
		452: function (e, t) {},
		464: function (e, t) {},
		625: function (e, t, a) {},
		627: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(1),
				s = a(0),
				c = a.n(s),
				r = a(41),
				o = a.n(r),
				i = (a(274), a(13)),
				l = a.n(i),
				u = a(150),
				d = a(23),
				b = a(18),
				j = a(640),
				p = a(636),
				m = a(637),
				h = a(635),
				f = a(639),
				x = a(638),
				O = a(42),
				y = a.n(O),
				g = a(11),
				v = a(14),
				w = a(149),
				k = a.n(w),
				N = a(262),
				C = a(263),
				S = a.n(C),
				M = [
					{
						constant: !0,
						inputs: [],
						name: 'name',
						outputs: [{ name: '', type: 'string' }],
						payable: !1,
						stateMutability: 'view',
						type: 'function',
					},
					{
						constant: !1,
						inputs: [
							{ name: '_spender', type: 'address' },
							{ name: '_value', type: 'uint256' },
						],
						name: 'approve',
						outputs: [{ name: '', type: 'bool' }],
						payable: !1,
						stateMutability: 'nonpayable',
						type: 'function',
					},
					{
						constant: !0,
						inputs: [],
						name: 'totalSupply',
						outputs: [{ name: '', type: 'uint256' }],
						payable: !1,
						stateMutability: 'view',
						type: 'function',
					},
					{
						constant: !1,
						inputs: [
							{ name: '_from', type: 'address' },
							{ name: '_to', type: 'address' },
							{ name: '_value', type: 'uint256' },
						],
						name: 'transferFrom',
						outputs: [{ name: '', type: 'bool' }],
						payable: !1,
						stateMutability: 'nonpayable',
						type: 'function',
					},
					{
						constant: !0,
						inputs: [],
						name: 'decimals',
						outputs: [{ name: '', type: 'uint8' }],
						payable: !1,
						stateMutability: 'view',
						type: 'function',
					},
					{
						constant: !0,
						inputs: [{ name: '_owner', type: 'address' }],
						name: 'balanceOf',
						outputs: [{ name: 'balance', type: 'uint256' }],
						payable: !1,
						stateMutability: 'view',
						type: 'function',
					},
					{
						constant: !0,
						inputs: [],
						name: 'symbol',
						outputs: [{ name: '', type: 'string' }],
						payable: !1,
						stateMutability: 'view',
						type: 'function',
					},
					{
						constant: !1,
						inputs: [
							{ name: '_to', type: 'address' },
							{ name: '_value', type: 'uint256' },
						],
						name: 'transfer',
						outputs: [{ name: '', type: 'bool' }],
						payable: !1,
						stateMutability: 'nonpayable',
						type: 'function',
					},
					{
						constant: !0,
						inputs: [
							{ name: '_owner', type: 'address' },
							{ name: '_spender', type: 'address' },
						],
						name: 'allowance',
						outputs: [{ name: '', type: 'uint256' }],
						payable: !1,
						stateMutability: 'view',
						type: 'function',
					},
					{ payable: !0, stateMutability: 'payable', type: 'fallback' },
					{
						anonymous: !1,
						inputs: [
							{ indexed: !0, name: 'owner', type: 'address' },
							{ indexed: !0, name: 'spender', type: 'address' },
							{ indexed: !1, name: 'value', type: 'uint256' },
						],
						name: 'Approval',
						type: 'event',
					},
					{
						anonymous: !1,
						inputs: [
							{ indexed: !0, name: 'from', type: 'address' },
							{ indexed: !0, name: 'to', type: 'address' },
							{ indexed: !1, name: 'value', type: 'uint256' },
						],
						name: 'Transfer',
						type: 'event',
					},
				],
				A = { provider: 'https://rpc.testnet.moonbeam.network' },
				B = { 1287: { name: 'Moonbase Alpha' }, 1281: { name: 'Moonbeam Dev' } },
				E = function (e) {
					return B[e] ? B[e].name : 'Not Moonbeam';
				},
				z = M,
				_ = (function () {
					function e(t) {
						Object(g.a)(this, e),
							(this.isConnected = !1),
							(this.isMoonbeamNetwork = !1),
							(this.web3 = void 0),
							(this.contracts = { erc20: null }),
							(this.web3 = new k.a(t.provider)),
							(this.contracts.erc20 = new this.web3.eth.Contract(z));
					}
					return (
						Object(v.a)(e, [
							{
								key: 'getTotalBalance',
								value: (function () {
									var e = Object(d.a)(
										l.a.mark(function e(t) {
											return l.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return e.abrupt('return', this.web3.eth.getBalance(t));
															case 1:
															case 'end':
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function (t) {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: 'connectMetaMask',
								value: (function () {
									var e = Object(d.a)(
										l.a.mark(function e(t, a, n) {
											var s,
												c,
												r,
												o,
												i = this;
											return l.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (!window.ethereum) {
																	e.next = 27;
																	break;
																}
																return console.log('Last updated: 04/27/21'), (e.next = 4), S()({ mustBeMetaMask: !0 });
															case 4:
																if (((s = e.sent), console.log('PROVIDER', s), !s || !s.isMetaMask)) {
																	e.next = 26;
																	break;
																}
																return (
																	(e.prev = 7),
																	(c = new k.a(s)),
																	(this.web3 = c),
																	(e.next = 12),
																	s.request({ method: 'eth_requestAccounts' })
																);
															case 12:
																if (((r = e.sent), !n)) {
																	e.next = 16;
																	break;
																}
																return (
																	(e.next = 16),
																	s.request({
																		method: 'wallet_addEthereumChain',
																		params: [
																			{
																				chainId: '0x507',
																				chainName: 'Moonbase Alpha',
																				nativeCurrency: { name: 'DEV', symbol: 'DEV', decimals: 18 },
																				rpcUrls: ['https://rpc.testnet.moonbeam.network'],
																				blockExplorerUrls: ['https://moonbase-blockscout.testnet.moonbeam.network/'],
																			},
																		],
																	})
																);
															case 16:
																t &&
																	(t(r),
																	s.on(
																		'accountsChanged',
																		(function () {
																			var e = Object(d.a)(
																				l.a.mark(function e(a) {
																					var n;
																					return l.a.wrap(function (e) {
																						for (;;)
																							switch ((e.prev = e.next)) {
																								case 0:
																									if (!(a.length > 0)) {
																										e.next = 8;
																										break;
																									}
																									return (e.next = 3), s.request({ method: 'eth_accounts' });
																								case 3:
																									(n = e.sent), console.log('accountsChanged', n), t(n), (e.next = 9);
																									break;
																								case 8:
																									window.location.reload();
																								case 9:
																								case 'end':
																									return e.stop();
																							}
																					}, e);
																				})
																			);
																			return function (t) {
																				return e.apply(this, arguments);
																			};
																		})()
																	),
																	s.on(
																		'chainChanged',
																		(function () {
																			var e = Object(d.a)(
																				l.a.mark(function e(n) {
																					return l.a.wrap(function (e) {
																						for (;;)
																							switch ((e.prev = e.next)) {
																								case 0:
																									return (
																										console.log('chainChanged', n, Object(N.hexToNumber)(n)),
																										a(Number(n)),
																										(e.next = 4),
																										i.connectMetaMask(t, a)
																									);
																								case 4:
																								case 'end':
																									return e.stop();
																							}
																					}, e);
																				})
																			);
																			return function (t) {
																				return e.apply(this, arguments);
																			};
																		})()
																	)),
																	(this.isConnected = !0),
																	(e.next = 24);
																break;
															case 20:
																if (((e.prev = 20), (e.t0 = e.catch(7)), 4001 === e.t0.code)) {
																	e.next = 24;
																	break;
																}
																throw new Error(e.t0.message);
															case 24:
																e.next = 27;
																break;
															case 26:
																throw new Error('Other ethereum wallet did not support.');
															case 27:
																return (e.next = 29), this.web3.eth.net.getId();
															case 29:
																return (
																	(o = e.sent),
																	B[o] && (this.isMoonbeamNetwork = !0),
																	e.abrupt('return', { isConnected: this.isConnected, networkId: o })
																);
															case 32:
															case 'end':
																return e.stop();
														}
												},
												e,
												this,
												[[7, 20]]
											);
										})
									);
									return function (t, a, n) {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: 'getAccounts',
								value: (function () {
									var e = Object(d.a)(
										l.a.mark(function e() {
											return l.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return e.abrupt('return', this.web3.eth.getAccounts());
															case 1:
															case 'end':
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: 'sendTransaction',
								value: (function () {
									var e = Object(d.a)(
										l.a.mark(function e(t, a) {
											return l.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (e.prev = 0), (e.next = 3), this.web3.eth.sendTransaction(t);
															case 3:
																return e.abrupt('return', e.sent);
															case 6:
																return (
																	(e.prev = 6),
																	(e.t0 = e.catch(0)),
																	console.log(Object.keys(e.t0)),
																	console.log('he', e.t0, 'ho'),
																	console.log('he', e.t0.message, 'ho'),
																	a(e.t0.message),
																	e.abrupt('return', void 0)
																);
															case 13:
															case 'end':
																return e.stop();
														}
												},
												e,
												this,
												[[0, 6]]
											);
										})
									);
									return function (t, a) {
										return e.apply(this, arguments);
									};
								})(),
							},
						]),
						e
					);
				})(),
				T = a(642),
				J = a(644),
				I = a(147),
				L = a(264),
				D = function (e) {
					var t = c.a.useState([]),
						a = Object(b.a)(t, 2),
						s = a[0],
						r = a[1],
						o = e.abi,
						i = e.setArgs;
					return (
						c.a.useEffect(
							function () {
								r(o && o.inputs ? o.inputs : []);
							},
							[o]
						),
						Object(n.jsx)(j.a, {
							className: 'Method',
							children: (function () {
								var e = s.map(function (e, t) {
									return Object(n.jsxs)(
										c.a.Fragment,
										{
											children: [
												Object(n.jsx)(j.a.Text, {
													className: 'text-muted',
													children: Object(n.jsx)('small', { children: e.name }),
												}),
												Object(n.jsx)(j.a.Control, {
													type: 'text',
													size: 'sm',
													name: e.name,
													placeholder: e.type,
													onChange: function (e) {
														'[' === e.target.value[0]
															? i(e.target.name, JSON.parse(e.target.value))
															: i(e.target.name, e.target.value);
													},
												}),
											],
										},
										t.toString()
									);
								});
								return Object(n.jsx)(j.a.Group, { children: e });
							})(),
						})
					);
				};
			function K(e) {
				var t = [];
				return (
					e.forEach(function (e) {
						'function' === e.type && t.push(e);
					}),
					t
				);
			}
			function P(e, t) {
				var a,
					n = [];
				e &&
					(null === (a = e.inputs) ||
						void 0 === a ||
						a.forEach(function (e) {
							n.push(t[e.name]);
						}));
				return n;
			}
			var F = function (e) {
					var t = c.a.useState(null),
						a = Object(b.a)(t, 2),
						s = a[0],
						r = a[1],
						o = c.a.useState(''),
						i = Object(b.a)(o, 2),
						u = i[0],
						m = i[1],
						f = c.a.useState(''),
						x = Object(b.a)(f, 2),
						O = x[0],
						g = x[1],
						v = c.a.useState({ fileName: '', data: {} }),
						w = Object(b.a)(v, 2),
						k = w[0],
						N = w[1],
						C = c.a.useState(''),
						S = Object(b.a)(C, 2),
						M = S[0],
						A = S[1],
						B = c.a.useState(null),
						E = Object(b.a)(B, 2),
						z = E[0],
						_ = E[1],
						F = c.a.useState({}),
						G = Object(b.a)(F, 2),
						R = G[0],
						H = G[1],
						q = c.a.useState(''),
						U = Object(b.a)(q, 2),
						V = U[0],
						W = U[1],
						Q = c.a.useState([]),
						X = Object(b.a)(Q, 2),
						Y = X[0],
						Z = X[1],
						$ = c.a.useState(!1),
						ee = Object(b.a)($, 2),
						te = ee[0],
						ae = ee[1],
						ne = c.a.useState(''),
						se = Object(b.a)(ne, 2),
						ce = se[0],
						re = se[1],
						oe = e.moonbeamLib,
						ie = e.busy,
						le = e.setBusy,
						ue = e.addNewContract,
						de = e.setSelected,
						be = e.updateBalance;
					function je() {
						return pe.apply(this, arguments);
					}
					function pe() {
						return (pe = Object(d.a)(
							l.a.mark(function e() {
								return l.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													le(!0),
													console.log('COMPILE'),
													g('fa-spin'),
													(e.next = 5),
													null === s || void 0 === s ? void 0 : s.call('solidity', 'compile', u)
												);
											case 5:
												g(''), le(!1);
											case 7:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						)).apply(this, arguments);
					}
					function me(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							a = t ? t[e].abi : k.data[e].abi;
						A(e),
							_(null),
							H({}),
							a.forEach(function (e) {
								if ('constructor' === e.type) {
									var t,
										a = {};
									null === (t = e.inputs) ||
										void 0 === t ||
										t.forEach(function (e) {
											a[e.name] = '';
										}),
										H(a),
										_(e);
								}
							}),
							de({ name: e, address: '', abi: K(a) });
					}
					function he() {
						return (he = Object(d.a)(
							l.a.mark(function e() {
								var t, a, n, s, c, r;
								return l.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (ie || !oe.isConnected || !oe.isMoonbeamNetwork) {
														e.next = 25;
														break;
													}
													return (
														W(''),
														(e.prev = 2),
														(t = new oe.web3.eth.Contract(JSON.parse(JSON.stringify(k.data[M].abi)))),
														(e.next = 6),
														oe.getAccounts()
													);
												case 6:
													return (
														(a = e.sent),
														console.log('constructor', z, 'args', R),
														(n = P(z, R)),
														(s = {
															from: a[0],
															data: t
																.deploy({ data: '0x'.concat(k.data[M].evm.bytecode.object), arguments: n })
																.encodeABI(),
															gasPrice: 1e9,
														}),
														(e.next = 12),
														oe.sendTransaction(s, function (e) {
															console.log('errmsg', e), Z([{ message: e, severity: 'error' }]);
														})
													);
												case 12:
													(c = e.sent) &&
														c.contractAddress &&
														(W(c.contractAddress), ue({ name: M, address: c.contractAddress, abi: K(k.data[M].abi) })),
														be(a[0]),
														(e.next = 25);
													break;
												case 17:
													(e.prev = 17),
														(e.t0 = e.catch(2)),
														console.error(e.t0),
														console.log(' e.message', '+', e.t0.message, '+'),
														console.log(' e.message', '+', e.t0, '+'),
														(r =
															e.t0.message && 'param.map is not a function' === e.t0.message
																? 'Constructor Input Missing'
																: e.t0.message
																? e.t0.message
																: e.t0.toString()),
														console.log(' [object Object] ' === r, '[object Object]' === r),
														'[object Object]' !== r &&
															(console.log('seterror'),
															Z([{ message: r, severity: e.t0.severity ? e.t0.severity : 'error' }]));
												case 25:
												case 'end':
													return e.stop();
											}
									},
									e,
									null,
									[[2, 17]]
								);
							})
						)).apply(this, arguments);
					}
					function fe() {
						var e = k.data,
							t = k.fileName.split('/')[k.fileName.split('/').length - 1],
							a = Object.keys(e).map(function (e) {
								return Object(n.jsx)('option', { value: e, children: ''.concat(e, ' - ').concat(t) }, e);
							});
						return Object(n.jsx)(j.a, {
							children: Object(n.jsxs)(j.a.Group, {
								children: [
									Object(n.jsxs)(j.a.Text, {
										className: 'text-muted',
										children: [
											Object(n.jsx)('small', { children: 'CONTRACT' }),
											Object(n.jsx)(h.a, {
												variant: 'link',
												size: 'sm',
												className: 'mt-0 pt-0 float-right',
												disabled: !k.data[M],
												onClick: function () {
													k.data[M] && y()(JSON.stringify(k.data[M].abi, null, 4));
												},
												children: Object(n.jsx)('i', { className: 'far fa-copy' }),
											}),
											Object(n.jsx)('div', { style: { fontSize: '0.9em' }, className: 'float-right', children: 'ABI' }),
											Object(n.jsx)(h.a, {
												variant: 'link',
												size: 'sm',
												className: 'mt-0 pt-0 float-right',
												disabled: !k.data[M],
												onClick: function () {
													k.data[M] && y()(JSON.stringify(k.data[M].evm.bytecode, null, 4));
												},
												children: Object(n.jsx)('i', { className: 'far fa-copy' }),
											}),
											Object(n.jsx)('div', {
												style: { fontSize: '0.9em' },
												className: 'float-right',
												children: 'ByteCode',
											}),
										],
									}),
									Object(n.jsx)(p.a, {
										children: Object(n.jsx)(j.a.Control, {
											as: 'select',
											value: M,
											onChange: function (e) {
												me(e.target.value);
											},
											className: 'form-control custom-select',
											children: a,
										}),
									}),
								],
							}),
						});
					}
					return (
						c.a.useEffect(function () {
							function e() {
								return (e = Object(d.a)(
									l.a.mark(function e() {
										var t;
										return l.a.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (t = Object(L.createClient)(new I.PluginClient())), (e.next = 3), t.onload();
														case 3:
															return (
																t.on('solidity', 'compilationFinished', function (e, t, a, n) {
																	console.log('ok', a),
																		re(a),
																		n.errors &&
																			(console.log('data.errors', n.errors),
																			Z(
																				n.errors.map(function (e) {
																					return {
																						message: e.formattedMessage ? e.formattedMessage : JSON.stringify(e),
																						severity: e.severity,
																					};
																				})
																			)),
																		n.contracts[e] && N({ fileName: e, data: n.contracts[e] }),
																		me(
																			Object.keys(n.contracts[e]).length > 0 ? Object.keys(n.contracts[e])[0] : '',
																			n.contracts[e]
																		);
																}),
																t.on('fileManager', 'currentFileChanged', function (e) {
																	m(e);
																}),
																t.on('fileManager', 'fileSaved', function (e) {
																	te && je();
																}),
																(e.prev = 6),
																(e.t0 = m),
																(e.next = 10),
																t.call('fileManager', 'getCurrentFile')
															);
														case 10:
															(e.t1 = e.sent), (0, e.t0)(e.t1), (e.next = 17);
															break;
														case 14:
															(e.prev = 14),
																(e.t2 = e.catch(6)),
																console.log('Error from IDE : No such file or directory No file selected');
														case 17:
															r(t);
														case 18:
														case 'end':
															return e.stop();
													}
											},
											e,
											null,
											[[6, 14]]
										);
									})
								)).apply(this, arguments);
							}
							!(function () {
								e.apply(this, arguments);
							})();
						}, []),
						Object(n.jsxs)('div', {
							className: 'Compiler',
							children: [
								Object(n.jsxs)(j.a.Group, {
									children: [
										Object(n.jsx)(p.a, {
											className: 'mb-3',
											children: Object(n.jsx)(j.a.Check, {
												type: 'checkbox',
												label: 'Auto-Compile ('.concat(ce, ')'),
												onClick: Object(d.a)(
													l.a.mark(function e() {
														return l.a.wrap(function (e) {
															for (;;)
																switch ((e.prev = e.next)) {
																	case 0:
																		return (e.next = 2), ae(!te);
																	case 2:
																	case 'end':
																		return e.stop();
																}
														}, e);
													})
												),
											}),
										}),
										Object(n.jsxs)(h.a, {
											variant: 'primary',
											onClick: Object(d.a)(
												l.a.mark(function e() {
													return l.a.wrap(function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return (e.next = 2), je();
																case 2:
																case 'end':
																	return e.stop();
															}
													}, e);
												})
											),
											block: !0,
											disabled: '' === u || '' !== O,
											children: [
												Object(n.jsx)('i', { className: 'fas fa-sync '.concat(O), style: { marginRight: '0.3em' } }),
												Object(n.jsxs)('span', {
													children: [
														'Compile\xa0',
														''.concat('' === u ? '<no file selected>' : u.split('/')[u.split('/').length - 1]),
													],
												}),
											],
										}),
									],
								}),
								Object(n.jsx)('hr', {}),
								Object(n.jsx)(fe, {}),
								Object(n.jsxs)(T.a, {
									children: [
										Object(n.jsx)(T.a.Header, { className: 'p-2', children: 'Deploy' }),
										Object(n.jsxs)(T.a.Body, {
											className: 'py-1 px-2',
											children: [
												Object(n.jsx)(D, {
													abi: z,
													setArgs: function (e, t) {
														R[e] = t;
													},
												}),
												Y.map(function (e, t) {
													return (
														console.log('error', e),
														Object(n.jsx)(
															J.a,
															{
																variant: 'error' === e.severity ? 'danger' : 'warning',
																onClose: function () {
																	return Z(
																		Y.filter(function (e, a) {
																			return a !== t;
																		})
																	);
																},
																dismissible: !0,
																hidden: '' === e.message,
																children: Object(n.jsx)('small', { children: e.message }),
															},
															e.message
														)
													);
												}),
												Object(n.jsx)(p.a, {
													className: 'mb-3',
													children: Object(n.jsx)(p.a.Append, {
														children: Object(n.jsx)(h.a, {
															variant: 'warning',
															block: !0,
															size: 'sm',
															disabled: ie || !(oe && oe.isConnected && oe.isMoonbeamNetwork) || '' === u,
															onClick: function () {
																return he.apply(this, arguments);
															},
															children: Object(n.jsx)('small', { children: 'Deploy' }),
														}),
													}),
												}),
												Object(n.jsxs)(j.a.Group, {
													children: [
														Object(n.jsx)(j.a.Label, { children: 'Deployed Contract Address' }),
														Object(n.jsxs)(p.a, {
															className: 'mb-3',
															children: [
																'' !== V
																	? Object(n.jsx)(p.a.Append, {
																			children: Object(n.jsx)(h.a, {
																				variant: 'link',
																				size: 'sm',
																				className: 'mt-0 pt-0 float-right',
																				disabled: !V,
																				onClick: function () {
																					y()(V);
																				},
																				children: Object(n.jsx)('i', { className: 'far fa-copy' }),
																			}),
																	  })
																	: null,
																Object(n.jsx)(j.a.Control, {
																	value: V,
																	placeholder: 'contract address',
																	size: 'sm',
																	readOnly: !0,
																}),
															],
														}),
														'' === V
															? Object(n.jsx)(j.a.Text, {
																	className: 'text-muted',
																	children: 'Deploy your own contract',
															  })
															: null,
													],
												}),
											],
										}),
									],
								}),
							],
						})
					);
				},
				G = a(641),
				R = a(643),
				H = (a(625), 'Currently you have no contract instances to interact with.'),
				q = { primary: '#007aa6', warning: '#c97539', danger: '#dc3545', lightgreen: '#a2ffb0', darkgreen: '#27443f' };
			function U(e) {
				switch (e) {
					case 'view':
					case 'pure':
						return 'primary';
					case 'nonpayable':
						return 'warning';
					case 'payable':
						return 'danger';
				}
				return '';
			}
			var V = function (e) {
					var t = c.a.useState(''),
						a = Object(b.a)(t, 2),
						s = a[0],
						r = a[1],
						o = c.a.useState(''),
						i = Object(b.a)(o, 2),
						u = i[0],
						m = i[1],
						f = c.a.useState(''),
						x = Object(b.a)(f, 2),
						O = x[0],
						g = x[1],
						v = c.a.useState({}),
						w = Object(b.a)(v, 2),
						k = w[0],
						N = w[1],
						C = e.moonbeamLib,
						S = e.busy,
						M = e.abi,
						A = e.address,
						B = e.updateBalance;
					return (
						c.a.useEffect(
							function () {
								var e,
									t = {};
								null === (e = M.inputs) ||
									void 0 === e ||
									e.forEach(function (e) {
										t[e.name] = '';
									}),
									N(t);
							},
							[M.inputs]
						),
						Object(n.jsxs)(n.Fragment, {
							children: [
								Object(n.jsx)(D, {
									abi: M,
									setArgs: function (e, t) {
										k[e] = t;
									},
								}),
								Object(n.jsx)(J.a, {
									variant: 'danger',
									onClose: function () {
										return r('');
									},
									dismissible: !0,
									hidden: '' === s,
									children: Object(n.jsx)('small', { children: s }),
								}),
								Object(n.jsx)(J.a, {
									variant: 'success',
									onClose: function () {
										return m('');
									},
									dismissible: !0,
									hidden: '' === u,
									children: Object(n.jsx)(G.a, {
										children: Object(n.jsxs)(T.a, {
											style: { border: '0' },
											children: [
												Object(n.jsx)(G.a.Toggle, {
													style: { backgroundColor: q.darkgreen },
													as: T.a.Header,
													eventKey: u,
													className: 'p-1  custom-select',
													children: 'Tx Receipt',
												}),
												Object(n.jsx)(G.a.Collapse, {
													style: { backgroundColor: q.darkgreen },
													eventKey: u,
													children: Object(n.jsx)(T.a.Body, {
														className: 'py-1 px-2',
														children: Object(n.jsx)('small', { children: u }),
													}),
												}),
											],
										}),
									}),
								}),
								Object(n.jsxs)(p.a, {
									className: 'mb-3',
									children: [
										Object(n.jsxs)(p.a.Prepend, {
											children: [
												Object(n.jsx)(h.a, {
													variant: U(M.stateMutability),
													block: !0,
													size: 'sm',
													disabled: S || !(C && C.isConnected && C.isMoonbeamNetwork),
													onClick: Object(d.a)(
														l.a.mark(function e() {
															var t, a, n, s, c, o, i, u;
															return l.a.wrap(
																function (e) {
																	for (;;)
																		switch ((e.prev = e.next)) {
																			case 0:
																				return (
																					(a = []),
																					null === (t = M.inputs) ||
																						void 0 === t ||
																						t.forEach(function (e) {
																							a.push(k[e.name]);
																						}),
																					(n = new C.web3.eth.Contract(JSON.parse(JSON.stringify([M])), A)),
																					(e.next = 5),
																					C.getAccounts()
																				);
																			case 5:
																				if (
																					((s = e.sent), 'view' !== M.stateMutability && 'pure' !== M.stateMutability)
																				) {
																					e.next = 24;
																					break;
																				}
																				if (((e.prev = 7), !M.name)) {
																					e.next = 14;
																					break;
																				}
																				return (
																					(e.next = 11),
																					(c = n.methods)[M.name].apply(c, a).call({ from: s[0], gasPrice: 1e9 })
																				);
																			case 11:
																				(e.t0 = e.sent), (e.next = 15);
																				break;
																			case 14:
																				e.t0 = null;
																			case 15:
																				'object' === typeof (o = e.t0) ? m(JSON.stringify(o, null, 4)) : g(o),
																					(e.next = 22);
																				break;
																			case 19:
																				(e.prev = 19),
																					(e.t1 = e.catch(7)),
																					r(e.t1.message ? e.t1.message : e.t1.toString());
																			case 22:
																				e.next = 41;
																				break;
																			case 24:
																				if (((e.prev = 24), !M.name)) {
																					e.next = 31;
																					break;
																				}
																				return (
																					(e.next = 28),
																					(i = n.methods)[M.name].apply(i, a).send({ from: s[0], gasPrice: 1e9 })
																				);
																			case 28:
																				(e.t2 = e.sent), (e.next = 32);
																				break;
																			case 31:
																				e.t2 = null;
																			case 32:
																				(u = e.t2), r(''), m(JSON.stringify(u, null, 2)), B(s[0]), (e.next = 41);
																				break;
																			case 38:
																				(e.prev = 38),
																					(e.t3 = e.catch(24)),
																					r(e.t3.message ? e.t3.message : e.t3.toString());
																			case 41:
																			case 'end':
																				return e.stop();
																		}
																},
																e,
																null,
																[
																	[7, 19],
																	[24, 38],
																]
															);
														})
													),
													children: Object(n.jsx)('small', {
														children:
															'view' === M.stateMutability || 'pure' === M.stateMutability ? 'call' : 'transact',
													}),
												}),
												Object(n.jsx)(h.a, {
													variant: U(M.stateMutability),
													size: 'sm',
													className: 'mt-0 pt-0 float-right',
													onClick: function () {
														if (M.name)
															try {
																var e,
																	t,
																	a = [];
																null === (e = M.inputs) ||
																	void 0 === e ||
																	e.forEach(function (e) {
																		k[e.name] && a.push(k[e.name]);
																	});
																var n = new C.web3.eth.Contract(JSON.parse(JSON.stringify([M])), A);
																y()((t = n.methods)[M.name].apply(t, a).encodeABI());
															} catch (s) {
																console.log(s.toString());
															}
													},
													children: Object(n.jsx)('i', { className: 'far fa-copy' }),
												}),
											],
										}),
										Object(n.jsx)(j.a.Control, {
											value: O,
											size: 'sm',
											readOnly: !0,
											hidden: !('view' === M.stateMutability || 'pure' === M.stateMutability),
										}),
									],
								}),
							],
						})
					);
				},
				W = function (e) {
					var t = c.a.useState(!0),
						a = Object(b.a)(t, 2),
						s = a[0],
						r = a[1],
						o = e.moonbeamLib,
						i = e.busy,
						l = e.setBusy,
						u = e.contract,
						d = e.index,
						j = e.remove,
						p = e.updateBalance;
					return Object(n.jsx)(R.a, {
						in: s,
						timeout: 300,
						classNames: 'zoom',
						unmountOnExit: !0,
						onExited: j,
						children: Object(n.jsxs)(T.a, {
							className: 'mb-2',
							children: [
								Object(n.jsxs)(G.a.Toggle, {
									as: T.a.Header,
									eventKey: '0',
									className: 'px-2 py-1 form-control custom-select',
									children: [
										Object(n.jsx)('strong', { className: 'align-middle', children: u.name }),
										'\xa0',
										Object(n.jsx)('small', {
											className: 'align-middle',
											children: ''.concat(u.address.substring(0, 6), '...').concat(u.address.substring(38)),
										}),
										Object(n.jsx)(h.a, {
											variant: 'link',
											size: 'sm',
											className: 'float-left align-middle',
											onClick: function () {
												y()(u.address);
											},
											children: Object(n.jsx)('i', { className: 'far fa-copy' }),
										}),
										Object(n.jsx)(h.a, {
											className: 'float-left align-middle',
											size: 'sm',
											variant: 'link',
											onClick: function () {
												r(!1);
											},
											children: Object(n.jsx)('i', { className: 'fas fa-trash-alt' }),
										}),
									],
								}),
								Object(n.jsx)(G.a.Collapse, {
									eventKey: '0',
									children: Object(n.jsxs)(T.a.Body, {
										children: [
											(function (e) {
												var t = (u.abi ? u.abi : []).map(function (t, a) {
													return Object(n.jsx)(
														G.a,
														{
															children: Object(n.jsxs)(T.a, {
																children: [
																	Object(n.jsx)(G.a.Toggle, {
																		style: { color: 'white', backgroundColor: q[U(t.stateMutability)] },
																		as: T.a.Header,
																		eventKey: 'Methods_'.concat(e.toString(), '_').concat(a.toString()),
																		className: 'p-1  custom-select',
																		children: Object(n.jsx)('small', { children: t.name }),
																	}),
																	Object(n.jsx)(G.a.Collapse, {
																		eventKey: 'Methods_'.concat(e.toString(), '_').concat(a.toString()),
																		children: Object(n.jsx)(T.a.Body, {
																			className: 'py-1 px-2',
																			children: Object(n.jsx)(V, {
																				moonbeamLib: o,
																				busy: i,
																				setBusy: l,
																				abi: t,
																				address: u.address,
																				updateBalance: p,
																			}),
																		}),
																	}),
																],
															}),
														},
														'Methods_A_'.concat(e.toString(), '_').concat(a.toString())
													);
												});
												return Object(n.jsx)(n.Fragment, { children: t });
											})(d),
											' ',
										],
									}),
								}),
							],
						}),
					});
				},
				Q = function (e) {
					var t = c.a.useState(''),
						a = Object(b.a)(t, 2),
						s = a[0],
						r = a[1],
						o = c.a.useState(0),
						i = Object(b.a)(o, 2),
						l = i[0],
						u = i[1],
						d = e.moonbeamLib,
						j = e.busy,
						p = e.setBusy,
						m = e.contracts,
						h = e.updateBalance;
					return (
						c.a.useEffect(
							function () {
								u(0), r(H);
							},
							[m, j]
						),
						Object(n.jsxs)('div', {
							className: 'SmartContracts',
							children: [
								Object(n.jsx)(J.a, {
									variant: 'warning',
									className: 'text-center',
									hidden: m.length !== l,
									children: Object(n.jsx)('small', { children: s }),
								}),
								(function () {
									var e = m.map(function (e, t) {
										return Object(n.jsx)(G.a, {
											defaultActiveKey: t.toString(),
											children: Object(n.jsx)(
												W,
												{
													moonbeamLib: d,
													busy: j,
													setBusy: p,
													contract: e,
													index: t,
													remove: function () {
														u(l + 1), r(H);
													},
													updateBalance: h,
												},
												'Contract_'.concat(t.toString())
											),
										});
									});
									return Object(n.jsx)('div', { children: e });
								})(),
							],
						})
					);
				},
				X = function () {
					var e = c.a.useState(''),
						t = Object(b.a)(e, 2),
						a = t[0],
						s = t[1],
						r = c.a.useState(''),
						o = Object(b.a)(r, 2),
						i = o[0],
						O = o[1],
						g = c.a.useState('Moonbase Alpha'),
						v = Object(b.a)(g, 2),
						w = v[0],
						k = v[1],
						N = c.a.useState(!1),
						C = Object(b.a)(N, 2),
						S = C[0],
						M = C[1],
						B = c.a.useState(new _(A)),
						z = Object(b.a)(B, 1)[0],
						T = c.a.useState(''),
						J = Object(b.a)(T, 2),
						I = J[0],
						L = J[1],
						D = c.a.useState([]),
						K = Object(b.a)(D, 2),
						P = K[0],
						G = K[1],
						R = c.a.useState(null),
						H = Object(b.a)(R, 2),
						q = H[0],
						U = H[1];
					function V(e) {
						return W.apply(this, arguments);
					}
					function W() {
						return (W = Object(d.a)(
							l.a.mark(function e(t) {
								var n, c;
								return l.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													M(!0),
													(e.next = 3),
													z.connectMetaMask(
														function (e) {
															s(e[0]), X(e[0]);
														},
														(function () {
															var e = Object(d.a)(
																l.a.mark(function e(t) {
																	return l.a.wrap(function (e) {
																		for (;;)
																			switch ((e.prev = e.next)) {
																				case 0:
																					return (e.next = 2), X(a);
																				case 2:
																					k(E(t));
																				case 3:
																				case 'end':
																					return e.stop();
																			}
																	}, e);
																})
															);
															return function (t) {
																return e.apply(this, arguments);
															};
														})(),
														t
													)
												);
											case 3:
												(n = e.sent), (c = n.networkId), k(E(c)), M(!1);
											case 7:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						)).apply(this, arguments);
					}
					function X(e) {
						return Y.apply(this, arguments);
					}
					function Y() {
						return (Y = Object(d.a)(
							l.a.mark(function e(t) {
								var a;
								return l.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												if (!t || '' === t) {
													e.next = 5;
													break;
												}
												return (e.next = 3), z.getTotalBalance(t);
											case 3:
												(a = e.sent), O(z.web3.utils.fromWei(a.toString()));
											case 5:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						)).apply(this, arguments);
					}
					function Z(e) {
						G(P.concat([e]));
					}
					function $() {
						return Object(n.jsxs)(j.a.Group, {
							children: [
								Object(n.jsx)(j.a.Text, {
									className: 'text-muted',
									children: Object(n.jsx)('small', { children: 'NETWORK' }),
								}),
								Object(n.jsx)(p.a, {
									children: Object(n.jsx)(j.a.Control, {
										type: 'text',
										placeholder: '0.0',
										value: w,
										size: 'sm',
										readOnly: !0,
									}),
								}),
							],
						});
					}
					return Object(n.jsx)('div', {
						className: 'App',
						children: Object(n.jsxs)(m.a, {
							children: [
								Object(n.jsxs)(j.a, {
									children: [
										Object(n.jsxs)(j.a.Group, {
											children: [
												Object(n.jsx)(j.a.Text, {
													className: 'text-muted',
													children: Object(n.jsx)('small', { children: 'ACCOUNT' }),
												}),
												Object(n.jsxs)(p.a, {
													children: [
														a
															? Object(n.jsx)(p.a.Append, {
																	children: Object(n.jsx)(h.a, {
																		variant: 'link',
																		size: 'sm',
																		className: 'mt-0 pt-0 float-right',
																		disabled: !a,
																		onClick: function () {
																			y()(a);
																		},
																		children: Object(n.jsx)('i', { className: 'far fa-copy' }),
																	}),
															  })
															: null,
														Object(n.jsx)(j.a.Control, {
															type: 'text',
															placeholder: 'Account',
															value: a,
															size: 'sm',
															readOnly: !0,
														}),
														Object(n.jsx)(p.a.Append, {
															children: Object(n.jsx)(f.a, {
																placement: 'left',
																overlay: Object(n.jsx)(x.a, {
																	id: 'overlay-connect',
																	hidden: '' !== a,
																	children: 'Connect to Wallet',
																}),
																children: Object(n.jsx)(h.a, {
																	variant: 'warning',
																	block: !0,
																	size: 'sm',
																	disabled: S,
																	onClick: function () {
																		return V();
																	},
																	children: Object(n.jsx)('small', { children: 'Connect' }),
																}),
															}),
														}),
													],
												}),
												z.isConnected
													? 'Not Moonbeam' === w
														? Object(n.jsx)('p', {
																className: 'text-center mt-3',
																children: Object(n.jsxs)('small', {
																	style: { color: 'red', padding: '1em' },
																	children: [
																		'Connect MetaMask to a Moonbeam Network :',
																		' ',
																		Object(n.jsx)(h.a, {
																			variant: 'warning',
																			block: !0,
																			size: 'sm',
																			disabled: S,
																			onClick: function () {
																				return V(!0);
																			},
																			children: 'Connect to Moonbase Alpha',
																		}),
																		Object(n.jsx)('a', {
																			target: '_parent',
																			rel: 'noreferrer',
																			href: 'https://docs.moonbeam.network/getting-started/testnet/metamask/',
																			children: '(How to connect to Moonbeam networks)',
																		}),
																	],
																}),
														  })
														: Object(n.jsx)('p', {
																className: 'text-center mt-3',
																children: Object(n.jsxs)('small', {
																	style: { color: 'green' },
																	children: ['Connected to ', w],
																}),
														  })
													: Object(n.jsx)('p', {
															className: 'text-center mt-3',
															children: Object(n.jsx)('small', { style: { color: 'red' }, children: 'Please Connect' }),
													  }),
											],
										}),
										Object(n.jsxs)(j.a.Group, {
											children: [
												Object(n.jsx)(j.a.Text, {
													className: 'text-muted',
													children: Object(n.jsx)('small', { children: 'BALANCE (MOONBEAM)' }),
												}),
												Object(n.jsx)(p.a, {
													children: Object(n.jsx)(j.a.Control, {
														type: 'text',
														placeholder: '0.0',
														value: i,
														size: 'sm',
														readOnly: !0,
													}),
												}),
											],
										}),
										Object(n.jsx)($, {}),
									],
								}),
								Object(n.jsx)('hr', {}),
								Object(n.jsx)(F, {
									moonbeamLib: z,
									busy: S,
									setBusy: M,
									addNewContract: Z,
									setSelected: U,
									updateBalance: X,
								}),
								Object(n.jsx)('p', {
									className: 'text-center mt-3',
									children: Object(n.jsx)('small', { children: 'OR' }),
								}),
								Object(n.jsxs)(p.a, {
									className: 'mb-3',
									children: [
										Object(n.jsx)(j.a.Control, {
											value: I,
											placeholder: 'contract address',
											onChange: function (e) {
												L(e.target.value);
											},
											size: 'sm',
											disabled: S || '' === a || !q,
										}),
										Object(n.jsx)(p.a.Append, {
											children: Object(n.jsx)(f.a, {
												placement: 'left',
												overlay: Object(n.jsx)(x.a, {
													id: 'overlay-ataddresss',
													children: 'Use deployed Contract address',
												}),
												children: Object(n.jsx)(h.a, {
													variant: 'primary',
													size: 'sm',
													disabled: S || '' === a || !q,
													onClick: function () {
														M(!0), q && Z(Object(u.a)(Object(u.a)({}, q), {}, { address: I })), M(!1);
													},
													children: Object(n.jsx)('small', { children: 'At Address' }),
												}),
											}),
										}),
									],
								}),
								Object(n.jsx)('hr', {}),
								Object(n.jsx)(Q, { moonbeamLib: z, busy: S, setBusy: M, contracts: P, updateBalance: X }),
							],
						}),
					});
				};
			o.a.render(Object(n.jsx)(c.a.StrictMode, { children: Object(n.jsx)(X, {}) }), document.getElementById('root'));
		},
	},
	[[627, 1, 2]],
]);
//# sourceMappingURL=main.7eedbf4c.chunk.js.map
