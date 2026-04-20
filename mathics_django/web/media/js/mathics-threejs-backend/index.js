(function(){"use strict";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bt="srgb",pi="srgb-linear",mi="linear",$e="srgb",At="300 es";function Ca(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pa(){const i=gi("canvas");return i.style.display="block",i}const $r={};function Kr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Zr(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Zr(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Zr(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rr(...i){const e=i.join(" ");e in $r||($r[e]=!0,we(...i))}function La(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Da={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,ar=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Ia(i,e){return(i%e+e)%e}function or(i,e,t){return(1-t)*i+t*e}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ke{static{Ke.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let f=n[r+0],u=n[r+1],d=n[r+2],p=n[r+3],h=s[a+0],g=s[a+1],l=s[a+2],c=s[a+3];if(p!==c||f!==h||u!==g||d!==l){let m=f*h+u*g+d*l+p*c;m<0&&(h=-h,g=-g,l=-l,c=-c,m=-m);let _=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);_=Math.sin(_*M)/b,o=Math.sin(o*M)/b,f=f*_+h*o,u=u*_+g*o,d=d*_+l*o,p=p*_+c*o}else{f=f*_+h*o,u=u*_+g*o,d=d*_+l*o,p=p*_+c*o;const M=1/Math.sqrt(f*f+u*u+d*d+p*p);f*=M,u*=M,d*=M,p*=M}}e[t]=f,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],f=n[r+1],u=n[r+2],d=n[r+3],p=s[a],h=s[a+1],g=s[a+2],l=s[a+3];return e[t]=o*l+d*p+f*g-u*h,e[t+1]=f*l+d*h+u*p-o*g,e[t+2]=u*l+d*g+o*h-f*p,e[t+3]=d*l-o*p-f*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,f=Math.sin,u=o(n/2),d=o(r/2),p=o(s/2),h=f(n/2),g=f(r/2),l=f(s/2);switch(a){case"XYZ":this._x=h*d*p+u*g*l,this._y=u*g*p-h*d*l,this._z=u*d*l+h*g*p,this._w=u*d*p-h*g*l;break;case"YXZ":this._x=h*d*p+u*g*l,this._y=u*g*p-h*d*l,this._z=u*d*l-h*g*p,this._w=u*d*p+h*g*l;break;case"ZXY":this._x=h*d*p-u*g*l,this._y=u*g*p+h*d*l,this._z=u*d*l+h*g*p,this._w=u*d*p-h*g*l;break;case"ZYX":this._x=h*d*p-u*g*l,this._y=u*g*p+h*d*l,this._z=u*d*l-h*g*p,this._w=u*d*p+h*g*l;break;case"YZX":this._x=h*d*p+u*g*l,this._y=u*g*p+h*d*l,this._z=u*d*l-h*g*p,this._w=u*d*p-h*g*l;break;case"XZY":this._x=h*d*p-u*g*l,this._y=u*g*p-h*d*l,this._z=u*d*l+h*g*p,this._w=u*d*p+h*g*l;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],f=t[9],u=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-f)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(d-f)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(f+d)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(f+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,f=t._y,u=t._z,d=t._w;return this._x=n*d+a*o+r*u-s*f,this._y=r*d+a*f+s*o-n*u,this._z=s*d+a*u+n*f-r*o,this._w=a*d-n*o-r*f-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let f=1-t;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);f=Math.sin(f*u)/d,t=Math.sin(t*u)/d,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+s*t,this._w=this._w*f+a*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+s*t,this._w=this._w*f+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,f=e.w,u=2*(a*r-o*n),d=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+f*u+a*p-o*d,this.y=n+f*d+o*u-s*p,this.z=r+f*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,f=t.z;return this.x=r*f-s*o,this.y=s*a-n*f,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new P,jr=new Mn;class De{static{De.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,f,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,f,u)}set(e,t,n,r,s,a,o,f,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=f,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],f=n[6],u=n[1],d=n[4],p=n[7],h=n[2],g=n[5],l=n[8],c=r[0],m=r[3],_=r[6],M=r[1],b=r[4],y=r[7],L=r[2],T=r[5],C=r[8];return s[0]=a*c+o*M+f*L,s[3]=a*m+o*b+f*T,s[6]=a*_+o*y+f*C,s[1]=u*c+d*M+p*L,s[4]=u*m+d*b+p*T,s[7]=u*_+d*y+p*C,s[2]=h*c+g*M+l*L,s[5]=h*m+g*b+l*T,s[8]=h*_+g*y+l*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],f=e[6],u=e[7],d=e[8];return t*a*d-t*o*u-n*s*d+n*o*f+r*s*u-r*a*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],f=e[6],u=e[7],d=e[8],p=d*a-o*u,h=o*f-d*s,g=u*s-a*f,l=t*p+n*h+r*g;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/l;return e[0]=p*c,e[1]=(r*u-d*n)*c,e[2]=(o*n-r*a)*c,e[3]=h*c,e[4]=(d*t-r*f)*c,e[5]=(r*s-o*t)*c,e[6]=g*c,e[7]=(n*f-u*t)*c,e[8]=(a*t-n*s)*c,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const f=Math.cos(s),u=Math.sin(s);return this.set(n*f,n*u,-n*(f*a+u*o)+a+e,-r*u,r*f,-r*(-u*a+f*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cr.makeScale(e,t)),this}rotate(e){return this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new De,Jr=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qr=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fa(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=Qt(r.r),r.g=Qt(r.g),r.b=Qt(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=Ln(r.r),r.g=Ln(r.g),r.b=Ln(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?mi:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:e,whitePoint:n,transfer:mi,toXYZ:Jr,fromXYZ:Qr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:Jr,fromXYZ:Qr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const ke=Fa();function Qt(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ln(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dn;class Ua{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dn===void 0&&(Dn=gi("canvas")),Dn.width=e.width,Dn.height=e.height;const r=Dn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Dn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qt(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qt(t[n]/255)*255):t[n]=Qt(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Na=0;class ur{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Na++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hr(r[a].image)):s.push(hr(r[a]))}else s=hr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let Ba=0;const fr=new P;class wt extends Sn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,f=1009,u=wt.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ba++}),this.uuid=Jn(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fr).x}get height(){return this.source.getSize(fr).y}get depth(){return this.source.getSize(fr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null,wt.DEFAULT_MAPPING=300,wt.DEFAULT_ANISOTROPY=1;class ht{static{ht.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const f=e.elements,u=f[0],d=f[4],p=f[8],h=f[1],g=f[5],l=f[9],c=f[2],m=f[6],_=f[10];if(Math.abs(d-h)<.01&&Math.abs(p-c)<.01&&Math.abs(l-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+c)<.1&&Math.abs(l+m)<.1&&Math.abs(u+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,y=(g+1)/2,L=(_+1)/2,T=(d+h)/4,C=(p+c)/4,v=(l+m)/4;return b>y&&b>L?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=C/n):y>L?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=v/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=C/s,r=v/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-l)*(m-l)+(p-c)*(p-c)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-l)/M,this.y=(p-c)/M,this.z=(h-d)/M,this.w=Math.acos((u+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oa extends Sn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new wt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ur(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qt extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class es extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ga extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{static{Qe.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,f,u,d,p,h,g,l,c,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,f,u,d,p,h,g,l,c,m)}set(e,t,n,r,s,a,o,f,u,d,p,h,g,l,c,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=f,_[2]=u,_[6]=d,_[10]=p,_[14]=h,_[3]=g,_[7]=l,_[11]=c,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),s=1/In.setFromMatrixColumn(e,1).length(),a=1/In.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),f=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*d,g=a*p,l=o*d,c=o*p;t[0]=f*d,t[4]=-f*p,t[8]=u,t[1]=g+l*u,t[5]=h-c*u,t[9]=-o*f,t[2]=c-h*u,t[6]=l+g*u,t[10]=a*f}else if(e.order==="YXZ"){const h=f*d,g=f*p,l=u*d,c=u*p;t[0]=h+c*o,t[4]=l*o-g,t[8]=a*u,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=g*o-l,t[6]=c+h*o,t[10]=a*f}else if(e.order==="ZXY"){const h=f*d,g=f*p,l=u*d,c=u*p;t[0]=h-c*o,t[4]=-a*p,t[8]=l+g*o,t[1]=g+l*o,t[5]=a*d,t[9]=c-h*o,t[2]=-a*u,t[6]=o,t[10]=a*f}else if(e.order==="ZYX"){const h=a*d,g=a*p,l=o*d,c=o*p;t[0]=f*d,t[4]=l*u-g,t[8]=h*u+c,t[1]=f*p,t[5]=c*u+h,t[9]=g*u-l,t[2]=-u,t[6]=o*f,t[10]=a*f}else if(e.order==="YZX"){const h=a*f,g=a*u,l=o*f,c=o*u;t[0]=f*d,t[4]=c-h*p,t[8]=l*p+g,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-u*d,t[6]=g*p+l,t[10]=h-c*p}else if(e.order==="XZY"){const h=a*f,g=a*u,l=o*f,c=o*u;t[0]=f*d,t[4]=-p,t[8]=u*d,t[1]=h*p+c,t[5]=a*d,t[9]=g*p-l,t[2]=l*p-g,t[6]=o*d,t[10]=c*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(za,e,Va)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),ln.crossVectors(n,Dt),ln.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),ln.crossVectors(n,Dt)),ln.normalize(),_i.crossVectors(Dt,ln),r[0]=ln.x,r[4]=_i.x,r[8]=Dt.x,r[1]=ln.y,r[5]=_i.y,r[9]=Dt.y,r[2]=ln.z,r[6]=_i.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],f=n[8],u=n[12],d=n[1],p=n[5],h=n[9],g=n[13],l=n[2],c=n[6],m=n[10],_=n[14],M=n[3],b=n[7],y=n[11],L=n[15],T=r[0],C=r[4],v=r[8],A=r[12],U=r[1],w=r[5],z=r[9],q=r[13],k=r[2],F=r[6],B=r[10],V=r[14],j=r[3],ee=r[7],ce=r[11],Se=r[15];return s[0]=a*T+o*U+f*k+u*j,s[4]=a*C+o*w+f*F+u*ee,s[8]=a*v+o*z+f*B+u*ce,s[12]=a*A+o*q+f*V+u*Se,s[1]=d*T+p*U+h*k+g*j,s[5]=d*C+p*w+h*F+g*ee,s[9]=d*v+p*z+h*B+g*ce,s[13]=d*A+p*q+h*V+g*Se,s[2]=l*T+c*U+m*k+_*j,s[6]=l*C+c*w+m*F+_*ee,s[10]=l*v+c*z+m*B+_*ce,s[14]=l*A+c*q+m*V+_*Se,s[3]=M*T+b*U+y*k+L*j,s[7]=M*C+b*w+y*F+L*ee,s[11]=M*v+b*z+y*B+L*ce,s[15]=M*A+b*q+y*V+L*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],f=e[9],u=e[13],d=e[2],p=e[6],h=e[10],g=e[14],l=e[3],c=e[7],m=e[11],_=e[15],M=f*g-u*h,b=o*g-u*p,y=o*h-f*p,L=a*g-u*d,T=a*h-f*d,C=a*p-o*d;return t*(c*M-m*b+_*y)-n*(l*M-m*L+_*T)+r*(l*b-c*L+_*C)-s*(l*y-c*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],f=e[6],u=e[7],d=e[8],p=e[9],h=e[10],g=e[11],l=e[12],c=e[13],m=e[14],_=e[15],M=t*o-n*a,b=t*f-r*a,y=t*u-s*a,L=n*f-r*o,T=n*u-s*o,C=r*u-s*f,v=d*c-p*l,A=d*m-h*l,U=d*_-g*l,w=p*m-h*c,z=p*_-g*c,q=h*_-g*m,k=M*q-b*z+y*w+L*U-T*A+C*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=(o*q-f*z+u*w)*F,e[1]=(r*z-n*q-s*w)*F,e[2]=(c*C-m*T+_*L)*F,e[3]=(h*T-p*C-g*L)*F,e[4]=(f*U-a*q-u*A)*F,e[5]=(t*q-r*U+s*A)*F,e[6]=(m*y-l*C-_*b)*F,e[7]=(d*C-h*y+g*b)*F,e[8]=(a*z-o*U+u*v)*F,e[9]=(n*U-t*z-s*v)*F,e[10]=(l*T-c*y+_*M)*F,e[11]=(p*y-d*T-g*M)*F,e[12]=(o*A-a*w-f*v)*F,e[13]=(t*w-n*A+r*v)*F,e[14]=(c*b-l*L-m*M)*F,e[15]=(d*L-p*b+h*M)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,f=e.z,u=s*a,d=s*o;return this.set(u*a+n,u*o-r*f,u*f+r*o,0,u*o+r*f,d*o+n,d*f-r*a,0,u*f-r*o,d*f+r*a,s*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,f=t._w,u=s+s,d=a+a,p=o+o,h=s*u,g=s*d,l=s*p,c=a*d,m=a*p,_=o*p,M=f*u,b=f*d,y=f*p,L=n.x,T=n.y,C=n.z;return r[0]=(1-(c+_))*L,r[1]=(g+y)*L,r[2]=(l-b)*L,r[3]=0,r[4]=(g-y)*T,r[5]=(1-(h+_))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(l+b)*C,r[9]=(m-M)*C,r[10]=(1-(h+c))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=In.set(r[0],r[1],r[2]).length();const o=In.set(r[4],r[5],r[6]).length(),f=In.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Vt.copy(this);const u=1/a,d=1/o,p=1/f;return Vt.elements[0]*=u,Vt.elements[1]*=u,Vt.elements[2]*=u,Vt.elements[4]*=d,Vt.elements[5]*=d,Vt.elements[6]*=d,Vt.elements[8]*=p,Vt.elements[9]*=p,Vt.elements[10]*=p,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=f,this}makePerspective(e,t,n,r,s,a,o=2e3,f=!1){const u=this.elements,d=2*s/(t-e),p=2*s/(n-r),h=(t+e)/(t-e),g=(n+r)/(n-r);let l,c;if(f)l=s/(a-s),c=a*s/(a-s);else if(o===2e3)l=-(a+s)/(a-s),c=-2*a*s/(a-s);else if(o===2001)l=-a/(a-s),c=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=l,u[14]=c,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,f=!1){const u=this.elements,d=2/(t-e),p=2/(n-r),h=-(t+e)/(t-e),g=-(n+r)/(n-r);let l,c;if(f)l=1/(a-s),c=a/(a-s);else if(o===2e3)l=-2/(a-s),c=-(a+s)/(a-s);else if(o===2001)l=-1/(a-s),c=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=l,u[14]=c,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const In=new P,Vt=new Qe,za=new P(0,0,0),Va=new P(1,1,1),ln=new P,_i=new P,Dt=new P,ts=new Qe,ns=new Mn;class En{constructor(e=0,t=0,n=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],f=r[1],u=r[5],d=r[9],p=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ts.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ts,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ns.setFromEuler(this),this.setFromQuaternion(ns,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class is{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ha=0;const rs=new P,Fn=new Mn,en=new Qe,xi=new P,ei=new P,ka=new P,Wa=new Mn,ss=new P(1,0,0),as=new P(0,1,0),os=new P(0,0,1),ls={type:"added"},Xa={type:"removed"},Un={type:"childadded",child:null},dr={type:"childremoved",child:null};class Rt extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ha++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new P,t=new En,n=new Mn,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new De}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(ss,e)}rotateY(e){return this.rotateOnAxis(as,e)}rotateZ(e){return this.rotateOnAxis(os,e)}translateOnAxis(e,t){return rs.copy(e).applyQuaternion(this.quaternion),this.position.add(rs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ss,e)}translateY(e){return this.translateOnAxis(as,e)}translateZ(e){return this.translateOnAxis(os,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xi.copy(e):xi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(ei,xi,this.up):en.lookAt(xi,ei,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),Fn.setFromRotationMatrix(en),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ls),Un.child=e,this.dispatchEvent(Un),Un.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xa),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ls),Un.child=e,this.dispatchEvent(Un),Un.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,ka),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,Wa,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let u=0,d=f.length;u<d;u++){const p=f[u];s(e.shapes,p)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,u=this.material.length;f<u;f++)o.push(s(e.materials,this.material[f]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];r.animations.push(s(e.animations,f))}}if(t){const o=a(e.geometries),f=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),l=a(e.nodes);o.length>0&&(n.geometries=o),f.length>0&&(n.materials=f),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),l.length>0&&(n.nodes=l)}return n.object=r,n;function a(o){const f=[];for(const u in o){const d=o[u];delete d.metadata,f.push(d)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new P(0,1,0),Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qa={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const c of e.hand.values()){const m=t.getJointPose(c,n),_=this._getHandJoint(u,c);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=d.position.distanceTo(p.position),g=.02,l=.005;u.inputState.pinching&&h>g+l?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-l&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qa)))}return o!==null&&(o.visible=r!==null),f!==null&&(f.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},vi={h:0,s:0,l:0};function mr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=Ia(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=mr(a,s,e+1/3),this.g=mr(a,s,e),this.b=mr(a,s,e-1/3)}return ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=cs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qt(e.r),this.g=Qt(e.g),this.b=Qt(e.b),this}copyLinearToSRGB(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ke.workingToColorSpace(yt.copy(this),e),Math.round(He(yt.r*255,0,255))*65536+Math.round(He(yt.g*255,0,255))*256+Math.round(He(yt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(yt.copy(this),t);const n=yt.r,r=yt.g,s=yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let f,u;const d=(o+a)/2;if(o===a)f=0,u=0;else{const p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case n:f=(r-s)/p+(r<s?6:0);break;case r:f=(s-n)/p+2;break;case s:f=(n-r)/p+4;break}f/=6}return e.h=f,e.s=u,e.l=d,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Bt){ke.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,r=yt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(vi);const n=or(cn.h,vi.h,t),r=or(cn.s,vi.s,t),s=or(cn.l,vi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ye;Ye.NAMES=cs;class Ya extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ht=new P,nn=new P,gr=new P,rn=new P,Nn=new P,Bn=new P,us=new P,_r=new P,xr=new P,vr=new P,Sr=new ht,Mr=new ht,Er=new ht;class kt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),nn.subVectors(n,t),gr.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(nn),f=Ht.dot(gr),u=nn.dot(nn),d=nn.dot(gr),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*f-o*d)*h,l=(a*d-o*f)*h;return s.set(1-g-l,l,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(e,t,n,r,s,a,o,f){return this.getBarycoord(e,t,n,r,rn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(s,rn.x),f.addScaledVector(a,rn.y),f.addScaledVector(o,rn.z),f)}static getInterpolatedAttribute(e,t,n,r,s,a){return Sr.setScalar(0),Mr.setScalar(0),Er.setScalar(0),Sr.fromBufferAttribute(e,t),Mr.fromBufferAttribute(e,n),Er.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sr,s.x),a.addScaledVector(Mr,s.y),a.addScaledVector(Er,s.z),a}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),nn.subVectors(e,t),Ht.cross(nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ht.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Nn.subVectors(r,n),Bn.subVectors(s,n),_r.subVectors(e,n);const f=Nn.dot(_r),u=Bn.dot(_r);if(f<=0&&u<=0)return t.copy(n);xr.subVectors(e,r);const d=Nn.dot(xr),p=Bn.dot(xr);if(d>=0&&p<=d)return t.copy(r);const h=f*p-d*u;if(h<=0&&f>=0&&d<=0)return a=f/(f-d),t.copy(n).addScaledVector(Nn,a);vr.subVectors(e,s);const g=Nn.dot(vr),l=Bn.dot(vr);if(l>=0&&g<=l)return t.copy(s);const c=g*u-f*l;if(c<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(Bn,o);const m=d*l-g*p;if(m<=0&&p-d>=0&&g-l>=0)return us.subVectors(s,r),o=(p-d)/(p-d+(g-l)),t.copy(r).addScaledVector(us,o);const _=1/(m+c+h);return a=c*_,o=h*_,t.copy(n).addScaledVector(Nn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ti{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Si.copy(n.boundingBox)),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ni),Mi.subVectors(this.max,ni),On.subVectors(e.a,ni),Gn.subVectors(e.b,ni),zn.subVectors(e.c,ni),un.subVectors(Gn,On),hn.subVectors(zn,Gn),yn.subVectors(On,zn);let t=[0,-un.z,un.y,0,-hn.z,hn.y,0,-yn.z,yn.y,un.z,0,-un.x,hn.z,0,-hn.x,yn.z,0,-yn.x,-un.y,un.x,0,-hn.y,hn.x,0,-yn.y,yn.x,0];return!yr(t,On,Gn,zn,Mi)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,On,Gn,zn,Mi))?!1:(Ei.crossVectors(un,hn),t=[Ei.x,Ei.y,Ei.z],yr(t,On,Gn,zn,Mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sn=[new P,new P,new P,new P,new P,new P,new P,new P],Wt=new P,Si=new ti,On=new P,Gn=new P,zn=new P,un=new P,hn=new P,yn=new P,ni=new P,Mi=new P,Ei=new P,Tn=new P;function yr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Tn.fromArray(i,s);const o=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),f=e.dot(Tn),u=t.dot(Tn),d=n.dot(Tn);if(Math.max(-Math.max(f,u,d),Math.min(f,u,d))>o)return!1}return!0}const mt=new P,yi=new Ke;let $a=0;class Pe extends Sn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$a++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix3(e),this.setXY(t,yi.x,yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends Pe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fs extends Pe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends Pe{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ka=new ti,ii=new P,Tr=new P;class Vn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ka.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ii.subVectors(e,this.center);const t=ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ii,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ii.copy(e.center).add(Tr)),this.expandByPoint(ii.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Za=0;const Ot=new Qe,br=new Rt,Hn=new P,It=new ti,ri=new ti,St=new P;class rt extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Za++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ca(e)?fs:hs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ri.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(It.min,ri.min),It.expandByPoint(St),St.addVectors(It.max,ri.max),It.expandByPoint(St)):(It.expandByPoint(ri.min),It.expandByPoint(ri.max))}It.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],f=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)St.fromBufferAttribute(o,u),f&&(Hn.fromBufferAttribute(e,u),St.add(Hn)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],f=[];for(let v=0;v<n.count;v++)o[v]=new P,f[v]=new P;const u=new P,d=new P,p=new P,h=new Ke,g=new Ke,l=new Ke,c=new P,m=new P;function _(v,A,U){u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,A),p.fromBufferAttribute(n,U),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,A),l.fromBufferAttribute(s,U),d.sub(u),p.sub(u),g.sub(h),l.sub(h);const w=1/(g.x*l.y-l.x*g.y);isFinite(w)&&(c.copy(d).multiplyScalar(l.y).addScaledVector(p,-g.y).multiplyScalar(w),m.copy(p).multiplyScalar(g.x).addScaledVector(d,-l.x).multiplyScalar(w),o[v].add(c),o[A].add(c),o[U].add(c),f[v].add(m),f[A].add(m),f[U].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,A=M.length;v<A;++v){const U=M[v],w=U.start,z=U.count;for(let q=w,k=w+z;q<k;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new P,y=new P,L=new P,T=new P;function C(v){L.fromBufferAttribute(r,v),T.copy(L);const A=o[v];b.copy(A),b.sub(L.multiplyScalar(L.dot(A))).normalize(),y.crossVectors(T,A);const w=y.dot(f[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,w)}for(let v=0,A=M.length;v<A;++v){const U=M[v],w=U.start,z=U.count;for(let q=w,k=w+z;q<k;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const r=new P,s=new P,a=new P,o=new P,f=new P,u=new P,d=new P,p=new P;if(e)for(let h=0,g=e.count;h<g;h+=3){const l=e.getX(h+0),c=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,l),s.fromBufferAttribute(t,c),a.fromBufferAttribute(t,m),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,l),f.fromBufferAttribute(n,c),u.fromBufferAttribute(n,m),o.add(d),f.add(d),u.add(d),n.setXYZ(l,o.x,o.y,o.z),n.setXYZ(c,f.x,f.y,f.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,f){const u=o.array,d=o.itemSize,p=o.normalized,h=new u.constructor(f.length*d);let g=0,l=0;for(let c=0,m=f.length;c<m;c++){o.isInterleavedBufferAttribute?g=f[c]*o.data.stride+o.offset:g=f[c]*d;for(let _=0;_<d;_++)h[l++]=u[g++]}return new Pe(h,d,p)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rt,n=this.index.array,r=this.attributes;for(const o in r){const f=r[o],u=e(f,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const f=[],u=s[o];for(let d=0,p=u.length;d<p;d++){const h=u[d],g=e(h,n);f.push(g)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,f=a.length;o<f;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const u=n[f];e.data.attributes[f]=u.toJSON(e.data)}const r={};let s=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],d=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(r[f]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let h=0,g=p.length;h<g;h++)d.push(p[h].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ja=0;class kn extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ja++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const f=s[o];delete f.metadata,a.push(f)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const an=new P,Ar=new P,Ti=new P,fn=new P,wr=new P,bi=new P,Rr=new P;class Cr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ar.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(Ar);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ti),o=fn.dot(this.direction),f=-fn.dot(Ti),u=fn.lengthSq(),d=Math.abs(1-a*a);let p,h,g,l;if(d>0)if(p=a*f-o,h=a*o-f,l=s*d,p>=0)if(h>=-l)if(h<=l){const c=1/d;p*=c,h*=c,g=p*(p+a*h+2*o)+h*(a*p+h+2*f)+u}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*f)+u;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*f)+u;else h<=-l?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-f),s),g=-p*p+h*(h+2*f)+u):h<=l?(p=0,h=Math.min(Math.max(-s,-f),s),g=h*(h+2*f)+u):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-f),s),g=-p*p+h*(h+2*f)+u);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*f)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ar).addScaledVector(Ti,h),g}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,f=n+a;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,f;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,f=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,f=(e.min.z-h.z)*p),n>f||o>r)||((o>n||n!==n)&&(n=o),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,r,s){wr.subVectors(t,e),bi.subVectors(n,e),Rr.crossVectors(wr,bi);let a=this.direction.dot(Rr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,e);const f=o*this.direction.dot(bi.crossVectors(fn,bi));if(f<0)return null;const u=o*this.direction.dot(wr.cross(fn));if(u<0||f+u>a)return null;const d=-o*fn.dot(Rr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ds extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ps=new Qe,bn=new Cr,Ai=new Vn,ms=new P,wi=new P,Ri=new P,Ci=new P,Pr=new P,Pi=new P,gs=new P,Li=new P;class Mt extends Rt{constructor(e=new rt,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Pi.set(0,0,0);for(let f=0,u=s.length;f<u;f++){const d=o[f],p=s[f];d!==0&&(Pr.fromBufferAttribute(p,e),a?Pi.addScaledVector(Pr,d):Pi.addScaledVector(Pr.sub(t),d))}t.add(Pi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(s),bn.copy(e.ray).recast(e.near),!(Ai.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Ai,ms)===null||bn.origin.distanceToSquared(ms)>(e.far-e.near)**2))&&(ps.copy(s).invert(),bn.copy(e.ray).applyMatrix4(ps),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,f=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let l=0,c=h.length;l<c;l++){const m=h[l],_=a[m.materialIndex],M=Math.max(m.start,g.start),b=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=M,L=b;y<L;y+=3){const T=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);r=Di(this,_,e,n,u,d,p,T,C,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const l=Math.max(0,g.start),c=Math.min(o.count,g.start+g.count);for(let m=l,_=c;m<_;m+=3){const M=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);r=Di(this,a,e,n,u,d,p,M,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(a))for(let l=0,c=h.length;l<c;l++){const m=h[l],_=a[m.materialIndex],M=Math.max(m.start,g.start),b=Math.min(f.count,Math.min(m.start+m.count,g.start+g.count));for(let y=M,L=b;y<L;y+=3){const T=y,C=y+1,v=y+2;r=Di(this,_,e,n,u,d,p,T,C,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const l=Math.max(0,g.start),c=Math.min(f.count,g.start+g.count);for(let m=l,_=c;m<_;m+=3){const M=m,b=m+1,y=m+2;r=Di(this,a,e,n,u,d,p,M,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ja(i,e,t,n,r,s,a,o){let f;if(e.side===1?f=n.intersectTriangle(a,s,r,!0,o):f=n.intersectTriangle(r,s,a,e.side===0,o),f===null)return null;Li.copy(o),Li.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Li);return u<t.near||u>t.far?null:{distance:u,point:Li.clone(),object:i}}function Di(i,e,t,n,r,s,a,o,f,u){i.getVertexPosition(o,wi),i.getVertexPosition(f,Ri),i.getVertexPosition(u,Ci);const d=Ja(i,e,t,n,wi,Ri,Ci,gs);if(d){const p=new P;kt.getBarycoord(gs,wi,Ri,Ci,p),r&&(d.uv=kt.getInterpolatedAttribute(r,o,f,u,p,new Ke)),s&&(d.uv1=kt.getInterpolatedAttribute(s,o,f,u,p,new Ke)),a&&(d.normal=kt.getInterpolatedAttribute(a,o,f,u,p,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:f,c:u,normal:new P,materialIndex:0};kt.getNormal(wi,Ri,Ci,h.normal),d.face=h,d.barycoord=p}return d}class Qa extends wt{constructor(e=null,t=1,n=1,r,s,a,o,f,u=1003,d=1003,p,h){super(null,a,o,f,u,d,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft extends Pe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lr=new P,eo=new P,to=new De;class An{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Lr.subVectors(n,t).cross(eo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Lr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||to.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Vn,no=new Ke(.5,.5),Ii=new P;class _s{constructor(e=new An,t=new An,n=new An,r=new An,s=new An,a=new An){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],f=s[2],u=s[3],d=s[4],p=s[5],h=s[6],g=s[7],l=s[8],c=s[9],m=s[10],_=s[11],M=s[12],b=s[13],y=s[14],L=s[15];if(r[0].setComponents(u-a,g-d,_-l,L-M).normalize(),r[1].setComponents(u+a,g+d,_+l,L+M).normalize(),r[2].setComponents(u+o,g+p,_+c,L+b).normalize(),r[3].setComponents(u-o,g-p,_-c,L-b).normalize(),n)r[4].setComponents(f,h,m,y).normalize(),r[5].setComponents(u-f,g-h,_-m,L-y).normalize();else if(r[4].setComponents(u-f,g-h,_-m,L-y).normalize(),t===2e3)r[5].setComponents(u+f,g+h,_+m,L+y).normalize();else if(t===2001)r[5].setComponents(f,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){wn.center.set(0,0,0);const t=no.distanceTo(e.center);return wn.radius=.7071067811865476+t,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ii.x=r.normal.x>0?e.max.x:e.min.x,Ii.y=r.normal.y>0?e.max.y:e.min.y,Ii.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class io extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fi=new P,Ui=new P,xs=new Qe,si=new Cr,Ni=new Vn,Dr=new P,vs=new P;class ai extends Rt{constructor(e=new rt,t=new io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Fi.fromBufferAttribute(t,r-1),Ui.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Fi.distanceTo(Ui);e.setAttribute("lineDistance",new Xt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Ni.radius+=s,e.ray.intersectsSphere(Ni)===!1)return;xs.copy(r).invert(),si.copy(e.ray).applyMatrix4(xs);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,u=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const g=Math.max(0,a.start),l=Math.min(d.count,a.start+a.count);for(let c=g,m=l-1;c<m;c+=u){const _=d.getX(c),M=d.getX(c+1),b=Bi(this,e,si,f,_,M,c);b&&t.push(b)}if(this.isLineLoop){const c=d.getX(l-1),m=d.getX(g),_=Bi(this,e,si,f,c,m,l-1);_&&t.push(_)}}else{const g=Math.max(0,a.start),l=Math.min(h.count,a.start+a.count);for(let c=g,m=l-1;c<m;c+=u){const _=Bi(this,e,si,f,c,c+1,c);_&&t.push(_)}if(this.isLineLoop){const c=Bi(this,e,si,f,l-1,g,l-1);c&&t.push(c)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bi(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Fi.fromBufferAttribute(o,r),Ui.fromBufferAttribute(o,s),t.distanceSqToSegment(Fi,Ui,Dr,vs)>n)return;Dr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Dr);if(!(u<e.near||u>e.far))return{distance:u,point:vs.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ss=new P,Ms=new P;class Oi extends ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ss.fromBufferAttribute(t,r),Ms.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ss.distanceTo(Ms);e.setAttribute("lineDistance",new Xt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ro extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Es=new Qe,Ir=new Cr,Gi=new Vn,zi=new P;class so extends Rt{constructor(e=new rt,t=new ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(r),Gi.radius+=s,e.ray.intersectsSphere(Gi)===!1)return;Es.copy(r).invert(),Ir.copy(e.ray).applyMatrix4(Es);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,u=n.index,p=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let l=h,c=g;l<c;l++){const m=u.getX(l);zi.fromBufferAttribute(p,m),ys(zi,m,f,r,e,t,this)}}else{const h=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let l=h,c=g;l<c;l++)zi.fromBufferAttribute(p,l),ys(zi,l,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ys(i,e,t,n,r,s,a){const o=Ir.distanceSqToPoint(i);if(o<t){const f=new P;Ir.closestPointToPoint(i,f),f.applyMatrix4(n);const u=r.ray.origin.distanceTo(f);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ts extends wt{constructor(e=[],t=301,n,r,s,a,o,f,u,d){super(e,t,n,r,s,a,o,f,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wn extends wt{constructor(e,t,n=1014,r,s,a,o=1003,f=1003,u,d=1026,p=1){if(d!==1026&&d!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,r,s,a,o,f,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ao extends Wn{constructor(e,t=1014,n=301,r,s,a=1003,o=1003,f,u=1026){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,f,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bs extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oi extends rt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const f=[],u=[],d=[],p=[];let h=0,g=0;l("z","y","x",-1,-1,n,t,e,a,s,0),l("z","y","x",1,-1,n,t,-e,a,s,1),l("x","z","y",1,1,e,n,t,r,a,2),l("x","z","y",1,-1,e,n,-t,r,a,3),l("x","y","z",1,-1,e,t,n,r,s,4),l("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(f),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function l(c,m,_,M,b,y,L,T,C,v,A){const U=y/C,w=L/v,z=y/2,q=L/2,k=T/2,F=C+1,B=v+1;let V=0,j=0;const ee=new P;for(let ce=0;ce<B;ce++){const Se=ce*w-q;for(let Ee=0;Ee<F;Ee++){const Ge=Ee*U-z;ee[c]=Ge*M,ee[m]=Se*b,ee[_]=k,u.push(ee.x,ee.y,ee.z),ee[c]=0,ee[m]=0,ee[_]=T>0?1:-1,d.push(ee.x,ee.y,ee.z),p.push(Ee/C),p.push(1-ce/v),V+=1}}for(let ce=0;ce<v;ce++)for(let Se=0;Se<C;Se++){const Ee=h+Se+F*ce,Ge=h+Se+F*(ce+1),Z=h+(Se+1)+F*(ce+1),he=h+(Se+1)+F*ce;f.push(Ee,Ge,he),f.push(Ge,Z,he),j+=6}o.addGroup(g,j,A),g+=j,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vi extends rt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),f=Math.floor(r),u=o+1,d=f+1,p=e/o,h=t/f,g=[],l=[],c=[],m=[];for(let _=0;_<d;_++){const M=_*h-a;for(let b=0;b<u;b++){const y=b*p-s;l.push(y,-M,0),c.push(0,0,1),m.push(b/o),m.push(1-_/f)}}for(let _=0;_<f;_++)for(let M=0;M<o;M++){const b=M+u*_,y=M+u*(_+1),L=M+1+u*(_+1),T=M+1+u*_;g.push(b,y,T),g.push(y,L,T)}this.setIndex(g),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(As(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(As(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Xn(i[t]);for(const r in n)e[r]=n[r]}return e}function As(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function oo(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ws(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const lo={clone:Xn,merge:Ct};var co=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=co,this.fragmentShader=uo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xn(e.uniforms),this.uniformsGroups=oo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lt extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ho extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fo extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hi=new P,ki=new Mn,$t=new P;class Rs extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hi,ki,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hi,ki,$t.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hi,ki,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hi,ki,$t.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dn=new P,Cs=new Ke,Ps=new Ke;class Gt extends Rs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dn.x,dn.y).multiplyScalar(-e/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-e/dn.z)}getViewSize(e,t){return this.getViewBounds(e,Cs,Ps),t.subVectors(Ps,Cs)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const f=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/f,t-=a.offsetY*n/u,r*=a.width/f,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ls extends Rs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,f=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pn extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const qn=-90,Yn=1;class po extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(qn,Yn,e,t);r.layers=this.layers,this.add(r);const s=new Gt(qn,Yn,e,t);s.layers=this.layers,this.add(s);const a=new Gt(qn,Yn,e,t);a.layers=this.layers,this.add(a);const o=new Gt(qn,Yn,e,t);o.layers=this.layers,this.add(o);const f=new Gt(qn,Yn,e,t);f.layers=this.layers,this.add(f);const u=new Gt(qn,Yn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,f]=t;for(const u of t)this.remove(u);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,f,u,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),l=e.xr.enabled;e.xr.enabled=!1;const c=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=c,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,g),e.xr.enabled=l,n.texture.needsPMREMUpdate=!0}}class mo extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ds{static{Ds.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function Is(i,e,t,n){const r=go(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function go(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}})),typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fs(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _o(i){const e=new WeakMap;function t(o,f){const u=o.array,d=o.usage,p=u.byteLength,h=i.createBuffer();i.bindBuffer(f,h),i.bufferData(f,u,d),o.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,f,u){const d=f.array,p=f.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,d);else{p.sort((g,l)=>g.start-l.start);let h=0;for(let g=1;g<p.length;g++){const l=p[h],c=p[g];c.start<=l.start+l.count+1?l.count=Math.max(l.count,c.start+c.count-l.start):(++h,p[h]=c)}p.length=h+1;for(let g=0,l=p.length;g<l;g++){const c=p[g];i.bufferSubData(u,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(i.deleteBuffer(f.buffer),e.delete(o))}function a(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,f));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,f),u.version=o.version}}return{get:r,remove:s,update:a}}var xo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,So=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,To=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ao=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ro=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Co=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Po=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Do=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Io=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,No=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Oo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Go=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ho=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ko=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$o="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ko=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,el=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,il=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,al=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ol=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ll=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ul=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ml=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gl=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_l=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vl=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sl=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ml=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,El=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Al=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ll=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Il=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ul=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ol=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ql=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$l=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ql=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ec=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ic=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ac=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_c=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ne={alphahash_fragment:xo,alphahash_pars_fragment:vo,alphamap_fragment:So,alphamap_pars_fragment:Mo,alphatest_fragment:Eo,alphatest_pars_fragment:yo,aomap_fragment:To,aomap_pars_fragment:bo,batching_pars_vertex:Ao,batching_vertex:wo,begin_vertex:Ro,beginnormal_vertex:Co,bsdfs:Po,iridescence_fragment:Lo,bumpmap_pars_fragment:Do,clipping_planes_fragment:Io,clipping_planes_pars_fragment:Fo,clipping_planes_pars_vertex:Uo,clipping_planes_vertex:No,color_fragment:Bo,color_pars_fragment:Oo,color_pars_vertex:Go,color_vertex:zo,common:Vo,cube_uv_reflection_fragment:Ho,defaultnormal_vertex:ko,displacementmap_pars_vertex:Wo,displacementmap_vertex:Xo,emissivemap_fragment:qo,emissivemap_pars_fragment:Yo,colorspace_fragment:$o,colorspace_pars_fragment:Ko,envmap_fragment:Zo,envmap_common_pars_fragment:jo,envmap_pars_fragment:Jo,envmap_pars_vertex:Qo,envmap_physical_pars_fragment:ul,envmap_vertex:el,fog_vertex:tl,fog_pars_vertex:nl,fog_fragment:il,fog_pars_fragment:rl,gradientmap_pars_fragment:sl,lightmap_pars_fragment:al,lights_lambert_fragment:ol,lights_lambert_pars_fragment:ll,lights_pars_begin:cl,lights_toon_fragment:hl,lights_toon_pars_fragment:fl,lights_phong_fragment:dl,lights_phong_pars_fragment:pl,lights_physical_fragment:ml,lights_physical_pars_fragment:gl,lights_fragment_begin:_l,lights_fragment_maps:xl,lights_fragment_end:vl,lightprobes_pars_fragment:Sl,logdepthbuf_fragment:Ml,logdepthbuf_pars_fragment:El,logdepthbuf_pars_vertex:yl,logdepthbuf_vertex:Tl,map_fragment:bl,map_pars_fragment:Al,map_particle_fragment:wl,map_particle_pars_fragment:Rl,metalnessmap_fragment:Cl,metalnessmap_pars_fragment:Pl,morphinstance_vertex:Ll,morphcolor_vertex:Dl,morphnormal_vertex:Il,morphtarget_pars_vertex:Fl,morphtarget_vertex:Ul,normal_fragment_begin:Nl,normal_fragment_maps:Bl,normal_pars_fragment:Ol,normal_pars_vertex:Gl,normal_vertex:zl,normalmap_pars_fragment:Vl,clearcoat_normal_fragment_begin:Hl,clearcoat_normal_fragment_maps:kl,clearcoat_pars_fragment:Wl,iridescence_pars_fragment:Xl,opaque_fragment:ql,packing:Yl,premultiplied_alpha_fragment:$l,project_vertex:Kl,dithering_fragment:Zl,dithering_pars_fragment:jl,roughnessmap_fragment:Jl,roughnessmap_pars_fragment:Ql,shadowmap_pars_fragment:ec,shadowmap_pars_vertex:tc,shadowmap_vertex:nc,shadowmask_pars_fragment:ic,skinbase_vertex:rc,skinning_pars_vertex:sc,skinning_vertex:ac,skinnormal_vertex:oc,specularmap_fragment:lc,specularmap_pars_fragment:cc,tonemapping_fragment:uc,tonemapping_pars_fragment:hc,transmission_fragment:fc,transmission_pars_fragment:dc,uv_pars_fragment:pc,uv_pars_vertex:mc,uv_vertex:gc,worldpos_vertex:_c,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Kt={basic:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ct([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ct([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ct([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ct([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ct([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ct([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Ct([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Ct([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Kt.physical={uniforms:Ct([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Wi={r:0,b:0,g:0},xc=new Qe,Us=new De;Us.set(-1,0,0,0,1,0,0,0,1);function vc(i,e,t,n,r,s){const a=new Ye(0);let o=r===!0?0:1,f,u,d=null,p=0,h=null;function g(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const y=M.backgroundBlurriness>0;b=e.get(b,y)}return b}function l(M){let b=!1;const y=g(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function c(M,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===306)?(u===void 0&&(u=new Mt(new oi(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Xn(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xc.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Us),u.material.toneMapped=ke.getTransfer(y.colorSpace)!==$e,(d!==y||p!==y.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new Mt(new Vi(2,2),new Yt({name:"BackgroundMaterial",uniforms:Xn(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=ke.getTransfer(y.colorSpace)!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null))}function m(M,b){M.getRGB(Wi,ws(i)),t.buffers.color.setClear(Wi.r,Wi.g,Wi.b,b,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:l,addToRenderList:c,dispose:_}}function Sc(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(w,z,q,k,F){let B=!1;const V=p(w,k,q,z);s!==V&&(s=V,u(s.object)),B=g(w,k,q,F),B&&l(w,k,q,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(w,z,q,k),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function f(){return i.createVertexArray()}function u(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function p(w,z,q,k){const F=k.wireframe===!0;let B=n[z.id];B===void 0&&(B={},n[z.id]=B);const V=w.isInstancedMesh===!0?w.id:0;let j=B[V];j===void 0&&(j={},B[V]=j);let ee=j[q.id];ee===void 0&&(ee={},j[q.id]=ee);let ce=ee[F];return ce===void 0&&(ce=h(f()),ee[F]=ce),ce}function h(w){const z=[],q=[],k=[];for(let F=0;F<t;F++)z[F]=0,q[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:k,object:w,attributes:{},index:null}}function g(w,z,q,k){const F=s.attributes,B=z.attributes;let V=0;const j=q.getAttributes();for(const ee in j)if(j[ee].location>=0){const Se=F[ee];let Ee=B[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),Se===void 0||Se.attribute!==Ee||Ee&&Se.data!==Ee.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function l(w,z,q,k){const F={},B=z.attributes;let V=0;const j=q.getAttributes();for(const ee in j)if(j[ee].location>=0){let Se=B[ee];Se===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const Ee={};Ee.attribute=Se,Se&&Se.data&&(Ee.data=Se.data),F[ee]=Ee,V++}s.attributes=F,s.attributesNum=V,s.index=k}function c(){const w=s.newAttributes;for(let z=0,q=w.length;z<q;z++)w[z]=0}function m(w){_(w,0)}function _(w,z){const q=s.newAttributes,k=s.enabledAttributes,F=s.attributeDivisors;q[w]=1,k[w]===0&&(i.enableVertexAttribArray(w),k[w]=1),F[w]!==z&&(i.vertexAttribDivisor(w,z),F[w]=z)}function M(){const w=s.newAttributes,z=s.enabledAttributes;for(let q=0,k=z.length;q<k;q++)z[q]!==w[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function b(w,z,q,k,F,B,V){V===!0?i.vertexAttribIPointer(w,z,q,F,B):i.vertexAttribPointer(w,z,q,k,F,B)}function y(w,z,q,k){c();const F=k.attributes,B=q.getAttributes(),V=z.defaultAttributeValues;for(const j in B){const ee=B[j];if(ee.location>=0){let ce=F[j];if(ce===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const Se=ce.normalized,Ee=ce.itemSize,Ge=e.get(ce);if(Ge===void 0)continue;const Z=Ge.buffer,he=Ge.type,W=Ge.bytesPerElement,se=he===i.INT||he===i.UNSIGNED_INT||ce.gpuType===1013;if(ce.isInterleavedBufferAttribute){const te=ce.data,Ae=te.stride,Ce=ce.offset;if(te.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)_(ee.location+Re,te.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Re=0;Re<ee.locationSize;Re++)m(ee.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Re=0;Re<ee.locationSize;Re++)b(ee.location+Re,Ee/ee.locationSize,he,Se,Ae*W,(Ce+Ee/ee.locationSize*Re)*W,se)}else{if(ce.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)_(ee.location+te,ce.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let te=0;te<ee.locationSize;te++)m(ee.location+te);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let te=0;te<ee.locationSize;te++)b(ee.location+te,Ee/ee.locationSize,he,Se,Ee*W,Ee/ee.locationSize*te*W,se)}}else if(V!==void 0){const Se=V[j];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(ee.location,Se);break;case 3:i.vertexAttrib3fv(ee.location,Se);break;case 4:i.vertexAttrib4fv(ee.location,Se);break;default:i.vertexAttrib1fv(ee.location,Se)}}}}M()}function L(){A();for(const w in n){const z=n[w];for(const q in z){const k=z[q];for(const F in k){const B=k[F];for(const V in B)d(B[V].object),delete B[V];delete k[F]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const z=n[w.id];for(const q in z){const k=z[q];for(const F in k){const B=k[F];for(const V in B)d(B[V].object),delete B[V];delete k[F]}}delete n[w.id]}function C(w){for(const z in n){const q=n[z];for(const k in q){const F=q[k];if(F[w.id]===void 0)continue;const B=F[w.id];for(const V in B)d(B[V].object),delete B[V];delete F[w.id]}}}function v(w){for(const z in n){const q=n[z],k=w.isInstancedMesh===!0?w.id:0,F=q[k];if(F!==void 0){for(const B in F){const V=F[B];for(const j in V)d(V[j].object),delete V[j];delete F[B]}delete q[k],Object.keys(q).length===0&&delete n[z]}}}function A(){U(),a=!0,s!==r&&(s=r,u(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:c,enableAttribute:m,disableUnusedAttributes:M}}function Mc(i,e,t){let n;function r(f){n=f}function s(f,u){i.drawArrays(n,f,u),t.update(u,n,1)}function a(f,u,d){d!==0&&(i.drawArraysInstanced(n,f,u,d),t.update(u,n,d))}function o(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ec(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!v)}function f(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=f(u);d!==u&&(we("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),l=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:f,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:l,maxTextureSize:c,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:L,samples:T}}function yc(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new An,o=new De,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||n!==0||r;return r=h,n=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,g){const l=p.clippingPlanes,c=p.clipIntersection,m=p.clipShadows,_=i.get(p);if(!r||l===null||l.length===0||s&&!m)s?d(null):u();else{const M=s?0:n,b=M*4;let y=_.clippingState||null;f.value=y,y=d(l,h,b,g);for(let L=0;L!==b;++L)y[L]=t[L];_.clippingState=y,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=M}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,g,l){const c=p!==null?p.length:0;let m=null;if(c!==0){if(m=f.value,l!==!0||m===null){const _=g+c*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let b=0,y=g;b!==c;++b,y+=4)a.copy(p[b]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=c,e.numIntersection=0,m}}const mn=4,Ns=[.125,.215,.35,.446,.526,.582],Rn=20,Tc=256,li=new Ls,Bs=new Ye;let Fr=null,Ur=0,Nr=0,Br=!1;const bc=new P;class Os{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=bc}=s;Fr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Ur,Nr),this._renderer.xr.enabled=Br,e.scissorTest=!1,$n(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:pi,depthBuffer:!1},r=Gs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gs(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ac(s)),this._blurMaterial=Rc(s,e,t),this._ggxMaterial=wc(s,e,t)}return r}_compileMaterial(e){const t=new Mt(new rt,e);this._renderer.compile(t,li)}_sceneToCubeUV(e,t,n,r,s){const f=new Gt(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,g=p.toneMapping;p.getClearColor(Bs),p.toneMapping=0,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new oi,new ds({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const c=this._backgroundBox,m=c.material;let _=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,_=!0):(m.color.copy(Bs),_=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(f.up.set(0,u[b],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x+d[b],s.y,s.z)):y===1?(f.up.set(0,0,u[b]),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y+d[b],s.z)):(f.up.set(0,u[b],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y,s.z+d[b]));const L=this._cubeSize;$n(r,y*L,b>2?L:0,L,L),p.setRenderTarget(r),_&&p.render(c,f),p.render(e,f)}p.toneMapping=g,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const f=this._cubeSize;$n(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(a,li)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const f=a.uniforms,u=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),h=0+u*1.25,g=p*h,{_lodMax:l}=this,c=this._sizeLods[n],m=3*c*(n>l-mn?n-l+mn:0),_=4*(this._cubeSize-c);f.envMap.value=e.texture,f.roughness.value=g,f.mipInt.value=l-t,$n(s,m,_,3*c,2*c),r.setRenderTarget(s),r.render(o,li),f.envMap.value=s.texture,f.roughness.value=0,f.mipInt.value=l-n,$n(e,m,_,3*c,2*c),r.setRenderTarget(e),r.render(o,li)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const f=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=u;const h=u.uniforms,g=this._sizeLods[n]-1,l=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Rn-1),c=s/l,m=isFinite(s)?1+Math.floor(d*c):Rn;m>Rn&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rn}`);const _=[];let M=0;for(let C=0;C<Rn;++C){const v=C/c,A=Math.exp(-v*v/2);_.push(A),C===0?M+=A:C<m&&(M+=2*A)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=l,h.mipInt.value=b-n;const y=this._sizeLods[r],L=3*y*(r>b-mn?r-b+mn:0),T=4*(this._cubeSize-y);$n(t,L,T,3*y,2*y),f.setRenderTarget(t),f.render(p,li)}}function Ac(i){const e=[],t=[],n=[];let r=i;const s=i-mn+1+Ns.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let f=1/o;a>i-mn?f=Ns[a-i+mn-1]:a===0&&(f=0),t.push(f);const u=1/(o-2),d=-u,p=1+u,h=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,l=6,c=3,m=2,_=1,M=new Float32Array(c*l*g),b=new Float32Array(m*l*g),y=new Float32Array(_*l*g);for(let T=0;T<g;T++){const C=T%3*2/3-1,v=T>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(A,c*l*T),b.set(h,m*l*T);const U=[T,T,T,T,T,T];y.set(U,_*l*T)}const L=new rt;L.setAttribute("position",new Pe(M,c)),L.setAttribute("uv",new Pe(b,m)),L.setAttribute("faceIndex",new Pe(y,_)),n.push(new Mt(L,null)),r>mn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gs(i,e,t){const n=new qt(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $n(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wc(i,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tc,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rc(i,e,t){const n=new Float32Array(Rn),r=new P(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hs extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ts(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oi(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Mt(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new po(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Cc(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,g=!1){return h==null?null:g?a(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===303||g===304)if(e.has(h)){const l=e.get(h).texture;return o(l,h.mapping)}else{const l=h.image;if(l&&l.height>0){const c=new Hs(l.height);return c.fromEquirectangularTexture(i,h),e.set(h,c),h.addEventListener("dispose",u),o(c.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,l=g===303||g===304,c=g===301||g===302;if(l||c){let m=t.get(h);const _=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Os(i)),m=l?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return l&&M&&M.height>0||c&&M&&f(M)?(n===null&&(n=new Os(i)),m=l?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,g){return g===303?h.mapping=301:g===304&&(h.mapping=302),h}function f(h){let g=0;const l=6;for(let c=0;c<l;c++)h[c]!==void 0&&g++;return g===l}function u(h){const g=h.target;g.removeEventListener("dispose",u);const l=e.get(g);l!==void 0&&(e.delete(g),l.dispose())}function d(h){const g=h.target;g.removeEventListener("dispose",d);const l=t.get(g);l!==void 0&&(t.delete(g),l.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Pc(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&rr("WebGLRenderer: "+n+" extension not supported."),r}}}function Lc(i,e,t,n){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const l in h.attributes)e.remove(h.attributes[l]);h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function f(p){const h=p.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER)}function u(p){const h=[],g=p.index,l=p.attributes.position;let c=0;if(l===void 0)return;if(g!==null){const M=g.array;c=g.version;for(let b=0,y=M.length;b<y;b+=3){const L=M[b+0],T=M[b+1],C=M[b+2];h.push(L,T,T,C,C,L)}}else{const M=l.array;c=l.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const L=b+0,T=b+1,C=b+2;h.push(L,T,T,C,C,L)}}const m=new(l.count>=65535?fs:hs)(h,1);m.version=c;const _=s.get(p);_&&e.remove(_),s.set(p,m)}function d(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:f,getWireframeAttribute:d}}function Dc(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function f(p,h){i.drawElements(n,h,s,p*a),t.update(h,n,1)}function u(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,p*a,g),t.update(h,n,g))}function d(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,p,0,g);let c=0;for(let m=0;m<g;m++)c+=h[m];t.update(c,n,1)}this.setMode=r,this.setIndex=o,this.render=f,this.renderInstances=u,this.renderMultiDraw=d}function Ic(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Fc(i,e,t){const n=new WeakMap,r=new ht;function s(a,o,f){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,l=o.morphAttributes.normal!==void 0,c=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),l===!0&&(b=2),c===!0&&(b=3);let y=o.attributes.position.count*b,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*L*4*p),C=new es(T,y,L,p);C.type=1015,C.needsUpdate=!0;const v=b*4;for(let U=0;U<p;U++){const w=m[U],z=_[U],q=M[U],k=y*L*4*U;for(let F=0;F<w.count;F++){const B=F*v;g===!0&&(r.fromBufferAttribute(w,F),T[k+B+0]=r.x,T[k+B+1]=r.y,T[k+B+2]=r.z,T[k+B+3]=0),l===!0&&(r.fromBufferAttribute(z,F),T[k+B+4]=r.x,T[k+B+5]=r.y,T[k+B+6]=r.z,T[k+B+7]=0),c===!0&&(r.fromBufferAttribute(q,F),T[k+B+8]=r.x,T[k+B+9]=r.y,T[k+B+10]=r.z,T[k+B+11]=q.itemSize===4?r.w:1)}}h={count:p,texture:C,size:new Ke(y,L)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let c=0;c<u.length;c++)g+=u[c];const l=o.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",l),f.getUniforms().setValue(i,"morphTargetInfluences",u)}f.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Uc(i,e,t,n,r){let s=new WeakMap;function a(u){const d=r.render.frame,p=u.geometry,h=e.get(u,p);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",f)===!1&&u.addEventListener("dispose",f),s.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const g=u.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return h}function o(){s=new WeakMap}function f(u){const d=u.target;d.removeEventListener("dispose",f),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Nc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Bc(i,e,t,n,r){const s=new qt(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Wn(e,t):void 0}),a=new qt(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),o=new rt;o.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const f=new Lt({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Mt(o,f),d=new Ls(-1,1,1,-1,0,1);let p=null,h=null,g=!1,l,c=null,m=[],_=!1;this.setSize=function(M,b){s.setSize(M,b),a.setSize(M,b);for(let y=0;y<m.length;y++){const L=m[y];L.setSize&&L.setSize(M,b)}},this.setEffects=function(M){m=M,_=m.length>0&&m[0].isRenderPass===!0;const b=s.width,y=s.height;for(let L=0;L<m.length;L++){const T=m[L];T.setSize&&T.setSize(b,y)}},this.begin=function(M,b){if(g||M.toneMapping===0&&m.length===0)return!1;if(c=b,b!==null){const y=b.width,L=b.height;(s.width!==y||s.height!==L)&&this.setSize(y,L)}return _===!1&&M.setRenderTarget(s),l=M.toneMapping,M.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(M,b){M.toneMapping=l,g=!0;let y=s,L=a;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(M,L,y,b),C.needsSwap!==!1)){const v=y;y=L,L=v}}if(p!==M.outputColorSpace||h!==M.toneMapping){p=M.outputColorSpace,h=M.toneMapping,f.defines={},ke.getTransfer(p)===$e&&(f.defines.SRGB_TRANSFER="");const T=Nc[h];T&&(f.defines[T]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(c),M.render(u,d),c=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),f.dispose()}}const ks=new wt,Or=new Wn(1,1),Ws=new es,Xs=new Ga,qs=new Ts,Ys=[],$s=[],Ks=new Float32Array(16),Zs=new Float32Array(9),js=new Float32Array(4);function Kn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ys[r];if(s===void 0&&(s=new Float32Array(r),Ys[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qi(i,e){let t=$s[e];t===void 0&&(t=new Int32Array(e),$s[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Oc(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function zc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Vc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Hc(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;js.set(n),i.uniformMatrix2fv(this.addr,!1,js),_t(t,n)}}function kc(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Zs.set(n),i.uniformMatrix3fv(this.addr,!1,Zs),_t(t,n)}}function Wc(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ks.set(n),i.uniformMatrix4fv(this.addr,!1,Ks),_t(t,n)}}function Xc(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Yc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function $c(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Kc(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function jc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Jc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Qc(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Or.compareFunction=t.isReversedDepthBuffer()?518:515,s=Or):s=ks,t.setTexture2D(e||s,r)}function eu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xs,r)}function tu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||qs,r)}function nu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ws,r)}function iu(i){switch(i){case 5126:return Oc;case 35664:return Gc;case 35665:return zc;case 35666:return Vc;case 35674:return Hc;case 35675:return kc;case 35676:return Wc;case 5124:case 35670:return Xc;case 35667:case 35671:return qc;case 35668:case 35672:return Yc;case 35669:case 35673:return $c;case 5125:return Kc;case 36294:return Zc;case 36295:return jc;case 36296:return Jc;case 35678:case 36198:case 36298:case 36306:case 35682:return Qc;case 35679:case 36299:case 36307:return eu;case 35680:case 36300:case 36308:case 36293:return tu;case 36289:case 36303:case 36311:case 36292:return nu}}function ru(i,e){i.uniform1fv(this.addr,e)}function su(i,e){const t=Kn(e,this.size,2);i.uniform2fv(this.addr,t)}function au(i,e){const t=Kn(e,this.size,3);i.uniform3fv(this.addr,t)}function ou(i,e){const t=Kn(e,this.size,4);i.uniform4fv(this.addr,t)}function lu(i,e){const t=Kn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cu(i,e){const t=Kn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uu(i,e){const t=Kn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hu(i,e){i.uniform1iv(this.addr,e)}function fu(i,e){i.uniform2iv(this.addr,e)}function du(i,e){i.uniform3iv(this.addr,e)}function pu(i,e){i.uniform4iv(this.addr,e)}function mu(i,e){i.uniform1uiv(this.addr,e)}function gu(i,e){i.uniform2uiv(this.addr,e)}function _u(i,e){i.uniform3uiv(this.addr,e)}function xu(i,e){i.uniform4uiv(this.addr,e)}function vu(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Or:a=ks;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Su(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xs,s[a])}function Mu(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||qs,s[a])}function Eu(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ws,s[a])}function yu(i){switch(i){case 5126:return ru;case 35664:return su;case 35665:return au;case 35666:return ou;case 35674:return lu;case 35675:return cu;case 35676:return uu;case 5124:case 35670:return hu;case 35667:case 35671:return fu;case 35668:case 35672:return du;case 35669:case 35673:return pu;case 5125:return mu;case 36294:return gu;case 36295:return _u;case 36296:return xu;case 35678:case 36198:case 36298:case 36306:case 35682:return vu;case 35679:case 36299:case 36307:return Su;case 35680:case 36300:case 36308:case 36293:return Mu;case 36289:case 36303:case 36311:case 36292:return Eu}}class Tu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iu(t.type)}}class bu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yu(t.type)}}class Au{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Js(i,e){i.seq.push(e),i.map[e.id]=e}function wu(i,e,t){const n=i.name,r=n.length;for(Gr.lastIndex=0;;){const s=Gr.exec(n),a=Gr.lastIndex;let o=s[1];const f=s[2]==="]",u=s[3];if(f&&(o=o|0),u===void 0||u==="["&&a+2===r){Js(t,u===void 0?new Tu(o,i,e):new bu(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Au(o),Js(t,p)),t=p}}}class Yi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),f=e.getUniformLocation(t,o.name);wu(o,f,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],f=n[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Qs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ru=37297;let Cu=0;function Pu(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ea=new De;function Lu(i){ke._getMatrix(ea,ke.workingColorSpace,i);const e=`mat3( ${ea.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case mi:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ta(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Pu(i.getShaderSource(e),o)}else return s}function Du(i,e){const t=Lu(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Iu={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Fu(i,e){const t=Iu[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $i=new P;function Uu(){ke.getLuminanceCoefficients($i);const i=$i.x.toFixed(4),e=$i.y.toFixed(4),t=$i.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nu(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ci).join(`
`)}function Bu(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ou(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ci(i){return i!==""}function na(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ia(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gu=/^[ \t]*#include +<([\w\d./]+)>/gm;function zr(i){return i.replace(Gu,Vu)}const zu=new Map;function Vu(i,e){let t=Ne[e];if(t===void 0){const n=zu.get(e);if(n!==void 0)t=Ne[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zr(t)}const Hu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ra(i){return i.replace(Hu,ku)}function ku(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wu={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Xu(i){return Wu[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qu={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Yu(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qu[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const $u={302:"ENVMAP_MODE_REFRACTION"};function Ku(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$u[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zu={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function ju(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zu[i.combine]||"ENVMAP_BLENDING_NONE"}function Ju(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qu(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const f=Xu(t),u=Yu(t),d=Ku(t),p=ju(t),h=Ju(t),g=Nu(t),l=Bu(s),c=r.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l].filter(ci).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l].filter(ci).join(`
`),_.length>0&&(_+=`
`)):(m=[sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),_=[sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,l,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ne.tonemapping_pars_fragment:"",t.toneMapping!==0?Fu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Du("linearToOutputTexel",t.outputColorSpace),Uu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ci).join(`
`)),a=zr(a),a=na(a,t),a=ia(a,t),o=zr(o),o=na(o,t),o=ia(o,t),a=ra(a),o=ra(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===At?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===At?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=M+m+a,y=M+_+o,L=Qs(r,r.VERTEX_SHADER,b),T=Qs(r,r.FRAGMENT_SHADER,y);r.attachShader(c,L),r.attachShader(c,T),t.index0AttributeName!==void 0?r.bindAttribLocation(c,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(c,0,"position"),r.linkProgram(c);function C(w){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(c)||"",q=r.getShaderInfoLog(L)||"",k=r.getShaderInfoLog(T)||"",F=z.trim(),B=q.trim(),V=k.trim();let j=!0,ee=!0;if(r.getProgramParameter(c,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,c,L,T);else{const ce=ta(r,L,"vertex"),Se=ta(r,T,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(c,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+ce+`
`+Se)}else F!==""?we("WebGLProgram: Program Info Log:",F):(B===""||V==="")&&(ee=!1);ee&&(w.diagnostics={runnable:j,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:_}})}r.deleteShader(L),r.deleteShader(T),v=new Yi(r,c),A=Ou(r,c)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(c,Ru)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(c),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cu++,this.cacheKey=e,this.usedTimes=1,this.program=c,this.vertexShader=L,this.fragmentShader=T,this}let eh=0;class th{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nh(e),t.set(e,n)),n}}class nh{constructor(e){this.id=eh++,this.code=e,this.usedTimes=0}}function ih(i){return i===1030||i===37490||i===36285}function rh(i,e,t,n,r,s){const a=new is,o=new th,f=new Set,u=[],d=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function l(v){return f.add(v),v===0?"uv":`uv${v}`}function c(v,A,U,w,z,q){const k=w.fog,F=z.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||B,V),ee=j&&j.mapping===306?j.image.height:null,ce=g[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&we("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const Se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ee=Se!==void 0?Se.length:0;let Ge=0;F.morphAttributes.position!==void 0&&(Ge=1),F.morphAttributes.normal!==void 0&&(Ge=2),F.morphAttributes.color!==void 0&&(Ge=3);let Z,he,W,se;if(ce){const Ie=Kt[ce];Z=Ie.vertexShader,he=Ie.fragmentShader}else Z=v.vertexShader,he=v.fragmentShader,o.update(v),W=o.getVertexShaderID(v),se=o.getFragmentShaderID(v);const te=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,at=!!v.map,ze=!!v.matcap,Ze=!!j,st=!!v.aoMap,Oe=!!v.lightMap,xt=!!v.bumpMap,ot=!!v.normalMap,Ut=!!v.displacementMap,D=!!v.emissiveMap,vt=!!v.metalnessMap,Ve=!!v.roughnessMap,nt=v.anisotropy>0,fe=v.clearcoat>0,ct=v.dispersion>0,E=v.iridescence>0,x=v.sheen>0,N=v.transmission>0,$=nt&&!!v.anisotropyMap,Q=fe&&!!v.clearcoatMap,ne=fe&&!!v.clearcoatNormalMap,le=fe&&!!v.clearcoatRoughnessMap,X=E&&!!v.iridescenceMap,K=E&&!!v.iridescenceThicknessMap,me=x&&!!v.sheenColorMap,xe=x&&!!v.sheenRoughnessMap,ae=!!v.specularMap,ie=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ue=N&&!!v.transmissionMap,qe=N&&!!v.thicknessMap,R=!!v.gradientMap,re=!!v.alphaMap,Y=v.alphaTest>0,ge=!!v.alphaHash,oe=!!v.extensions;let J=0;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(J=i.toneMapping);const ye={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:he,defines:v.defines,customVertexShaderID:W,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:at,matcap:ze,envMap:Ze,envMapMode:Ze&&j.mapping,envMapCubeUVHeight:ee,aoMap:st,lightMap:Oe,bumpMap:xt,normalMap:ot,displacementMap:Ut,emissiveMap:D,normalMapObjectSpace:ot&&v.normalMapType===1,normalMapTangentSpace:ot&&v.normalMapType===0,packedNormalMap:ot&&v.normalMapType===0&&ih(v.normalMap.format),metalnessMap:vt,roughnessMap:Ve,anisotropy:nt,anisotropyMap:$,clearcoat:fe,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:ct,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:K,sheen:x,sheenColorMap:me,sheenRoughnessMap:xe,specularMap:ae,specularColorMap:ie,specularIntensityMap:Le,transmission:N,transmissionMap:Ue,thicknessMap:qe,gradientMap:R,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:Y,alphaHash:ge,combine:v.combine,mapUv:at&&l(v.map.channel),aoMapUv:st&&l(v.aoMap.channel),lightMapUv:Oe&&l(v.lightMap.channel),bumpMapUv:xt&&l(v.bumpMap.channel),normalMapUv:ot&&l(v.normalMap.channel),displacementMapUv:Ut&&l(v.displacementMap.channel),emissiveMapUv:D&&l(v.emissiveMap.channel),metalnessMapUv:vt&&l(v.metalnessMap.channel),roughnessMapUv:Ve&&l(v.roughnessMap.channel),anisotropyMapUv:$&&l(v.anisotropyMap.channel),clearcoatMapUv:Q&&l(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&l(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&l(v.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&l(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&l(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&l(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&l(v.sheenRoughnessMap.channel),specularMapUv:ae&&l(v.specularMap.channel),specularColorMapUv:ie&&l(v.specularColorMap.channel),specularIntensityMapUv:Le&&l(v.specularIntensityMap.channel),transmissionMapUv:Ue&&l(v.transmissionMap.channel),thicknessMapUv:qe&&l(v.thicknessMap.channel),alphaMapUv:re&&l(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ot||nt),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(at||re),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:at&&v.map.isVideoTexture===!0&&ke.getTransfer(v.map.colorSpace)===$e,decodeVideoTextureEmissive:D&&v.emissiveMap.isVideoTexture===!0&&ke.getTransfer(v.emissiveMap.colorSpace)===$e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ye.vertexUv1s=f.has(1),ye.vertexUv2s=f.has(2),ye.vertexUv3s=f.has(3),f.clear(),ye}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)A.push(U),A.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(_(A,v),M(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function b(v){const A=g[v.type];let U;if(A){const w=Kt[A];U=lo.clone(w.uniforms)}else U=v.uniforms;return U}function y(v,A){let U=d.get(A);return U!==void 0?++U.usedTimes:(U=new Qu(i,A,v,r),u.push(U),d.set(A,U)),U}function L(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:c,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:L,releaseShaderCache:T,programs:u,dispose:C}}function sh(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,f){i.get(a)[o]=f}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ah(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function aa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,l,c,m,_){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:g,material:l,materialVariant:a(h),groupOrder:c,renderOrder:h.renderOrder,z:m,group:_},i[e]=M):(M.id=h.id,M.object=h,M.geometry=g,M.material=l,M.materialVariant=a(h),M.groupOrder=c,M.renderOrder=h.renderOrder,M.z=m,M.group=_),e++,M}function f(h,g,l,c,m,_){const M=o(h,g,l,c,m,_);l.transmission>0?n.push(M):l.transparent===!0?r.push(M):t.push(M)}function u(h,g,l,c,m,_){const M=o(h,g,l,c,m,_);l.transmission>0?n.unshift(M):l.transparent===!0?r.unshift(M):t.unshift(M)}function d(h,g){t.length>1&&t.sort(h||ah),n.length>1&&n.sort(g||aa),r.length>1&&r.sort(g||aa)}function p(){for(let h=e,g=i.length;h<g;h++){const l=i[h];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:f,unshift:u,finish:p,sort:d}}function oh(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new oa,i.set(n,[a])):r>=s.length?(a=new oa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function ch(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uh=0;function hh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fh(i){const e=new lh,t=ch(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const r=new P,s=new Qe,a=new Qe;function o(u){let d=0,p=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,l=0,c=0,m=0,_=0,M=0,b=0,y=0,L=0,T=0,C=0;u.sort(hh);for(let A=0,U=u.length;A<U;A++){const w=u[A],z=w.color,q=w.intensity,k=w.distance;let F=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===1030?F=w.shadow.map.texture:F=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=z.r*q,p+=z.g*q,h+=z.b*q;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],q);C++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,j=t.get(w);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=F,n.directionalShadowMatrix[g]=w.shadow.matrix,M++}n.directional[g]=B,g++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(z).multiplyScalar(q),B.distance=k,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[c]=B;const V=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,V.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[c]=V.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[c]=j,n.spotShadowMap[c]=F,y++}c++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(z).multiplyScalar(q),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const V=w.shadow,j=t.get(w);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[l]=j,n.pointShadowMap[l]=F,n.pointShadowMatrix[l]=w.shadow.matrix,b++}n.point[l]=B,l++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(q),B.groundColor.copy(w.groundColor).multiplyScalar(q),n.hemi[_]=B,_++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==g||v.pointLength!==l||v.spotLength!==c||v.rectAreaLength!==m||v.hemiLength!==_||v.numDirectionalShadows!==M||v.numPointShadows!==b||v.numSpotShadows!==y||v.numSpotMaps!==L||v.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=c,n.rectArea.length=m,n.point.length=l,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,v.directionalLength=g,v.pointLength=l,v.spotLength=c,v.rectAreaLength=m,v.hemiLength=_,v.numDirectionalShadows=M,v.numPointShadows=b,v.numSpotShadows=y,v.numSpotMaps=L,v.numLightProbes=C,n.version=uh++)}function f(u,d){let p=0,h=0,g=0,l=0,c=0;const m=d.matrixWorldInverse;for(let _=0,M=u.length;_<M;_++){const b=u[_];if(b.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(b.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const y=n.rectArea[l];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),l++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const y=n.hemi[c];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),c++}}}return{setup:o,setupView:f,state:n}}function la(i){const e=new fh(i),t=[],n=[],r=[];function s(h){p.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function f(h){r.push(h)}function u(){e.setup(t)}function d(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:f}}function dh(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new la(i),e.set(r,[o])):s>=a.length?(o=new la(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ph=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gh=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],_h=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ca=new Qe,ui=new P,Vr=new P;function xh(i,e,t){let n=new _s;const r=new Ke,s=new Ke,a=new ht,o=new ho,f=new fo,u={},d=t.maxTextureSize,p={0:1,1:0,2:2},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:ph,fragmentShader:mh}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const l=new rt;l.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new Mt(l,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(T,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===2&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const A=i.getRenderTarget(),U=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(0),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=_!==this.type;q&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(F=>F.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,F=T.length;k<F;k++){const B=T[k],V=B.shadow;if(V===void 0){we("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const j=V.getFrameExtents();r.multiply(j),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,V.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ee,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===3){if(B.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new qt(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Wn(r.x,r.y,1015),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=1026,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=1003,V.map.depthTexture.magFilter=1003}else B.isPointLight?(V.map=new Hs(r.x),V.map.depthTexture=new ao(r.x,1014)):(V.map=new qt(r.x,r.y),V.map.depthTexture=new Wn(r.x,r.y,1014)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=1026,this.type===1?(V.map.depthTexture.compareFunction=ee?518:515,V.map.depthTexture.minFilter=1006,V.map.depthTexture.magFilter=1006):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=1003,V.map.depthTexture.magFilter=1003);V.camera.updateProjectionMatrix()}const ce=V.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ce;Se++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(V.map),i.clear());const Ee=V.getViewport(Se);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),z.viewport(a)}if(B.isPointLight){const Ee=V.camera,Ge=V.matrix,Z=B.distance||Ee.far;Z!==Ee.far&&(Ee.far=Z,Ee.updateProjectionMatrix()),ui.setFromMatrixPosition(B.matrixWorld),Ee.position.copy(ui),Vr.copy(Ee.position),Vr.add(gh[Se]),Ee.up.copy(_h[Se]),Ee.lookAt(Vr),Ee.updateMatrixWorld(),Ge.makeTranslation(-ui.x,-ui.y,-ui.z),ca.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ca,Ee.coordinateSystem,Ee.reversedDepth)}else V.updateMatrices(B);n=V.getFrustum(),y(C,v,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===3&&M(V,v),V.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(A,U,w)};function M(T,C){const v=e.update(c);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qt(r.x,r.y,{format:1030,type:1016})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,c,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,v,g,c,null)}function b(T,C,v,A){let U=null;const w=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)U=w;else if(U=v.isPointLight===!0?f:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=U.uuid,q=C.uuid;let k=u[z];k===void 0&&(k={},u[z]=k);let F=k[q];F===void 0&&(F=U.clone(),k[q]=F,C.addEventListener("dispose",L)),U=F}if(U.visible=C.visible,U.wireframe=C.wireframe,A===3?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:p[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const z=i.properties.get(U);z.light=v}return U}function y(T,C,v,A,U){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const q=e.update(T),k=T.material;if(Array.isArray(k)){const F=q.groups;for(let B=0,V=F.length;B<V;B++){const j=F[B],ee=k[j.materialIndex];if(ee&&ee.visible){const ce=b(T,ee,A,U);T.onBeforeShadow(i,T,C,v,q,ce,j),i.renderBufferDirect(v,null,q,ce,T,j),T.onAfterShadow(i,T,C,v,q,ce,j)}}}else if(k.visible){const F=b(T,k,A,U);T.onBeforeShadow(i,T,C,v,q,F,null),i.renderBufferDirect(v,null,q,F,T,null),T.onAfterShadow(i,T,C,v,q,F,null)}}const z=T.children;for(let q=0,k=z.length;q<k;q++)y(z[q],C,v,A,U)}function L(T){T.target.removeEventListener("dispose",L);for(const v in u){const A=u[v],U=T.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function vh(i,e){function t(){let R=!1;const re=new ht;let Y=null;const ge=new ht(0,0,0,0);return{setMask:function(oe){Y!==oe&&!R&&(i.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){R=oe},setClear:function(oe,J,ye,Ie,ft){ft===!0&&(oe*=Ie,J*=Ie,ye*=Ie),re.set(oe,J,ye,Ie),ge.equals(re)===!1&&(i.clearColor(oe,J,ye,Ie),ge.copy(re))},reset:function(){R=!1,Y=null,ge.set(-1,0,0,0)}}}function n(){let R=!1,re=!1,Y=null,ge=null,oe=null;return{setReversed:function(J){if(re!==J){const ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=J;const Ie=oe;oe=null,this.setClear(Ie)}},getReversed:function(){return re},setTest:function(J){J?te(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(J){Y!==J&&!R&&(i.depthMask(J),Y=J)},setFunc:function(J){if(re&&(J=Da[J]),ge!==J){switch(J){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=J}},setLocked:function(J){R=J},setClear:function(J){oe!==J&&(oe=J,re&&(J=1-J),i.clearDepth(J))},reset:function(){R=!1,Y=null,ge=null,oe=null,re=!1}}}function r(){let R=!1,re=null,Y=null,ge=null,oe=null,J=null,ye=null,Ie=null,ft=null;return{setTest:function(je){R||(je?te(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(je){re!==je&&!R&&(i.stencilMask(je),re=je)},setFunc:function(je,on,jt){(Y!==je||ge!==on||oe!==jt)&&(i.stencilFunc(je,on,jt),Y=je,ge=on,oe=jt)},setOp:function(je,on,jt){(J!==je||ye!==on||Ie!==jt)&&(i.stencilOp(je,on,jt),J=je,ye=on,Ie=jt)},setLocked:function(je){R=je},setClear:function(je){ft!==je&&(i.clearStencil(je),ft=je)},reset:function(){R=!1,re=null,Y=null,ge=null,oe=null,J=null,ye=null,Ie=null,ft=null}}}const s=new t,a=new n,o=new r,f=new WeakMap,u=new WeakMap;let d={},p={},h={},g=new WeakMap,l=[],c=null,m=!1,_=null,M=null,b=null,y=null,L=null,T=null,C=null,v=new Ye(0,0,0),A=0,U=!1,w=null,z=null,q=null,k=null,F=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=j>=2);let ce=null,Se={};const Ee=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Z=new ht().fromArray(Ee),he=new ht().fromArray(Ge);function W(R,re,Y,ge){const oe=new Uint8Array(4),J=i.createTexture();i.bindTexture(R,J),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<Y;ye++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(re+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return J}const se={};se[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(3),xt(!1),ot(1),te(i.CULL_FACE),st(0);function te(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function Ae(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Ce(R,re){return h[R]!==re?(i.bindFramebuffer(R,re),h[R]=re,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(R,re){let Y=l,ge=!1;if(R){Y=g.get(re),Y===void 0&&(Y=[],g.set(re,Y));const oe=R.textures;if(Y.length!==oe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ye=oe.length;J<ye;J++)Y[J]=i.COLOR_ATTACHMENT0+J;Y.length=oe.length,ge=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Y)}function at(R){return c!==R?(i.useProgram(R),c=R,!0):!1}const ze={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ze[103]=i.MIN,ze[104]=i.MAX;const Ze={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function st(R,re,Y,ge,oe,J,ye,Ie,ft,je){if(R===0){m===!0&&(Ae(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),R!==5){if(R!==_||je!==U){if((M!==100||L!==100)&&(i.blendEquation(i.FUNC_ADD),M=100,L=100),je)switch(R){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",R);break}else switch(R){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",R);break}b=null,y=null,T=null,C=null,v.set(0,0,0),A=0,_=R,U=je}return}oe=oe||re,J=J||Y,ye=ye||ge,(re!==M||oe!==L)&&(i.blendEquationSeparate(ze[re],ze[oe]),M=re,L=oe),(Y!==b||ge!==y||J!==T||ye!==C)&&(i.blendFuncSeparate(Ze[Y],Ze[ge],Ze[J],Ze[ye]),b=Y,y=ge,T=J,C=ye),(Ie.equals(v)===!1||ft!==A)&&(i.blendColor(Ie.r,Ie.g,Ie.b,ft),v.copy(Ie),A=ft),_=R,U=!1}function Oe(R,re){R.side===2?Ae(i.CULL_FACE):te(i.CULL_FACE);let Y=R.side===1;re&&(Y=!Y),xt(Y),R.blending===1&&R.transparent===!1?st(0):st(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const ge=R.stencilWrite;o.setTest(ge),ge&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),D(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(R){w!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),w=R)}function ot(R){R!==0?(te(i.CULL_FACE),R!==z&&(R===1?i.cullFace(i.BACK):R===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),z=R}function Ut(R){R!==q&&(V&&i.lineWidth(R),q=R)}function D(R,re,Y){R?(te(i.POLYGON_OFFSET_FILL),(k!==re||F!==Y)&&(k=re,F=Y,a.getReversed()&&(re=-re),i.polygonOffset(re,Y))):Ae(i.POLYGON_OFFSET_FILL)}function vt(R){R?te(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function Ve(R){R===void 0&&(R=i.TEXTURE0+B-1),ce!==R&&(i.activeTexture(R),ce=R)}function nt(R,re,Y){Y===void 0&&(ce===null?Y=i.TEXTURE0+B-1:Y=ce);let ge=Se[Y];ge===void 0&&(ge={type:void 0,texture:void 0},Se[Y]=ge),(ge.type!==R||ge.texture!==re)&&(ce!==Y&&(i.activeTexture(Y),ce=Y),i.bindTexture(R,re||se[R]),ge.type=R,ge.texture=re)}function fe(){const R=Se[ce];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function x(){try{i.texSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function N(){try{i.texSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function ne(){try{i.texStorage2D(...arguments)}catch(R){We("WebGLState:",R)}}function le(){try{i.texStorage3D(...arguments)}catch(R){We("WebGLState:",R)}}function X(){try{i.texImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function K(){try{i.texImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function me(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function xe(R,re){p[R]!==re&&(i.pixelStorei(R,re),p[R]=re)}function ae(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ie(R){he.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),he.copy(R))}function Le(R,re){let Y=u.get(re);Y===void 0&&(Y=new WeakMap,u.set(re,Y));let ge=Y.get(R);ge===void 0&&(ge=i.getUniformBlockIndex(re,R.name),Y.set(R,ge))}function Ue(R,re){const ge=u.get(re).get(R);f.get(re)!==ge&&(i.uniformBlockBinding(re,ge,R.__bindingPointIndex),f.set(re,ge))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},ce=null,Se={},h={},g=new WeakMap,l=[],c=null,m=!1,_=null,M=null,b=null,y=null,L=null,T=null,C=null,v=new Ye(0,0,0),A=0,U=!1,w=null,z=null,q=null,k=null,F=null,Z.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ae,bindFramebuffer:Ce,drawBuffers:Re,useProgram:at,setBlending:st,setMaterial:Oe,setFlipSided:xt,setCullFace:ot,setLineWidth:Ut,setPolygonOffset:D,setScissorTest:vt,activeTexture:Ve,bindTexture:nt,unbindTexture:fe,compressedTexImage2D:ct,compressedTexImage3D:E,texImage2D:X,texImage3D:K,pixelStorei:xe,getParameter:me,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:ne,texStorage3D:le,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:ae,viewport:ie,reset:qe}}function Sh(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap,p=new Set;let h;const g=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(E,x){return l?new OffscreenCanvas(E,x):gi("canvas")}function m(E,x,N){let $=1;const Q=ct(E);if((Q.width>N||Q.height>N)&&($=N/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor($*Q.width),le=Math.floor($*Q.height);h===void 0&&(h=c(ne,le));const X=x?c(ne,le):h;return X.width=ne,X.height=le,X.getContext("2d").drawImage(E,0,0,ne,le),we("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ne+"x"+le+")."),X}else return"data"in E&&we("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function _(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,x,N,$,Q,ne=!1){if(E!==null){if(i[E]!==void 0)return i[E];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le;$&&(le=e.get("EXT_texture_norm16"),le||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=x;if(x===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8),N===i.UNSIGNED_SHORT&&le&&(X=le.R16_EXT),N===i.SHORT&&le&&(X=le.R16_SNORM_EXT)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),x===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8),N===i.UNSIGNED_SHORT&&le&&(X=le.RG16_EXT),N===i.SHORT&&le&&(X=le.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_SHORT&&le&&(X=le.RGB16_EXT),N===i.SHORT&&le&&(X=le.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){const K=ne?mi:ke.getTransfer(Q);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=K===$e?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&le&&(X=le.RGBA16_EXT),N===i.SHORT&&le&&(X=le.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function L(E,x){let N;return E?x===null||x===1014||x===1020?N=i.DEPTH24_STENCIL8:x===1015?N=i.DEPTH32F_STENCIL8:x===1012&&(N=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?N=i.DEPTH_COMPONENT24:x===1015?N=i.DEPTH_COMPONENT32F:x===1012&&(N=i.DEPTH_COMPONENT16),N}function T(E,x){return _(E)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&p.delete(x)}function v(E){const x=E.target;x.removeEventListener("dispose",v),w(x)}function A(E){const x=n.get(E);if(x.__webglInit===void 0)return;const N=E.source,$=g.get(N);if($){const Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(E),Object.keys($).length===0&&g.delete(N)}n.remove(E)}function U(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const N=E.source,$=g.get(N);delete $[x.__cacheKey],a.memory.textures--}function w(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Q=0;Q<x.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let $=0,Q=N.length;$<Q;$++){const ne=n.get(N[$]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(N[$])}n.remove(E)}let z=0;function q(){z=0}function k(){return z}function F(E){z=E}function B(){const E=z;return E>=r.maxTextures&&we("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),z+=1,E}function V(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function j(E,x){const N=n.get(E);if(E.isVideoTexture&&nt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const $=E.image;if($===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(N,E,x);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function ee(E,x){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ae(N,E,x);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function ce(E,x){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ae(N,E,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function Se(E,x){const N=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Ce(N,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const Ee={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Ge={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Z={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function he(E,x){if(x.type===1015&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ee[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ee[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ee[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Ge[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Ge[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Z[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function W(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const $=x.source;let Q=g.get($);Q===void 0&&(Q={},g.set($,Q));const ne=V(x);if(ne!==E.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[ne].usedTimes++;const le=Q[E.__cacheKey];le!==void 0&&(Q[E.__cacheKey].usedTimes--,le.usedTimes===0&&U(x)),E.__cacheKey=ne,E.__webglTexture=Q[ne].texture}return N}function se(E,x,N){return Math.floor(Math.floor(E/N)/x)}function te(E,x,N,$){const ne=E.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,$,x.data);else{ne.sort((xe,ae)=>xe.start-ae.start);let le=0;for(let xe=1;xe<ne.length;xe++){const ae=ne[le],ie=ne[xe],Le=ae.start+ae.count,Ue=se(ie.start,x.width,4),qe=se(ae.start,x.width,4);ie.start<=Le+1&&Ue===qe&&se(ie.start+ie.count-1,x.width,4)===Ue?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++le,ne[le]=ie)}ne.length=le+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let xe=0,ae=ne.length;xe<ae;xe++){const ie=ne[xe],Le=Math.floor(ie.start/4),Ue=Math.ceil(ie.count/4),qe=Le%x.width,R=Math.floor(Le/x.width),re=Ue,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,qe,R,re,Y,N,$,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function Ae(E,x,N){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const Q=W(E,x),ne=x.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+N);const le=n.get(ne);if(ne.version!==le.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Y=ke.getPrimaries(ke.workingColorSpace),ge=x.colorSpace===""?null:ke.getPrimaries(x.colorSpace),oe=x.colorSpace===""||Y===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,r.maxTextureSize);K=fe(x,K);const me=s.convert(x.format,x.colorSpace),xe=s.convert(x.type);let ae=y(x.internalFormat,me,xe,x.normalized,x.colorSpace,x.isVideoTexture);he($,x);let ie;const Le=x.mipmaps,Ue=x.isVideoTexture!==!0,qe=le.__version===void 0||Q===!0,R=ne.dataReady,re=T(x,K);if(x.isDepthTexture)ae=L(x.format===1027,x.type),qe&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,ae,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ae,K.width,K.height,0,me,xe,null));else if(x.isDataTexture)if(Le.length>0){Ue&&qe&&t.texStorage2D(i.TEXTURE_2D,re,ae,Le[0].width,Le[0].height);for(let Y=0,ge=Le.length;Y<ge;Y++)ie=Le[Y],Ue?R&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ie.width,ie.height,me,xe,ie.data):t.texImage2D(i.TEXTURE_2D,Y,ae,ie.width,ie.height,0,me,xe,ie.data);x.generateMipmaps=!1}else Ue?(qe&&t.texStorage2D(i.TEXTURE_2D,re,ae,K.width,K.height),R&&te(x,K,me,xe)):t.texImage2D(i.TEXTURE_2D,0,ae,K.width,K.height,0,me,xe,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,ae,Le[0].width,Le[0].height,K.depth);for(let Y=0,ge=Le.length;Y<ge;Y++)if(ie=Le[Y],x.format!==1023)if(me!==null)if(Ue){if(R)if(x.layerUpdates.size>0){const oe=Is(ie.width,ie.height,x.format,x.type);for(const J of x.layerUpdates){const ye=ie.data.subarray(J*oe/ie.data.BYTES_PER_ELEMENT,(J+1)*oe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,J,ie.width,ie.height,1,me,ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,K.depth,me,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ae,ie.width,ie.height,K.depth,0,ie.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,K.depth,me,xe,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ae,ie.width,ie.height,K.depth,0,me,xe,ie.data)}else{Ue&&qe&&t.texStorage2D(i.TEXTURE_2D,re,ae,Le[0].width,Le[0].height);for(let Y=0,ge=Le.length;Y<ge;Y++)ie=Le[Y],x.format!==1023?me!==null?Ue?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ie.width,ie.height,me,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ae,ie.width,ie.height,0,ie.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?R&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ie.width,ie.height,me,xe,ie.data):t.texImage2D(i.TEXTURE_2D,Y,ae,ie.width,ie.height,0,me,xe,ie.data)}else if(x.isDataArrayTexture)if(Ue){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,ae,K.width,K.height,K.depth),R)if(x.layerUpdates.size>0){const Y=Is(K.width,K.height,x.format,x.type);for(const ge of x.layerUpdates){const oe=K.data.subarray(ge*Y/K.data.BYTES_PER_ELEMENT,(ge+1)*Y/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,K.width,K.height,1,me,xe,oe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,me,xe,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,K.width,K.height,K.depth,0,me,xe,K.data);else if(x.isData3DTexture)Ue?(qe&&t.texStorage3D(i.TEXTURE_3D,re,ae,K.width,K.height,K.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,me,xe,K.data)):t.texImage3D(i.TEXTURE_3D,0,ae,K.width,K.height,K.depth,0,me,xe,K.data);else if(x.isFramebufferTexture){if(qe)if(Ue)t.texStorage2D(i.TEXTURE_2D,re,ae,K.width,K.height);else{let Y=K.width,ge=K.height;for(let oe=0;oe<re;oe++)t.texImage2D(i.TEXTURE_2D,oe,ae,Y,ge,0,me,xe,null),Y>>=1,ge>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),K.parentNode!==Y){Y.appendChild(K),p.add(x),Y.onpaint=Ie=>{const ft=Ie.changedElements;for(const je of p)ft.includes(je.image)&&(je.needsUpdate=!0)},Y.requestPaint();return}const ge=0,oe=i.RGBA,J=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ge,oe,J,ye,K),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&qe){const Y=ct(Le[0]);t.texStorage2D(i.TEXTURE_2D,re,ae,Y.width,Y.height)}for(let Y=0,ge=Le.length;Y<ge;Y++)ie=Le[Y],Ue?R&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,me,xe,ie):t.texImage2D(i.TEXTURE_2D,Y,ae,me,xe,ie);x.generateMipmaps=!1}else if(Ue){if(qe){const Y=ct(K);t.texStorage2D(i.TEXTURE_2D,re,ae,Y.width,Y.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,xe,K)}else t.texImage2D(i.TEXTURE_2D,0,ae,me,xe,K);_(x)&&M($),le.__version=ne.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ce(E,x,N){if(x.image.length!==6)return;const $=W(E,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const ne=n.get(Q);if(Q.version!==ne.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const le=ke.getPrimaries(ke.workingColorSpace),X=x.colorSpace===""?null:ke.getPrimaries(x.colorSpace),K=x.colorSpace===""||le===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let J=0;J<6;J++)!me&&!xe?ae[J]=m(x.image[J],!0,r.maxCubemapSize):ae[J]=xe?x.image[J].image:x.image[J],ae[J]=fe(x,ae[J]);const ie=ae[0],Le=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type),qe=y(x.internalFormat,Le,Ue,x.normalized,x.colorSpace),R=x.isVideoTexture!==!0,re=ne.__version===void 0||$===!0,Y=Q.dataReady;let ge=T(x,ie);he(i.TEXTURE_CUBE_MAP,x);let oe;if(me){R&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,qe,ie.width,ie.height);for(let J=0;J<6;J++){oe=ae[J].mipmaps;for(let ye=0;ye<oe.length;ye++){const Ie=oe[ye];x.format!==1023?Le!==null?R?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Ie.width,Ie.height,Le,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,Ie.width,Ie.height,0,Ie.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Ie.width,Ie.height,Le,Ue,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,qe,Ie.width,Ie.height,0,Le,Ue,Ie.data)}}}else{if(oe=x.mipmaps,R&&re){oe.length>0&&ge++;const J=ct(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,qe,J.width,J.height)}for(let J=0;J<6;J++)if(xe){R?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ae[J].width,ae[J].height,Le,Ue,ae[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,ae[J].width,ae[J].height,0,Le,Ue,ae[J].data);for(let ye=0;ye<oe.length;ye++){const ft=oe[ye].image[J].image;R?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,ft.width,ft.height,Le,Ue,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,ft.width,ft.height,0,Le,Ue,ft.data)}}else{R?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,Ue,ae[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Le,Ue,ae[J]);for(let ye=0;ye<oe.length;ye++){const Ie=oe[ye];R?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Le,Ue,Ie.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,qe,Le,Ue,Ie.image[J])}}}_(x)&&M(i.TEXTURE_CUBE_MAP),ne.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Re(E,x,N,$,Q,ne){const le=s.convert(N.format,N.colorSpace),X=s.convert(N.type),K=y(N.internalFormat,le,X,N.normalized,N.colorSpace),me=n.get(x),xe=n.get(N);if(xe.__renderTarget=x,!me.__hasExternalTextures){const ae=Math.max(1,x.width>>ne),ie=Math.max(1,x.height>>ne);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,K,ae,ie,x.depth,0,le,X,null):t.texImage2D(Q,ne,K,ae,ie,0,le,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,xe.__webglTexture,0,vt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,xe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const $=x.depthTexture,Q=$&&$.isDepthTexture?$.type:null,ne=L(x.stencilBuffer,Q),le=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(x),ne,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,E)}else{const $=x.textures;for(let Q=0;Q<$.length;Q++){const ne=$[Q],le=s.convert(ne.format,ne.colorSpace),X=s.convert(ne.type),K=y(ne.internalFormat,le,X,ne.normalized,ne.colorSpace);Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(x),K,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(E,x,N){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),he(i.TEXTURE_CUBE_MAP,x.depthTexture);const me=s.convert(x.depthTexture.format),xe=s.convert(x.depthTexture.type);let ae;x.depthTexture.format===1026?ae=i.DEPTH_COMPONENT24:x.depthTexture.format===1027&&(ae=i.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,x.width,x.height,0,me,xe,null)}}else j(x.depthTexture,0);const ne=Q.__webglTexture,le=vt(x),X=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=x.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===1026)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,ne,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,K,X,ne,0);else if(x.depthTexture.format===1027)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,ne,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,K,X,ne,0);else throw new Error("Unknown depthTexture format")}function Ze(E){const x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=$}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let $=0;$<6;$++)ze(x.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?ze(x.__webglFramebuffer[0],E,0):ze(x.__webglFramebuffer,E,0)}else if(N){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),at(x.__webglDepthbuffer[$],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ne)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,x,N){const $=n.get(E);x!==void 0&&Re($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ze(E)}function Oe(E){const x=E.texture,N=n.get(E),$=n.get(x);E.addEventListener("dispose",v);const Q=E.textures,ne=E.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),ne){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let K=0;K<x.mipmaps.length;K++)N.__webglFramebuffer[X][K]=i.createFramebuffer()}else N.__webglFramebuffer[X]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<x.mipmaps.length;X++)N.__webglFramebuffer[X]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(le)for(let X=0,K=Q.length;X<K;X++){const me=n.get(Q[X]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ve(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){const K=Q[X];N.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[X]);const me=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),ae=y(K.internalFormat,me,xe,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),ie=vt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,N.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),at(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),he(i.TEXTURE_CUBE_MAP,x);for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Re(N.__webglFramebuffer[X][K],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Re(N.__webglFramebuffer[X],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);_(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let X=0,K=Q.length;X<K;X++){const me=Q[X],xe=n.get(me);let ae=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,xe.__webglTexture),he(ae,me),Re(N.__webglFramebuffer,E,me,i.COLOR_ATTACHMENT0+X,ae,0),_(me)&&M(ae)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,$.__webglTexture),he(X,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Re(N.__webglFramebuffer[K],E,x,i.COLOR_ATTACHMENT0,X,K);else Re(N.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,X,0);_(x)&&M(X),t.unbindTexture()}E.depthBuffer&&Ze(E)}function xt(E){const x=E.textures;for(let N=0,$=x.length;N<$;N++){const Q=x[N];if(_(Q)){const ne=b(E),le=n.get(Q).__webglTexture;t.bindTexture(ne,le),M(ne),t.unbindTexture()}}}const ot=[],Ut=[];function D(E){if(E.samples>0){if(Ve(E)===!1){const x=E.textures,N=E.width,$=E.height;let Q=i.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(E),X=x.length>1;if(X)for(let me=0;me<x.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const K=E.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let me=0;me<x.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[me]);const xe=n.get(x[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,Q,i.NEAREST),f===!0&&(ot.length=0,Ut.length=0,ot.push(i.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(ne),Ut.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let me=0;me<x.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,le.__webglColorRenderbuffer[me]);const xe=n.get(x[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&f){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function vt(E){return Math.min(r.maxSamples,E.samples)}function Ve(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nt(E){const x=a.render.frame;d.get(E)!==x&&(d.set(E,x),E.update())}function fe(E,x){const N=E.colorSpace,$=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==pi&&N!==""&&(ke.getTransfer(N)===$e?($!==1023||Q!==1009)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",N)),x}function ct(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=q,this.getTextureUnits=k,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=Se,this.rebindTextures=st,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mh(i,e){function t(n,r=""){let s;const a=ke.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Eh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Th{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yt({vertexShader:Eh,fragmentShader:yh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bh extends Sn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",f=1,u=null,d=null,p=null,h=null,g=null,l=null;const c=typeof XRWebGLBinding<"u",m=new Th,_={},M=t.getContextAttributes();let b=null,y=null;const L=[],T=[],C=new Ke;let v=null;const A=new Gt;A.viewport=new ht;const U=new Gt;U.viewport=new ht;const w=[A,U],z=new mo;let q=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=L[W];return se===void 0&&(se=new pr,L[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=L[W];return se===void 0&&(se=new pr,L[W]=se),se.getGripSpace()},this.getHand=function(W){let se=L[W];return se===void 0&&(se=new pr,L[W]=se),se.getHandSpace()};function F(W){const se=T.indexOf(W.inputSource);if(se===-1)return;const te=L[se];te!==void 0&&(te.update(W.inputSource,W.frame,u||a),te.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",V);for(let W=0;W<L.length;W++){const se=T[W];se!==null&&(T[W]=null,L[W].disconnect(se))}q=null,k=null,m.reset();for(const W in _)delete _[W];e.setRenderTarget(b),g=null,h=null,p=null,r=null,y=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&c&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return l},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),c&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ae=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?1027:1026,Ae=M.stencil?1020:1014);const Re={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new qt(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new Wn(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new qt(g.framebufferWidth,g.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(f),u=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(W){for(let se=0;se<W.removed.length;se++){const te=W.removed[se],Ae=T.indexOf(te);Ae>=0&&(T[Ae]=null,L[Ae].disconnect(te))}for(let se=0;se<W.added.length;se++){const te=W.added[se];let Ae=T.indexOf(te);if(Ae===-1){for(let Re=0;Re<L.length;Re++)if(Re>=T.length){T.push(te),Ae=Re;break}else if(T[Re]===null){T[Re]=te,Ae=Re;break}if(Ae===-1)break}const Ce=L[Ae];Ce&&Ce.connect(te)}}const j=new P,ee=new P;function ce(W,se,te){j.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);const Ae=j.distanceTo(ee),Ce=se.projectionMatrix.elements,Re=te.projectionMatrix.elements,at=Ce[14]/(Ce[10]-1),ze=Ce[14]/(Ce[10]+1),Ze=(Ce[9]+1)/Ce[5],st=(Ce[9]-1)/Ce[5],Oe=(Ce[8]-1)/Ce[0],xt=(Re[8]+1)/Re[0],ot=at*Oe,Ut=at*xt,D=Ae/(-Oe+xt),vt=D*-Oe;if(se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(vt),W.translateZ(D),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ce[10]===-1)W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ve=at+D,nt=ze+D,fe=ot-vt,ct=Ut+(Ae-vt),E=Ze*ze/nt*Ve,x=st*ze/nt*Ve;W.projectionMatrix.makePerspective(fe,ct,E,x,Ve,nt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Se(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let se=W.near,te=W.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(te=m.depthFar)),z.near=U.near=A.near=se,z.far=U.far=A.far=te,(q!==z.near||k!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),q=z.near,k=z.far),z.layers.mask=W.layers.mask|6,A.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;const Ae=W.parent,Ce=z.cameras;Se(z,Ae);for(let Re=0;Re<Ce.length;Re++)Se(Ce[Re],Ae);Ce.length===2?ce(z,A,U):z.projectionMatrix.copy(A.projectionMatrix),Ee(W,z,Ae)};function Ee(W,se,te){te===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ar*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&g===null))return f},this.setFoveation=function(W){f=W,h!==null&&(h.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(W){return _[W]};let Ge=null;function Z(W,se){if(d=se.getViewerPose(u||a),l=se,d!==null){const te=d.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let Ae=!1;te.length!==z.cameras.length&&(z.cameras.length=0,Ae=!0);for(let ze=0;ze<te.length;ze++){const Ze=te[ze];let st=null;if(g!==null)st=g.getViewport(Ze);else{const xt=p.getViewSubImage(h,Ze);st=xt.viewport,ze===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let Oe=w[ze];Oe===void 0&&(Oe=new Gt,Oe.layers.enable(ze),Oe.viewport=new ht,w[ze]=Oe),Oe.matrix.fromArray(Ze.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ze.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ae===!0&&z.cameras.push(Oe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&c){p=n.getBinding();const ze=p.getDepthInformation(te[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Ce&&Ce.includes("camera-access")&&c){e.state.unbindTexture(),p=n.getBinding();for(let ze=0;ze<te.length;ze++){const Ze=te[ze].camera;if(Ze){let st=_[Ze];st||(st=new bs,_[Ze]=st);const Oe=p.getCameraImage(Ze);st.sourceTexture=Oe}}}}for(let te=0;te<L.length;te++){const Ae=T[te],Ce=L[te];Ae!==null&&Ce!==void 0&&Ce.update(Ae,se,u||a)}Ge&&Ge(W,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),l=null}const he=new Fs;he.setAnimationLoop(Z),this.setAnimationLoop=function(W){Ge=W},this.dispose=function(){}}}const Ah=new Qe,ua=new De;ua.set(-1,0,0,0,1,0,0,0,1);function wh(i,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,ws(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function r(m,_,M,b,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),p(m,_)):_.isMeshPhongMaterial?(s(m,_),d(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),h(m,_),_.isMeshPhysicalMaterial&&g(m,_,y)):_.isMeshMatcapMaterial?(s(m,_),l(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),c(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?f(m,_,M,b):_.isSpriteMaterial?u(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===1&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===1&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const M=e.get(_),b=M.envMap,y=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Ah.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ua),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function f(m,_,M,b){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*M,m.scale.value=b*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function d(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function p(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function g(m,_,M){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===1&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function l(m,_){_.matcap&&(m.matcap.value=_.matcap)}function c(m,_){const M=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rh(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(M,b){const y=b.program;n.uniformBlockBinding(M,y)}function u(M,b){let y=r[M.id];y===void 0&&(l(M),y=d(M),r[M.id]=y,M.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(M,L);const T=e.render.frame;s[M.id]!==T&&(h(M),s[M.id]=T)}function d(M){const b=p();M.__bindingPointIndex=b;const y=i.createBuffer(),L=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=r[M.id],y=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=y.length;T<C;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let A=0,U=v.length;A<U;A++){const w=v[A];if(g(w,T,A,L)===!0){const z=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let F=0;F<q.length;F++){const B=q[F],V=c(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+k,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):ArrayBuffer.isView(B)?w.__data.set(new B.constructor(B.buffer,B.byteOffset,w.__data.length)):(B.toArray(w.__data,k),k+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,b,y,L){const T=M.value,C=b+"_"+y;if(L[C]===void 0)return typeof T=="number"||typeof T=="boolean"?L[C]=T:ArrayBuffer.isView(T)?L[C]=T.slice():L[C]=T.clone(),!0;{const v=L[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return L[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function l(M){const b=M.uniforms;let y=0;const L=16;for(let C=0,v=b.length;C<v;C++){const A=Array.isArray(b[C])?b[C]:[b[C]];for(let U=0,w=A.length;U<w;U++){const z=A[U],q=Array.isArray(z.value)?z.value:[z.value];for(let k=0,F=q.length;k<F;k++){const B=q[k],V=c(B),j=y%L,ee=j%V.boundary,ce=j+ee;y+=ee,ce!==0&&L-ce<V.storage&&(y+=L-ce),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=V.storage}}}const T=y%L;return T>0&&(y+=L-T),M.__size=y,M.__cache={},this}function c(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):we("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function _(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:f,update:u,dispose:_}}const Ch=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zt=null;function Ph(){return Zt===null&&(Zt=new Qa(Ch,16,16,1030,1016),Zt.name="DFG_LUT",Zt.minFilter=1006,Zt.magFilter=1006,Zt.wrapS=1001,Zt.wrapT=1001,Zt.generateMipmaps=!1,Zt.needsUpdate=!0),Zt}class Lh{constructor(e={}){const{canvas:t=Pa(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=1009}=e;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=a;const c=g,m=new Set([1033,1031,1029]),_=new Set([1009,1014,1012,1020,1017,1018]),M=new Uint32Array(4),b=new Int32Array(4),y=new P;let L=null,T=null;const C=[],v=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let w=!1,z=null;this._outputColorSpace=Bt;let q=0,k=0,F=null,B=-1,V=null;const j=new ht,ee=new ht;let ce=null;const Se=new Ye(0);let Ee=0,Ge=t.width,Z=t.height,he=1,W=null,se=null;const te=new ht(0,0,Ge,Z),Ae=new ht(0,0,Ge,Z);let Ce=!1;const Re=new _s;let at=!1,ze=!1;const Ze=new Qe,st=new P,Oe=new ht,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ut(){return F===null?he:1}let D=n;function vt(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r184"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),D===null){const I="webgl2";if(D=vt(I,S),D===null)throw vt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw We("WebGLRenderer: "+S.message),S}let Ve,nt,fe,ct,E,x,N,$,Q,ne,le,X,K,me,xe,ae,ie,Le,Ue,qe,R,re,Y;function ge(){Ve=new Pc(D),Ve.init(),R=new Mh(D,Ve),nt=new Ec(D,Ve,e,R),fe=new vh(D,Ve),nt.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),ct=new Ic(D),E=new sh,x=new Sh(D,Ve,fe,E,nt,R,ct),N=new Cc(U),$=new _o(D),re=new Sc(D,$),Q=new Lc(D,$,ct,re),ne=new Uc(D,Q,$,re,ct),Le=new Fc(D,nt,x),xe=new yc(E),le=new rh(U,N,Ve,nt,re,xe),X=new wh(U,E),K=new oh,me=new dh(Ve),ie=new vc(U,N,fe,ne,l,f),ae=new xh(U,ne,nt),Y=new Rh(D,ct,nt,fe),Ue=new Mc(D,Ve,ct),qe=new Dc(D,Ve,ct),ct.programs=le.programs,U.capabilities=nt,U.extensions=Ve,U.properties=E,U.renderLists=K,U.shadowMap=ae,U.state=fe,U.info=ct}ge(),c!==1009&&(A=new Bc(c,t.width,t.height,r,s));const oe=new bh(U,D);this.xr=oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(S){S!==void 0&&(he=S,this.setSize(Ge,Z,!1))},this.getSize=function(S){return S.set(Ge,Z)},this.setSize=function(S,I,H=!0){if(oe.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=S,Z=I,t.width=Math.floor(S*he),t.height=Math.floor(I*he),H===!0&&(t.style.width=S+"px",t.style.height=I+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Ge*he,Z*he).floor()},this.setDrawingBufferSize=function(S,I,H){Ge=S,Z=I,he=H,t.width=Math.floor(S*H),t.height=Math.floor(I*H),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(c===1009){We("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){we("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,I,H,O){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,I,H,O),fe.viewport(j.copy(te).multiplyScalar(he).round())},this.getScissor=function(S){return S.copy(Ae)},this.setScissor=function(S,I,H,O){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,I,H,O),fe.scissor(ee.copy(Ae).multiplyScalar(he).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(S){fe.setScissorTest(Ce=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){se=S},this.getClearColor=function(S){return S.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,H=!0){let O=0;if(S){let G=!1;if(F!==null){const pe=F.texture.format;G=m.has(pe)}if(G){const pe=F.texture.type,ve=_.has(pe),de=ie.getClearColor(),Me=ie.getClearAlpha(),Te=de.r,Fe=de.g,Be=de.b;ve?(M[0]=Te,M[1]=Fe,M[2]=Be,M[3]=Me,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=Te,b[1]=Fe,b[2]=Be,b[3]=Me,D.clearBufferiv(D.COLOR,0,b))}else O|=D.COLOR_BUFFER_BIT}I&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ie.dispose(),K.dispose(),me.dispose(),E.dispose(),N.dispose(),ne.dispose(),re.dispose(),Y.dispose(),le.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ma),oe.removeEventListener("sessionend",Ea),Pn.stop()};function J(S){S.preventDefault(),Kr("WebGLRenderer: Context Lost."),w=!0}function ye(){Kr("WebGLRenderer: Context Restored."),w=!1;const S=ct.autoReset,I=ae.enabled,H=ae.autoUpdate,O=ae.needsUpdate,G=ae.type;ge(),ct.autoReset=S,ae.enabled=I,ae.autoUpdate=H,ae.needsUpdate=O,ae.type=G}function Ie(S){We("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ft(S){const I=S.target;I.removeEventListener("dispose",ft),je(I)}function je(S){on(S),E.remove(S)}function on(S){const I=E.get(S).programs;I!==void 0&&(I.forEach(function(H){le.releaseProgram(H)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,H,O,G,pe){I===null&&(I=xt);const ve=G.isMesh&&G.matrixWorld.determinant()<0,de=gf(S,I,H,O,G);fe.setMaterial(O,ve);let Me=H.index,Te=1;if(O.wireframe===!0){if(Me=Q.getWireframeAttribute(H),Me===void 0)return;Te=2}const Fe=H.drawRange,Be=H.attributes.position;let be=Fe.start*Te,Je=(Fe.start+Fe.count)*Te;pe!==null&&(be=Math.max(be,pe.start*Te),Je=Math.min(Je,(pe.start+pe.count)*Te)),Me!==null?(be=Math.max(be,0),Je=Math.min(Je,Me.count)):Be!=null&&(be=Math.max(be,0),Je=Math.min(Je,Be.count));const dt=Je-be;if(dt<0||dt===1/0)return;re.setup(G,O,de,H,Me);let ut,et=Ue;if(Me!==null&&(ut=$.get(Me),et=qe,et.setIndex(ut)),G.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*Ut()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(G.isLine){let bt=O.linewidth;bt===void 0&&(bt=1),fe.setLineWidth(bt*Ut()),G.isLineSegments?et.setMode(D.LINES):G.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else G.isPoints?et.setMode(D.POINTS):G.isSprite&&et.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const bt=G._multiDrawStarts,_e=G._multiDrawCounts,Nt=G._multiDrawCount,Xe=Me?$.get(Me).bytesPerElement:1,zt=E.get(O).currentProgram.getUniforms();for(let Jt=0;Jt<Nt;Jt++)zt.setValue(D,"_gl_DrawID",Jt),et.render(bt[Jt]/Xe,_e[Jt])}else if(G.isInstancedMesh)et.renderInstances(be,dt,G.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,bt);et.renderInstances(be,dt,_e)}else et.render(be,dt)};function jt(S,I,H){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,ir(S,I,H),S.side=0,S.needsUpdate=!0,ir(S,I,H),S.side=2):ir(S,I,H)}this.compile=function(S,I,H=null){H===null&&(H=S),T=me.get(H),T.init(I),v.push(T),H.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==H&&S.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const O=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const de=pe[ve];jt(de,H,G),O.add(de)}else jt(pe,H,G),O.add(pe)}),T=v.pop(),O},this.compileAsync=function(S,I,H=null){const O=this.compile(S,I,H);return new Promise(G=>{function pe(){if(O.forEach(function(ve){E.get(ve).currentProgram.isReady()&&O.delete(ve)}),O.size===0){G(S);return}setTimeout(pe,10)}Ve.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let qr=null;function pf(S){qr&&qr(S)}function Ma(){Pn.stop()}function Ea(){Pn.start()}const Pn=new Fs;Pn.setAnimationLoop(pf),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){qr=S,oe.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},oe.addEventListener("sessionstart",Ma),oe.addEventListener("sessionend",Ea),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;z!==null&&z.renderStart(S,I);const H=oe.enabled===!0&&oe.isPresenting===!0,O=A!==null&&(F===null||H)&&A.begin(U,F);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(I),I=oe.getCamera()),S.isScene===!0&&S.onBeforeRender(U,S,I,F),T=me.get(S,v.length),T.init(I),T.state.textureUnits=x.getTextureUnits(),v.push(T),Ze.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Re.setFromProjectionMatrix(Ze,2e3,I.reversedDepth),ze=this.localClippingEnabled,at=xe.init(this.clippingPlanes,ze),L=K.get(S,C.length),L.init(),C.push(L),oe.enabled===!0&&oe.isPresenting===!0){const ve=U.xr.getDepthSensingMesh();ve!==null&&Yr(ve,I,-1/0,U.sortObjects)}Yr(S,I,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(W,se),ot=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ot&&ie.addToRenderList(L,S),this.info.render.frame++,at===!0&&xe.beginShadows();const G=T.state.shadowsArray;if(ae.render(G,S,I),at===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&A.hasRenderPass())===!1){const ve=L.opaque,de=L.transmissive;if(T.setupLights(),I.isArrayCamera){const Me=I.cameras;if(de.length>0)for(let Te=0,Fe=Me.length;Te<Fe;Te++){const Be=Me[Te];Ta(ve,de,S,Be)}ot&&ie.render(S);for(let Te=0,Fe=Me.length;Te<Fe;Te++){const Be=Me[Te];ya(L,S,Be,Be.viewport)}}else de.length>0&&Ta(ve,de,S,I),ot&&ie.render(S),ya(L,S,I)}F!==null&&k===0&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),O&&A.end(U),S.isScene===!0&&S.onAfterRender(U,S,I),re.resetDefaultState(),B=-1,V=null,v.pop(),v.length>0?(T=v[v.length-1],x.setTextureUnits(T.state.textureUnits),at===!0&&xe.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?L=C[C.length-1]:L=null,z!==null&&z.renderEnd()};function Yr(S,I,H,O){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Re.intersectsSprite(S)){O&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ze);const ve=ne.update(S),de=S.material;de.visible&&L.push(S,ve,de,H,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Re.intersectsObject(S))){const ve=ne.update(S),de=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Oe.copy(ve.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(Ze)),Array.isArray(de)){const Me=ve.groups;for(let Te=0,Fe=Me.length;Te<Fe;Te++){const Be=Me[Te],be=de[Be.materialIndex];be&&be.visible&&L.push(S,ve,be,H,Oe.z,Be)}}else de.visible&&L.push(S,ve,de,H,Oe.z,null)}}const pe=S.children;for(let ve=0,de=pe.length;ve<de;ve++)Yr(pe[ve],I,H,O)}function ya(S,I,H,O){const{opaque:G,transmissive:pe,transparent:ve}=S;T.setupLightsView(H),at===!0&&xe.setGlobalState(U.clippingPlanes,H),O&&fe.viewport(j.copy(O)),G.length>0&&nr(G,I,H),pe.length>0&&nr(pe,I,H),ve.length>0&&nr(ve,I,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ta(S,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const be=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new qt(1,1,{generateMipmaps:!0,type:be?1016:1009,minFilter:1008,samples:Math.max(4,nt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const pe=T.state.transmissionRenderTarget[O.id],ve=O.viewport||j;pe.setSize(ve.z*U.transmissionResolutionScale,ve.w*U.transmissionResolutionScale);const de=U.getRenderTarget(),Me=U.getActiveCubeFace(),Te=U.getActiveMipmapLevel();U.setRenderTarget(pe),U.getClearColor(Se),Ee=U.getClearAlpha(),Ee<1&&U.setClearColor(16777215,.5),U.clear(),ot&&ie.render(H);const Fe=U.toneMapping;U.toneMapping=0;const Be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),at===!0&&xe.setGlobalState(U.clippingPlanes,O),nr(S,H,O),x.updateMultisampleRenderTarget(pe),x.updateRenderTargetMipmap(pe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Je=0,dt=I.length;Je<dt;Je++){const ut=I[Je],{object:et,geometry:bt,material:_e,group:Nt}=ut;if(_e.side===2&&et.layers.test(O.layers)){const Xe=_e.side;_e.side=1,_e.needsUpdate=!0,ba(et,H,O,bt,_e,Nt),_e.side=Xe,_e.needsUpdate=!0,be=!0}}be===!0&&(x.updateMultisampleRenderTarget(pe),x.updateRenderTargetMipmap(pe))}U.setRenderTarget(de,Me,Te),U.setClearColor(Se,Ee),Be!==void 0&&(O.viewport=Be),U.toneMapping=Fe}function nr(S,I,H){const O=I.isScene===!0?I.overrideMaterial:null;for(let G=0,pe=S.length;G<pe;G++){const ve=S[G],{object:de,geometry:Me,group:Te}=ve;let Fe=ve.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),de.layers.test(H.layers)&&ba(de,I,H,Me,Fe,Te)}}function ba(S,I,H,O,G,pe){S.onBeforeRender(U,I,H,O,G,pe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(U,I,H,O,S,pe),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,U.renderBufferDirect(H,I,O,G,S,pe),G.side=0,G.needsUpdate=!0,U.renderBufferDirect(H,I,O,G,S,pe),G.side=2):U.renderBufferDirect(H,I,O,G,S,pe),S.onAfterRender(U,I,H,O,G,pe)}function ir(S,I,H){I.isScene!==!0&&(I=xt);const O=E.get(S),G=T.state.lights,pe=T.state.shadowsArray,ve=G.state.version,de=le.getParameters(S,G.state,pe,I,H,T.state.lightProbeGridArray),Me=le.getProgramCacheKey(de);let Te=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=N.get(S.envMap||O.environment,Fe),O.envMapRotation=O.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",ft),Te=new Map,O.programs=Te);let Be=Te.get(Me);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===ve)return wa(S,de),Be}else de.uniforms=le.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,H,de),S.onBeforeCompile(de,U),Be=le.acquireProgram(de,Me),Te.set(Me,Be),O.uniforms=de.uniforms;const be=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=xe.uniform),wa(S,de),O.needsLights=xf(S),O.lightsStateVersion=ve,O.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=Be,O.uniformsList=null,Be}function Aa(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Yi.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function wa(S,I){const H=E.get(S);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function mf(S,I){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let H=0,O=S.length;H<O;H++){const G=S[H];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function gf(S,I,H,O,G){I.isScene!==!0&&(I=xt),x.resetTextureUnits();const pe=I.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,de=F===null?U.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ke.workingColorSpace,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=N.get(O.envMap||ve,Me),Fe=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,dt=!!H.morphAttributes.color;let ut=0;O.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ut=U.toneMapping);const et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=et!==void 0?et.length:0,_e=E.get(O),Nt=T.state.lights;if(at===!0&&(ze===!0||S!==V)){const it=S===V&&O.id===B;xe.setState(O,S,it)}let Xe=!1;O.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Nt.state.version||_e.outputColorSpace!==de||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Te||O.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==xe.numPlanes||_e.numIntersection!==xe.numIntersection)||_e.vertexAlphas!==Fe||_e.vertexTangents!==Be||_e.morphTargets!==be||_e.morphNormals!==Je||_e.morphColors!==dt||_e.toneMapping!==ut||_e.morphTargetsCount!==bt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,_e.__version=O.version);let zt=_e.currentProgram;Xe===!0&&(zt=ir(O,I,G),z&&O.isNodeMaterial&&z.onUpdateProgram(O,zt,_e));let Jt=!1,_n=!1,Zn=!1;const tt=zt.getUniforms(),pt=_e.uniforms;if(fe.useProgram(zt.program)&&(Jt=!0,_n=!0,Zn=!0),O.id!==B&&(B=O.id,_n=!0),_e.needsLights){const it=mf(T.state.lightProbeGridArray,G);_e.lightProbeGrid!==it&&(_e.lightProbeGrid=it,_n=!0)}if(Jt||V!==S){fe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),tt.setValue(D,"projectionMatrix",S.projectionMatrix),tt.setValue(D,"viewMatrix",S.matrixWorldInverse);const vn=tt.map.cameraPosition;vn!==void 0&&vn.setValue(D,st.setFromMatrixPosition(S.matrixWorld)),nt.logarithmicDepthBuffer&&tt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&tt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),V!==S&&(V=S,_n=!0,Zn=!0)}if(_e.needsLights&&(Nt.state.directionalShadowMap.length>0&&tt.setValue(D,"directionalShadowMap",Nt.state.directionalShadowMap,x),Nt.state.spotShadowMap.length>0&&tt.setValue(D,"spotShadowMap",Nt.state.spotShadowMap,x),Nt.state.pointShadowMap.length>0&&tt.setValue(D,"pointShadowMap",Nt.state.pointShadowMap,x)),G.isSkinnedMesh){tt.setOptional(D,G,"bindMatrix"),tt.setOptional(D,G,"bindMatrixInverse");const it=G.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),tt.setValue(D,"boneTexture",it.boneTexture,x))}G.isBatchedMesh&&(tt.setOptional(D,G,"batchingTexture"),tt.setValue(D,"batchingTexture",G._matricesTexture,x),tt.setOptional(D,G,"batchingIdTexture"),tt.setValue(D,"batchingIdTexture",G._indirectTexture,x),tt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&tt.setValue(D,"batchingColorTexture",G._colorsTexture,x));const xn=H.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Le.update(G,H,zt),(_n||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,tt.setValue(D,"receiveShadow",G.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(pt.envMapIntensity.value=I.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Ph()),_n){if(tt.setValue(D,"toneMappingExposure",U.toneMappingExposure),_e.needsLights&&_f(pt,Zn),pe&&O.fog===!0&&X.refreshFogUniforms(pt,pe),X.refreshMaterialUniforms(pt,O,he,Z,T.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const it=_e.lightProbeGrid;pt.probesSH.value=it.texture,pt.probesMin.value.copy(it.boundingBox.min),pt.probesMax.value.copy(it.boundingBox.max),pt.probesResolution.value.copy(it.resolution)}Yi.upload(D,Aa(_e),pt,x)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Yi.upload(D,Aa(_e),pt,x),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&tt.setValue(D,"center",G.center),tt.setValue(D,"modelViewMatrix",G.modelViewMatrix),tt.setValue(D,"normalMatrix",G.normalMatrix),tt.setValue(D,"modelMatrix",G.matrixWorld),O.uniformsGroups!==void 0){const it=O.uniformsGroups;for(let vn=0,jn=it.length;vn<jn;vn++){const Ra=it[vn];Y.update(Ra,zt),Y.bind(Ra,zt)}}return zt}function _f(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function xf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,I,H){const O=E.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),E.get(S.texture).__webglTexture=I,E.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const H=E.get(S);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const vf=D.createFramebuffer();this.setRenderTarget=function(S,I=0,H=0){F=S,q=I,k=H;let O=null,G=!1,pe=!1;if(S){const de=E.get(S);if(de.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),j.copy(S.viewport),ee.copy(S.scissor),ce=S.scissorTest,fe.viewport(j),fe.scissor(ee),fe.setScissorTest(ce),B=-1;return}else if(de.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(de.__hasExternalTextures)x.rebindTextures(S,E.get(S.texture).__webglTexture,E.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&E.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Te=E.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?O=Te[I][H]:O=Te[I],G=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?O=E.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[H]:O=Te,j.copy(S.viewport),ee.copy(S.scissor),ce=S.scissorTest}else j.copy(te).multiplyScalar(he).floor(),ee.copy(Ae).multiplyScalar(he).floor(),ce=Ce;if(H!==0&&(O=vf),fe.bindFramebuffer(D.FRAMEBUFFER,O)&&fe.drawBuffers(S,O),fe.viewport(j),fe.scissor(ee),fe.setScissorTest(ce),G){const de=E.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,H)}else if(pe){const de=I;for(let Me=0;Me<S.textures.length;Me++){const Te=E.get(S.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Te.__webglTexture,H,de)}}else if(S!==null&&H!==0){const de=E.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,H)}B=-1},this.readRenderTargetPixels=function(S,I,H,O,G,pe,ve,de=0){if(!(S&&S.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){fe.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Te=S.textures[de],Fe=Te.format,Be=Te.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de),!nt.textureFormatReadable(Fe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Be)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-O&&H>=0&&H<=S.height-G&&D.readPixels(I,H,O,G,R.convert(Fe),R.convert(Be),pe)}finally{const Te=F!==null?E.get(F).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,I,H,O,G,pe,ve,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(I>=0&&I<=S.width-O&&H>=0&&H<=S.height-G){fe.bindFramebuffer(D.FRAMEBUFFER,Me);const Te=S.textures[de],Fe=Te.format,Be=Te.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de),!nt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(I,H,O,G,R.convert(Fe),R.convert(Be),0);const Je=F!==null?E.get(F).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Je);const dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await La(D,dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(be),D.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,H=0){const O=Math.pow(2,-H),G=Math.floor(S.image.width*O),pe=Math.floor(S.image.height*O),ve=I!==null?I.x:0,de=I!==null?I.y:0;x.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ve,de,G,pe),fe.unbindTexture()};const Sf=D.createFramebuffer(),Mf=D.createFramebuffer();this.copyTextureToTexture=function(S,I,H=null,O=null,G=0,pe=0){let ve,de,Me,Te,Fe,Be,be,Je,dt;const ut=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(H!==null)ve=H.max.x-H.min.x,de=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,Fe=H.min.y,Be=H.isBox3?H.min.z:0;else{const pt=Math.pow(2,-G);ve=Math.floor(ut.width*pt),de=Math.floor(ut.height*pt),S.isDataArrayTexture?Me=ut.depth:S.isData3DTexture?Me=Math.floor(ut.depth*pt):Me=1,Te=0,Fe=0,Be=0}O!==null?(be=O.x,Je=O.y,dt=O.z):(be=0,Je=0,dt=0);const et=R.convert(I.format),bt=R.convert(I.type);let _e;I.isData3DTexture?(x.setTexture3D(I,0),_e=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(x.setTexture2DArray(I,0),_e=D.TEXTURE_2D_ARRAY):(x.setTexture2D(I,0),_e=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Nt=fe.getParameter(D.UNPACK_ROW_LENGTH),Xe=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),zt=fe.getParameter(D.UNPACK_SKIP_PIXELS),Jt=fe.getParameter(D.UNPACK_SKIP_ROWS),_n=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Zn=S.isDataArrayTexture||S.isData3DTexture,tt=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const pt=E.get(S),xn=E.get(I),it=E.get(pt.__renderTarget),vn=E.get(xn.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,it.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let jn=0;jn<Me;jn++)Zn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(S).__webglTexture,G,Be+jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(I).__webglTexture,pe,dt+jn)),D.blitFramebuffer(Te,Fe,ve,de,be,Je,ve,de,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||E.has(S)){const pt=E.get(S),xn=E.get(I);fe.bindFramebuffer(D.READ_FRAMEBUFFER,Sf),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mf);for(let it=0;it<Me;it++)Zn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,G,Be+it):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,G),tt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,pe,dt+it):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,pe),G!==0?D.blitFramebuffer(Te,Fe,ve,de,be,Je,ve,de,D.COLOR_BUFFER_BIT,D.NEAREST):tt?D.copyTexSubImage3D(_e,pe,be,Je,dt+it,Te,Fe,ve,de):D.copyTexSubImage2D(_e,pe,be,Je,Te,Fe,ve,de);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else tt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(_e,pe,be,Je,dt,ve,de,Me,et,bt,ut.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,pe,be,Je,dt,ve,de,Me,et,ut.data):D.texSubImage3D(_e,pe,be,Je,dt,ve,de,Me,et,bt,ut):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,be,Je,ve,de,et,bt,ut.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,be,Je,ut.width,ut.height,et,ut.data):D.texSubImage2D(D.TEXTURE_2D,pe,be,Je,ve,de,et,bt,ut);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,_n),pe===0&&I.generateMipmaps&&D.generateMipmap(_e),fe.unbindTexture()},this.initRenderTarget=function(S){E.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){q=0,k=0,F=null,fe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}function lt(i,e){return[i[0]*(e.xmax-e.xmin)+e.xmin,i[1]*(e.ymax-e.ymin)+e.ymin,i[2]*(e.zmax-e.zmin)+e.zmin]}function ha(i,e,t){return e===0?i*(t.xmax-t.xmin)+t.xmin:e===1?i*(t.ymax-t.ymin)+t.ymin:i*(t.zmax-t.zmin)+t.zmin}function Dh(i,e,t){i.applyMatrix4(new Qe().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));const{width:n,height:r}=getComputedStyle(t),s=[(i.x+1)*.5*parseInt(n),(1-i.y)*.5*parseInt(r)];return{position:s,insideCanvas:s[0]<5||s[1]<5||s[0]>parseInt(n)-5||s[1]>parseInt(r)-5}}function Ih(i,e){const t=.005*e;return i===0?[0,-t]:[t,0]}function Ki(i,e,t,n,r){for(let s=0;s<3;s++)if(i[s])for(let a=0;a<e[s].length;a++){const o=Dh(new P(t[s].geometry.attributes.position.array[a*6]*7-t[s].geometry.attributes.position.array[a*6+3]*6,t[s].geometry.attributes.position.array[a*6+1]*7-t[s].geometry.attributes.position.array[a*6+4]*6,t[s].geometry.attributes.position.array[a*6+2]),n,r);o.insideCanvas?e[s][a].style.display="none":(e[s][a].style.left=`${o.position[0]}px`,e[s][a].style.top=`${o.position[1]}px`,e[s][a].style.display="")}}function Fh(i,e,t,n,r,s,a){for(let o=0;o<3;o++)if(i[o]){const f=Ih(o,s);e.ticks[o][0].forEach((u,d)=>{const p=ha(u,o,a);t[o].geometry.attributes.position.array[d*6]=r[0],t[o].geometry.attributes.position.array[d*6+1]=r[1],t[o].geometry.attributes.position.array[d*6+2]=r[2],t[o].geometry.attributes.position.array[d*6+3]=r[0]+f[0],t[o].geometry.attributes.position.array[d*6+4]=r[1]+f[1],t[o].geometry.attributes.position.array[d*6+5]=r[2],o===0?(t[o].geometry.attributes.position.array[d*6]=p,t[o].geometry.attributes.position.array[d*6+3]=p):o===1?(t[o].geometry.attributes.position.array[d*6+1]=p,t[o].geometry.attributes.position.array[d*6+4]=p):(t[o].geometry.attributes.position.array[d*6+2]=p,t[o].geometry.attributes.position.array[d*6+5]=p)}),e.ticks[o][1].forEach((u,d)=>{const p=ha(u,o,a);n[o].geometry.attributes.position.array[d*6]=r[0],n[o].geometry.attributes.position.array[d*6+1]=r[1],n[o].geometry.attributes.position.array[d*6+2]=r[2],n[o].geometry.attributes.position.array[d*6+3]=r[0]+f[0]/2,n[o].geometry.attributes.position.array[d*6+4]=r[1]+f[1]/2,n[o].geometry.attributes.position.array[d*6+5]=r[2],o===0?(n[o].geometry.attributes.position.array[d*6]=p,n[o].geometry.attributes.position.array[d*6+3]=p):o===1?(n[o].geometry.attributes.position.array[d*6+1]=p,n[o].geometry.attributes.position.array[d*6+4]=p):(n[o].geometry.attributes.position.array[d*6+2]=p,n[o].geometry.attributes.position.array[d*6+5]=p)})}}function Uh(i){const e={xmin:0,ymin:0,zmin:0,xmax:1,ymax:1,zmax:1};let t=!0,n=!1;return i.forEach(r=>{if(r.type==="arrow"||r.type==="cuboid"||r.type==="line"||r.type==="polygon")r.coords.forEach((s=>{s[0]&&(t?(e.xmin=s[0][0],e.xmax=s[0][0],e.ymin=s[0][1],e.ymax=s[0][1],e.zmin=s[0][2],e.zmax=s[0][2],t=!1):(s[0][0]<e.xmin?e.xmin=s[0][0]:s[0][0]>e.xmax&&(e.xmax=s[0][0]),s[0][1]<e.ymin?e.ymin=s[0][1]:s[0][1]>e.ymax&&(e.ymax=s[0][1]),s[0][2]<e.zmin?e.zmin=s[0][2]:s[0][2]>e.zmax&&(e.zmax=s[0][2])))}));else if(r.type!=="text"){const s=r.radius??r.pointSize??r.edgeLength??1;r.coords.forEach((a=>{a[0]?t?(e.xmin=a[0][0]-s,e.xmax=a[0][0]+s,e.ymin=a[0][1]-s,e.ymax=a[0][1]+s,e.zmin=a[0][2]-s,e.zmax=a[0][2]+s,t=!1):(a[0][0]-s<e.xmin&&(e.xmin=a[0][0]-s),a[0][0]+s>e.xmax&&(e.xmax=a[0][0]+s),a[0][1]-s<e.ymin&&(e.ymin=a[0][1]-s),a[0][1]+s>e.ymax&&(e.ymax=a[0][1]+s),a[0][2]-s<e.zmin&&(e.zmin=a[0][2]-s),a[0][2]+s>e.zmax&&(e.zmax=a[0][2]+s)):n=!0}))}}),n&&i.forEach(r=>{if(r.type!=="arrow"&&r.type!=="cuboid"&&r.type!=="line"&&r.type!=="polygon"){const s=r.radius??r.pointSize??r.edgeLength??1;r.coords.forEach((a=>{a[0]||(a[0]=lt(a[1],e),a[0][0]-s<e.xmin&&(e.xmin=a[0][0]-s),a[0][0]+s>e.xmax&&(e.xmax=a[0][0]+s),a[0][1]-s<e.ymin&&(e.ymin=a[0][1]-s),a[0][1]+s>e.ymax&&(e.ymax=a[0][1]+s),a[0][2]-s<e.zmin&&(e.zmin=a[0][2]-s),a[0][2]+s>e.zmax&&(e.zmax=a[0][2]+s))}))}}),e}var Nh={ambient:({color:i=[1,1,1]},e)=>{e.ambientLightColor.value[0]+=i[0],e.ambientLightColor.value[1]+=i[1],e.ambientLightColor.value[2]+=i[2]},directional:({color:i=[1,1,1],coords:e},t,n)=>{const r=new P(...e[0]??lt(e[1],n)).sub(new P((n.xmax+n.xmin)/2,(n.ymax+n.ymin)/2,(n.zmax+n.zmin)/2)).normalize();t.directionalLights.value.push({color:i,direction:r})},point:({color:i=[1,1,1],coords:e},t,n)=>{t.pointLights.value.push({color:i,basePosition:new P(...e[0]??lt(e[1],n))})},spot:({angle:i=1.57079632679,color:e=[1,1,1],coords:t,target:n},r,s)=>{const a=new P(...t[0]??lt(t[1],s)),o=a.clone().sub(new P(...n[0]??lt(n[1],s))).normalize();r.spotLights.value.push({color:e,baseDirection:o,basePosition:a,coneCos:Math.cos(i)})}};function fa(i,e,t){return Math.max(e,Math.min(t,i))}function Hr(){let i=0,e=0,t=0,n=0;function r(s,a,o,f){i=s,e=o,t=-3*s+3*a-2*o-f,n=2*s-2*a+o+f}return{initNonuniformCatmullRom:function(s,a,o,f,u,d,p){let h=(a-s)/u-(o-s)/(u+d)+(o-a)/d,g=(o-a)/d-(f-a)/(d+p)+(f-o)/p;h*=d,g*=d,r(a,o,h,g)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}function gn(i,e,t){i[t*3]=e[0],i[t*3+1]=e[1],i[t*3+2]=e[2]}function Zi(i,e,t){i[t*3]=e.x,i[t*3+1]=e.y,i[t*3+2]=e.z}function Cn(i,e){const t=new Float32Array(i.length*3);return i.forEach((n,r)=>gn(t,n[0]??lt(n[1],e),r)),t}function kr(i,e){const t=new Float32Array(i.length*1.5),n=new Float32Array(i.length*1.5);for(let r=0;r<i.length/2;r++)gn(t,i[r*2][0]??lt(i[r*2][1],e),r),gn(n,i[r*2+1][0]??lt(i[r*2+1][1],e),r);return[t,n]}function da(i,e,t){return new Lt({transparent:e!==1,depthWrite:e===1,glslVersion:At,uniforms:t,vertexShader:`
			in vec3 objectBegin;
			in vec3 objectEnd;
			in vec3 normal;
			in vec3 position;

			uniform vec3 ambientLightColor;
			uniform mat3 normalMatrix;
			uniform mat4 projectionMatrix;
			uniform mat4 modelViewMatrix;

			out vec4 vColor;

			#define saturate(a) clamp(a, 0.0, 1.0)

			struct IncidentLight {
				vec3 color;
				vec3 direction;
			};

			${t.directionalLights.value.length>0?`
				uniform IncidentLight directionalLights[${t.directionalLights.value.length}];
			`:""}
			${t.pointLights.value.length>0?`
				struct PointLight {
					vec3 color;
					vec3 position;
				};

				uniform PointLight pointLights[${t.pointLights.value.length}];
			`:""}

			${t.spotLights.value.length>0?`
				struct SpotLight {
					vec3 color;
					float coneCos;
					vec3 direction;
					vec3 position;
				};

				uniform SpotLight spotLights[${t.spotLights.value.length}];
			`:""}

			void main() {
				vec3 z = normalize(objectBegin - objectEnd);
				// if z.z is 0 the cylinder doesn't appear
				z.z += 0.0001;

				vec3 x = normalize(cross(vec3(0, 1, 0), z));
				vec3 y = cross(z, x);

				float height = distance(objectBegin, objectEnd);

				// position, rotate and scale the cylinder
				mat4 cylinderMatrix = mat4(
					x, 0,            // row 0
					y, 0,            // row 1
					z * height, 0,   // row 2
					objectBegin, 1 // row 3
				);

				vec4 mvPosition = modelViewMatrix * cylinderMatrix * vec4(position, 1);

				gl_Position = projectionMatrix * mvPosition;

				vec3 position = mvPosition.xyz;
				vec3 normal = normalize(normalMatrix * normal);

				vec3 light = ambientLightColor;

				${t.directionalLights.value.length>0?`
					for (int i = 0; i < ${t.directionalLights.value.length}; i++) {
						light += saturate(dot(normal, directionalLights[i].direction)) * directionalLights[i].color;
					}
				`:""}

				${t.pointLights.value.length>0?`
					for (int i = 0; i < ${t.pointLights.value.length}; i++) {
						light += saturate(dot(
							normal,
							normalize(pointLights[i].position - position))
						) * pointLights[i].color;
					}
				`:""}

				${t.spotLights.value.length>0?`
					vec3 direction;

					for (int i = 0; i < ${t.spotLights.value.length}; i++) {
						direction = normalize(spotLights[i].position - position);

						light += saturate(dot(normal, direction))
						* spotLights[i].color
						* max(dot(direction, spotLights[i].direction), 0.0);
					}
				`:""}

				vColor = vec4(light * vec3(${i[0]}, ${i[1]}, ${i[2]}), ${e});
			}
		`,fragmentShader:`
			in lowp vec4 vColor;

			out lowp vec4 pc_fragColor;

			void main() {
				pc_fragColor = vColor;
			}
		`})}function Wr(i,e){return new Lt({opacity:e,transparent:e!==1,glslVersion:At,vertexShader:`
			in vec3 position;

			uniform mat4 projectionMatrix;
			uniform mat4 modelViewMatrix;

			void main() {
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
			}
		`,fragmentShader:`
			out lowp vec4 pc_fragColor;

			void main() {
				pc_fragColor = vec4(${i[0]}, ${i[1]}, ${i[2]}, ${e});
			}
		`})}function Bh({color:i=[0,0,0],coords:e,opacity:t=1},n,r){const s=Wr(i,t),a=new tn,o=new P(...e[e.length-2][0]??lt(e[e.length-2][1],r)),f=new P(...e[e.length-1][0]??lt(e[e.length-1][1],r)),u=.2*o.distanceTo(f),d=.2*u,p=.1414*u;return a.add(new Mt(new rt().setAttribute("position",new Pe(new Float32Array([0,0,0,d,0,-u,p,p,-u,0,d,-u,-p,p,-u,-d,0,-u,-p,-p,-u,0,-d,-u,p,-p,-u]),3)).applyMatrix4(new Qe().setPosition(f.x,f.y,f.z).lookAt(f,o,new P(0,1,0))).setIndex([2,1,8,4,3,2,6,5,4,8,7,6,4,2,8,8,6,4,0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,7,0,7,8,0,8,1]),s)),a.add(new ai(new rt().setAttribute("position",new Pe(Cn(e,r),3)),s)),a}function Oh({color:i=[1,1,1],coords:e,edgeForm:t={},opacity:n=1,radius:r=1},s,a){const[o,f]=kr(e,a),u=.2588*r,d=.5*r,p=.7071*r,h=.866*r,g=.9659*r,l=new pn().setAttribute("position",new Pe(new Float32Array([0,0,-1,0,-r,0,u,-g,0,d,-h,0,p,-p,0,h,-d,0,g,-u,0,r,0,0,g,u,0,h,d,0,p,p,0,d,h,0,u,g,0,0,r,0,-u,g,0,-d,h,0,-p,p,0,-h,d,0,-g,u,0,-r,0,0,-g,-u,0,-h,-d,0,-p,-p,0,-d,-h,0,-u,-g,0]),3)).setAttribute("normal",new Pe(new Float32Array([0,-.707,.707,.1759,-.7071,.6849,.3407,-.7071,.6196,.4841,-.7071,.5155,.5969,-.7071,.3791,.6725,-.7071,.2185,.7057,-.7071,.04438,.6945,-.7071,-.1327,.6398,-.7071,-.3011,.5448,-.7071,-.4508,.4156,-.7071,-.572,.2603,-.7071,-.6575,.08867,-.7071,-.7015,-.08867,-.7071,-.7015,-.2603,-.7071,-.6575,-.4156,-.7071,-.572,-.5448,-.7071,-.4508,-.6398,-.7071,-.3011,-.6945,-.7071,-.1327,-.7057,-.7071,.04438,-.6725,-.7071,.2185,-.5969,-.7071,.3791,-.4841,-.7071,.5155,-.3407,-.7071,.6196,-.1759,-.7071,.6849,0,-.707,.707,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),3)).setAttribute("objectBegin",new Ft(o,3)).setAttribute("objectEnd",new Ft(f,3)).setIndex([2,3,4,4,5,6,4,6,8,6,7,8,8,9,10,8,10,12,8,12,16,10,11,12,12,13,14,12,14,16,14,15,16,16,17,18,16,18,20,16,20,24,18,19,20,20,21,22,20,22,24,22,23,24,24,1,2,24,2,4,24,4,8,24,8,16,0,2,1,0,3,2,0,4,3,0,5,4,0,6,5,0,7,6,0,8,7,0,9,8,0,10,9,0,11,10,0,12,11,0,13,12,0,14,13,0,15,14,0,16,15,0,17,16,0,18,17,0,19,18,0,20,19,0,21,20,0,22,21,0,23,22,0,24,23,0,1,24]);l.instanceCount=e.length/2;const c=new Mt(l,da(i,n,s));if(c.frustumCulled=!1,t.showEdges===!1)return c;const m=new tn;m.add(c);const _=new pn().setAttribute("position",new Pe(new Float32Array([0,-r,0,u,-g,0,d,-h,0,p,-p,0,h,-d,0,g,-u,0,r,0,0,g,u,0,h,d,0,p,p,0,d,h,0,u,g,0,0,r,0,-u,g,0,-d,h,0,-p,p,0,-h,d,0,-g,u,0,-r,0,0,-g,-u,0,-h,-d,0,-p,-p,0,-d,-h,0,-u,-g,0,0,-r,0]),3)).setAttribute("coneBase",new Ft(o,3)).setAttribute("coneTip",new Ft(f,3));_.instanceCount=e.length/2,t.color??=[0,0,0];const M=new ai(_,new Lt({glslVersion:At,vertexShader:`
				in vec3 position;
				in vec3 coneBase;
				in vec3 coneTip;

				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;

				void main() {
					vec3 z = normalize(coneBase - coneTip);
					// If z.z is 0 the edges doesn't appear.
					z.z += 0.0001;

					vec3 x = normalize(cross(vec3(0, 1, 0), z));
					vec3 y = cross(z, x);

					// position and rotate the edges
					mat4 coneMatrix = mat4(
						x, 0,       // row 0
						y, 0,       // row 1
						z, 0,       // row 2
						coneBase, 1 // row 3
					);

					gl_Position = projectionMatrix * modelViewMatrix * coneMatrix * vec4(position, 1);
				}
			`,fragmentShader:`
				out lowp vec4 pc_fragColor;

				void main() {
					pc_fragColor = vec4(
						${t.color[0]},
						${t.color[1]},
						${t.color[2]},
						1
					);
				}
			`}));return M.frustumCulled=!1,m.add(M),m}function Gh({color:i=[1,1,1],coords:e,edgeForm:t={},opacity:n=1},r,s){const[a,o]=kr(e,s),f=new pn().setAttribute("position",new Pe(new Float32Array([1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0]),3)).setAttribute("uv",new Pe(new Float32Array([0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0]),2)).setAttribute("cuboidBegin",new Ft(a,3)).setAttribute("cuboidEnd",new Ft(o,3)).setIndex([0,2,1,2,3,1,4,6,5,6,7,5,8,10,9,10,11,9,12,14,13,14,15,13,16,18,17,18,19,17,20,22,21,22,23,21]);f.instanceCount=e.length/2,t.color??=[0,0,0];const u=new Mt(f,new Lt({transparent:n!==1,depthWrite:n===1,glslVersion:At,uniforms:r,vertexShader:`
				precision mediump float;

				in vec3 cuboidBegin;
				in vec3 cuboidEnd;
				in vec3 position;
				in vec2 uv;

				uniform mat4 modelViewMatrix;
				uniform mat4 projectionMatrix;

				out vec2 vUv;
				out vec3 vViewPosition;

				void main() {
					// position and scale the cuboid
					mat4 cuboidMatrix = mat4(
						cuboidEnd.x - cuboidBegin.x, 0, 0, 0, // row 0
						0, cuboidEnd.y - cuboidBegin.y, 0, 0, // row 1
						0, 0, cuboidEnd.z - cuboidBegin.z, 0, // row 2
						cuboidBegin, 1                        // row 3
					);

					vec4 mvPosition = modelViewMatrix * cuboidMatrix * vec4(position, 1);

					gl_Position = projectionMatrix * mvPosition;

					vViewPosition = -mvPosition.xyz;
					vUv = uv;
				}
			`,fragmentShader:`
				precision mediump float;

				in vec3 position;
				in vec3 vViewPosition;
				in vec2 vUv;

				uniform vec3 ambientLightColor;

				out vec4 pc_fragColor;

				#define saturate(a) clamp(a, 0.0, 1.0)

				${r.directionalLights.value.length>0?`
					struct IncidentLight {
						vec3 color;
						vec3 direction;
					};

					uniform IncidentLight directionalLights[${r.directionalLights.value.length}];
				`:""}

				${r.pointLights.value.length>0?`
					struct PointLight {
						vec3 color;
						vec3 position;
					};

					uniform PointLight pointLights[${r.pointLights.value.length}];
				`:""}

				${r.spotLights.value.length>0?`
					struct SpotLight {
						vec3 color;
						float coneCos;
						vec3 direction;
						vec3 position;
					};

					uniform SpotLight spotLights[${r.spotLights.value.length}];
				`:""}

				void main() {
					${t.showEdges??!0?`
						vec2 grid = abs(fract(vUv - 0.5) - 0.5) / fwidth(vUv);

						float factor = min(min(grid.x, grid.y), 1.0);

						vec3 edgeColor = vec3(${t.color[0]}, ${t.color[1]}, ${t.color[2]});

						vec3 diffuseColor = (vec3(${i[0]}, ${i[1]}, ${i[2]}) - edgeColor) * factor + edgeColor;
					`:`
						vec3 diffuseColor = vec3(${i[0]}, ${i[1]}, ${i[2]});
					`}

					vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));

					vec3 reflectedLight = ambientLightColor;

					${r.directionalLights.value.length>0?`
						for (int i = 0; i < ${r.directionalLights.value.length}; i++) {
							reflectedLight += saturate(dot(normal, directionalLights[i].direction)) * directionalLights[i].color;
						}
					`:""}
					${r.pointLights.value.length>0?`
						for (int i = 0; i < ${r.pointLights.value.length}; i++) {
							reflectedLight += saturate(dot(
								normal,
								normalize(pointLights[i].position + vViewPosition))
							) * pointLights[i].color;
						}
					`:""}
					${r.spotLights.value.length>0?`
						for (int i = 0; i < ${r.spotLights.value.length}; i++) {
							float angleCos = dot(
								normalize(spotLights[i].position + vViewPosition),
								spotLights[i].direction
							);

							reflectedLight += saturate(dot(
								normal,
								normalize(spotLights[i].position + vViewPosition))
							) * spotLights[i].color * max(angleCos, 0.0);
						}
					`:""}

					pc_fragColor = vec4(
						reflectedLight * diffuseColor,
						${n}
					);
				}
			`}));return u.frustumCulled=!1,u}function zh({color:i=[1,1,1],coords:e,edgeForm:t={},opacity:n=1,radius:r=1},s,a){const[o,f]=kr(e,a),u=.2588*r,d=.5*r,p=.7071*r,h=.866*r,g=.9659*r,l=new pn().setAttribute("position",new Pe(new Float32Array([0,-r,0,u,-g,0,d,-h,0,p,-p,0,h,-d,0,g,-u,0,r,0,0,g,u,0,h,d,0,p,p,0,d,h,0,u,g,0,0,r,0,-u,g,0,-d,h,0,-p,p,0,-h,d,0,-g,u,0,-r,0,0,-g,-u,0,-h,-d,0,-p,-p,0,-d,-h,0,-u,-g,0,0,-r,-1,u,-g,-1,d,-h,-1,p,-p,-1,h,-d,-1,g,-u,-1,r,0,-1,g,u,-1,h,d,-1,p,p,-1,d,h,-1,u,g,-1,0,r,-1,-u,g,-1,-d,h,-1,-p,p,-1,-h,d,-1,-g,u,-1,-r,0,-1,-g,-u,-1,-h,-d,-1,-p,-p,-1,-d,-h,-1,-u,-g,-1,0,-r,0,u,-g,0,d,-h,0,p,-p,0,h,-d,0,g,-u,0,r,0,0,g,u,0,h,d,0,p,p,0,d,h,0,u,g,0,0,r,0,-u,g,0,-d,h,0,-p,p,0,-h,d,0,-g,u,0,-r,0,0,-g,-u,0,-h,-d,0,-p,-p,0,-d,-h,0,-u,-g,0,0,-r,-1,u,-g,-1,d,-h,-1,p,-p,-1,h,-d,-1,g,-u,-1,r,0,-1,g,u,-1,h,d,-1,p,p,-1,d,h,-1,u,g,-1,0,r,-1,-u,g,-1,-d,h,-1,-p,p,-1,-h,d,-1,-g,u,-1,-r,0,-1,-g,-u,-1,-h,-d,-1,-p,-p,-1,-d,-h,-1,-u,-g,-1]),3)).setAttribute("normal",new Pe(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,0,0,-1,-.0438,-.999,0,.2163,-.9763,0,.4615,-.8871,0,.6754,-.7374,0,.8433,-.5374,0,.9536,-.3009,0,.999,-.0438,0,.9763,.2163,0,.8871,.4615,0,.7374,.6754,0,.5374,.8433,0,.3009,.9536,0,.0438,.999,0,-.2163,.9763,0,-.4615,.8871,0,-.6754,.7374,0,-.8433,.5374,0,-.9536,.3009,0,-.999,.0438,0,-.9763,-.2163,0,-.8871,-.4615,0,-.7374,-.6754,0,-.5374,-.8433,0,-.3009,-.9536,0,.0438,-.999,0,.3009,-.9536,0,.5374,-.8433,0,.7374,-.6754,0,.8871,-.4615,0,.9763,-.2163,0,.999,.0438,0,.9536,.3009,0,.8433,.5374,0,.6754,.7374,0,.4615,.8871,0,.2163,.9763,0,-.0438,.999,0,-.3009,.9536,0,-.5374,.8433,0,-.7374,.6754,0,-.8871,.4615,0,-.9763,.2163,0,-.999,-.0438,0,-.9536,-.3009,0,-.8433,-.5374,0,-.6754,-.7374,0,-.4615,-.8871,0,-.2163,-.9763,0]),3)).setAttribute("objectBegin",new Ft(o,3)).setAttribute("objectEnd",new Ft(f,3)).setIndex([1,2,3,3,4,5,3,5,7,5,6,7,7,8,9,7,9,11,7,11,15,9,10,11,11,12,13,11,13,15,13,14,15,15,16,17,15,17,19,15,19,23,17,18,19,19,20,21,19,21,23,21,22,23,23,0,1,23,1,3,23,3,7,23,7,15,27,26,25,29,28,27,31,29,27,31,30,29,33,32,31,35,33,31,39,35,31,35,34,33,37,36,35,39,37,35,39,38,37,41,40,39,43,41,39,47,43,39,43,42,41,45,44,43,47,45,43,47,46,46,45,25,24,47,27,25,47,31,27,47,39,31,49,72,73,72,49,48,50,73,74,73,50,49,51,74,75,74,51,50,52,75,76,75,52,51,53,76,77,76,53,52,54,77,78,77,54,53,55,78,79,78,55,54,56,79,80,79,56,55,57,80,81,80,57,56,58,81,82,81,58,57,59,82,83,82,59,58,60,83,84,83,60,59,61,84,85,84,61,60,62,85,86,85,62,61,63,86,87,86,63,62,64,87,88,87,64,63,65,88,89,88,65,64,66,89,90,89,66,65,67,90,91,90,67,66,68,91,92,91,68,67,69,92,93,92,69,68,70,93,94,93,70,69,71,94,95,94,71,70,48,95,72,95,48,71]);l.instanceCount=e.length/2;const c=new Mt(l,da(i,n,s));if(c.frustumCulled=!1,t.showEdges===!1)return c;const m=new tn;m.add(c);const _=new pn().setAttribute("position",new Pe(new Float32Array([0,-r,0,u,-g,0,d,-h,0,p,-p,0,h,-d,0,g,-u,0,r,0,0,g,u,0,h,d,0,p,p,0,d,h,0,u,g,0,0,r,0,-u,g,0,-d,h,0,-p,p,0,-h,d,0,-g,u,0,-r,0,0,-g,-u,0,-h,-d,0,-p,-p,0,-d,-h,0,-u,-g,0,0,-r,0,NaN,NaN,NaN,0,-r,-1,u,-g,-1,d,-h,-1,p,-p,-1,h,-d,-1,g,-u,-1,r,0,-1,g,u,-1,h,d,-1,p,p,-1,d,h,-1,u,g,-1,0,r,-1,-u,g,-1,-d,h,-1,-p,p,-1,-h,d,-1,-g,u,-1,-r,0,-1,-g,-u,-1,-h,-d,-1,-p,-p,-1,-d,-h,-1,-u,-g,-1,0,-r,-1]),3));_.boundingSphere=new Vn(new P(0,0,-.5),Math.hypot(r,.5)),_.instanceCount=e.length/2,_.setAttribute("cylinderBegin",new Ft(o,3)),_.setAttribute("cylinderEnd",new Ft(f,3)),t.color??=[0,0,0];const M=new ai(_,new Lt({glslVersion:At,vertexShader:`
				in vec3 position;
				in vec3 cylinderBegin;
				in vec3 cylinderEnd;

				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;

				void main() {
					vec3 z = normalize(cylinderBegin - cylinderEnd);
					// If z.z is 0 the edges doesn't appear.
					z.z += 0.0001;

					vec3 x = normalize(cross(vec3(0, 1, 0), z));
					vec3 y = cross(z, x);

					float height = distance(cylinderBegin, cylinderEnd);

					// position and rotate the edges
					mat4 cylinderMatrix = mat4(
						x, 0,            // row 0
						y, 0,            // row 1
						z * height, 0,   // row 2
						cylinderBegin, 1 // row 3
					);

					gl_Position = projectionMatrix * modelViewMatrix * cylinderMatrix * vec4(position, 1);
				}
			`,fragmentShader:`
				out lowp vec4 pc_fragColor;

				void main() {
					pc_fragColor = vec4(
						${t.color[0]},
						${t.color[1]},
						${t.color[2]},
						1
					);
				}
			`}));return M.frustumCulled=!1,m.add(M),m}function Vh({color:i=[0,0,0],coords:e,dashed:t=!1,gapSize:n=10,opacity:r=1},s,a){return new ai(new rt().setAttribute("position",new Pe(Cn(e,a),3)),t?new Lt({opacity:r,transparent:r!==1,glslVersion:At,uniforms:s,vertexShader:`
					in vec3 position;

					uniform mat4 projectionMatrix;
					uniform mat4 modelViewMatrix;

					flat out vec2 startPosition;
					out vec2 vertexPosition;

					void main() {
						gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);

						vertexPosition = (gl_Position.xyz / gl_Position.w).xy;
						startPosition = vertexPosition;
					}
				`,fragmentShader:`
					precision mediump float;

					uniform vec2 viewportSize;

					flat in vec2 startPosition;
					in vec2 vertexPosition;

					out vec4 pc_fragColor;

					void main() {
						float doubleDistance = length(
							(vertexPosition - startPosition) * viewportSize
						);

						float quadrupleGapInverse = ${(1/(4*n)).toFixed(4)};

						if (fract(doubleDistance * quadrupleGapInverse) > 0.5) discard;

						pc_fragColor = vec4(${i[0]}, ${i[1]}, ${i[2]}, ${r});
					}
				`}):Wr(i,r))}function Hh({color:i=[0,0,0],coords:e,opacity:t=1,pointSize:n=1},r,s){return new so(new rt().setAttribute("position",new Pe(Cn(e,s),3)),new Lt({transparent:!0,depthWrite:!1,glslVersion:At,uniforms:r,vertexShader:`
                in vec3 position;
                uniform mat4 projectionMatrix;
                uniform mat4 modelViewMatrix;
                uniform vec2 viewportSize;

                void main() {
                    gl_PointSize = viewportSize.x * ${n};
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
                }
            `,fragmentShader:`
                out lowp vec4 pc_fragColor;
                void main() {
                    if (length(gl_PointCoord - 0.5) > 0.5) discard;
                    pc_fragColor = vec4(${i[0]}, ${i[1]}, ${i[2]}, ${t});
                }
            `}))}function pa(i,e=3){let t=kh(i,0,i.length,e),n=[];return fi(t,n,e),n}function kh(i,e,t,n){let r,s;if(Jh(i,e,t,n)>0)for(r=e;r<t;r+=n)s=ga(r,i[r],i[r+1],s);else for(r=t-n;r>=e;r-=n)s=ga(r,i[r],i[r+1],s);return s&&ji(s,s.next)&&(di(s),s=s.next),s}function hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ji(t,t.next)||Tt(t.prev,t,t.next)===0)){if(di(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fi(i,e,t,n,r,s){if(!i)return;let a=i,o,f;for(;i.prev!==i.next;){if(o=i.prev,f=i.next,Wh(i)){e.push(o.i/t),e.push(i.i/t),e.push(f.i/t),di(i),i=f.next,a=f.next;continue}if(i=f,i===a){s?s===1?(i=Xh(hi(i),e,t),fi(i,e,t,n,r,2)):s===2&&qh(i,e,t,n,r):fi(hi(i),e,t,n,r,1);break}}}function Wh(i){let e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Yh(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Tt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Xh(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!ji(r,s)&&ma(r,n,n.next,s)&&er(r,s)&&er(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),di(n),di(n.next),n=i=s),n=n.next}while(n!==i);return hi(n)}function qh(i,e,t,n,r){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&$h(s,a)){let o=jh(s,a);s=hi(s,s.next),o=hi(o,o.next),fi(s,e,t,n,r),fi(o,e,t,n,r);return}a=a.next}s=s.next}while(s!==i)}function Yh(i,e,t,n,r,s,a,o){return(r-a)*(e-o)-(i-a)*(s-o)>=0&&(i-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(r-a)*(n-o)>=0}function $h(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kh(i,e)&&(er(i,e)&&er(e,i)&&Zh(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||ji(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ji(i,e){return i.x===e.x&&i.y===e.y}function ma(i,e,t,n){const r=Qi(Tt(i,e,t)),s=Qi(Tt(i,e,n)),a=Qi(Tt(t,n,i)),o=Qi(Tt(t,n,e));return!!(r!==s&&a!==o||r===0&&Ji(i,t,e)||s===0&&Ji(i,n,e)||a===0&&Ji(t,i,n)||o===0&&Ji(t,e,n))}function Ji(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qi(i){return i>0?1:i<0?-1:0}function Kh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ma(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function er(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Zh(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jh(i,e){let t=new Xr(i.i,i.x,i.y),n=new Xr(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ga(i,e,t,n){let r=new Xr(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function di(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xr(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jh(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}function _a(i,e){const t=new P(...i[0][0]??lt(i[0][1],e)),n=new P(...i[1][0]??lt(i[1][1],e)),r=new P(...i[i.length-1][0]??lt(i[i.length-1][1],e));return t.sub(n).cross(r.sub(n)).normalize()}function Qh(i,e){const t=_a(i,e),n=new P(...i[0][0]??lt(i[0][1],e)),r=t.dot(n),s=.01;for(let a=0;a<i.length;a++){const[o,f,u]=i[a][0]??lt(i[a][1],e);if(Math.abs(t.x*o+t.y*f+t.z*u-r)>s)return!1}return!0}function ef({color:i=[1,1,1],coords:e,edgeForm:t={},opacity:n=1,vertexNormals:r=[]},s,a){let o;if(e.length===3)o=new rt().setAttribute("position",new Pe(new Float32Array([...e[0][0]??lt(e[0][1],a),...e[1][0]??lt(e[1][1],a),...e[2][0]??lt(e[2][1],a)]),3));else if(Qh(e,a)){const p=new Mn().setFromUnitVectors(_a(e,a),new P(0,0,1)),h=new Float32Array(e.length*2);e.forEach((g,l)=>{const c=new P(...g[0]??lt(g[1],a)).applyQuaternion(p);h[l*2]=c.x,h[l*2+1]=c.y}),o=new rt().setAttribute("position",new Pe(Cn(e,a),3)).setIndex(pa(h,2))}else{const p=Cn(e,a);o=new rt().setAttribute("position",new Pe(p,3)).setIndex(pa(p))}const f=new Float32Array(o.attributes.position.count*3);for(let p=0;p<f.length/3;p++)gn(f,r[p]??[NaN,NaN,NaN],p);o.setAttribute("normal",new Pe(f,3));const u=new Mt(o,new Lt({side:2,depthWrite:n===1,transparent:n!==1,glslVersion:At,uniforms:s,vertexShader:`
				precision mediump float;

				in vec3 normal;
				in vec3 position;

				uniform mat4 modelViewMatrix;
				uniform mat4 projectionMatrix;

				out vec3 vViewPosition;
				out vec3 vNormal;

				void main() {
					vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

					gl_Position = projectionMatrix * mvPosition;

					vViewPosition = -mvPosition.xyz;
					vNormal = normal;
				}
			`,fragmentShader:`
				precision mediump float;

				in vec3 vViewPosition;
				in vec3 vNormal;

				uniform vec3 ambientLightColor;
				uniform vec3 diffuse;
				uniform float opacity;

				out vec4 pc_fragColor;

				#define saturate(a) clamp(a, 0.0, 1.0)

				${s.directionalLights.value.length>0?`
					struct IncidentLight {
						vec3 color;
						vec3 direction;
					};

					uniform IncidentLight directionalLights[${s.directionalLights.value.length}];
				`:""}
				${s.pointLights.value.length>0?`
					struct PointLight {
						vec3 color;
						vec3 position;
					};

					uniform PointLight pointLights[${s.pointLights.value.length}];
				`:""}

				${s.spotLights.value.length>0?`
					struct SpotLight {
						vec3 color;
						float coneCos;
						vec3 direction;
						vec3 position;
					};

					uniform SpotLight spotLights[${s.spotLights.value.length}];
				`:""}

				void main() {
					// If x is NaN, then y and z are also NaN.
					vec3 normal = isnan(vNormal.x) ? normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition))) : vNormal;

					vec3 reflectedLight = ambientLightColor;

					${s.directionalLights.value.length>0?`
						for (int i = 0; i < ${s.directionalLights.value.length}; i++) {
							reflectedLight += saturate(dot(normal, directionalLights[i].direction)) * directionalLights[i].color;
						}
					`:""}
					${s.pointLights.value.length>0?`
						for (int i = 0; i < ${s.pointLights.value.length}; i++) {
							reflectedLight += saturate(dot(
								normal,
								normalize(pointLights[i].position + vViewPosition))
							) * pointLights[i].color;
						}
					`:""}
					${s.spotLights.value.length>0?`
					  vec3 direction;

						for (int i = 0; i < ${s.spotLights.value.length}; i++) {
							direction = normalize(spotLight.position + vViewPosition);

							reflectedLight += saturate(dot(normal, direction))
							* spotLights[i].color
							* max(
								smoothstep(
									spotLights[i].coneCos,
									spotLights[i].coneCos,
									dot(direction, spotLights[i].direction)
								),
								0.0
							);
						}
					`:""}

					pc_fragColor = vec4(
						reflectedLight * vec3(${i[0]}, ${i[1]}, ${i[2]}),
						${n}
					);
				}
			`}));if(t.showEdges!==!0)return u;const d=new tn;return d.add(u),t.color??=[0,0,0],d.add(new Mt(o,new Lt({wireframe:!0,glslVersion:At,vertexShader:`
				in vec3 position;

				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;

				void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
				}
			`,fragmentShader:`
				out lowp vec4 pc_fragColor;

				void main() {
					pc_fragColor = vec4(
						${t.color[0]},
						${t.color[1]},
						${t.color[2]},
						1
					);
				}
			`}))),d}function tf(i){let e=0;for(let n=0;n<i.length;++n)e+=i[n].array.length;const t=new i[0].array.constructor(e);for(let n=0,r=0;n<i.length;++n)t.set(i[n].array,r),r+=i[n].array.length;return new Pe(t,3)}function nf(i){const e=[],t={},n=new rt;for(let r=0,s=0;r<i.length;++r){for(const o in i[r].attributes)t[o]===void 0&&(t[o]=[]),t[o].push(i[r].attributes[o]);const a=i[r].index;if(a===null)throw new Error("mergeBufferGeometries expects indexed geometries.");for(let o=0;o<a.count;++o)e.push(a.getX(o)+s);s+=i[r].attributes.position.count}n.setIndex(e);for(const r in t)n.setAttribute(r,tf(t[r]));return n}function xa(i,e=!1,t=!1){const n=t?Math.PI:Math.PI*2,r=new P,s=new Array(49),a=new Float32Array(7203),o=new Float32Array(7203),f=new Uint16Array(13680);for(let d=0,p=0;d<=48;d++){const h=d*Math.PI/48,g=[];for(let l=0;l<=48;l++){const c=l*n/48;r.set(-i*Math.cos(c)*Math.sin(h),i*Math.cos(h),i*Math.sin(c)*Math.sin(h)),Zi(a,r,p),Zi(o,r.normalize(),p),g.push(p++)}s[d]=g}for(let d=0,p=0;d<48;d++)for(let h=0;h<48;h++){const g=s[d][h+1],l=s[d][h],c=s[d+1][h],m=s[d+1][h+1];gn(f,[l,c,m],p++),d!==0&&gn(f,[g,l,m],p++)}const u=e?new pn:new rt;return u.setIndex(new Pe(f,1)).setAttribute("position",new Pe(a,3)).setAttribute("normal",new Pe(o,3)),u}function rf(i,e){const t=e.computeFrenetFrames(64),n=new P,r=new Float32Array(12675),s=new Float32Array(12675),a=new Float32Array(25350);for(let o=0,f=0;o<=64;o++){const u=e.getPointAt(o/64),d=t.normals[o],p=t.binormals[o];for(let h=0;h<=64;h++,f++){const g=h/64*Math.PI*2,l=Math.sin(g),c=-Math.cos(g);n.set(c*d.x+l*p.x,c*d.y+l*p.y,c*d.z+l*p.z).normalize(),Zi(s,n,f),n.set(u.x+i*n.x,u.y+i*n.y,u.z+i*n.z),Zi(r,n,f)}}for(let o=1,f=0;o<=64;o++)for(let u=1;u<=64;u++){const d=65*(o-1)+(u-1),p=65*o+(u-1),h=65*o+u,g=65*(o-1)+u;gn(a,[d,p,g],f++),gn(a,[p,h,g],f++)}return new rt().setIndex(new Pe(a,1)).setAttribute("position",new Pe(r,3)).setAttribute("normal",new Pe(s,3))}function sf({color:i=[1,1,1],coords:e,opacity:t=1,radius:n=1},r,s){const a=xa(n,!0).setAttribute("sphereCenter",new Ft(Cn(e,s),3));a.instanceCount=e.length;const o=new Mt(a,new Lt({transparent:t!==1,depthWrite:t===1,glslVersion:At,uniforms:r,vertexShader:`
				in vec3 normal;
				in vec3 position;
				in vec3 sphereCenter;

				uniform vec3 ambientLightColor;
				uniform vec3 diffuse;
				uniform float opacity;
				uniform mat4 modelViewMatrix;
				uniform mat3 normalMatrix;
				uniform mat4 projectionMatrix;

				out vec4 vColor;

				#define saturate(a) clamp(a, 0.0, 1.0)

				${r.directionalLights.value.length>0?`
					struct IncidentLight {
						vec3 color;
						vec3 direction;
					};

					uniform IncidentLight directionalLights[${r.directionalLights.value.length}];
				`:""}

				${r.pointLights.value.length>0?`
					struct PointLight {
						vec3 color;
						vec3 position;
					};

					uniform PointLight pointLights[${r.pointLights.value.length}];
				`:""}

				${r.spotLights.value.length>0?`
					struct SpotLight {
						vec3 color;
						float coneCos;
						vec3 direction;
						vec3 position;
					};

					uniform SpotLight spotLights[${r.spotLights.value.length}];
				`:""}

				void main() {
					vec4 mvPosition = modelViewMatrix * vec4(position + sphereCenter, 1);

					gl_Position = projectionMatrix * mvPosition;

					vec3 position = mvPosition.xyz;
					vec3 normal = normalize(normalMatrix * normal);

					vec3 light = ambientLightColor;

					${r.directionalLights.value.length>0?`
						for (int i = 0; i < ${r.directionalLights.value.length}; i++) {
							light += saturate(dot(normal, directionalLights[i].direction)) * directionalLights[i].color;
						}
					`:""}

					${r.pointLights.value.length>0?`
						for (int i = 0; i < ${r.pointLights.value.length}; i++) {
							light += saturate(dot(normal, normalize(pointLights[i].position - position))) * pointLights[i].color;
						}
					`:""}

					${r.spotLights.value.length>0?`
						vec3 direction;

						for (int i = 0; i < ${r.spotLights.value.length}; i++) {
							direction = normalize(spotLights[i].position - position);

							light += saturate(dot(normal, direction))
							* spotLights[i].color
							* max(
								smoothstep(
									spotLights[i].coneCos,
									spotLights[i].coneCos,
									dot(direction, spotLights[i].direction)
								),
								0.0
							);
						}
					`:""}

					vColor = vec4(light * vec3(${i[0]}, ${i[1]}, ${i[2]}), ${t});
				}
			`,fragmentShader:`
				in lowp vec4 vColor;

				out lowp vec4 pc_fragColor;

				void main() {
					pc_fragColor = vColor;
				}
			`}));return o.frustumCulled=!1,o}function af({color:i=[0,0,0],coords:e,texts:t,textSize:n=20},r,s,a){return t?.forEach((o,f)=>{if(e[f].length<2||!e[f][1])return;const u=e[f][1],d=document.createElement("span");d.innerText=o,d.style.position="absolute",d.style.pointerEvents="none",d.style.zIndex=`${u[2]??0}`,d.style.color=`rgb(
			${i[0]*255},
			${i[1]*255},
			${i[2]*255}
		)`,d.style.fontSize=`${n}px`,a.appendChild(d),d.style.left=`calc(${u[0]*100}% - ${d.offsetWidth/2}px)`,d.style.bottom=`calc(${u[0]*100}% - ${d.offsetHeight/2}px)`}),null}const tr=new P;function of(i,e){const t=i.map(d=>new P(...d[0]??lt(d[1],e))),n=[0];let r,s=o(0),a=0;for(let d=1;d<=200;d++)r=o(d/200),a+=r.distanceTo(s),n.push(a),s=r;function o(d){const p=Hr(),h=Hr(),g=Hr(),l=(t.length-1)*d;let c=Math.floor(l),m=l-c;m===0&&c===t.length-1&&(c=t.length-2,m=1);let _,M;c>0?_=t[(c-1)%t.length]:(tr.subVectors(t[0],t[1]).add(t[0]),_=tr);const b=t[c%t.length],y=t[(c+1)%t.length];c+2<t.length?M=t[(c+2)%t.length]:(tr.subVectors(t[t.length-1],t[t.length-2]).add(t[t.length-1]),M=tr);let L=_.distanceToSquared(b)**.25,T=b.distanceToSquared(y)**.25,C=y.distanceToSquared(M)**.25;return T<1e-4&&(T=1),L<1e-4&&(L=T),C<1e-4&&(C=T),p.initNonuniformCatmullRom(_.x,b.x,y.x,M.x,L,T,C),h.initNonuniformCatmullRom(_.y,b.y,y.y,M.y,L,T,C),g.initNonuniformCatmullRom(_.z,b.z,y.z,M.z,L,T,C),new P(p.calc(m),h.calc(m),g.calc(m))}function f(d){let h=d-1e-4,g=d+1e-4;h<0&&(h=0),g>1&&(g=1);const l=o(h);return o(g).clone().sub(l).normalize()}function u(d){const p=d*n[n.length-1];let h,g=0,l=n.length-1,c;for(;g<=l;)if(h=Math.floor((g+l)/2),c=n[h]-p,c<0)g=h+1;else if(c>0)l=h-1;else{l=h;break}if(h=l,n[h]===p)return h/(n.length-1);const m=n[h],M=n[h+1]-m,b=(p-m)/M;return(h+b)/(n.length-1)}return{getPoint:o,getPointAt(d){return o(u(d))},computeFrenetFrames(d){const p=new P,h=new Qe,g=new Array(d+1),l=new Array(d+1),c=new Array(d+1);l[0]=new P,c[0]=new P;for(let y=0;y<=d;y++)g[y]=f(u(y/d));let m=Number.MAX_VALUE;const _=Math.abs(g[0].x),M=Math.abs(g[0].y),b=Math.abs(g[0].z);_<=m&&(m=_,p.set(1,0,0)),M<=m&&(m=M,p.set(0,1,0)),b<=m&&p.set(0,0,1),p.crossVectors(g[0],p).normalize(),l[0].crossVectors(g[0],p),c[0].crossVectors(g[0],l[0]);for(let y=1;y<=d;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),p.crossVectors(g[y-1],g[y]),p.length()>Number.EPSILON){const L=Math.acos(fa(g[y-1].dot(g[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(p.normalize(),L))}c[y].crossVectors(g[y],l[y])}return{normals:l,binormals:c}}}}function lf({color:i=[1,1,1],coords:e,opacity:t=1,radius:n=1},r,s){const a=of(e,s),o=xa(n,!1,!0),f=[rf(n,a),o.clone().applyMatrix4(new Qe().setPosition(a.getPoint(0).x,a.getPoint(0).y,a.getPoint(0).z).lookAt(a.getPoint(0),new P(...e[1][0]??lt(e[1][1],s)),new P(1,0,0))),o.applyMatrix4(new Qe().setPosition(a.getPoint(1).x,a.getPoint(1).y,a.getPoint(1).z).lookAt(a.getPoint(1),new P(...e[e.length-2][0]??lt(e[e.length-2][1],s)),new P(1,0,0)))];return new Mt(nf(f),new Lt({transparent:t!==1,depthWrite:t===1,glslVersion:At,uniforms:r,vertexShader:`
				in vec3 normal;
				in vec3 position;

				uniform vec3 ambientLightColor;
				uniform mat4 modelViewMatrix;
				uniform mat3 normalMatrix;
				uniform mat4 projectionMatrix;

				out vec4 vColor;

				#define saturate(a) clamp(a, 0.0, 1.0)

				${r.directionalLights.value.length>0?`
					struct IncidentLight {
						vec3 color;
						vec3 direction;
					};

					uniform IncidentLight directionalLights[${r.directionalLights.value.length}];
				`:""}

				${r.pointLights.value.length>0?`
					struct PointLight {
						vec3 color;
						vec3 position;
					};

					uniform PointLight pointLights[${r.pointLights.value.length}];
				`:""}

				${r.spotLights.value.length>0?`
					struct SpotLight {
						vec3 color;
						float coneCos;
						vec3 direction;
						vec3 position;
					};

					uniform SpotLight spotLights[${r.spotLights.value.length}];
				`:""}

				void main() {
					vec4 mvPosition = modelViewMatrix * vec4(position, 1);

					gl_Position = projectionMatrix * mvPosition;

					vec3 position = mvPosition.xyz;
					vec3 normal = normalize(normalMatrix * normal);

					vec3 light = ambientLightColor;

					${r.directionalLights.value.length>0?`
						for (int i = 0; i < ${r.directionalLights.value.length}; i++) {
							light += saturate(dot(normal, directionalLights[i].direction)) * directionalLights[i].color;
						}
					`:""}

					${r.pointLights.value.length>0?`
						for (int i = 0; i < ${r.pointLights.value.length}; i++) {
							light += saturate(dot(
								normal,
								normalize(spotLights[i].position - position))
							) * pointLights[i].color;
						}
					`:""}

					${r.spotLights.value.length>0?`
						vec3 direction;

						for (int i = 0; i < ${r.spotLights.value.length}; i++) {
							direction = normalize(spotLights[i].position - position);

							light += saturate(dot(normal, direction))
							* spotLights[i].color
							* max(
								smoothstep(
									spotLights[i].coneCos,
									spotLights[i].coneCos,
									dot(direction, spotLights[i].direction)
								),
								0.0
							);
						}
					`:""}

					vColor = vec4(light * vec3(${i[0]}, ${i[1]}, ${i[2]}), ${t});
				}
			`,fragmentShader:`
				in lowp vec4 vColor;

				out lowp vec4 pc_fragColor;

				void main() {
					pc_fragColor = vColor;
				}
			`}))}function cf({color:i=[1,1,1],coords:e,edgeForm:t={},edgeLength:n=1,opacity:r=1,subType:s},a,o){const f=new pn;switch(s){case"tetrahedron":{const l=.6123*n;f.setAttribute("position",new Pe(new Float32Array([-l,-l,l,l,l,l,-l,l,-l,l,-l,-l,-l,l,-l,l,l,l,l,-l,-l,l,l,l,-l,-l,l,l,-l,-l,-l,-l,l,-l,l,-l]),3));break}case"octahedron":{f.setAttribute("position",new Pe(new Float32Array([0,n,0,0,0,n,n,0,0,0,0,n,0,-n,0,n,0,0,0,-n,0,0,0,-n,n,0,0,0,0,-n,0,n,0,n,0,0,0,n,0,0,0,-n,-n,0,0,0,0,-n,0,-n,0,-n,0,0,0,-n,0,0,0,n,-n,0,0,0,0,n,0,n,0,-n,0,0]),3));break}case"dodecahedron":{const l=.3784*n,c=.6123*n,m=.9908*n;f.setAttribute("position",new Pe(new Float32Array([0,l,m,c,c,c,-c,c,c,c,c,c,l,m,0,-c,c,c,l,m,0,-l,m,0,-c,c,c,m,0,l,m,0,-l,c,c,c,m,0,-l,c,c,-c,c,c,c,c,c,-c,l,m,0,c,c,c,c,-c,-c,0,-l,-m,m,0,-l,0,-l,-m,0,l,-m,m,0,-l,0,l,-m,c,c,-c,m,0,-l,-c,-c,-c,-m,0,-l,0,-l,-m,-m,0,-l,-c,c,-c,0,-l,-m,-c,c,-c,0,l,-m,0,-l,-m,-l,-m,0,-c,-c,c,-c,-c,-c,-c,-c,c,-m,0,l,-c,-c,-c,-m,0,l,-m,0,-l,-c,-c,-c,0,l,-m,-c,c,-c,c,c,-c,-c,c,-c,-l,m,0,c,c,-c,-l,m,0,l,m,0,c,c,-c,-m,0,-l,-m,0,l,-c,c,-c,-m,0,l,-c,c,c,-c,c,-c,-c,c,c,-l,m,0,-c,c,-c,-c,-c,c,0,-l,m,-m,0,l,0,-l,m,0,l,m,-m,0,l,0,l,m,-c,c,c,-m,0,l,l,-m,0,-l,-m,0,c,-c,-c,-l,-m,0,-c,-c,-c,c,-c,-c,-c,-c,-c,0,-l,-m,c,-c,-c,0,-l,m,c,-c,c,0,l,m,c,-c,c,m,0,l,0,l,m,m,0,l,c,c,c,0,l,m,c,-c,c,l,-m,0,m,0,l,l,-m,0,c,-c,-c,m,0,l,c,-c,-c,m,0,-l,m,0,l,-l,-m,0,l,-m,0,-c,-c,c,l,-m,0,c,-c,c,-c,-c,c,c,-c,c,0,-l,m,-c,-c,c]),3));break}case"icosahedron":{const l=.5576*n,c=.9022*n;f.setAttribute("position",new Pe(new Float32Array([-c,0,l,0,l,c,-l,c,0,0,l,c,l,c,0,-l,c,0,l,c,0,0,l,-c,-l,c,0,0,l,-c,-c,0,-l,-l,c,0,-c,0,-l,-c,0,l,-l,c,0,0,l,c,c,0,l,l,c,0,-c,0,l,0,-l,c,0,l,c,-c,0,-l,-l,-c,0,-c,0,l,0,l,-c,0,-l,-c,-c,0,-l,l,c,0,c,0,-l,0,l,-c,c,0,l,0,-l,c,l,-c,0,0,-l,c,-l,-c,0,l,-c,0,-l,-c,0,0,-l,-c,l,-c,0,0,-l,-c,c,0,-l,l,-c,0,c,0,-l,c,0,l,l,-c,0,c,0,l,0,l,c,0,-l,c,0,-l,c,-c,0,l,-l,-c,0,-l,-c,0,-c,0,-l,0,-l,-c,0,-l,-c,0,l,-c,c,0,-l,c,0,-l,l,c,0,c,0,l]),3));break}}const u=Cn(e,o);f.instanceCount=e.length,f.setAttribute("polyhedronCenter",new Ft(u,3));const d=new Mt(f,new Lt({transparent:r!==1,depthWrite:r===1,glslVersion:At,uniforms:a,vertexShader:`
				in vec3 position;
				in vec3 polyhedronCenter;

				uniform mat4 modelViewMatrix;
				uniform mat4 projectionMatrix;

				out vec3 vViewPosition;

				void main() {
					vec4 mvPosition = modelViewMatrix * vec4(position + polyhedronCenter, 1);

					vViewPosition = -mvPosition.xyz;

					gl_Position = projectionMatrix * mvPosition;
				}
			`,fragmentShader:`
				precision mediump float;

				in vec3 vViewPosition;

				uniform vec3 ambientLightColor;

				out vec4 pc_fragColor;

				#define saturate(a) clamp(a, 0.0, 1.0)

				${a.directionalLights.value.length>0?`
					struct IncidentLight {
						vec3 color;
						vec3 direction;
					};

					uniform IncidentLight directionalLights[${a.directionalLights.value.length}];
				`:""}

				${a.pointLights.value.length>0?`
					struct PointLight {
						vec3 color;
						vec3 position;
					};

					uniform PointLight pointLights[${a.pointLights.value.length}];
				`:""}

				${a.spotLights.value.length>0?`
					struct SpotLight {
						vec3 color;
						float coneCos;
						vec3 direction;
						vec3 position;
					};

					uniform SpotLight spotLights[${a.spotLights.value.length}];

					void getSpotLightInfo(const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light) {
						light.direction = normalize(spotLight.position + vViewPosition);

						light.color = spotLight.color * max(smoothstep(spotLight.coneCos, spotLight.coneCos, dot(light.direction, spotLight.direction)), 0.0);
					}
				`:""}

				void main() {
					vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));

					vec3 reflectedLight = ambientLightColor;

					${a.directionalLights.value.length>0?`
						for (int i = 0; i < ${a.directionalLights.value.length}; i++) {
							reflectedLight += saturate(dot(normal, directionalLights[i].direction)) * directionalLights[i].color;
						}
					`:""}

					${a.pointLights.value.length>0?`
						for (int i = 0; i < ${a.pointLights.value.length}; i++) {
							reflectedLight += saturate(dot(
								normal,
								normalize(spotLights[i].position + vViewPosition)
							)) * pointLights[i].color;
						}
					`:""}

					${a.spotLights.value.length>0?`
						vec3 direction;

						for (int i = 0; i < ${a.spotLights.value.length}; i++) {
							direction = normalize(spotLights[i].position + vViewPosition);

							reflectedLight += saturate(dot(normal, direction))
							* spotLights[i].color
							* max(
								smoothstep(
									spotLights[i].coneCos,
									spotLights[i].coneCos,
									dot(direction, spotLights[i].direction)
								),
								0.0
							);
						}
					`:""}

					pc_fragColor = vec4(
						reflectedLight * vec3(${i[0]}, ${i[1]}, ${i[2]}),
						${r}
					);
				}
			`}));if(d.frustumCulled=!1,t.showEdges===!1)return d;const p=new tn;p.add(d);const h=new pn;switch(s){case"tetrahedron":{const l=.6123*n;h.setAttribute("position",new Pe(new Float32Array([-l,l,-l,l,l,l,l,-l,-l,l,l,l,l,l,l,-l,-l,l,l,-l,-l,-l,-l,l,-l,-l,l,-l,l,-l,-l,l,-l,l,-l,-l]),3));break}case"octahedron":{h.setAttribute("position",new Pe(new Float32Array([n,0,0,0,0,n,n,0,0,0,-n,0,0,n,0,n,0,0,n,0,0,0,0,-n,0,n,0,0,0,-n,0,0,-n,0,-n,0,-n,0,0,0,0,-n,0,-n,0,0,0,n,-n,0,0,0,-n,0,0,0,n,0,n,0,0,n,0,-n,0,0,-n,0,0,0,0,n]),3));break}case"dodecahedron":{const l=.3784*n,c=.6123*n,m=.9908*n;h.setAttribute("position",new Pe(new Float32Array([l,m,0,c,c,c,c,c,-c,m,0,-l,0,l,-m,0,-l,-m,-m,0,-l,-c,-c,-c,0,l,-m,-c,c,-c,c,c,-c,0,l,-m,-l,m,0,l,m,0,l,m,0,c,c,-c,-m,0,-l,-m,0,l,-c,c,-c,-m,0,-l,-c,c,c,-l,m,0,-l,m,0,-c,c,-c,-m,0,l,-c,-c,c,0,l,m,-c,c,c,-c,c,c,-m,0,l,-l,-m,0,-c,-c,-c,-c,-c,-c,0,-l,-m,0,-l,-m,c,-c,-c,0,l,m,0,-l,m,m,0,l,c,c,c,c,c,c,0,l,m,m,0,l,c,-c,c,l,-m,0,c,-c,-c,c,-c,-c,m,0,-l,m,0,-l,m,0,l,-l,-m,0,l,-m,0,-c,-c,c,-l,-m,0,l,-m,0,c,-c,c,c,-c,c,0,-l,m,0,-l,m,-c,-c,c]),3));break}case"icosahedron":{const l=.5576*n,c=.9022*n;h.setAttribute("position",new Pe(new Float32Array([-l,c,0,0,l,c,-l,c,0,l,c,0,-l,c,0,0,l,-c,-c,0,l,-l,c,0,-l,c,0,-c,0,-l,l,c,0,0,l,c,0,l,c,-c,0,l,-c,0,l,-c,0,-l,-c,0,-l,0,l,-c,0,l,-c,l,c,0,l,-c,0,0,-l,c,l,-c,0,-l,-c,0,l,-c,0,0,-l,-c,c,0,l,l,-c,0,l,-c,0,c,0,-l,c,0,l,0,l,c,0,l,c,0,-l,c,0,-l,c,c,0,l,0,-l,c,-c,0,l,-c,0,l,-l,-c,0,-l,-c,0,0,-l,c,-l,-c,0,-c,0,-l,-c,0,-l,0,-l,-c,0,-l,-c,-l,-c,0,0,-l,-c,0,l,-c,0,l,-c,c,0,-l,c,0,-l,0,-l,-c,c,0,-l,l,c,0,l,c,0,c,0,l,c,0,l,c,0,-l]),3));break}}h.instanceCount=e.length,h.setAttribute("polyhedronCenter",new Ft(u,3)),t.color??=[0,0,0];const g=new Oi(h,new Lt({glslVersion:At,vertexShader:`
				in vec3 position;
				in vec3 polyhedronCenter;

				uniform mat4 projectionMatrix;
				uniform mat4 modelViewMatrix;

				void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position + polyhedronCenter, 1);
				}
			`,fragmentShader:`
				out lowp vec4 pc_fragColor;

				void main() {
					pc_fragColor = vec4(
						${t.color[0]},
						${t.color[1]},
						${t.color[2]},
						1
					);
				}
			`}));return g.frustumCulled=!1,p.add(g),p}var uf={arrow:Bh,cone:Oh,cuboid:Gh,cylinder:zh,line:Vh,point:Hh,polygon:ef,sphere:sf,text:af,tube:lf,uniformPolyhedron:cf};function hf(){return{ambientLightColor:{value:[0,0,0]},directionalLights:{value:[]},pointLights:{value:[]},spotLights:{value:[]},viewportSize:{value:[0,0]}}}function ff(i){const e=getComputedStyle(i);i.style.display="block",(!e.width||e.width==="0px")&&(i.style.width="65vw"),e.maxWidth||(i.style.maxWidth="400px"),(!e.height||e.height==="0px")&&(i.style.height="65vw"),e.maxHeight||(i.style.maxHeight="400px"),e.paddingTop||(i.style.paddingTop="5px"),e.paddingBottom||(i.style.paddingBottom="5px"),e.position||(i.style.position="relative"),e.cursor||(i.style.cursor="pointer")}function va(i){const{width:e,height:t}=getComputedStyle(i);return{width:parseFloat(e)||0,height:parseFloat(t)||0}}function Sa(i,{axes:e={},autoRescale:t=!0,extent:n,elements:r=[],lighting:s=[],viewpoint:a=[1.3,-2.4,2]}){e.hasaxes??=!1,n??=Uh(r);let o,f,u,d,p,h=!1,g,l,c,m,_;const M=new Int16Array(2);ff(i);const b=i.style.cursor,y=new P(.5*(n.xmin+n.xmax),.5*(n.ymin+n.ymax),.5*(n.zmin+n.zmax)),L=new P(...a).multiplyScalar(Math.max(n.xmax-n.xmin,n.ymax-n.ymin,n.zmax-n.zmin)).sub(y),T=L.length();g=Math.acos(L.z/T),c=Math.atan2(L.y,L.x);const C=new Ya,v=new Gt(35,1,.1*T,1e3*T);function A(){v.position.set(T*Math.sin(g)*Math.cos(c),T*Math.sin(g)*Math.sin(c),T*Math.cos(g)).add(y),v.lookAt(y)}A(),v.up.set(0,0,1),C.add(v);const U=hf(),w=va(i);U.viewportSize.value=[w.width,w.height],s.forEach(Z=>Nh[Z.type](Z,U,n));const z=Wr([.4,.4,.4],1),q=new Oi(new rt().setAttribute("position",new Pe(new Float32Array([n.xmin,n.ymax,n.zmin,n.xmin,n.ymax,n.zmax,n.xmax,n.ymax,n.zmax,n.xmax,n.ymax,n.zmin,n.xmin,n.ymin,n.zmax,n.xmin,n.ymin,n.zmin,n.xmax,n.ymin,n.zmin,n.xmax,n.ymin,n.zmax,n.xmin,n.ymax,n.zmax,n.xmin,n.ymin,n.zmax,n.xmax,n.ymax,n.zmax,n.xmin,n.ymax,n.zmax,n.xmin,n.ymin,n.zmax,n.xmax,n.ymin,n.zmax,n.xmax,n.ymin,n.zmax,n.xmax,n.ymax,n.zmax,n.xmax,n.ymax,n.zmin,n.xmax,n.ymin,n.zmin,n.xmin,n.ymax,n.zmin,n.xmax,n.ymax,n.zmin,n.xmax,n.ymin,n.zmin,n.xmin,n.ymin,n.zmin,n.xmin,n.ymin,n.zmin,n.xmin,n.ymax,n.zmin]),3)),z);C.add(q),e.hasaxes instanceof Array?p=e.hasaxes:p=[e.hasaxes,e.hasaxes,e.hasaxes];const k=new Array(3),F=new Array(3);for(let Z=0;Z<3;Z++)p[Z]&&(k[Z]=new Oi(new rt().setAttribute("position",new Pe(new Float32Array(6*e.ticks[Z][0].length),3)),z),C.add(k[Z]),F[Z]=new Oi(new rt().setAttribute("position",new Pe(new Float32Array(6*e.ticks[Z][1].length),3)),z),C.add(F[Z]));Fh(p,e,k,F,q.geometry.attributes.position.array,T,n);const B=new Array(3);for(let Z=0;Z<3;Z++)if(p[Z]){B[Z]=new Array(e.ticks[Z][0].length);for(let he=0;he<B[Z].length;he++){let W="black";Z<(e.ticks_style?.length??0)&&(W=`rgb(
						${e.ticks_style[Z][0]*255},
						${e.ticks_style[Z][1]*255},
						${e.ticks_style[Z][2]*255}
					)`),B[Z][he]=document.createElement("div"),B[Z][he].innerHTML=e.ticks[Z][2][he].startsWith("0.")?e.ticks[Z][2][he].replace("0.","."):e.ticks[Z][2][he],e.ticks[Z][0][he]>=0?B[Z][he].style.paddingLeft="0.5em":B[Z][he].style.paddingLeft="0px",B[Z][he].style.position="absolute",B[Z][he].style.fontSize="0.8em",B[Z][he].style.color=W,i.appendChild(B[Z][he])}}r.forEach(Z=>{const he=uf[Z.type](Z,U,n,i);he&&C.add(he)});const V=new Lh({antialias:!0,alpha:!0}),j=V.domElement;V.setSize(w.width,w.height),V.setPixelRatio(window.devicePixelRatio),j.style.width="100%",j.style.height="100%",i.appendChild(j);function ee(){U.pointLights.value.forEach(Z=>{Z.position=Z.basePosition.clone().applyMatrix4(v.matrixWorldInverse)}),U.spotLights.value.forEach(Z=>{Z.direction=Z.baseDirection.clone().transformDirection(v.matrixWorldInverse),Z.position=Z.basePosition.clone().applyMatrix4(v.matrixWorldInverse)}),V.render(C,v)}function ce(){v.updateMatrixWorld();const Z=new P;let he=0;for(let W=0;W<8;W++)Z.set(q.geometry.attributes.position.array[W*3],q.geometry.attributes.position.array[W*3+1],q.geometry.attributes.position.array[W*3+2]).applyMatrix4(v.matrixWorldInverse),he=Math.max(he,114.59*Math.abs(Math.atan(Z.y/Z.z)));v.fov=he+5,v.updateProjectionMatrix()}function Se(Z,he){Z.preventDefault(),h=!0,f=!1,o=!1,l=g,m=c,M[0]=he?Z.touches[0].clientX:Z.clientX,M[1]=he?Z.touches[0].clientY:Z.clientY,u=y.clone()}function Ee(Z,he){if(Z.preventDefault(),!h)return;const W=he?Z.touches[0].clientX:Z.clientX,se=he?Z.touches[0].clientY:Z.clientY;if(Ki(p,B,k,v,i),Z.shiftKey){f||(f=!0,M[0]=W,M[1]=se,t=!1,i.style.cursor="move");const te=new P(-T*Math.cos(g)*Math.sin(c),T*Math.cos(g)*Math.cos(c),0).normalize(),Ae=new P().subVectors(y,v.position).normalize().cross(te),{width:Ce}=getComputedStyle(i);y.x=u.x+T/parseInt(Ce)*(te.x*(M[0]-W)+Ae.x*(M[1]-se)),y.y=u.y+T/parseInt(Ce)*(te.y*(M[0]-W)+Ae.y*(M[1]-se)),y.z=u.z+T/parseInt(Ce)*(Ae.z*(M[1]-se)),A()}else if(Z.ctrlKey||he&&Z.touches.length===2){o||(o=!0,d=v.fov,M[0]=W,M[1]=se,t=!1,i.style.cursor="crosshair",he&&(_=Math.hypot(W-Z.touches[1].clientX,se-Z.touches[1].clientY)));let te=d;he?te-=(Math.hypot(W-Z.touches[1].clientX,se-Z.touches[1].clientY)-_)/25:te+=20*Math.atan((se-M[1])/50),v.fov=Math.max(1,Math.min(150,te)),v.updateProjectionMatrix()}else{(o||f)&&(M[0]=W,M[1]=se,f=!1,o=!1),i.style.cursor="grabbing";const{width:te,height:Ae}=getComputedStyle(i);c=m+2*Math.PI*(M[0]-Z.clientX)/parseInt(te),g=l+2*Math.PI*(M[1]-Z.clientY)/parseInt(Ae),g=fa(g,1e-12,Math.PI-1e-12),A()}ee()}function Ge(Z){Z.preventDefault(),h=!1,i.style.cursor=b,t&&(ce(),Ki(p,B,k,v,i),ee())}i.addEventListener("mousemove",Z=>Ee(Z,!1)),i.addEventListener("touchmove",Z=>Ee(Z,!0)),i.addEventListener("mousedown",Z=>Se(Z,!1)),i.addEventListener("touchstart",Z=>Se(Z,!0)),i.addEventListener("mouseup",Ge),i.addEventListener("touchend",Ge),new ResizeObserver(()=>{const{width:Z,height:he}=va(i);U.viewportSize.value=[Z,he],V.setSize(Z,he),ee(),Ki(p,B,k,v,i)}).observe(i),A(),ce(),ee(),Ki(p,B,k,v,i)}function df(i,e,t,n){if(t??=400,n??=.65,e.protocol){const r=e.protocol.match(/\d/g);if(parseInt(r[0])!==1){const s=document.createElement("p");s.style.color="yellow",s.innerText=`The major revision version of mathics-threejs-backend is 1, but it was expected to be ${r[0]}. Trying to draw the graphics.`,i.appendChild(s)}else if(parseInt(r[1])>3){const s=document.createElement("p");s.style.color="yellow",s.innerText=`The minor revision version of mathics-threejs-backend is 3, but it was expected to be at least ${r[1]}. Trying to draw the graphics.`,i.appendChild(s)}}return e.elements?.forEach(r=>{r.faceColor&&(r.color=r.faceColor),r.color=r.color.slice(0,3)}),e.lighting?.forEach(r=>{r.position&&(r.coords=[r.position]),r.type=r.type.toLowerCase()}),i.style.maxWidth=t+"px",i.style.width=100*n+"vw",i.style.maxHeight=t+"px",i.style.height=100*n+"vw",Sa(i,e)}return window.drawGraphics3d=df,Sa})();
