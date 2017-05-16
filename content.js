function nativeSelector() {
    var elements = document.querySelectorAll("body, body *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('not','need');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('relationship','chocolate chip');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('career','cuddle');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('work','twerk');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('partner','problem');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('romantic','probiotic');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('money','horny');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('progress','promise');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('children','chicken');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('home','drone');
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('love','burp');
}