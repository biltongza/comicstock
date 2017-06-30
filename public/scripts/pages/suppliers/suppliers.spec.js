
describe('Supplier component', function() {
  
  beforeEach(function() {
    module('comicStock.pages');
    module('comicStock.services');
  });

  
  describe('controller', function() {
    var $httpBackend, ctrl;

    var testData = [
        { id: 1, name: 'Supplier 1', city: 'Test City', reference: 'TEST1'},
        { id: 2, name: 'Supplier 2', city: 'Test City', reference: 'TEST2'},
        { id: 3, name: 'Supplier 3', city: 'Another City', reference: 'ANOTHERREF'}
      ];
    
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      jasmine.addCustomEqualityTester(angular.equals);
      ctrl = $componentController('supplierList');
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should create an `items` property with 3 suppliers fetched with `Suppliers` service', function() {
      $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Suppliers').respond(testData);
      expect(ctrl.items).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.items).toEqual(testData);

    });


    
  });
    
    
});
  