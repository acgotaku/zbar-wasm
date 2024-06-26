import { ZBarOrientation, ZBarSymbolType } from './const';

export interface Point {
  x: number;
  y: number;
}

class TypePointer {
  protected ptr: number;
  protected ptr32: number;
  protected buf: ArrayBuffer;
  protected HEAP8: Int8Array;
  protected HEAP32: Int32Array;
  protected HEAPU32: Uint32Array;

  constructor(ptr: number, buf: ArrayBuffer) {
    this.ptr = ptr;
    this.ptr32 = ptr >> 2;
    this.buf = buf;
    this.HEAP8 = new Int8Array(buf);
    this.HEAPU32 = new Uint32Array(buf);
    this.HEAP32 = new Int32Array(buf);
  }
}

class SymbolPtr extends TypePointer {
  get type(): ZBarSymbolType {
    return this.HEAPU32[this.ptr32] as ZBarSymbolType;
  }

  get data(): Int8Array {
    const len = this.HEAPU32[this.ptr32 + 4],
      ptr = this.HEAPU32[this.ptr32 + 5];
    return Int8Array.from(this.HEAP8.subarray(ptr, ptr + len));
  }

  get points(): Array<Point> {
    const len = this.HEAPU32[this.ptr32 + 7],
      ptr = this.HEAPU32[this.ptr32 + 8],
      ptr32 = ptr >> 2,
      res: Point[] = [];
    for (let i = 0; i < len; ++i) {
      const x = this.HEAP32[ptr32 + i * 2],
        y = this.HEAP32[ptr32 + i * 2 + 1];
      res.push({ x, y } as Point);
    }
    return res;
  }

  get orientation(): ZBarOrientation {
    return this.HEAP32[this.ptr32 + 9] as ZBarOrientation;
  }

  get next(): SymbolPtr | null {
    const ptr = this.HEAPU32[this.ptr32 + 11];
    if (!ptr) return null;
    return new SymbolPtr(ptr, this.buf);
  }

  get time(): number {
    return this.HEAPU32[this.ptr32 + 13];
  }

  get cacheCount(): number {
    return this.HEAP32[this.ptr32 + 14];
  }

  get quality(): number {
    return this.HEAP32[this.ptr32 + 15];
  }
}

class SymbolSetPtr extends TypePointer {
  get head(): SymbolPtr | null {
    const ptr = this.HEAPU32[this.ptr32 + 2];
    if (!ptr) return null;
    return new SymbolPtr(ptr, this.buf);
  }
}

export class ZBarSymbol {
  type: ZBarSymbolType;
  typeName: string;
  data: Int8Array;
  points: Array<Point>;
  orientation: ZBarOrientation;
  time: number;
  cacheCount: number;
  quality: number;
  private constructor(ptr: SymbolPtr) {
    this.type = ptr.type;
    this.typeName = Object.keys(ZBarSymbolType).find(
      key => ZBarSymbolType[key as keyof typeof ZBarSymbolType] === this.type
    ) as string;
    this.data = ptr.data;
    this.points = ptr.points;
    this.orientation = ptr.orientation;
    this.time = ptr.time;
    this.cacheCount = ptr.cacheCount;
    this.quality = ptr.quality;
  }

  static createSymbolsFromPtr(
    ptr: number,
    buf: ArrayBuffer
  ): Array<ZBarSymbol> {
    if (ptr == 0) return [];

    const set = new SymbolSetPtr(ptr, buf);
    let symbol = set.head;
    const res: ZBarSymbol[] = [];
    while (symbol !== null) {
      res.push(new ZBarSymbol(symbol));
      symbol = symbol.next;
    }
    return res;
  }

  get rawData(): string {
    return window.btoa(
      String.fromCharCode(...new Uint8Array(this.data.buffer))
    );
  }

  decode(encoding?: string) {
    const decoder = new TextDecoder(encoding);
    return decoder.decode(this.data);
  }
}
