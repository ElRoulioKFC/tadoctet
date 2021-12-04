const Map = (width, hight) => {
    let grille;
    for (let i=0; i < hight; i++) {
        for (let j=0; j < hight; j++) {
            grille[i][j] = 0;
        }
    }

    grille

    return {
        width,
        hight,
        grille
    };
};

const Base = () => {
};

const Partie = () => {
};

module.exports = {
    Map,
    Base,
    Partie
};
