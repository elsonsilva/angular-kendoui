"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alternador_service_1 = require("./alternador.service");
describe('AlternadorService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [alternador_service_1.AlternadorService]
        });
    });
    it('should be created', testing_1.inject([alternador_service_1.AlternadorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=alternador.service.spec.js.map