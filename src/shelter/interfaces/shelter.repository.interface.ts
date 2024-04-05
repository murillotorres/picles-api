import { Shelter } from "../shcemas/shelter.schemas";

export default interface IShelterRepository {
    get(): Promise<Shelter>;
}