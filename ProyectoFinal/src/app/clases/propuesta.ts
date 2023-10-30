import { Actividad } from "./actividad";

export class Propuesta {
    id: number | undefined;
    nombre: string | undefined;
    actividades: Actividad[] | undefined;
}
