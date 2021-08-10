#!/usr/bin/env node
const args = process.argv.slice(2);
console.log(args)
const morseCode = {
    1: ".____",
    2: "..___",
    3: "...__",
    4: "...._",
    5: ".....",
    6: "_....",
    7: "__...",
    8: "___..",
    9: "____.",
    0: "_____",
    a: "._",
    b: "_...",
    c: "_._.",
    d: "_..",
    e: ".",
    f: ".._.",
    g: "__.",
    h: "....",
    i: "..",
    j: ".___",
    k: "_._",
    l: "._..",
    m: "__",
    n: "_.",
    o: "___",
    p: ".__.",
    q: "__._",
    r: "._.",
    s: "...",
    t: "_",
    u: ".._",
    v: "..._",
    w: ".__",
    x: "_.._",
    y: "_.__",
    z: "__..",
    ".": "._._._",
    ",": "__..__",
    "?": "..__..",
    "'": ".____.",
    "/": "_.._.",
    "(": "_.__.",
    ")": "_.__._",
    "&": "._...",
    ":": "___...",
    ";": "_._._.",
    "=": "_..._",
    "+": "._._.",
    "-": "_...._",
    _: "..__._",
    '"': "._.._.",
    $: "..._.._",
    "!": "_._.__",
    "@": ".__._.",
  };
  const Results = (str) => {
    let text = str.toString().toLowerCase().split("");
    let result;
    if (!text.length == 0) {
      result= text.map((a) => morseCode[a]);
    } else {
      result= "enter something";
    }
    return  console.log(result);
  };
  Results(args)
  
  