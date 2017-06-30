
describe('Orders service', function () {
  var $httpBackend, ordersService;

  var testData = [
    {
      "total": 0,
      "id": 0,
      "orderDate": "2017-06-29T12:59:01.121Z",
      "issue": {
        "id": 0,
        "title": "string",
        "description": "string",
        "seriesNumber": 0,
        "publicationDate": "2017-06-29T12:59:01.121Z",
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
      "shipmentDate": "2017-06-29T12:59:01.121Z"
    },
    {
      "total": 0,
      "id": 0,
      "orderDate": "2017-06-29T12:59:01.121Z",
      "issue": {
        "id": 0,
        "title": "string",
        "description": "string",
        "seriesNumber": 0,
        "publicationDate": "2017-06-29T12:59:01.121Z",
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
      "shipmentDate": "2017-06-29T12:59:01.121Z"
    }
  ];

  beforeEach(function () {
    module('comicStock.services');

    inject(function (_$httpBackend_, _Orders_) {
      $httpBackend = _$httpBackend_;
      ordersService = _Orders_;
    });
    jasmine.addCustomEqualityTester(angular.equals);
  });


  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should query existing orders', function () {
    $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Orders').respond(testData);

    var orders = ordersService.query();
    expect(orders).toEqual([]);
    $httpBackend.flush();
    expect(orders).toEqual(testData);
  });


});
