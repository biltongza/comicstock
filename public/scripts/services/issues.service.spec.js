describe('Issues Service', function () {

  var issuesService, $httpBackend;

  var testData = [
    {
      "id": 0,
      "title": "string",
      "description": "string",
      "seriesNumber": 0,
      "publicationDate": "2017-06-29T12:59:00.970Z",
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

    {
      "id": 1,
      "title": "string",
      "description": "string",
      "seriesNumber": 0,
      "publicationDate": "2017-06-29T12:59:00.970Z",
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
    }

  ];

  beforeEach(function () {
    module('comicStock.services');

    inject(function (_$httpBackend_, _Issues_) {

      $httpBackend = _$httpBackend_;
      issuesService = _Issues_;
    });
    jasmine.addCustomEqualityTester(angular.equals);

  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should query existing issues', function () {
    $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Issues').respond(testData);
    var issues = issuesService.query();
    expect(issues).toEqual([]);
    $httpBackend.flush();
    expect(issues).toEqual(testData);

  });

  it('should find an issue with id 1', function() {
    $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Issues/1').respond(testData[0]);
    var issue = issuesService.get({id: 1});
    expect(issue).toEqual({});
    $httpBackend.flush();
    expect(issue).toEqual(testData[0]);
  });

});