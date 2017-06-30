
describe('Orders For Supplier', function () {
  var ordersForSupplierService, $httpBackend;

  var supplierId = 1;
  var issueId = 1;
  var testData = {
    veryFine: 1,
    fine: 0,
    good: 0,
    poor: 0
  }
  var expectedResponse = {
    shipmentReference: "81275b8f-8c4e-45ef-b931-84586d8db732",
    shipmentDate: "2017-06-30T09:10:50.499Z"
  };

  beforeEach(function () {
    module('comicStock.services');

    inject(function (_OrdersForSupplier_, _$httpBackend_) {
      ordersForSupplierService = _OrdersForSupplier_;
      $httpBackend = _$httpBackend_;
    });

    jasmine.addCustomEqualityTester(angular.equals);
  });


  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should place an order for a given supplier and issue', function() {
    $httpBackend.expectPOST('http://frontendshowcase.azurewebsites.net/api/Suppliers/1/issues/1/order', testData).respond(expectedResponse);
    var res = ordersForSupplierService.order({supplierId: supplierId, issueId: issueId}, testData);
    expect(res).toEqual(testData);
    $httpBackend.flush();
    expect(res).toEqual(expectedResponse);
  });

});
