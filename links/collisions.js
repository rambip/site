
let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function getObject(idx) { return heap[idx]; }
/**
*/
export class QuadTree {

    static __wrap(ptr) {
        const obj = Object.create(QuadTree.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_quadtree_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    */
    constructor(width, height) {
        var ret = wasm.quadtree_new(width, height);
        return QuadTree.__wrap(ret);
    }
    /**
    * @param {CanvasRenderingContext2D} ctx
    */
    draw(ctx) {
        try {
            wasm.quadtree_draw(this.ptr, addBorrowedObject(ctx));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @returns {number}
    */
    size() {
        var ret = wasm.quadtree_size(this.ptr);
        return ret >>> 0;
    }
    /**
    */
    clear() {
        wasm.quadtree_clear(this.ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} id
    */
    insert(x, y, id) {
        wasm.quadtree_insert(this.ptr, x, y, id);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} w
    * @param {number} h
    * @returns {Uint32Array}
    */
    find_in_range(x, y, w, h) {
        try {
            const retptr = wasm.__wbindgen_export_0.value - 16;
            wasm.__wbindgen_export_0.value = retptr;
            wasm.quadtree_find_in_range(retptr, this.ptr, x, y, w, h);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        } finally {
            wasm.__wbindgen_export_0.value += 16;
        }
    }
}
/**
*/
export class Rect {

    static __wrap(ptr) {
        const obj = Object.create(Rect.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_rect_free(ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} w
    * @param {number} h
    */
    constructor(x, y, w, h) {
        var ret = wasm.rect_new(x, y, w, h);
        return Rect.__wrap(ret);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} w
    * @param {number} h
    * @returns {boolean}
    */
    intersect_rect(x, y, w, h) {
        var ret = wasm.rect_intersect_rect(this.ptr, x, y, w, h);
        return ret !== 0;
    }
    /**
    * @param {number} x
    * @param {number} y
    * @returns {boolean}
    */
    point_in(x, y) {
        var ret = wasm.rect_point_in(this.ptr, x, y);
        return ret !== 0;
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {

        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = import.meta.url.replace(/\.js$/, '_bg.wasm');
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_strokeRect_21ddc8170b3ea529 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).strokeRect(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

export default init;

