
describe('Suppliers Service', function () {
  var $httpBackend, suppliersService;

  var testData = [
    {
      "id": 15,
      "name": "Bartanaquazz International ",
      "city": "Montgomery",
      "reference": "JHMIYDGF9EE0F42"
    },
    {
      "id": 21,
      "name": "Cipjubicor Holdings ",
      "city": "Stockton",
      "reference": "RGEILW3BN72K7P4"
    },
    {
      "id": 2,
      "name": "Cipquestollor WorldWide ",
      "city": "Fresno",
      "reference": "IOYV264X9WTM2P9"
    },
    {
      "id": 14,
      "name": "Ciptanaquover  Group",
      "city": "Rochester",
      "reference": "034NZB8KTDG0NMN"
    },
    {
      "id": 12,
      "name": "Frowerar Holdings Company",
      "city": "Arlington",
      "reference": "EMB02U4NKD6C471"
    },
    {
      "id": 18,
      "name": "Hapdimor WorldWide ",
      "city": "Garland",
      "reference": "BVGQ9L456XK1MSW"
    }];

  beforeEach(function () {
    module('comicStock.services');

    inject(function (_$httpBackend_, _Suppliers_) {
      $httpBackend = _$httpBackend_;
      suppliersService = _Suppliers_;
    });
    jasmine.addCustomEqualityTester(angular.equals);
  });


  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should query existing suppliers', function () {
    $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Suppliers').respond(testData);
    var suppliers = suppliersService.query();
    expect(suppliers).toEqual([]);
    $httpBackend.flush();
    expect(suppliers).toEqual(testData);
  });

  it('should get a supplier by ID', function() {
    $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Suppliers/2').respond(testData[2]);
    var supplier = suppliersService.get({id: 2});
    expect(supplier).toEqual({});
    $httpBackend.flush();
    expect(supplier).toEqual(testData[2]);
  });

  it('should update a supplier', function() {
    $httpBackend.expectPUT('http://frontendshowcase.azurewebsites.net/api/Suppliers', testData[0]).respond(testData[0]);
    var updatedSupplier = suppliersService.update(null, testData[0]);
    expect(updatedSupplier).toEqual(testData[0]);
    $httpBackend.flush();
    expect(updatedSupplier).toEqual(testData[0]);
  });

  it('should create a new supplier', function() {
    $httpBackend.expectPOST('http://frontendshowcase.azurewebsites.net/api/Suppliers', testData[1]).respond(testData[1]);
    var createdSupplier = suppliersService.save(null, testData[1]);
    expect(createdSupplier).toEqual(testData[1]);
    $httpBackend.flush();
    expect(createdSupplier).toEqual(testData[1]);
  });

  it('should delete a supplier by specified ID', function() {
    $httpBackend.expectDELETE('http://frontendshowcase.azurewebsites.net/api/Suppliers/2').respond(204, null);
    var deletedSupplier = suppliersService.delete({id: testData[2].id});
    expect(deletedSupplier).toEqual({});
    $httpBackend.flush();
    expect(deletedSupplier).toEqual({});
  });

  it('should delete a specified supplier object', function() {
    $httpBackend.expectDELETE('http://frontendshowcase.azurewebsites.net/api/Suppliers/12').respond(204, null);
    var deletedSupplier = suppliersService.delete(null, testData[4]);
    expect(deletedSupplier).toEqual(testData[4]);
    $httpBackend.flush();
    expect(deletedSupplier).toEqual(testData[4]);
  });



});
