export class Gift {
    id: number;
    nom: string;
    description: string;
    stock: number;
    constructor(id: number, nom: string, description: string, stock: number) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.stock = stock
    }
}