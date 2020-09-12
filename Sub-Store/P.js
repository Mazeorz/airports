function operator(proxies) {
    const counter = {};
    return proxies.map(p => {
        if (counter[p.name]){
            counter[p.name] = 0; 
            return p;
            } else {
            p.name = p.name + (++counter[p.name]).toString() + " | NF";
            }
    });
}
