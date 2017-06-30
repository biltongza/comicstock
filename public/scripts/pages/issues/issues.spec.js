describe('issues component', function () {
  describe('controller', function () {
    var ctrl, $httpBackend, $q, $state;

    var testData = [
      {
        "id": 58663,
        "title": "Captain America: Sam Wilson (2015) #7 (Tbd Artist Cap of All Eras Variant)",
        "description": null,
        "seriesNumber": -1,
        "publicationDate": "2016-01-15T19:22:34Z",
        "publisherId": 0,
        "publisher": "Marvel",
        "creators": [],
        "stock": [],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg",
          "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        },
        "images": []
      },
      {
        "id": 58684,
        "title": "Daredevil (2015) #5 (Tbd Artist Wop Variant)",
        "description": null,
        "seriesNumber": -1,
        "publicationDate": "2016-01-15T19:22:34Z",
        "publisherId": 0,
        "publisher": "Marvel",
        "creators": [],
        "stock": [],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg",
          "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        },
        "images": []
      },
      {
        "id": 58758,
        "title": "Moon Girl and Devil Dinosaur (2015) #5 (Guerra Wop Variant)",
        "description": null,
        "seriesNumber": -1,
        "publicationDate": "2016-01-15T19:22:35Z",
        "publisherId": 0,
        "publisher": "Marvel",
        "creators": [],
        "stock": [],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg",
          "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/56707df23de44",
            "extension": "jpg",
            "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/56707df23de44.jpg"
          }
        ]
      },
      {
        "id": 56383,
        "title": "A-Force Presents (Trade Paperback)",
        "description": null,
        "seriesNumber": -1,
        "publicationDate": "2016-01-19T14:04:21Z",
        "publisherId": 0,
        "publisher": "Marvel",
        "creators": [],
        "stock": [],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg",
          "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        },
        "images": []
      },
      {
        "id": 57360,
        "title": "X-Men '92 (2016) #1 (Richardson Hip-&#8203;Hop Variant)",
        "description": null,
        "seriesNumber": -1,
        "publicationDate": "2016-01-15T19:22:33Z",
        "publisherId": 0,
        "publisher": "Marvel",
        "creators": [],
        "stock": [],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg",
          "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/560580b72161c",
            "extension": "jpg",
            "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/560580b72161c.jpg"
          }
        ]
      },
      {
        "id": 54781,
        "title": "All-New, All-Different Marvel Universe (2015) #1",
        "description": null,
        "seriesNumber": -1,
        "publicationDate": "2016-01-15T19:22:32Z",
        "publisherId": 0,
        "publisher": "Marvel",
        "creators": [],
        "stock": [],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg",
          "pathIncludingExtension": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        },
        "images": []
      }
    ];

    var expectedResponse = [
      {
        id: 58663,
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        title: 'Captain America: Sam Wilson (2015) #7 (Tbd Artist Cap of All Eras Variant)',
        publisher: 'Marvel',
        description: null,
        seriesNumber: -1,
        publicationDate: 'Fri Jan 15 2016'
      },
      {
        id: 58684,
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        title: 'Daredevil (2015) #5 (Tbd Artist Wop Variant)',
        publisher: 'Marvel',
        description: null,
        seriesNumber: -1,
        publicationDate: 'Fri Jan 15 2016'
      },
      {
        id: 58758,
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        title: 'Moon Girl and Devil Dinosaur (2015) #5 (Guerra Wop Variant)',
        publisher: 'Marvel',
        description: null,
        seriesNumber: -1,
        publicationDate: 'Fri Jan 15 2016'
      },
      {
        id: 56383,
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        title: 'A-Force Presents (Trade Paperback)',
        publisher: 'Marvel',
        description: null,
        seriesNumber: -1,
        publicationDate: 'Tue Jan 19 2016'
      },
      {
        id: 57360,
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        title: "X-Men '92 (2016) #1 (Richardson Hip-&#8203;Hop Variant)",
        publisher: 'Marvel',
        description: null,
        seriesNumber: -1,
        publicationDate: 'Fri Jan 15 2016'
      },
      {
        id: 54781,
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
        title: 'All-New, All-Different Marvel Universe (2015) #1',
        publisher: 'Marvel', description: null, seriesNumber: -1,
        publicationDate: 'Fri Jan 15 2016'
      }
    ];

    function ExpectGet() {
      $httpBackend.expectGET('http://frontendshowcase.azurewebsites.net/api/Issues').respond(testData);
    }

    beforeEach(function () {
      module('comicStock.pages');
      inject(function ($componentController, _$httpBackend_, _$q_, _$state_) {
        ctrl = $componentController('issueGrid');
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        $state = _$state_;
      });
      jasmine.addCustomEqualityTester(angular.equals);
      spyOn($state, 'go');
      ExpectGet();
    });



    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should load issues on load and map them to human readable format', function () {
      expect(ctrl.items).toEqual([]);
      $httpBackend.flush();
      expect(ctrl.items).toEqual(expectedResponse);
    });
    it('should update its loading status accordingly', function() {
      expect(ctrl.loading).toBeTruthy();
      $httpBackend.flush();
      expect(ctrl.loading).toBeFalsy();
    });
    it('should have a model', function() {
      expect(ctrl.model).toBeDefined();
      $httpBackend.flush();
    });

    it('should have an onItemClick defined', function() {
      expect(ctrl.onItemClick).toBeDefined();
      $httpBackend.flush();
    })

    it('should transition state when onItemClick is called', function() {
      expect($state.go).toHaveBeenCalledTimes(0);
      ctrl.onItemClick(expectedResponse[0]);
      expect($state.go).toHaveBeenCalled();
      $httpBackend.flush();
    });

  })

});