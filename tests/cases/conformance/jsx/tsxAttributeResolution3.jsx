// OK
var obj1 = { x: 'foo' };
<test1 {...obj1}/>;
// Error, x is not string
var obj2 = { x: 32 };
<test1 {...obj2}/>;
// Error, x is missing
var obj3 = { y: 32 };
<test1 {...obj3}/>;
// OK
var obj4 = { x: 32, y: 32 };
<test1 {...obj4} x="ok"/>;
// Error
var obj5 = { x: 32, y: 32 };
<test1 x="ok" {...obj5}/>;
// OK
var obj6 = { x: 'ok', y: 32, extra: 100 };
<test1 {...obj6}/>;
// Error
var obj7 = { x: 'foo' };
<test1 x={32} {...obj7}/>;
