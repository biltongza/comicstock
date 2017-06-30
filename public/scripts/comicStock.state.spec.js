
describe('Comic Stock State config', function() {
  var $state;
  
  var expectedStates = [
    '',
    'Home',
    'Issues',
    'Issues.Issue',
    'Issues.Issue.Order',
    'Suppliers',
    'Suppliers.Supplier',
    'Orders',
    'otherwise'
  ];

  beforeEach(function() {
    module('comicStock');
    module('comicStock.services');
    module('comicStock.components');

    inject(function(_$state_) {
      $state = _$state_;
    });
  });

  it('should have states configured', function() {
    var states = $state.get();
    expect(states.map(function(state){
      return state.name
    })).toEqual(expectedStates);
  });
    
});
  