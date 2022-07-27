import { Gift } from "./Gift";

export class Selection {
    id: number;
    title: number;
    cadeaux: Gift[];
    constructor(id: number, title: number, cadeaux: Gift[]) {
        this.id = id;
        this.title = title;
        this.cadeaux = cadeaux;
    }
}