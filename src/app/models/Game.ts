export interface IGame {
    id: number;
    name: string;
    description: string;
    dateCreation: string;
}
export class Game {
    id: number;
    nom: string;
    description: string;
    dateCreation: string;
    image: string;
    constructor(id: number, nom: string, description: string, dateCreation: string, image: string) {
        this.id = id;
        this.description = description;
        this.nom = nom;
        this.dateCreation = dateCreation;
        this.image = image;
    }
    public getId(): number { return this.id; }
    public getNom(): string { return this.nom; }
    public getDescription(): string { return this.description; }
    public getdateCreation(): string { return this.dateCreation; }
    public setId(id: number): void { this.id = id; }
    public setName(nom: string): void { this.nom = nom; }
    public setDescription(description: string): void { this.description = description; }
    public setDateCreation(dateCreation: string): void { this.dateCreation = dateCreation; }
}