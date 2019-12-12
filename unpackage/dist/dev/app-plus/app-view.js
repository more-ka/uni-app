var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movieScore'])
Z([3,'__i0__'])
Z([3,'yellow'])
Z([[7],[3,'yellowStar']])
Z([3,'*this'])
Z([3,'starIcon'])
Z([3,'../../static/icos/star-yellow.png'])
Z([3,'__i1__'])
Z([3,'grey'])
Z([[7],[3,'greyStar']])
Z(z[5])
Z([3,'../../static/icos/star-gray.png'])
Z([[7],[3,'showNum']])
Z([3,'movieNum'])
Z([a,[[7],[3,'movieScore']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'statusBar'])
Z([1,true])
Z(z[2])
Z([3,'swiper page-block'])
Z([1,500])
Z(z[2])
Z([1,3000])
Z([3,'swiper-item'])
Z([3,'../../static/carousel/batmanvssuperman.png'])
Z(z[8])
Z([3,'../../static/carousel/spiderman.png'])
Z(z[8])
Z(z[9])
Z(z[8])
Z(z[11])
Z([3,'hot page-block'])
Z([3,'title'])
Z([3,'../../static/icos/hot.png'])
Z([3,'热门超英'])
Z([3,'scroll'])
Z([3,'true'])
Z([3,'item'])
Z([3,'poster'])
Z([3,'../../static/poster/civilwar.jpg'])
Z([3,'movieName'])
Z([3,'超级玛丽超级玛丽超级玛丽'])
Z([3,'__l'])
Z([1,10.0])
Z(z[2])
Z([3,'1'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([1,6.7])
Z(z[2])
Z([3,'2'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[37])
Z(z[2])
Z([3,'3'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[37])
Z(z[2])
Z([3,'4'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[37])
Z(z[2])
Z([3,'5'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[37])
Z(z[2])
Z([3,'6'])
Z([3,'hotMovie page-block'])
Z(z[17])
Z([3,'../../static/icos/interest.png'])
Z([3,'热门预告'])
Z([3,'movies'])
Z([3,'http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png'])
Z([3,'http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4'])
Z(z[81])
Z(z[82])
Z([3,'guess-u-like page-block'])
Z(z[17])
Z([3,'../../static/icos/guess-u-like.png'])
Z([3,'猜你喜欢'])
Z([3,'guessLikeMovies'])
Z([3,'likeMovie'])
Z([3,'http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png'])
Z([3,'movieDetail'])
Z([3,'movieTitle'])
Z([3,'秦时明月之沧海横流'])
Z(z[27])
Z([1,10])
Z([1,false])
Z([3,'7'])
Z([3,'movieCategory'])
Z([3,'2018 / 美国 / 科幻 / 超级英雄'])
Z([3,'movieTime'])
Z([3,'上映时间：2014-04-04(美国/中国大陆)'])
Z([3,'praise'])
Z([3,'icon'])
Z([3,'../../static/icos/praise.png'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praise']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'点赞'])
Z([[7],[3,'animationData']])
Z([3,'animation'])
Z([3,'+1'])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[94])
Z(z[27])
Z(z[96])
Z(z[97])
Z([3,'8'])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[107])
Z(z[104])
Z(z[105])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[94])
Z(z[27])
Z(z[96])
Z(z[97])
Z([3,'9'])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[107])
Z(z[104])
Z(z[105])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[94])
Z(z[27])
Z(z[96])
Z(z[97])
Z([3,'10'])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[107])
Z(z[104])
Z(z[105])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[94])
Z(z[27])
Z(z[96])
Z(z[97])
Z([3,'11'])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[107])
Z(z[104])
Z(z[105])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[111])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[94])
Z(z[27])
Z(z[96])
Z(z[97])
Z([3,'12'])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[107])
Z(z[104])
Z(z[105])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[111])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'pageHeight']],[1,'px']]],[1,';']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'picture'])
Z([3,'../../static/icos/default-face.png'])
Z([[4],[[5],[[5],[1,'username']],[[2,'?:'],[[7],[3,'usernameActive']],[1,'active'],[1,'']]]])
Z([3,'text'])
Z([3,'账号'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z(z[7])
Z([3,''])
Z([[4],[[5],[[5],[1,'password']],[[2,'?:'],[[7],[3,'passwordActive']],[1,'active'],[1,'']]]])
Z(z[7])
Z([3,'密码'])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[7])
Z(z[12])
Z([3,'tipsWrapper'])
Z([3,'tips'])
Z([[2,'!'],[[7],[3,'tips']]])
Z([a,[[7],[3,'tipsMessage']]])
Z([3,'login'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'登录'])
Z([3,'auth'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'auth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/icos/weixin.png'])
Z(z[2])
Z(z[31])
Z([3,'qq'])
Z([3,'../../static/icos/QQ.png'])
Z(z[2])
Z(z[31])
Z([3,'sinaweibo'])
Z([3,'../../static/icos/weibo.png'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'weixinLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[33])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'main'])
Z([3,'image'])
Z([[7],[3,'fileUrl']])
Z([3,'container'])
Z([3,'__e'])
Z([3,'again'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'again']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[5])
Z([3,'confirm'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'update']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确定上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'statusBar'])
Z([3,'header'])
Z([3,'title'])
Z([3,'搜索'])
Z([3,'searchWrapper'])
Z([3,'searchIconWrapper'])
Z([3,'searchIcon'])
Z([3,'../../static/icos/search.png'])
Z([3,'inputWrapper'])
Z([3,'搜索电影'])
Z([3,'text'])
Z([3,''])
Z([3,'main'])
Z([3,'__i0__'])
Z([3,'movie'])
Z([[7],[3,'searchData']])
Z([3,'id'])
Z(z[15])
Z([3,'poster'])
Z([[6],[[7],[3,'movie']],[3,'cover']])
Z([3,'movieName'])
Z([a,[[6],[[7],[3,'movie']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'height']],[1,'px']]],[1,';']])
Z([3,'header'])
Z([3,'picture'])
Z([3,'../../static/icos/default-face.png'])
Z([[2,'!'],[[7],[3,'userInfo']]])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'login']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'注册/登录'])
Z([3,'userInfo'])
Z([3,'username'])
Z([a,[[6],[[7],[3,'userInfo']],[3,'username']]])
Z([3,'userid'])
Z([a,[[2,'+'],[1,'id: '],[[6],[[7],[3,'userInfo']],[3,'userid']]]])
Z([[7],[3,'userInfo']])
Z(z[6])
Z([3,'modify'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modify']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/icos/settings.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'infoWrapper'])
Z([3,'__e'])
Z([3,'avatarLine line'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeAvatar']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'title'])
Z([3,'头像'])
Z([3,'right'])
Z([3,'avatar'])
Z([3,'localhost:8080/63bbd2b7-545b-4017-a434-572a1fbdf392'])
Z([3,'right-icon'])
Z([3,'../../static/icos/left-gray-arrow.png'])
Z(z[3])
Z(z[5])
Z([3,'昵称'])
Z(z[7])
Z([3,'name'])
Z([3,'测试账号'])
Z(z[10])
Z(z[11])
Z([3,'birthdayLine line'])
Z(z[5])
Z([3,'生日'])
Z(z[7])
Z([3,'birthday'])
Z([3,'2000-10-10'])
Z(z[10])
Z(z[11])
Z([3,'sexLine line'])
Z(z[5])
Z([3,'性别'])
Z(z[7])
Z([3,'sex'])
Z([3,'神'])
Z(z[10])
Z(z[11])
Z([3,'container'])
Z(z[2])
Z([3,'clearStorage'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[2])
Z([3,'logout'])
Z(z[39])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/score/score.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/meface/meface.wxml','./pages/search/search.wxml','./pages/user/user.wxml','./pages/userinfo/userinfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'image',['calss',5,'src',1],[],hG,cF,gg)
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,3,fE,e,s,gg,oD,'yellow','__i0__','*this')
var lK=_v()
_(oB,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'image',['class',10,'src',1],[],eN,tM,gg)
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,9,aL,e,s,gg,lK,'grey','__i1__','')
var xC=_v()
_(oB,xC)
if(_oz(z,12,e,s,gg)){xC.wxVkey=1
var oR=_n('view')
_rz(z,oR,'class',13,e,s,gg)
var fS=_oz(z,14,e,s,gg)
_(oR,fS)
_(xC,oR)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hU=_n('view')
_rz(z,hU,'class',0,e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',1,e,s,gg)
_(hU,oV)
var cW=_mz(z,'swiper',['autoplay',2,'circular',1,'class',2,'duration',3,'indicatorDots',4,'interval',5],[],e,s,gg)
var oX=_n('swiper-item')
var lY=_n('view')
_rz(z,lY,'class',8,e,s,gg)
var aZ=_mz(z,'image',['mode',-1,'src',9],[],e,s,gg)
_(lY,aZ)
_(oX,lY)
_(cW,oX)
var t1=_n('swiper-item')
var e2=_n('view')
_rz(z,e2,'class',10,e,s,gg)
var b3=_mz(z,'image',['mode',-1,'src',11],[],e,s,gg)
_(e2,b3)
_(t1,e2)
_(cW,t1)
var o4=_n('swiper-item')
var x5=_n('view')
_rz(z,x5,'class',12,e,s,gg)
var o6=_mz(z,'image',['mode',-1,'src',13],[],e,s,gg)
_(x5,o6)
_(o4,x5)
_(cW,o4)
var f7=_n('swiper-item')
var c8=_n('view')
_rz(z,c8,'class',14,e,s,gg)
var h9=_mz(z,'image',['mode',-1,'src',15],[],e,s,gg)
_(c8,h9)
_(f7,c8)
_(cW,f7)
_(hU,cW)
var o0=_n('view')
_rz(z,o0,'class',16,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',17,e,s,gg)
var oBB=_n('image')
_rz(z,oBB,'src',18,e,s,gg)
_(cAB,oBB)
var lCB=_n('text')
var aDB=_oz(z,19,e,s,gg)
_(lCB,aDB)
_(cAB,lCB)
_(o0,cAB)
var tEB=_mz(z,'scroll-view',['class',20,'scrollX',1],[],e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',22,e,s,gg)
var bGB=_mz(z,'image',['class',23,'src',1],[],e,s,gg)
_(eFB,bGB)
var oHB=_n('view')
_rz(z,oHB,'class',25,e,s,gg)
var xIB=_oz(z,26,e,s,gg)
_(oHB,xIB)
_(eFB,oHB)
var oJB=_mz(z,'score',['bind:__l',27,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(eFB,oJB)
_(tEB,eFB)
var fKB=_n('view')
_rz(z,fKB,'class',31,e,s,gg)
var cLB=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(fKB,cLB)
var hMB=_n('view')
_rz(z,hMB,'class',34,e,s,gg)
var oNB=_oz(z,35,e,s,gg)
_(hMB,oNB)
_(fKB,hMB)
var cOB=_mz(z,'score',['bind:__l',36,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(fKB,cOB)
_(tEB,fKB)
var oPB=_n('view')
_rz(z,oPB,'class',40,e,s,gg)
var lQB=_mz(z,'image',['class',41,'src',1],[],e,s,gg)
_(oPB,lQB)
var aRB=_n('view')
_rz(z,aRB,'class',43,e,s,gg)
var tSB=_oz(z,44,e,s,gg)
_(aRB,tSB)
_(oPB,aRB)
var eTB=_mz(z,'score',['bind:__l',45,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(oPB,eTB)
_(tEB,oPB)
var bUB=_n('view')
_rz(z,bUB,'class',49,e,s,gg)
var oVB=_mz(z,'image',['class',50,'src',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_n('view')
_rz(z,xWB,'class',52,e,s,gg)
var oXB=_oz(z,53,e,s,gg)
_(xWB,oXB)
_(bUB,xWB)
var fYB=_mz(z,'score',['bind:__l',54,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(bUB,fYB)
_(tEB,bUB)
var cZB=_n('view')
_rz(z,cZB,'class',58,e,s,gg)
var h1B=_mz(z,'image',['class',59,'src',1],[],e,s,gg)
_(cZB,h1B)
var o2B=_n('view')
_rz(z,o2B,'class',61,e,s,gg)
var c3B=_oz(z,62,e,s,gg)
_(o2B,c3B)
_(cZB,o2B)
var o4B=_mz(z,'score',['bind:__l',63,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(cZB,o4B)
_(tEB,cZB)
var l5B=_n('view')
_rz(z,l5B,'class',67,e,s,gg)
var a6B=_mz(z,'image',['class',68,'src',1],[],e,s,gg)
_(l5B,a6B)
var t7B=_n('view')
_rz(z,t7B,'class',70,e,s,gg)
var e8B=_oz(z,71,e,s,gg)
_(t7B,e8B)
_(l5B,t7B)
var b9B=_mz(z,'score',['bind:__l',72,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(l5B,b9B)
_(tEB,l5B)
_(o0,tEB)
var o0B=_n('view')
_(o0,o0B)
_(hU,o0)
var xAC=_n('view')
_rz(z,xAC,'class',76,e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',77,e,s,gg)
var fCC=_n('image')
_rz(z,fCC,'src',78,e,s,gg)
_(oBC,fCC)
var cDC=_n('text')
var hEC=_oz(z,79,e,s,gg)
_(cDC,hEC)
_(oBC,cDC)
_(xAC,oBC)
var oFC=_n('view')
_rz(z,oFC,'class',80,e,s,gg)
var cGC=_mz(z,'video',['poster',81,'src',1],[],e,s,gg)
_(oFC,cGC)
var oHC=_mz(z,'video',['poster',83,'src',1],[],e,s,gg)
_(oFC,oHC)
_(xAC,oFC)
_(hU,xAC)
var lIC=_n('view')
_rz(z,lIC,'class',85,e,s,gg)
var aJC=_n('view')
_rz(z,aJC,'class',86,e,s,gg)
var tKC=_n('image')
_rz(z,tKC,'src',87,e,s,gg)
_(aJC,tKC)
var eLC=_n('text')
var bMC=_oz(z,88,e,s,gg)
_(eLC,bMC)
_(aJC,eLC)
_(lIC,aJC)
var oNC=_n('view')
_rz(z,oNC,'class',89,e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',90,e,s,gg)
var oPC=_mz(z,'image',['mode',-1,'src',91],[],e,s,gg)
_(xOC,oPC)
var fQC=_n('view')
_rz(z,fQC,'class',92,e,s,gg)
var cRC=_n('view')
_rz(z,cRC,'class',93,e,s,gg)
var hSC=_oz(z,94,e,s,gg)
_(cRC,hSC)
_(fQC,cRC)
var oTC=_mz(z,'score',['bind:__l',95,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(fQC,oTC)
var cUC=_n('view')
_rz(z,cUC,'class',99,e,s,gg)
var oVC=_oz(z,100,e,s,gg)
_(cUC,oVC)
_(fQC,cUC)
var lWC=_n('view')
_rz(z,lWC,'class',101,e,s,gg)
var aXC=_oz(z,102,e,s,gg)
_(lWC,aXC)
_(fQC,lWC)
_(xOC,fQC)
var tYC=_n('view')
_rz(z,tYC,'class',103,e,s,gg)
var eZC=_mz(z,'image',['class',104,'src',1],[],e,s,gg)
_(tYC,eZC)
var b1C=_mz(z,'view',['bindtap',106,'data-event-opts',1],[],e,s,gg)
var o2C=_oz(z,108,e,s,gg)
_(b1C,o2C)
_(tYC,b1C)
var x3C=_mz(z,'view',['animation',109,'class',1],[],e,s,gg)
var o4C=_oz(z,111,e,s,gg)
_(x3C,o4C)
_(tYC,x3C)
_(xOC,tYC)
_(oNC,xOC)
_(lIC,oNC)
var f5C=_n('view')
_rz(z,f5C,'class',112,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',113,e,s,gg)
var h7C=_mz(z,'image',['mode',-1,'src',114],[],e,s,gg)
_(c6C,h7C)
var o8C=_n('view')
_rz(z,o8C,'class',115,e,s,gg)
var c9C=_n('view')
_rz(z,c9C,'class',116,e,s,gg)
var o0C=_oz(z,117,e,s,gg)
_(c9C,o0C)
_(o8C,c9C)
var lAD=_mz(z,'score',['bind:__l',118,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(o8C,lAD)
var aBD=_n('view')
_rz(z,aBD,'class',122,e,s,gg)
var tCD=_oz(z,123,e,s,gg)
_(aBD,tCD)
_(o8C,aBD)
var eDD=_n('view')
_rz(z,eDD,'class',124,e,s,gg)
var bED=_oz(z,125,e,s,gg)
_(eDD,bED)
_(o8C,eDD)
_(c6C,o8C)
var oFD=_mz(z,'view',['bindtap',126,'class',1,'data-event-opts',2],[],e,s,gg)
var xGD=_mz(z,'image',['class',129,'src',1],[],e,s,gg)
_(oFD,xGD)
var oHD=_n('view')
var fID=_oz(z,131,e,s,gg)
_(oHD,fID)
_(oFD,oHD)
var cJD=_mz(z,'view',['animation',132,'class',1],[],e,s,gg)
var hKD=_oz(z,134,e,s,gg)
_(cJD,hKD)
_(oFD,cJD)
_(c6C,oFD)
_(f5C,c6C)
_(lIC,f5C)
var oLD=_n('view')
_rz(z,oLD,'class',135,e,s,gg)
var cMD=_n('view')
_rz(z,cMD,'class',136,e,s,gg)
var oND=_mz(z,'image',['mode',-1,'src',137],[],e,s,gg)
_(cMD,oND)
var lOD=_n('view')
_rz(z,lOD,'class',138,e,s,gg)
var aPD=_n('view')
_rz(z,aPD,'class',139,e,s,gg)
var tQD=_oz(z,140,e,s,gg)
_(aPD,tQD)
_(lOD,aPD)
var eRD=_mz(z,'score',['bind:__l',141,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(lOD,eRD)
var bSD=_n('view')
_rz(z,bSD,'class',145,e,s,gg)
var oTD=_oz(z,146,e,s,gg)
_(bSD,oTD)
_(lOD,bSD)
var xUD=_n('view')
_rz(z,xUD,'class',147,e,s,gg)
var oVD=_oz(z,148,e,s,gg)
_(xUD,oVD)
_(lOD,xUD)
_(cMD,lOD)
var fWD=_mz(z,'view',['bindtap',149,'class',1,'data-event-opts',2],[],e,s,gg)
var cXD=_mz(z,'image',['class',152,'src',1],[],e,s,gg)
_(fWD,cXD)
var hYD=_n('view')
var oZD=_oz(z,154,e,s,gg)
_(hYD,oZD)
_(fWD,hYD)
var c1D=_mz(z,'view',['animation',155,'class',1],[],e,s,gg)
var o2D=_oz(z,157,e,s,gg)
_(c1D,o2D)
_(fWD,c1D)
_(cMD,fWD)
_(oLD,cMD)
_(lIC,oLD)
var l3D=_n('view')
_rz(z,l3D,'class',158,e,s,gg)
var a4D=_n('view')
_rz(z,a4D,'class',159,e,s,gg)
var t5D=_mz(z,'image',['mode',-1,'src',160],[],e,s,gg)
_(a4D,t5D)
var e6D=_n('view')
_rz(z,e6D,'class',161,e,s,gg)
var b7D=_n('view')
_rz(z,b7D,'class',162,e,s,gg)
var o8D=_oz(z,163,e,s,gg)
_(b7D,o8D)
_(e6D,b7D)
var x9D=_mz(z,'score',['bind:__l',164,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(e6D,x9D)
var o0D=_n('view')
_rz(z,o0D,'class',168,e,s,gg)
var fAE=_oz(z,169,e,s,gg)
_(o0D,fAE)
_(e6D,o0D)
var cBE=_n('view')
_rz(z,cBE,'class',170,e,s,gg)
var hCE=_oz(z,171,e,s,gg)
_(cBE,hCE)
_(e6D,cBE)
_(a4D,e6D)
var oDE=_mz(z,'view',['bindtap',172,'class',1,'data-event-opts',2],[],e,s,gg)
var cEE=_mz(z,'image',['class',175,'src',1],[],e,s,gg)
_(oDE,cEE)
var oFE=_n('view')
var lGE=_oz(z,177,e,s,gg)
_(oFE,lGE)
_(oDE,oFE)
var aHE=_mz(z,'view',['animation',178,'class',1],[],e,s,gg)
var tIE=_oz(z,180,e,s,gg)
_(aHE,tIE)
_(oDE,aHE)
_(a4D,oDE)
_(l3D,a4D)
_(lIC,l3D)
var eJE=_n('view')
_rz(z,eJE,'class',181,e,s,gg)
var bKE=_n('view')
_rz(z,bKE,'class',182,e,s,gg)
var oLE=_mz(z,'image',['mode',-1,'src',183],[],e,s,gg)
_(bKE,oLE)
var xME=_n('view')
_rz(z,xME,'class',184,e,s,gg)
var oNE=_n('view')
_rz(z,oNE,'class',185,e,s,gg)
var fOE=_oz(z,186,e,s,gg)
_(oNE,fOE)
_(xME,oNE)
var cPE=_mz(z,'score',['bind:__l',187,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(xME,cPE)
var hQE=_n('view')
_rz(z,hQE,'class',191,e,s,gg)
var oRE=_oz(z,192,e,s,gg)
_(hQE,oRE)
_(xME,hQE)
var cSE=_n('view')
_rz(z,cSE,'class',193,e,s,gg)
var oTE=_oz(z,194,e,s,gg)
_(cSE,oTE)
_(xME,cSE)
_(bKE,xME)
var lUE=_mz(z,'view',['bindtap',195,'class',1,'data-event-opts',2],[],e,s,gg)
var aVE=_mz(z,'image',['class',198,'src',1],[],e,s,gg)
_(lUE,aVE)
var tWE=_n('view')
var eXE=_oz(z,200,e,s,gg)
_(tWE,eXE)
_(lUE,tWE)
var bYE=_mz(z,'view',['animation',201,'class',1],[],e,s,gg)
var oZE=_oz(z,203,e,s,gg)
_(bYE,oZE)
_(lUE,bYE)
_(bKE,lUE)
_(eJE,bKE)
_(lIC,eJE)
var x1E=_n('view')
_rz(z,x1E,'class',204,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',205,e,s,gg)
var f3E=_mz(z,'image',['mode',-1,'src',206],[],e,s,gg)
_(o2E,f3E)
var c4E=_n('view')
_rz(z,c4E,'class',207,e,s,gg)
var h5E=_n('view')
_rz(z,h5E,'class',208,e,s,gg)
var o6E=_oz(z,209,e,s,gg)
_(h5E,o6E)
_(c4E,h5E)
var c7E=_mz(z,'score',['bind:__l',210,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(c4E,c7E)
var o8E=_n('view')
_rz(z,o8E,'class',214,e,s,gg)
var l9E=_oz(z,215,e,s,gg)
_(o8E,l9E)
_(c4E,o8E)
var a0E=_n('view')
_rz(z,a0E,'class',216,e,s,gg)
var tAF=_oz(z,217,e,s,gg)
_(a0E,tAF)
_(c4E,a0E)
_(o2E,c4E)
var eBF=_mz(z,'view',['bindtap',218,'class',1,'data-event-opts',2],[],e,s,gg)
var bCF=_mz(z,'image',['class',221,'src',1],[],e,s,gg)
_(eBF,bCF)
var oDF=_n('view')
var xEF=_oz(z,223,e,s,gg)
_(oDF,xEF)
_(eBF,oDF)
var oFF=_mz(z,'view',['animation',224,'class',1],[],e,s,gg)
var fGF=_oz(z,226,e,s,gg)
_(oFF,fGF)
_(eBF,oFF)
_(o2E,eBF)
_(x1E,o2E)
_(lIC,x1E)
_(hU,lIC)
_(r,hU)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var hIF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oJF=_mz(z,'form',['bindsubmit',2,'data-event-opts',1],[],e,s,gg)
var cKF=_n('view')
_rz(z,cKF,'class',4,e,s,gg)
var oLF=_mz(z,'image',['mode',-1,'src',5],[],e,s,gg)
_(cKF,oLF)
_(oJF,cKF)
var lMF=_n('view')
_rz(z,lMF,'class',6,e,s,gg)
var aNF=_n('view')
_rz(z,aNF,'class',7,e,s,gg)
var tOF=_oz(z,8,e,s,gg)
_(aNF,tOF)
_(lMF,aNF)
var ePF=_mz(z,'input',['name',9,'placeholder',1,'type',2,'value',3],[],e,s,gg)
_(lMF,ePF)
_(oJF,lMF)
var bQF=_n('view')
_rz(z,bQF,'class',13,e,s,gg)
var oRF=_n('view')
_rz(z,oRF,'class',14,e,s,gg)
var xSF=_oz(z,15,e,s,gg)
_(oRF,xSF)
_(bQF,oRF)
var oTF=_mz(z,'input',['name',16,'password',1,'placeholder',2,'type',3,'value',4],[],e,s,gg)
_(bQF,oTF)
_(oJF,bQF)
var fUF=_n('view')
_rz(z,fUF,'class',21,e,s,gg)
var cVF=_mz(z,'view',['class',22,'hidden',1],[],e,s,gg)
var hWF=_oz(z,24,e,s,gg)
_(cVF,hWF)
_(fUF,cVF)
_(oJF,fUF)
var oXF=_mz(z,'button',['class',25,'formType',1,'type',2],[],e,s,gg)
var cYF=_oz(z,28,e,s,gg)
_(oXF,cYF)
_(oJF,oXF)
_(hIF,oJF)
var oZF=_n('view')
_rz(z,oZF,'class',29,e,s,gg)
var l1F=_mz(z,'image',['bindtap',30,'data-event-opts',1,'data-loginType',2,'src',3],[],e,s,gg)
_(oZF,l1F)
var a2F=_mz(z,'image',['bindtap',34,'data-event-opts',1,'data-loginType',2,'src',3],[],e,s,gg)
_(oZF,a2F)
var t3F=_mz(z,'image',['bindtap',38,'data-event-opts',1,'data-loginType',2,'src',3],[],e,s,gg)
_(oZF,t3F)
var e4F=_mz(z,'image',['bindtap',42,'data-event-opts',1,'src',2],[],e,s,gg)
_(oZF,e4F)
_(hIF,oZF)
_(r,hIF)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var o6F=_n('view')
_rz(z,o6F,'class',0,e,s,gg)
var x7F=_n('view')
_rz(z,x7F,'class',1,e,s,gg)
var o8F=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(x7F,o8F)
_(o6F,x7F)
var f9F=_n('view')
_rz(z,f9F,'class',4,e,s,gg)
var c0F=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var hAG=_oz(z,8,e,s,gg)
_(c0F,hAG)
_(f9F,c0F)
var oBG=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var cCG=_oz(z,12,e,s,gg)
_(oBG,cCG)
_(f9F,oBG)
_(o6F,f9F)
_(r,o6F)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lEG=_n('view')
_rz(z,lEG,'class',0,e,s,gg)
var aFG=_n('view')
_rz(z,aFG,'class',1,e,s,gg)
_(lEG,aFG)
var tGG=_n('view')
_rz(z,tGG,'class',2,e,s,gg)
var eHG=_n('view')
_rz(z,eHG,'class',3,e,s,gg)
var bIG=_oz(z,4,e,s,gg)
_(eHG,bIG)
_(tGG,eHG)
var oJG=_n('view')
_rz(z,oJG,'class',5,e,s,gg)
var xKG=_n('view')
_rz(z,xKG,'class',6,e,s,gg)
var oLG=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(xKG,oLG)
_(oJG,xKG)
var fMG=_n('view')
_rz(z,fMG,'class',9,e,s,gg)
var cNG=_mz(z,'input',['placeholder',10,'type',1,'value',2],[],e,s,gg)
_(fMG,cNG)
_(oJG,fMG)
_(tGG,oJG)
_(lEG,tGG)
var hOG=_n('view')
_rz(z,hOG,'class',13,e,s,gg)
var oPG=_v()
_(hOG,oPG)
var cQG=function(lSG,oRG,aTG,gg){
var eVG=_n('view')
_rz(z,eVG,'class',18,lSG,oRG,gg)
var bWG=_mz(z,'image',['class',19,'src',1],[],lSG,oRG,gg)
_(eVG,bWG)
var oXG=_n('text')
_rz(z,oXG,'class',21,lSG,oRG,gg)
var xYG=_oz(z,22,lSG,oRG,gg)
_(oXG,xYG)
_(eVG,oXG)
_(aTG,eVG)
return aTG
}
oPG.wxXCkey=2
_2z(z,16,cQG,e,s,gg,oPG,'movie','__i0__','id')
_(lEG,hOG)
_(r,lEG)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var f1G=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var c2G=_n('view')
_rz(z,c2G,'class',2,e,s,gg)
var c5G=_n('view')
_rz(z,c5G,'class',3,e,s,gg)
var o6G=_mz(z,'image',['mode',-1,'src',4],[],e,s,gg)
_(c5G,o6G)
_(c2G,c5G)
var h3G=_v()
_(c2G,h3G)
if(_oz(z,5,e,s,gg)){h3G.wxVkey=1
var l7G=_mz(z,'button',['bindtap',6,'data-event-opts',1],[],e,s,gg)
var a8G=_oz(z,8,e,s,gg)
_(l7G,a8G)
_(h3G,l7G)
}
else{h3G.wxVkey=2
var t9G=_n('view')
_rz(z,t9G,'class',9,e,s,gg)
var e0G=_n('view')
_rz(z,e0G,'class',10,e,s,gg)
var bAH=_oz(z,11,e,s,gg)
_(e0G,bAH)
_(t9G,e0G)
var oBH=_n('view')
_rz(z,oBH,'class',12,e,s,gg)
var xCH=_oz(z,13,e,s,gg)
_(oBH,xCH)
_(t9G,oBH)
_(h3G,t9G)
}
var o4G=_v()
_(c2G,o4G)
if(_oz(z,14,e,s,gg)){o4G.wxVkey=1
var oDH=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var fEH=_mz(z,'image',['mode',-1,'src',18],[],e,s,gg)
_(oDH,fEH)
_(o4G,oDH)
}
h3G.wxXCkey=1
o4G.wxXCkey=1
_(f1G,c2G)
_(r,f1G)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var hGH=_n('view')
_rz(z,hGH,'class',0,e,s,gg)
var oHH=_n('view')
_rz(z,oHH,'class',1,e,s,gg)
var cIH=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oJH=_n('view')
_rz(z,oJH,'class',5,e,s,gg)
var lKH=_oz(z,6,e,s,gg)
_(oJH,lKH)
_(cIH,oJH)
var aLH=_n('view')
_rz(z,aLH,'class',7,e,s,gg)
var tMH=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(aLH,tMH)
var eNH=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
_(aLH,eNH)
_(cIH,aLH)
_(oHH,cIH)
var bOH=_n('view')
_rz(z,bOH,'class',12,e,s,gg)
var oPH=_n('view')
_rz(z,oPH,'class',13,e,s,gg)
var xQH=_oz(z,14,e,s,gg)
_(oPH,xQH)
_(bOH,oPH)
var oRH=_n('view')
_rz(z,oRH,'class',15,e,s,gg)
var fSH=_n('view')
_rz(z,fSH,'class',16,e,s,gg)
var cTH=_oz(z,17,e,s,gg)
_(fSH,cTH)
_(oRH,fSH)
var hUH=_mz(z,'image',['class',18,'src',1],[],e,s,gg)
_(oRH,hUH)
_(bOH,oRH)
_(oHH,bOH)
var oVH=_n('view')
_rz(z,oVH,'class',20,e,s,gg)
var cWH=_n('view')
_rz(z,cWH,'class',21,e,s,gg)
var oXH=_oz(z,22,e,s,gg)
_(cWH,oXH)
_(oVH,cWH)
var lYH=_n('view')
_rz(z,lYH,'class',23,e,s,gg)
var aZH=_n('view')
_rz(z,aZH,'class',24,e,s,gg)
var t1H=_oz(z,25,e,s,gg)
_(aZH,t1H)
_(lYH,aZH)
var e2H=_mz(z,'image',['class',26,'src',1],[],e,s,gg)
_(lYH,e2H)
_(oVH,lYH)
_(oHH,oVH)
var b3H=_n('view')
_rz(z,b3H,'class',28,e,s,gg)
var o4H=_n('view')
_rz(z,o4H,'class',29,e,s,gg)
var x5H=_oz(z,30,e,s,gg)
_(o4H,x5H)
_(b3H,o4H)
var o6H=_n('view')
_rz(z,o6H,'class',31,e,s,gg)
var f7H=_n('view')
_rz(z,f7H,'class',32,e,s,gg)
var c8H=_oz(z,33,e,s,gg)
_(f7H,c8H)
_(o6H,f7H)
var h9H=_mz(z,'image',['class',34,'src',1],[],e,s,gg)
_(o6H,h9H)
_(b3H,o6H)
_(oHH,b3H)
_(hGH,oHH)
var o0H=_n('view')
_rz(z,o0H,'class',36,e,s,gg)
var cAI=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],e,s,gg)
var oBI=_oz(z,40,e,s,gg)
_(cAI,oBI)
_(o0H,cAI)
var lCI=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var aDI=_oz(z,44,e,s,gg)
_(lCI,aDI)
_(o0H,lCI)
_(hGH,o0H)
_(r,hGH)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/score/score.wxss']=setCssToHead([".",[1],"movieScore { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,20],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"movieScore wx-image { width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movieScore .",[1],"movieNum { margin-left: ",[0,20],"; font-size: 12px; color: #808080; }\n",],undefined,{path:"./components/score/score.wxss"});    
__wxAppCode__['components/score/score.wxml']=$gwx('./components/score/score.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"movieScore { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,20],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"movieScore wx-image { width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movieScore .",[1],"movieNum { margin-left: ",[0,20],"; font-size: 12px; color: #808080; }\n.",[1],"page{ background: #F7F7F7; border: 1px solid lightslategrey; margin-top: var(--status-bar-height); }\n.",[1],"statusBar{ display: block; position: fixed; height: var(--status-bar-height); width: 100%; top: 0; z-index: 1; background: #FFFFFF; }\n.",[1],"page-block{ background: #FFFFFF; marign-top: ",[0,20],"; }\n.",[1],"page .",[1],"swiper{ width: ",[0,750],"; height: ",[0,440],"; }\n.",[1],"page .",[1],"swiper wx-image{ width: ",[0,750],"; height: ",[0,440],"; display: inline-block; }\n.",[1],"hot{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"page-block .",[1],"title{ margin: ",[0,10]," ",[0,20],"; font-weight: bold; }\n.",[1],"title wx-image{ width: ",[0,30],"; height: ",[0,30],"; display: inline-block; }\n.",[1],"title wx-text{ margin-left: ",[0,20],"; }\n.",[1],"scroll{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 100%; white-space: nowrap; }\n.",[1],"scroll .",[1],"item{ display: inline-block; margin: ",[0,20],"; margin-bottom: ",[0,30],"; }\n.",[1],"item .",[1],"poster{ width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"item .",[1],"movieName{ width: ",[0,200],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }\n.",[1],"hotMovie{ }\n.",[1],"movies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,10]," ",[0,20]," ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"movies wx-video{ width: ",[0,340],"; height: ",[0,200],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like{ }\n.",[1],"guessLikeMovies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding: ",[0,20],"; }\n.",[1],"likeMovie{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"likeMovie wx-image{ width: ",[0,180],"; height: ",[0,240],"; }\n.",[1],"likeMovie .",[1],"movieDetail{ width: 40%; }\n.",[1],"likeMovie .",[1],"movieDetail .",[1],"movieTitle{ white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"likeMovie .",[1],"movieDetail .",[1],"movieCategory, .",[1],"likeMovie .",[1],"movieDetail .",[1],"movieTime{ font-size: 14px; color: #808080; }\n.",[1],"likeMovie .",[1],"praise{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,140],"; border-left: dashed; border-left-color: #dbdbdb; }\n.",[1],"likeMovie .",[1],"praise wx-image{ width: ",[0,32],"; height: ",[0,32],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"likeMovie .",[1],"praise wx-view{ font-size: ",[0,28],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; color: orange; }\n.",[1],"praise .",[1],"animation{ opacity: 0; color: orange; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead([".",[1],"page{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\nwx-form{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100vw; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"picture{ margin-bottom: ",[0,100],"; margin-top: ",[0,200],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"picture wx-image{ width: ",[0,160],"; height: ",[0,160],"; margin: auto; }\n.",[1],"username, .",[1],"password{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 70vw; border-bottom: 1px solid #999999; margin-top: ",[0,40],"; height: ",[0,60],"; }\n.",[1],"username .",[1],"text, .",[1],"password .",[1],"text{ font-size: 16px; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; color: rgba(153,153,153); width: ",[0,100],"; }\n.",[1],"username wx-input, .",[1],"password wx-input{ -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; font-size: 16px; }\n.",[1],"username.",[1],"active, .",[1],"password.",[1],"active{ border-bottom: 1px solid red; }\n.",[1],"tipsWrapper{ margin-top: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"tips{ height: ",[0,30],"; line-height: ",[0,30],"; color: red; font-size: 15px; }\n.",[1],"login{ width: 80%; margin-top: ",[0,80],"; }\n.",[1],"auth{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-top: ",[0,80],"; }\nwx-image{ width: ",[0,80],"; height: ",[0,80],"; margin: ",[0,32],"; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/meface/meface.wxss']=setCssToHead([".",[1],"page { background: #000000; color: white; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: calc(100vh - 45px); }\n.",[1],"page .",[1],"main { height: 100%; width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"main wx-image{ }\n.",[1],"page .",[1],"container { height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; border-top: 1px solid lightgrey; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: 16px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"confirm {}\n",],undefined,{path:"./pages/meface/meface.wxss"});    
__wxAppCode__['pages/meface/meface.wxml']=$gwx('./pages/meface/meface.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"page{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background: #F7F7F7; }\n.",[1],"statusBar{ display: block; position: fixed; height: var(--status-bar-height); width: 100%; top: 0; z-index: 1; background: #FFFFFF; }\n.",[1],"header{ margin-top: var(--status-bar-height); }\n.",[1],"title{ font-weight: bold; position: fixed; z-index: 200; width: 100%; text-align: center; background: #FFFFFF; line-height: ",[0,80],"; }\n.",[1],"searchWrapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding:0 ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; z-index: 200; width: 95vw; top:200; margin-top: ",[0,80],"; padding-right: ",[0,20],"; background: #FFFFFF; }\n.",[1],"searchIconWrapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #EAEAEA; padding: ",[0,10]," 0; }\n.",[1],"searchIconWrapper wx-image{ width: ",[0,40],"; height: ",[0,40],"; margin: ",[0,0]," ",[0,10],"; }\n.",[1],"inputWrapper{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; background: #EAEAEA; font-size: 14px; padding: ",[0,10]," 0; }\nwx-input{ width: ",[0,325],"; }\n.",[1],"main{ padding: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-top: ",[0,150],"; }\n.",[1],"movie{ margin-bottom: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movieName{ margin-top: ",[0,6],"; font-size: 12px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; width: ",[0,200],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/user/user.wxss']=setCssToHead([".",[1],"page{ width: 100%; }\n.",[1],"header{ background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_1OAYFAIAAAzO_Q1tPg693.png); height: 40%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,40],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; }\n.",[1],"picture{ width: ",[0,120],"; height:",[0,120],"; border-radius: 50%; }\n.",[1],"picture wx-image{ width: ",[0,120],"; height:",[0,120],"; }\nwx-button{ background: transparent; margin-left: ",[0,20],"; font-weight: bold; }\nwx-button.",[1],"active{ background: transparent; border: 1px solid red; }\nwx-button:after{ border: 1px solid transparent !important; }\n.",[1],"userInfo{ margin-left: ",[0,40],"; }\n.",[1],"username{ font-size: ",[0,32],"; font-weight: bold; margin-bottom: ",[0,12],"; }\n.",[1],"userid{ font-size: ",[0,28],"; color: rgba(0,0,0,0.5); }\n.",[1],"modify{ }\n.",[1],"modify wx-image{ width: ",[0,40],"; height: ",[0,40],"; right: ",[0,40],"; position: absolute; top: 50%; -webkit-transform: translatey(-50%); -ms-transform: translatey(-50%); transform: translatey(-50%); }\n.",[1],"page{ }\n",],undefined,{path:"./pages/user/user.wxss"});    
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/userinfo/userinfo.wxss']=setCssToHead([".",[1],"page{ }\n.",[1],"infoWrapper { padding: 0 ",[0,20],"; }\n.",[1],"line { border-bottom: 1px solid lightgrey; line-height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background: #FFFFFF; }\n.",[1],"title { width: 20%; -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start; }\n.",[1],"right { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 80%; color: lightgrey; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"right-icon { width: ",[0,40],"; height: ",[0,40],"; color: lightblue; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; margin-left: ",[0,20],"; }\n.",[1],"avatar { width: ",[0,80],"; height: ",[0,80],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; border-radius: 50%; }\n.",[1],"container{ width: 100%; position: fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"container wx-view{ text-align: center; padding: ",[0,20],"; border-bottom: 1px solid lightgrey; }\n",],undefined,{path:"./pages/userinfo/userinfo.wxss"});    
__wxAppCode__['pages/userinfo/userinfo.wxml']=$gwx('./pages/userinfo/userinfo.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
