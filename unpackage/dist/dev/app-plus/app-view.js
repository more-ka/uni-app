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
Z([1,true])
Z(z[1])
Z([3,'swiper page-block'])
Z([1,500])
Z(z[1])
Z([1,3000])
Z([3,'swiper-item'])
Z([3,'../../static/carousel/batmanvssuperman.png'])
Z(z[7])
Z([3,'../../static/carousel/spiderman.png'])
Z(z[7])
Z(z[8])
Z(z[7])
Z(z[10])
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
Z([1,2.7])
Z(z[1])
Z([3,'1'])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z([1,6.7])
Z(z[1])
Z([3,'2'])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[36])
Z(z[1])
Z([3,'3'])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[36])
Z(z[1])
Z([3,'4'])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[36])
Z(z[1])
Z([3,'5'])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[36])
Z(z[1])
Z([3,'6'])
Z([3,'hotMovie page-block'])
Z(z[16])
Z([3,'../../static/icos/interest.png'])
Z([3,'热门预告'])
Z([3,'movies'])
Z([3,'http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png'])
Z([3,'http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4'])
Z(z[80])
Z(z[81])
Z([3,'guess-u-like page-block'])
Z(z[16])
Z([3,'../../static/icos/guess-u-like.png'])
Z([3,'猜你喜欢'])
Z([3,'guessLikeMovies'])
Z([3,'likeMovie'])
Z([3,'http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png'])
Z([3,'movieDetail'])
Z([3,'movieTitle'])
Z([3,'秦时明月之沧海横流'])
Z(z[26])
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
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[26])
Z(z[95])
Z(z[96])
Z([3,'8'])
Z(z[98])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[105])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[104])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[26])
Z(z[95])
Z(z[96])
Z([3,'9'])
Z(z[98])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[105])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[104])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[26])
Z(z[95])
Z(z[96])
Z([3,'10'])
Z(z[98])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[105])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[104])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[26])
Z(z[95])
Z(z[96])
Z([3,'11'])
Z(z[98])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[105])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[104])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[110])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[92])
Z(z[93])
Z(z[26])
Z(z[95])
Z(z[96])
Z([3,'12'])
Z(z[98])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[105])
Z(z[102])
Z(z[106])
Z(z[103])
Z(z[104])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[110])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'pageHeight']],[1,'px']]],[1,';']])
Z([3,'picture'])
Z([3,'../../static/icos/default-face.png'])
Z([3,'username'])
Z([3,'text'])
Z([3,'账号'])
Z([3,'请输入用户名'])
Z(z[5])
Z([3,'password'])
Z(z[5])
Z([3,'密码'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[5])
Z([3,'login'])
Z([3,'primary'])
Z([3,'注册/登录'])
Z([3,'auth'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'auth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/icos/weixin.png'])
Z(z[19])
Z(z[20])
Z([3,'qq'])
Z([3,'../../static/icos/QQ.png'])
Z(z[19])
Z(z[20])
Z([3,'sinaweibo'])
Z([3,'../../static/icos/weibo.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
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
Z(z[13])
Z([3,'poster'])
Z([[6],[[7],[3,'movie']],[3,'cover']])
Z([3,'movieName'])
Z([a,[[6],[[7],[3,'movie']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'height']],[1,'px']]],[1,';']])
Z([3,'header'])
Z([3,'picture'])
Z([3,'../../static/icos/default-face.png'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'login']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'注册/登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/score/score.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/search/search.wxml','./pages/user/user.wxml'];d_[x[0]]={}
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
var oV=_mz(z,'swiper',['autoplay',1,'circular',1,'class',2,'duration',3,'indicatorDots',4,'interval',5],[],e,s,gg)
var cW=_n('swiper-item')
var oX=_n('view')
_rz(z,oX,'class',7,e,s,gg)
var lY=_mz(z,'image',['mode',-1,'src',8],[],e,s,gg)
_(oX,lY)
_(cW,oX)
_(oV,cW)
var aZ=_n('swiper-item')
var t1=_n('view')
_rz(z,t1,'class',9,e,s,gg)
var e2=_mz(z,'image',['mode',-1,'src',10],[],e,s,gg)
_(t1,e2)
_(aZ,t1)
_(oV,aZ)
var b3=_n('swiper-item')
var o4=_n('view')
_rz(z,o4,'class',11,e,s,gg)
var x5=_mz(z,'image',['mode',-1,'src',12],[],e,s,gg)
_(o4,x5)
_(b3,o4)
_(oV,b3)
var o6=_n('swiper-item')
var f7=_n('view')
_rz(z,f7,'class',13,e,s,gg)
var c8=_mz(z,'image',['mode',-1,'src',14],[],e,s,gg)
_(f7,c8)
_(o6,f7)
_(oV,o6)
_(hU,oV)
var h9=_n('view')
_rz(z,h9,'class',15,e,s,gg)
var o0=_n('view')
_rz(z,o0,'class',16,e,s,gg)
var cAB=_n('image')
_rz(z,cAB,'src',17,e,s,gg)
_(o0,cAB)
var oBB=_n('text')
var lCB=_oz(z,18,e,s,gg)
_(oBB,lCB)
_(o0,oBB)
_(h9,o0)
var aDB=_mz(z,'scroll-view',['class',19,'scrollX',1],[],e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',21,e,s,gg)
var eFB=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(tEB,eFB)
var bGB=_n('view')
_rz(z,bGB,'class',24,e,s,gg)
var oHB=_oz(z,25,e,s,gg)
_(bGB,oHB)
_(tEB,bGB)
var xIB=_mz(z,'score',['bind:__l',26,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(tEB,xIB)
_(aDB,tEB)
var oJB=_n('view')
_rz(z,oJB,'class',30,e,s,gg)
var fKB=_mz(z,'image',['class',31,'src',1],[],e,s,gg)
_(oJB,fKB)
var cLB=_n('view')
_rz(z,cLB,'class',33,e,s,gg)
var hMB=_oz(z,34,e,s,gg)
_(cLB,hMB)
_(oJB,cLB)
var oNB=_mz(z,'score',['bind:__l',35,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(oJB,oNB)
_(aDB,oJB)
var cOB=_n('view')
_rz(z,cOB,'class',39,e,s,gg)
var oPB=_mz(z,'image',['class',40,'src',1],[],e,s,gg)
_(cOB,oPB)
var lQB=_n('view')
_rz(z,lQB,'class',42,e,s,gg)
var aRB=_oz(z,43,e,s,gg)
_(lQB,aRB)
_(cOB,lQB)
var tSB=_mz(z,'score',['bind:__l',44,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(cOB,tSB)
_(aDB,cOB)
var eTB=_n('view')
_rz(z,eTB,'class',48,e,s,gg)
var bUB=_mz(z,'image',['class',49,'src',1],[],e,s,gg)
_(eTB,bUB)
var oVB=_n('view')
_rz(z,oVB,'class',51,e,s,gg)
var xWB=_oz(z,52,e,s,gg)
_(oVB,xWB)
_(eTB,oVB)
var oXB=_mz(z,'score',['bind:__l',53,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(eTB,oXB)
_(aDB,eTB)
var fYB=_n('view')
_rz(z,fYB,'class',57,e,s,gg)
var cZB=_mz(z,'image',['class',58,'src',1],[],e,s,gg)
_(fYB,cZB)
var h1B=_n('view')
_rz(z,h1B,'class',60,e,s,gg)
var o2B=_oz(z,61,e,s,gg)
_(h1B,o2B)
_(fYB,h1B)
var c3B=_mz(z,'score',['bind:__l',62,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(fYB,c3B)
_(aDB,fYB)
var o4B=_n('view')
_rz(z,o4B,'class',66,e,s,gg)
var l5B=_mz(z,'image',['class',67,'src',1],[],e,s,gg)
_(o4B,l5B)
var a6B=_n('view')
_rz(z,a6B,'class',69,e,s,gg)
var t7B=_oz(z,70,e,s,gg)
_(a6B,t7B)
_(o4B,a6B)
var e8B=_mz(z,'score',['bind:__l',71,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(o4B,e8B)
_(aDB,o4B)
_(h9,aDB)
var b9B=_n('view')
_(h9,b9B)
_(hU,h9)
var o0B=_n('view')
_rz(z,o0B,'class',75,e,s,gg)
var xAC=_n('view')
_rz(z,xAC,'class',76,e,s,gg)
var oBC=_n('image')
_rz(z,oBC,'src',77,e,s,gg)
_(xAC,oBC)
var fCC=_n('text')
var cDC=_oz(z,78,e,s,gg)
_(fCC,cDC)
_(xAC,fCC)
_(o0B,xAC)
var hEC=_n('view')
_rz(z,hEC,'class',79,e,s,gg)
var oFC=_mz(z,'video',['poster',80,'src',1],[],e,s,gg)
_(hEC,oFC)
var cGC=_mz(z,'video',['poster',82,'src',1],[],e,s,gg)
_(hEC,cGC)
_(o0B,hEC)
_(hU,o0B)
var oHC=_n('view')
_rz(z,oHC,'class',84,e,s,gg)
var lIC=_n('view')
_rz(z,lIC,'class',85,e,s,gg)
var aJC=_n('image')
_rz(z,aJC,'src',86,e,s,gg)
_(lIC,aJC)
var tKC=_n('text')
var eLC=_oz(z,87,e,s,gg)
_(tKC,eLC)
_(lIC,tKC)
_(oHC,lIC)
var bMC=_n('view')
_rz(z,bMC,'class',88,e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',89,e,s,gg)
var xOC=_mz(z,'image',['mode',-1,'src',90],[],e,s,gg)
_(oNC,xOC)
var oPC=_n('view')
_rz(z,oPC,'class',91,e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',92,e,s,gg)
var cRC=_oz(z,93,e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
var hSC=_mz(z,'score',['bind:__l',94,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(oPC,hSC)
var oTC=_n('view')
_rz(z,oTC,'class',98,e,s,gg)
var cUC=_oz(z,99,e,s,gg)
_(oTC,cUC)
_(oPC,oTC)
var oVC=_n('view')
_rz(z,oVC,'class',100,e,s,gg)
var lWC=_oz(z,101,e,s,gg)
_(oVC,lWC)
_(oPC,oVC)
_(oNC,oPC)
var aXC=_n('view')
_rz(z,aXC,'class',102,e,s,gg)
var tYC=_mz(z,'image',['class',103,'src',1],[],e,s,gg)
_(aXC,tYC)
var eZC=_mz(z,'view',['bindtap',105,'data-event-opts',1],[],e,s,gg)
var b1C=_oz(z,107,e,s,gg)
_(eZC,b1C)
_(aXC,eZC)
var o2C=_mz(z,'view',['animation',108,'class',1],[],e,s,gg)
var x3C=_oz(z,110,e,s,gg)
_(o2C,x3C)
_(aXC,o2C)
_(oNC,aXC)
_(bMC,oNC)
_(oHC,bMC)
var o4C=_n('view')
_rz(z,o4C,'class',111,e,s,gg)
var f5C=_n('view')
_rz(z,f5C,'class',112,e,s,gg)
var c6C=_mz(z,'image',['mode',-1,'src',113],[],e,s,gg)
_(f5C,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',114,e,s,gg)
var o8C=_n('view')
_rz(z,o8C,'class',115,e,s,gg)
var c9C=_oz(z,116,e,s,gg)
_(o8C,c9C)
_(h7C,o8C)
var o0C=_mz(z,'score',['bind:__l',117,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(h7C,o0C)
var lAD=_n('view')
_rz(z,lAD,'class',121,e,s,gg)
var aBD=_oz(z,122,e,s,gg)
_(lAD,aBD)
_(h7C,lAD)
var tCD=_n('view')
_rz(z,tCD,'class',123,e,s,gg)
var eDD=_oz(z,124,e,s,gg)
_(tCD,eDD)
_(h7C,tCD)
_(f5C,h7C)
var bED=_mz(z,'view',['bindtap',125,'class',1,'data-event-opts',2],[],e,s,gg)
var oFD=_mz(z,'image',['class',128,'src',1],[],e,s,gg)
_(bED,oFD)
var xGD=_n('view')
var oHD=_oz(z,130,e,s,gg)
_(xGD,oHD)
_(bED,xGD)
var fID=_mz(z,'view',['animation',131,'class',1],[],e,s,gg)
var cJD=_oz(z,133,e,s,gg)
_(fID,cJD)
_(bED,fID)
_(f5C,bED)
_(o4C,f5C)
_(oHC,o4C)
var hKD=_n('view')
_rz(z,hKD,'class',134,e,s,gg)
var oLD=_n('view')
_rz(z,oLD,'class',135,e,s,gg)
var cMD=_mz(z,'image',['mode',-1,'src',136],[],e,s,gg)
_(oLD,cMD)
var oND=_n('view')
_rz(z,oND,'class',137,e,s,gg)
var lOD=_n('view')
_rz(z,lOD,'class',138,e,s,gg)
var aPD=_oz(z,139,e,s,gg)
_(lOD,aPD)
_(oND,lOD)
var tQD=_mz(z,'score',['bind:__l',140,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(oND,tQD)
var eRD=_n('view')
_rz(z,eRD,'class',144,e,s,gg)
var bSD=_oz(z,145,e,s,gg)
_(eRD,bSD)
_(oND,eRD)
var oTD=_n('view')
_rz(z,oTD,'class',146,e,s,gg)
var xUD=_oz(z,147,e,s,gg)
_(oTD,xUD)
_(oND,oTD)
_(oLD,oND)
var oVD=_mz(z,'view',['bindtap',148,'class',1,'data-event-opts',2],[],e,s,gg)
var fWD=_mz(z,'image',['class',151,'src',1],[],e,s,gg)
_(oVD,fWD)
var cXD=_n('view')
var hYD=_oz(z,153,e,s,gg)
_(cXD,hYD)
_(oVD,cXD)
var oZD=_mz(z,'view',['animation',154,'class',1],[],e,s,gg)
var c1D=_oz(z,156,e,s,gg)
_(oZD,c1D)
_(oVD,oZD)
_(oLD,oVD)
_(hKD,oLD)
_(oHC,hKD)
var o2D=_n('view')
_rz(z,o2D,'class',157,e,s,gg)
var l3D=_n('view')
_rz(z,l3D,'class',158,e,s,gg)
var a4D=_mz(z,'image',['mode',-1,'src',159],[],e,s,gg)
_(l3D,a4D)
var t5D=_n('view')
_rz(z,t5D,'class',160,e,s,gg)
var e6D=_n('view')
_rz(z,e6D,'class',161,e,s,gg)
var b7D=_oz(z,162,e,s,gg)
_(e6D,b7D)
_(t5D,e6D)
var o8D=_mz(z,'score',['bind:__l',163,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(t5D,o8D)
var x9D=_n('view')
_rz(z,x9D,'class',167,e,s,gg)
var o0D=_oz(z,168,e,s,gg)
_(x9D,o0D)
_(t5D,x9D)
var fAE=_n('view')
_rz(z,fAE,'class',169,e,s,gg)
var cBE=_oz(z,170,e,s,gg)
_(fAE,cBE)
_(t5D,fAE)
_(l3D,t5D)
var hCE=_mz(z,'view',['bindtap',171,'class',1,'data-event-opts',2],[],e,s,gg)
var oDE=_mz(z,'image',['class',174,'src',1],[],e,s,gg)
_(hCE,oDE)
var cEE=_n('view')
var oFE=_oz(z,176,e,s,gg)
_(cEE,oFE)
_(hCE,cEE)
var lGE=_mz(z,'view',['animation',177,'class',1],[],e,s,gg)
var aHE=_oz(z,179,e,s,gg)
_(lGE,aHE)
_(hCE,lGE)
_(l3D,hCE)
_(o2D,l3D)
_(oHC,o2D)
var tIE=_n('view')
_rz(z,tIE,'class',180,e,s,gg)
var eJE=_n('view')
_rz(z,eJE,'class',181,e,s,gg)
var bKE=_mz(z,'image',['mode',-1,'src',182],[],e,s,gg)
_(eJE,bKE)
var oLE=_n('view')
_rz(z,oLE,'class',183,e,s,gg)
var xME=_n('view')
_rz(z,xME,'class',184,e,s,gg)
var oNE=_oz(z,185,e,s,gg)
_(xME,oNE)
_(oLE,xME)
var fOE=_mz(z,'score',['bind:__l',186,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(oLE,fOE)
var cPE=_n('view')
_rz(z,cPE,'class',190,e,s,gg)
var hQE=_oz(z,191,e,s,gg)
_(cPE,hQE)
_(oLE,cPE)
var oRE=_n('view')
_rz(z,oRE,'class',192,e,s,gg)
var cSE=_oz(z,193,e,s,gg)
_(oRE,cSE)
_(oLE,oRE)
_(eJE,oLE)
var oTE=_mz(z,'view',['bindtap',194,'class',1,'data-event-opts',2],[],e,s,gg)
var lUE=_mz(z,'image',['class',197,'src',1],[],e,s,gg)
_(oTE,lUE)
var aVE=_n('view')
var tWE=_oz(z,199,e,s,gg)
_(aVE,tWE)
_(oTE,aVE)
var eXE=_mz(z,'view',['animation',200,'class',1],[],e,s,gg)
var bYE=_oz(z,202,e,s,gg)
_(eXE,bYE)
_(oTE,eXE)
_(eJE,oTE)
_(tIE,eJE)
_(oHC,tIE)
var oZE=_n('view')
_rz(z,oZE,'class',203,e,s,gg)
var x1E=_n('view')
_rz(z,x1E,'class',204,e,s,gg)
var o2E=_mz(z,'image',['mode',-1,'src',205],[],e,s,gg)
_(x1E,o2E)
var f3E=_n('view')
_rz(z,f3E,'class',206,e,s,gg)
var c4E=_n('view')
_rz(z,c4E,'class',207,e,s,gg)
var h5E=_oz(z,208,e,s,gg)
_(c4E,h5E)
_(f3E,c4E)
var o6E=_mz(z,'score',['bind:__l',209,'movieScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(f3E,o6E)
var c7E=_n('view')
_rz(z,c7E,'class',213,e,s,gg)
var o8E=_oz(z,214,e,s,gg)
_(c7E,o8E)
_(f3E,c7E)
var l9E=_n('view')
_rz(z,l9E,'class',215,e,s,gg)
var a0E=_oz(z,216,e,s,gg)
_(l9E,a0E)
_(f3E,l9E)
_(x1E,f3E)
var tAF=_mz(z,'view',['bindtap',217,'class',1,'data-event-opts',2],[],e,s,gg)
var eBF=_mz(z,'image',['class',220,'src',1],[],e,s,gg)
_(tAF,eBF)
var bCF=_n('view')
var oDF=_oz(z,222,e,s,gg)
_(bCF,oDF)
_(tAF,bCF)
var xEF=_mz(z,'view',['animation',223,'class',1],[],e,s,gg)
var oFF=_oz(z,225,e,s,gg)
_(xEF,oFF)
_(tAF,xEF)
_(x1E,tAF)
_(oZE,x1E)
_(oHC,oZE)
_(hU,oHC)
_(r,hU)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cHF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var hIF=_n('view')
_rz(z,hIF,'class',2,e,s,gg)
var oJF=_mz(z,'image',['mode',-1,'src',3],[],e,s,gg)
_(hIF,oJF)
_(cHF,hIF)
var cKF=_n('view')
_rz(z,cKF,'class',4,e,s,gg)
var oLF=_n('view')
_rz(z,oLF,'class',5,e,s,gg)
var lMF=_oz(z,6,e,s,gg)
_(oLF,lMF)
_(cKF,oLF)
var aNF=_mz(z,'input',['placeholder',7,'type',1],[],e,s,gg)
_(cKF,aNF)
_(cHF,cKF)
var tOF=_n('view')
_rz(z,tOF,'class',9,e,s,gg)
var ePF=_n('view')
_rz(z,ePF,'class',10,e,s,gg)
var bQF=_oz(z,11,e,s,gg)
_(ePF,bQF)
_(tOF,ePF)
var oRF=_mz(z,'input',['password',12,'placeholder',1,'type',2],[],e,s,gg)
_(tOF,oRF)
_(cHF,tOF)
var xSF=_mz(z,'button',['class',15,'type',1],[],e,s,gg)
var oTF=_oz(z,17,e,s,gg)
_(xSF,oTF)
_(cHF,xSF)
var fUF=_n('view')
_rz(z,fUF,'class',18,e,s,gg)
var cVF=_mz(z,'image',['bindtap',19,'data-event-opts',1,'data-loginType',2,'src',3],[],e,s,gg)
_(fUF,cVF)
var hWF=_mz(z,'image',['bindtap',23,'data-event-opts',1,'data-loginType',2,'src',3],[],e,s,gg)
_(fUF,hWF)
var oXF=_mz(z,'image',['bindtap',27,'data-event-opts',1,'data-loginType',2,'src',3],[],e,s,gg)
_(fUF,oXF)
_(cHF,fUF)
_(r,cHF)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oZF=_n('view')
_rz(z,oZF,'class',0,e,s,gg)
var l1F=_n('view')
_rz(z,l1F,'class',1,e,s,gg)
var a2F=_oz(z,2,e,s,gg)
_(l1F,a2F)
_(oZF,l1F)
var t3F=_n('view')
_rz(z,t3F,'class',3,e,s,gg)
var e4F=_n('view')
_rz(z,e4F,'class',4,e,s,gg)
var b5F=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(e4F,b5F)
_(t3F,e4F)
var o6F=_n('view')
_rz(z,o6F,'class',7,e,s,gg)
var x7F=_mz(z,'input',['placeholder',8,'type',1,'value',2],[],e,s,gg)
_(o6F,x7F)
_(t3F,o6F)
_(oZF,t3F)
var o8F=_n('view')
_rz(z,o8F,'class',11,e,s,gg)
var f9F=_v()
_(o8F,f9F)
var c0F=function(oBG,hAG,cCG,gg){
var lEG=_n('view')
_rz(z,lEG,'class',16,oBG,hAG,gg)
var aFG=_mz(z,'image',['class',17,'src',1],[],oBG,hAG,gg)
_(lEG,aFG)
var tGG=_n('text')
_rz(z,tGG,'class',19,oBG,hAG,gg)
var eHG=_oz(z,20,oBG,hAG,gg)
_(tGG,eHG)
_(lEG,tGG)
_(cCG,lEG)
return cCG
}
f9F.wxXCkey=2
_2z(z,14,c0F,e,s,gg,f9F,'movie','__i0__','id')
_(oZF,o8F)
_(r,oZF)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oJG=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xKG=_n('view')
_rz(z,xKG,'class',2,e,s,gg)
var oLG=_n('view')
_rz(z,oLG,'class',3,e,s,gg)
var fMG=_mz(z,'image',['mode',-1,'src',4],[],e,s,gg)
_(oLG,fMG)
_(xKG,oLG)
var cNG=_mz(z,'button',['bindtap',5,'data-event-opts',1],[],e,s,gg)
var hOG=_oz(z,7,e,s,gg)
_(cNG,hOG)
_(xKG,cNG)
_(oJG,xKG)
_(r,oJG)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
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

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"movieScore { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,20],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"movieScore wx-image { width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movieScore .",[1],"movieNum { margin-left: ",[0,20],"; font-size: 12px; color: #808080; }\n.",[1],"page{ background: #F7F7F7; border: 1px solid lightslategrey; }\n.",[1],"page-block{ background: #FFFFFF; marign-top: ",[0,20],"; }\n.",[1],"page .",[1],"swiper{ width: ",[0,750],"; height: ",[0,440],"; }\n.",[1],"page .",[1],"swiper wx-image{ width: ",[0,750],"; height: ",[0,440],"; display: inline-block; }\n.",[1],"hot{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"page-block .",[1],"title{ margin: ",[0,10]," ",[0,20],"; font-weight: bold; }\n.",[1],"title wx-image{ width: ",[0,30],"; height: ",[0,30],"; display: inline-block; }\n.",[1],"title wx-text{ margin-left: ",[0,20],"; }\n.",[1],"scroll{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 100%; white-space: nowrap; }\n.",[1],"scroll .",[1],"item{ display: inline-block; margin: ",[0,20],"; }\n.",[1],"item .",[1],"poster{ width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"item .",[1],"movieName{ width: ",[0,200],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }\n.",[1],"hotMovie{ }\n.",[1],"movies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"movies wx-video{ width: ",[0,340],"; height: ",[0,200],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like{ }\n.",[1],"guessLikeMovies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding: ",[0,20],"; }\n.",[1],"likeMovie{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"likeMovie wx-image{ width: ",[0,180],"; height: ",[0,240],"; }\n.",[1],"likeMovie .",[1],"movieDetail{ width: 40%; }\n.",[1],"likeMovie .",[1],"movieDetail .",[1],"movieTitle{ white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"likeMovie .",[1],"movieDetail .",[1],"movieCategory, .",[1],"likeMovie .",[1],"movieDetail .",[1],"movieTime{ font-size: 14px; color: #808080; }\n.",[1],"likeMovie .",[1],"praise{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,140],"; border-left: dashed; border-left-color: #dbdbdb; }\n.",[1],"likeMovie .",[1],"praise wx-image{ width: ",[0,32],"; height: ",[0,32],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"likeMovie .",[1],"praise wx-view{ font-size: ",[0,28],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; color: orange; }\n.",[1],"praise .",[1],"animation{ opacity: 0; color: orange; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead([".",[1],"page{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"picture{ margin-bottom: ",[0,100],"; margin-top: ",[0,100],"; }\n.",[1],"picture wx-image{ width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"username, .",[1],"password{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 80%; border-bottom: 1px solid #999999; margin-top: ",[0,40],"; height: ",[0,60],"; }\n.",[1],"username .",[1],"text, .",[1],"password .",[1],"text{ font-size: 16px; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; color: rgba(153,153,153); width: ",[0,100],"; }\n.",[1],"username wx-input, .",[1],"password wx-input{ -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; font-size: 16px; }\n.",[1],"login{ width: 80%; margin-top: ",[0,80],"; }\n.",[1],"auth{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-top: ",[0,80],"; }\nwx-image{ width: ",[0,80],"; height: ",[0,80],"; margin: ",[0,32],"; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"page{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background: #F7F7F7; }\n.",[1],"title{ font-weight: bold; position: fixed; z-index: 200; height: ",[0,80],"; width: 100%; text-align: center; background: #FFFFFF; line-height: ",[0,80],"; }\n.",[1],"searchWrapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; z-index: 200; width: 95vw; top:200; margin-top: ",[0,80],"; padding-right: ",[0,20],"; background: #FFFFFF; }\n.",[1],"searchIconWrapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #EAEAEA; padding: ",[0,10]," 0; }\n.",[1],"searchIconWrapper wx-image{ width: ",[0,40],"; height: ",[0,40],"; margin: ",[0,0]," ",[0,10],"; }\n.",[1],"inputWrapper{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; background: #EAEAEA; font-size: 14px; padding: ",[0,10]," 0; }\nwx-input{ width: ",[0,325],"; }\n.",[1],"main{ padding: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-top: ",[0,140],"; }\n.",[1],"movie{ margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movieName{ font-size: 12px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; width: ",[0,200],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/user/user.wxss']=setCssToHead([".",[1],"page{ width: 100%; }\n.",[1],"header{ background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_1OAYFAIAAAzO_Q1tPg693.png); height: 40%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,40],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"picture{ width: ",[0,120],"; height:",[0,120],"; border-radius: 50%; }\n.",[1],"picture wx-image{ width: ",[0,120],"; height:",[0,120],"; }\nwx-button{ background: transparent; margin-left: ",[0,20],"; font-weight: bold; }\nwx-button:after{ border: 1px solid transparent !important; }\n.",[1],"page{ }\n",],undefined,{path:"./pages/user/user.wxss"});    
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
