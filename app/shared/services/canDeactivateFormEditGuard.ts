import { PatientEditInfoComponent } from './../../patients/patientInfo/patientInfoEdit.component';
import { PatientDiagnosisDetailsComponent } from './../../patients/patientInfo/patient.diagnosisDetails.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";

@Injectable()
export  class CanDeactivateDiagnosisFormGuard implements CanDeactivate<PatientDiagnosisDetailsComponent> {

    canDeactivate(component: PatientDiagnosisDetailsComponent): boolean {
        if (component.formGroup.dirty) {
            let patientName = component.patient.Name;
            return confirm(`Navigate away and lose all changes to ${patientName}?`);
        }
        return true;
    }
}