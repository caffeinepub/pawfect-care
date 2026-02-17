import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Pet {
    id: bigint;
    age: bigint;
    name: string;
    petType: string;
}
export interface VaccinationEvent {
    vaccinationType: string;
    date: string;
    petId: bigint;
}
export interface Appointment {
    date: string;
    petId: bigint;
    purpose: string;
}
export interface Medication {
    endDate?: string;
    dosage: string;
    name: string;
    frequency: string;
    startDate: string;
}
export interface backendInterface {
    addAppointment(petId: bigint, date: string, purpose: string): Promise<void>;
    addMedication(petId: bigint, name: string, dosage: string, frequency: string, startDate: string, endDate: string | null): Promise<void>;
    addPet(name: string, age: bigint, petType: string): Promise<bigint>;
    addVaccinationEvent(petId: bigint, vaccinationType: string, date: string): Promise<void>;
    getAllPets(): Promise<Array<Pet>>;
    getAppointmentsByPet(petId: bigint): Promise<Array<Appointment>>;
    getMedicationsByPet(petId: bigint): Promise<Array<Medication>>;
    getPet(id: bigint): Promise<Pet | null>;
    getVaccinationsByPet(petId: bigint): Promise<Array<VaccinationEvent>>;
}
