module.exports = function check(str, bracketsConfig) {
    let cfg = bracketsConfig.map((x) => x.join(""));

    for (let i = 0; i < cfg.length; ) {
        if (str.includes(cfg[i])) {
            str = str.split(cfg[i]).join("");
            i = 0;
            continue;
        }

        i++;
    }

    return str ? false : true;
};
