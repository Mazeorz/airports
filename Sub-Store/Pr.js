function operator(proxies) {
    const counter = {};
    return proxies.map(p => {
      if (!counter[p.name]) counter[p.name] = 0;
      p.name = p.name + (‘00’++counter[p.name]).slice(2).toString() + " | NF";
      return p;
    });
}
