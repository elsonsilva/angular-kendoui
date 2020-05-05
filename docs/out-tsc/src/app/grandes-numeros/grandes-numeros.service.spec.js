"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var grandes_numeros_service_1 = require("./grandes-numeros.service");
describe('GrandesNumerosService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [grandes_numeros_service_1.GrandesNumerosService]
        });
    });
    it('should be created', testing_1.inject([grandes_numeros_service_1.GrandesNumerosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=grandes-numeros.service.spec.js.map