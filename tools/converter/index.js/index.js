var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// use ecmascript import syntax:
// import the index.js, like you would do in a js file.
// The typescript compiler and language server will figure out
// that there is a index.d.ts file it can use
import { downloadZip } from "./node_modules/client-zip/index.js";
// TODO: 
// - compile everything to a single js file with all the modules
// (browserify ?, tsify ?)
// - add an index.d.ts file with types
let button = document.getElementById("button");
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
// import/export fonctions ?
function load_wasm() {
    return __awaiter(this, void 0, void 0, function* () {
        let wasm = yield WebAssembly.instantiateStreaming(fetch('./converter.wasm'), {
            wasi_snapshot_preview1: {
                proc_exit: () => alert("exit"),
                //fd_write: (x) => console.log(x),
                fd_close: () => { },
                fd_seek: () => { },
            }
        });
        Module = wasm.instance.exports;
        buffer = Module.memory.buffer;
    });
}
load_wasm();
button.onclick = () => file_input.click();
conv.onclick = convert_and_zip;
file_input.addEventListener('change', read_all_images);
function test_image() {
    // render the first image until user is happy
    //let test_image_data = file_data[0].data;
    //let raw_data = new Uint8Array(test_image_data);
    let result = convert_image(file_data[file_data.length - 1]);
    image = new Image();
    image.src = window.URL.createObjectURL(result);
    image.onload = function () {
        ctx.clearRect(0, 0, 1000, 1000);
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
            Setter.raw(result, adress);
            file_data.push({
                name: file.name,
                type: file.type,
                adress: adress,
                size: result.length,
                compressed: Module.malloc(result.length),
            });
            // everything is red
            if (file_data.length == file_input.files.length) {
                console.log("reading done !");
                console.log(file_data);
                conv.style.visibility = "visible";
                quality.style.visibility = "visible";
                quality.onchange = () => test_image();
                test_image();
            }
        });
        converter.readAsArrayBuffer(file);
    }
}
function convert_image(f) {
    let q = (quality.value) / 200.0;
    console.log(q);
    let new_size = Module.convert_file(f.adress, f.size, f.compressed, q);
    console.log(f.adress, f.size);
    console.log(`new size: ${new_size}`);
    return new File([new Uint8Array(buffer).slice(f.compressed, f.compressed + new_size)], f.name + ".jpg");
}
function convert_and_zip() {
    return __awaiter(this, void 0, void 0, function* () {
        let n_files = file_data.length;
        let image_files = [];
        console.log(`there are ${n_files} files`);
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
