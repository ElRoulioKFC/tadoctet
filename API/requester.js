class requester {
    static data = {
        pId: 0 //TODO remove
    };

    static ADRESSE = 'http://192.168.1.15:4000/';

    static addIDS(params) {
        params.partieId = requester.data.pId;
        params.playerId = requester.data.jId;
    }

    static mkOptions( body ) {
        requester.addIDS( body );
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( body ),
        };
    }

    static async request(url, params) {
        let req = requester.mkOptions( params );
        console.log(req);
        console.log(url);

        let result = await fetch(`${requester.ADRESSE}${url}`, req)
            .then(response => response.json())
            .catch(e => {throw e; });

        console.log(result);
        return result;
    }

    static async getBaseRessources() {
        let res = await requester.request("getBaseRessources", {});
        return res;
    }

    static async joinPartie(params) {
        console.log("joinPartie");
        let res = await requester.request("joinPartie", params);
        requester.data.jId = res.playerId;
        return res;
    }

    static async getGrille(params) {
        console.log("getGrille");
        return (await requester.request("getGrille", params)).grille;
    }
}

export default requester;
