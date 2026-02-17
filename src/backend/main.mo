import List "mo:core/List";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";

actor {
  var petId = 0;

  type Pet = {
    id : Nat;
    name : Text;
    age : Nat;
    petType : Text;
  };

  type VaccinationEvent = {
    petId : Nat;
    vaccinationType : Text;
    date : Text;
  };

  type Medication = {
    name : Text;
    dosage : Text;
    frequency : Text;
    startDate : Text;
    endDate : ?Text;
  };

  type Appointment = {
    petId : Nat;
    date : Text;
    purpose : Text;
  };

  let pets = List.empty<Pet>();
  let vaccinations = List.empty<VaccinationEvent>();
  let medications = List.empty<(Nat, Medication)>();
  let appointments = List.empty<Appointment>();

  public shared ({ caller }) func addPet(name : Text, age : Nat, petType : Text) : async Nat {
    let newPet : Pet = {
      id = petId;
      name;
      age;
      petType;
    };

    pets.add(newPet);
    petId += 1;
    newPet.id;
  };

  public shared ({ caller }) func addVaccinationEvent(petId : Nat, vaccinationType : Text, date : Text) : async () {
    let event : VaccinationEvent = {
      petId;
      vaccinationType;
      date;
    };
    vaccinations.add(event);
  };

  public shared ({ caller }) func addMedication(petId : Nat, name : Text, dosage : Text, frequency : Text, startDate : Text, endDate : ?Text) : async () {
    let medication : Medication = {
      name;
      dosage;
      frequency;
      startDate;
      endDate;
    };
    medications.add((petId, medication));
  };

  public shared ({ caller }) func addAppointment(petId : Nat, date : Text, purpose : Text) : async () {
    let appointment : Appointment = {
      petId;
      date;
      purpose;
    };
    appointments.add(appointment);
  };

  public query ({ caller }) func getPet(id : Nat) : async ?Pet {
    pets.values().find(func(pet) { pet.id == id });
  };

  public query ({ caller }) func getAllPets() : async [Pet] {
    pets.toArray();
  };

  public query ({ caller }) func getVaccinationsByPet(petId : Nat) : async [VaccinationEvent] {
    let petVaccinations = vaccinations.filter(
      func(event) {
        event.petId == petId;
      }
    );
    petVaccinations.toArray();
  };

  public query ({ caller }) func getMedicationsByPet(petId : Nat) : async [Medication] {
    let petMedications = medications.filter(
      func(entry) {
        entry.0 == petId;
      }
    );
    petMedications.map<(Nat, Medication), Medication>(
      func(entry) {
        entry.1;
      }
    ).toArray();
  };

  public query ({ caller }) func getAppointmentsByPet(petId : Nat) : async [Appointment] {
    let petAppointments = appointments.filter(
      func(appointment) {
        appointment.petId == petId;
      }
    );
    petAppointments.toArray();
  };
};
