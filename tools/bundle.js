'use strict';

"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,n,i){const o=Number(0xffffffffn&n),f=Number(n>>32n);this.setUint32(e+(i?0:4),o,i),this.setUint32(e+(i?4:0),f,i);}});var e=e=>new DataView(new ArrayBuffer(e)),n=e=>new Uint8Array(e.buffer||e),i=e=>Math.min(4294967295,Number(e)),o=e=>Math.min(65535,Number(e));function f(e,i,o){if(void 0===i||i instanceof Uint8Array||(i=s(i)),void 0===o||o instanceof Date||(o=new Date(o)),e instanceof File)return {i:i||s(e.name),o:o||new Date(e.lastModified),A:e.stream()};if(e instanceof Response){const n=e.headers.get("content-disposition"),f=n&&n.match(/;\s*filename\*?=["']?(.*?)["']?$/i),a=f&&f[1]||new URL(e.url).pathname.split("/").pop(),r=a&&decodeURIComponent(a);return {i:i||s(r),o:o||new Date(e.headers.get("Last-Modified")||Date.now()),A:e.body}}if(!i||0===i.length)throw new Error("The file must have a name.");if(void 0===o)o=new Date;else if(isNaN(o))throw new Error("Invalid modification date.");if("string"==typeof e)return {i,o,A:s(e)};if(e instanceof Blob)return {i,o,A:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return {i,o,A:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return {i,o,A:n(e)};if(Symbol.asyncIterator in e)return {i,o,A:a(e)};throw new TypeError("Unsupported input format.")}function a(e){const n="next"in e?e:e[Symbol.asyncIterator]();return new ReadableStream({async pull(e){let i=0;for(;e.desiredSize>i;){const o=await n.next();if(!o.value){e.close();break}{const n=r(o.value);e.enqueue(n),i+=n.byteLength;}}}})}function r(e){return "string"==typeof e?s(e):e instanceof Uint8Array?e:n(e)}function s(e){return (new TextEncoder).encode(String(e))}var A=new WebAssembly.Instance(new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBw0DAW0CAAF0AAABYwABCpUBAkkBA38DQCABIQBBACECA0AgAEEBdiAAQQFxQaCG4u1+bHMhACACQQFqIgJBCEcNAAsgAUECdCAANgIAIAFBAWoiAUGAAkcNAAsLSQEBfyABQX9zIQFBgIAEIQJBgIAEIABqIQADQCABQf8BcSACLQAAc0ECdCgCACABQQh2cyEBIAJBAWoiAiAASQ0ACyABQX9zuAs"),(e=>e.charCodeAt(0))))),{t,c,m}=A.exports;t();var d=n(m).subarray(65536);function u(e,n=0){for(const i of function*(e){for(;e.length>65536;)yield e.subarray(0,65536),e=e.subarray(65536);e.length&&(yield e);}(e))d.set(i),n=c(i.length,n);return n}function y(e,n,i=0){const o=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,f=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;n.setUint16(i,o,1),n.setUint16(i+2,f,1);}function l(i){const o=e(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768),y(i.o,o,10),o.setUint16(26,i.i.length,1),n(o)}async function*B(e){let{A:n}=e;if("then"in n&&(n=await n),n instanceof Uint8Array)yield n,e.u=u(n,0),e.l=BigInt(n.length);else {e.l=0n;const i=n.getReader();for(;;){const{value:n,done:o}=await i.read();if(o)break;e.u=u(n,e.u),e.l+=BigInt(n.length),yield n;}}}function w(o,f){const a=e(16+(f?8:0));return a.setUint32(0,1347094280),a.setUint32(4,o.u,1),f?(a.setBigUint64(8,o.l,1),a.setBigUint64(16,o.l,1)):(a.setUint32(8,i(o.l),1),a.setUint32(12,i(o.l),1)),n(a)}function b(o,f,a){const r=e(46);return r.setUint32(0,1347092738),r.setUint32(4,755182848),r.setUint16(8,2048),y(o.o,r,12),r.setUint32(16,o.u,1),r.setUint32(20,i(o.l),1),r.setUint32(24,i(o.l),1),r.setUint16(28,o.i.length,1),r.setUint16(30,a?28:0,1),r.setUint16(40,33204,1),r.setUint32(42,i(f),1),n(r)}function C(i,o){const f=e(28);return f.setUint16(0,1,1),f.setUint16(2,24,1),f.setBigUint64(4,i.l,1),f.setBigUint64(12,i.l,1),f.setBigUint64(20,o,1),n(f)}var downloadZip=r=>new Response(a(async function*(f){const a=[];let r=0n,s=0n,A=0;for await(const e of f){yield l(e),yield e.i,yield*B(e);const n=e.l>=0xffffffffn||r>=0xffffffffn;yield w(e,n),a.push(b(e,r,n)),a.push(e.i),n&&(a.push(C(e,r)),r+=8n),s++,r+=BigInt(46+e.i.length)+e.l,A||(A=n);}let d=0n;for(const e of a)yield e,d+=BigInt(e.length);if(A||r>=0xffffffffn){const i=e(76);i.setUint32(0,1347094022),i.setBigUint64(4,BigInt(44),1),i.setUint32(12,755182848),i.setBigUint64(24,s,1),i.setBigUint64(32,s,1),i.setBigUint64(40,d,1),i.setBigUint64(48,r,1),i.setUint32(56,1347094023),i.setBigUint64(64,r+d,1),i.setUint32(72,1,1),yield n(i);}const u=e(22);u.setUint32(0,1347093766),u.setUint16(8,o(s),1),u.setUint16(10,o(s),1),u.setUint32(12,i(d),1),u.setUint32(16,i(r),1),yield n(u);}(async function*(e){for await(const n of e)n instanceof File||n instanceof Response?yield f(n):yield f(n.input,n.name,n.lastModified);}(r))),{headers:{"Content-Type":"application/zip","Content-Disposition":"attachment"}});

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let button = document.getElementById("button");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let file_input = document.getElementById("file-input");
let image;
let canvas = document.getElementById("preview");
let ctx = canvas.getContext("2d");
let conv = document.getElementById("conv");
let quality = document.getElementById("quality");
let file_data = [];
let Module;
let buffer = null;
let Setter = {
    string: (ptr, str) => {
        let mem = new Uint8Array(buffer);
        mem.set(new TextEncoder().encode(str), ptr);
    },
    raw: (data, ptr) => {
        let mem = new Uint8Array(buffer);
        mem.set(data, ptr);
    },
};
function load_wasm() {
    return __awaiter(this, void 0, void 0, function* () {
        let wasm = yield WebAssembly.instantiateStreaming(fetch('./converter.wasm'), {});
        Module = wasm.instance.exports;
        buffer = Module.memory.buffer;
    });
}
load_wasm();
let current_image = 0;
button.onclick = () => { file_input.click(); document.getElementById("selection").style.display = "none"; };
previous.onclick = function () { current_image = (current_image - 1 + file_data.length) % file_data.length; request_test_image(); };
next.onclick = function () { current_image = (current_image + 1 + file_data.length) % file_data.length; request_test_image(); };
conv.onclick = convert_and_zip;
file_input.addEventListener('change', read_all_images);
quality.onchange = () => request_test_image();
function request_test_image() {
    ctx.strokeStyle = "green";
    ctx.font = "70px serif";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText(". . .", canvas.width / 4, canvas.height / 2);
    document.getElementById("value").innerText = quality.value.toString();
    document.getElementById("size").innerText = "";
    setTimeout(test_image, 30);
}
function test_image() {
    let result = convert_image(file_data[current_image]);
    document.getElementById("size").innerText = `= ${(Math.round(result.size / 1000))}K`;
    image = new Image();
    image.src = window.URL.createObjectURL(result);
    image.onload = function () {
        let aspect_ratio = image.width / image.height;
        let width = Math.min(window.innerWidth * 0.9, innerHeight * 0.7 * aspect_ratio);
        canvas.width = width;
        canvas.height = width / aspect_ratio;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
}
function read_all_images() {
    // loop through all images and read them
    for (let i = 0; i < file_input.files.length; i++) {
        let file = file_input.files[i];
        var converter = new FileReader();
        converter.addEventListener("loadend", function (e) {
            // add to list of files already red
            let result = new Uint8Array(e.target.result);
            let adress = Module.malloc(result.length);
            let compressed = Module.malloc(result.length);
            Setter.raw(result, adress);
            file_data.push({
                name: file.name,
                type: file.type,
                adress: adress,
                size: result.length,
                compressed: compressed,
            });
            // everything is red
            if (file_data.length == file_input.files.length) {
                console.log(file_data);
                conv.style.visibility = "visible";
                quality.style.visibility = "visible";
                next.style.visibility = "visible";
                previous.style.visibility = "visible";
                request_test_image();
            }
        });
        converter.readAsArrayBuffer(file);
    }
}
function convert_image(f) {
    let q = (quality.value) / 200.0;
    let new_size = Module.convert_file(f.adress, f.size, f.compressed, q);
    return new File([new Uint8Array(buffer).slice(f.compressed, f.compressed + new_size)], f.name + ".jpg");
}
function convert_and_zip() {
    return __awaiter(this, void 0, void 0, function* () {
        let n_files = file_data.length;
        let image_files = [];
        for (let i = 0; i < n_files; i++) {
            let f = file_data[i];
            let r = convert_image(f);
            image_files.push(r);
        }
        const zip = yield downloadZip(image_files).blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(zip);
        link.download = "test.zip";
        link.click();
        link.remove();
    });
}
