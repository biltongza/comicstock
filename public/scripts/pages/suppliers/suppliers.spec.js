
describe('Supplier component', function () {

  beforeEach(function () {
    module('comicStock.pages');
    
  });

  describe('controller', function () {
    var $httpBackend, ctrl, $state, $rootScope, $templateCache, $q;

    var testData = [
      { id: 1, name: 'Supplier 1', city: 'Test City', reference: 'TEST1' },
      { id: 2, name: 'Supplier 2', city: 'Test City', reference: 'TEST2' },
      { id: 3, name: 'Supplier 3', city: 'Another City', reference: 'ANOTHERREF' }
    ];

    var testItem = {
      "id": 0,
      "name": "string",
      "city": "string",
      "reference": "string"
    };

    function ExpectGet() {
      $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Suppliers').respond(testData);
    }

    beforeEach(inject(function ($componentController, _$httpBackend_, _$state_, _$q_) {
      $httpBackend = _$httpBackend_;
      ctrl = $componentController('supplierList');
      $state = _$state_;
      $q = _$q_;
      jasmine.addCustomEqualityTester(angular.equals);
      spyOn($state, 'go');

      //every time the controller is loaded it will do a request to the API
      ExpectGet();
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create an `items` property with 3 suppliers fetched with `Suppliers` service', function () {
      expect(ctrl.items).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.items).toEqual(testData);

    });

    it('should have an add method', function () {
      expect(ctrl.add).toBeDefined();
      $httpBackend.flush();
    });
    it('should have a save method', function () {
      expect(ctrl.save).toBeDefined();
      $httpBackend.flush();
    });
    it('should have a delete method', function () {
      expect(ctrl.delete).toBeDefined();
      $httpBackend.flush();
    });
    it('should set its loading state accordingly', function () {
      expect(ctrl.loading).toBeTruthy();
      $httpBackend.flush();
      expect(ctrl.loading).toBeFalsy();
    });

    it('should have an onItemClick method', function () {
      expect(ctrl.onItemClick).toBeDefined();
      $httpBackend.flush();
    });

    it('should have a model defined', function () {
      expect(ctrl.model).toBeDefined();
      $httpBackend.flush();
    })

    it('should call POST to the API when add is called', function () {

      $httpBackend.expectPOST('http://frontendshowcase.azurewebsites.net/api/Suppliers', testItem).respond(testItem);
      $q.resolve(ctrl.add(testItem));
      //controller refeshes items after adding, so expect a get
      ExpectGet();
      $httpBackend.flush();
    });

    it('should PUT to the API when update is called', function () {
      $httpBackend.expectPUT('http://frontendshowcase.azurewebsites.net/api/Suppliers', testItem).respond(testItem);
      $q.resolve(ctrl.save(testItem));
      ExpectGet();
      $httpBackend.flush();
    });

    it('should DELETE to the API when delete is called', function () {
      $httpBackend.expectDELETE('http://frontendshowcase.azurewebsites.net/api/Suppliers/0').respond(204, null);
      $q.resolve(ctrl.delete(testItem));
      ExpectGet();
      $httpBackend.flush();
    });
    it('should transition to the Suppliers.Supplier state when onItemClick is called', function () {
      $q.resolve(ctrl.onItemClick(testItem));
      expect($state.go).toHaveBeenCalled();
      $httpBackend.flush();
    });

  });


});
