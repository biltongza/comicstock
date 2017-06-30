describe('orders component', function () {

  describe('controller', function () {

    var ctrl, $httpBackend;


    var testData = [
      {
        "total": 0,
        "id": 0,
        "orderDate": "2017-06-30T09:10:50.388Z",
        "issue": {
          "id": 0,
          "title": "string",
          "description": "string",
          "seriesNumber": 0,
          "publicationDate": "2017-06-30T09:10:50.389Z",
          "publisherId": 0,
          "publisher": "Dc",
          "creators": [
            {
              "id": 0,
              "name": "string",
              "countryOfResidence": "string",
              "taxReferenceNumber": "string",
              "emailAddress": "string"
            }
          ],
          "stock": [
            {
              "id": 0,
              "condition": "Mint",
              "availableQuantity": 0,
              "price": 0
            }
          ],
          "thumbnail": {
            "path": "string",
            "extension": "string",
            "pathIncludingExtension": "string"
          },
          "images": [
            {
              "path": "string",
              "extension": "string",
              "pathIncludingExtension": "string"
            }
          ]
        },
        "items": [
          {
            "id": 0,
            "condition": "Mint",
            "quantity": 0,
            "price": 0
          }
        ],
        "deliveryStatus": "Cancelled",
        "shipmentReference": "string",
        "shipmentDate": "2017-06-30T09:10:50.389Z"
      },
      {
        "total": 0,
        "id": 1,
        "orderDate": "2017-06-30T09:10:50.388Z",
        "issue": {
          "id": 0,
          "title": "string",
          "description": "string",
          "seriesNumber": 0,
          "publicationDate": "2017-06-30T09:10:50.389Z",
          "publisherId": 0,
          "publisher": "Dc",
          "creators": [
            {
              "id": 0,
              "name": "string",
              "countryOfResidence": "string",
              "taxReferenceNumber": "string",
              "emailAddress": "string"
            }
          ],
          "stock": [
            {
              "id": 0,
              "condition": "Mint",
              "availableQuantity": 0,
              "price": 0
            }
          ],
          "thumbnail": {
            "path": "string",
            "extension": "string",
            "pathIncludingExtension": "string"
          },
          "images": [
            {
              "path": "string",
              "extension": "string",
              "pathIncludingExtension": "string"
            }
          ]
        },
        "items": [
          {
            "id": 0,
            "condition": "Mint",
            "quantity": 0,
            "price": 0
          }
        ],
        "deliveryStatus": "Cancelled",
        "shipmentReference": "string",
        "shipmentDate": "2017-06-30T09:10:50.389Z"
      }
    ];

    var expectedResponse = [
      {
        id: 0,
        total: 0,
        orderDate: 'Fri Jun 30 2017',
        deliveryStatus: 'Cancelled',
        shipmentReference: 'string',
        shipmentDate: 'Fri Jun 30 2017'
      },
      {
        id: 1,
        total: 0,
        orderDate: 'Fri Jun 30 2017',
        deliveryStatus: 'Cancelled',
        shipmentReference: 'string',
        shipmentDate: 'Fri Jun 30 2017'
      }
    ];

    function ExpectGet() {
      $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Orders').respond(testData);
    }

    beforeEach(function () {
      module('comicStock.pages');

      inject(function ($componentController, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        ctrl = $componentController('orderList');

      });
      jasmine.addCustomEqualityTester(angular.equals);
      ExpectGet();
    });


    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should have a model', function() {
      expect(ctrl.model).toBeDefined();
      $httpBackend.flush();
    })
    it('should update its loading status accordingly', function() {
      expect(ctrl.loading).toBeTruthy();
      $httpBackend.flush();
      expect(ctrl.loading).toBeFalsy();
    });

    it('should load all orders on load and map them to a human readable format', function () {
      expect(ctrl.items).toEqual([]);
      $httpBackend.flush();
      expect(ctrl.items).toEqual(expectedResponse);
    });

  });
});