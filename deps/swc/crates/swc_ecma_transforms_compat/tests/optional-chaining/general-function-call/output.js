var _foo, _foo1, _foo_bar, _foo2, _foo_bar1, _foo3, _foo4, _foo5, _foo6, _foo_bar2, _foo7, _foo_bar3, _foo_bar4, _foo8, _foo_bar5, _foo9, _foo_bar6, _foo_bar7, _foo10, _foo_bar8, _foo11;
(_foo = foo) === null || _foo === void 0 ? void 0 : _foo(foo);
(_foo1 = foo) === null || _foo1 === void 0 ? void 0 : _foo1.bar();
(_foo_bar = (_foo2 = foo).bar) === null || _foo_bar === void 0 ? void 0 : _foo_bar.call(_foo2, foo.bar, false);
(_foo3 = foo) === null || _foo3 === void 0 ? void 0 : (_foo_bar1 = _foo3.bar) === null || _foo_bar1 === void 0 ? void 0 : _foo_bar1.call(_foo3, foo.bar, true);
(_foo4 = foo) === null || _foo4 === void 0 ? void 0 : _foo4().bar;
(_foo6 = foo) === null || _foo6 === void 0 ? void 0 : (_foo5 = _foo6()) === null || _foo5 === void 0 ? void 0 : _foo5.bar;
(_foo_bar2 = (_foo7 = foo).bar) === null || _foo_bar2 === void 0 ? void 0 : _foo_bar2.call(_foo7).baz;
(_foo_bar4 = (_foo8 = foo).bar) === null || _foo_bar4 === void 0 ? void 0 : (_foo_bar3 = _foo_bar4.call(_foo8)) === null || _foo_bar3 === void 0 ? void 0 : _foo_bar3.baz;
(_foo9 = foo) === null || _foo9 === void 0 ? void 0 : (_foo_bar5 = _foo9.bar) === null || _foo_bar5 === void 0 ? void 0 : _foo_bar5.call(_foo9).baz;
(_foo10 = foo) === null || _foo10 === void 0 ? void 0 : (_foo_bar7 = _foo10.bar) === null || _foo_bar7 === void 0 ? void 0 : (_foo_bar6 = _foo_bar7.call(_foo10)) === null || _foo_bar6 === void 0 ? void 0 : _foo_bar6.baz;
(_foo11 = foo) === null || _foo11 === void 0 ? void 0 : (_foo_bar8 = _foo11.bar()) === null || _foo_bar8 === void 0 ? void 0 : _foo_bar8();