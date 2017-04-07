'use strict';

// Reference source - http://jsfiddle.net/rzgWr/19/

var myApp = angular.module('myApp',[]);

//---------------------------------------- HELPERS FACTORY

myApp.factory('Helpers', function() {
	return {
		uniq: function(data, key) {
			var result = [];

			for (var i = 0; i < data.length; i++) {
				var value = data[i][key];

				if (result.indexOf(value) == -1) {
					result.push(value);
				}
			}
			return result;
		},
		contains: function(data, obj) {
			for (var i = 0; i < data.length; i++) {
				if (data[i] === obj) {
					return true;
				}
			}
			return false;
		}
	};
});

//---------------------------------------- CONTROLLER

myApp.controller('MainCtrl', function($scope, Helpers) {
	$scope.useFacets = {};

	$scope.items = [
		{
			title: "Blanditiis enim cum numquam voluptas.",
			video: null,
			subtitle: null,
			thumbnail1: null,
			thumbnail2: null,
			thumbnail3: null,
			thumbnail4: null,
			thumbnail5: null,
			created: "1973-01-18T00:32:27Z",
			instruction: "Excepturi maxime occaecati ipsum voluptatibus maxime expedita cum. Iste assumenda velit illum.",
			price: "0.71",
			rating: 23355,
			view_count: 30749,
			cuisine_type: "Indian",
			duration: "short"
		},
		{
			title: "Perferendis repellendus ea impedit aperiam quae excepturi eum.",
			video: null,
			subtitle: null,
			thumbnail1: null,
			thumbnail2: null,
			thumbnail3: null,
			thumbnail4: null,
			thumbnail5: null,
			created: "1970-12-29T04:51:14Z",
			instruction: "Cupiditate enim distinctio iure eos vero dolorum veritatis sequi. Odit voluptatem eum in aut. Iure optio voluptas ab tempore quas corrupti.",
			price: "0.75",
			rating: 29230,
			view_count: 23184,
			cuisine_type: "Chinese",
			duration: "short"
		},
		{
			title: "Fugit laborum fuga ipsa velit est aperiam.",
			video: null,
			subtitle: null,
			thumbnail1: null,
			thumbnail2: null,
			thumbnail3: null,
			thumbnail4: null,
			thumbnail5: null,
			created: "1973-11-20T21:22:42Z",
			instruction: "Harum rem saepe asperiores repellendus totam eaque id magnam. Ut beatae ad nam id maiores.",
			price: "0.42",
			rating: 30588,
			view_count: 6225,
			cuisine_type: "Others",
			duration: "long"
		},
		{
			title: "A aspernatur molestias repellat illum laboriosam ex laborum quibusdam.",
			video: null,
			subtitle: null,
			thumbnail1: null,
			thumbnail2: null,
			thumbnail3: null,
			thumbnail4: null,
			thumbnail5: null,
			created: "1989-04-23T14:58:07Z",
			instruction: "Doloremque inventore possimus aut modi similique molestiae dolorum. Placeat nobis quia magnam consequatur voluptatum culpa. Laborum voluptates placeat veritatis.",
			price: "0.97",
			rating: 3876,
			view_count: 26961,
			cuisine_type: "Others",
			duration: "short"
		},

		{
			title: "A aspernatur molestias repellat illum laboriosam ex laborum quibusdam.",
			video: null,
			subtitle: null,
			thumbnail1: null,
			thumbnail2: null,
			thumbnail3: null,
			thumbnail4: null,
			thumbnail5: null,
			created: "1989-04-23T14:58:07Z",
			instruction: "Doloremque inventore possimus aut modi similique molestiae dolorum. Placeat nobis quia magnam consequatur voluptatum culpa. Laborum voluptates placeat veritatis.",
			price: "0.97",
			rating: 3876,
			view_count: 26969,
			cuisine_type: "italian",
			duration: "short"
		},
		{
			title: "A aspernatur molestias repellat illum laboriosam ex laborum quibusdam.",
			video: null,
			subtitle: null,
			thumbnail1: null,
			thumbnail2: null,
			thumbnail3: null,
			thumbnail4: null,
			thumbnail5: null,
			created: "1989-04-23T14:58:07Z",
			instruction: "Doloremque inventore possimus aut modi similique molestiae dolorum. Placeat nobis quia magnam consequatur voluptatum culpa. Laborum voluptates placeat veritatis.",
			price: "0.97",
			rating: 3876,
			view_count: 26965,
			cuisine_type: "italian",
			duration: "short"
		}





	];
	
	$scope.count = function (prop, value) {
		return function (el) {
			return el[prop] == value;
		};
	};
	
	// Sort the available facets alphabetically/numerically.
	// http://stackoverflow.com/a/18261306
	$scope.orderByValue = function(value) {
		return value;
	};
	
	/*---
		FACET MANIPULATION FUNCTIONS
			- clear facets, search
			- FacetResults constructor
	---*/

	// Reset all previously-selected facets.
	$scope.clearAllFacets = function() {
		$scope.activeFacets = [];
		$scope.useFacets = {};
	};

	// Clear search query.
	$scope.clearQuery = function() {
		$scope.query = null;
	};

	// Clear a specific facet.
	$scope.clearFacet = function(facet) {
		// Find the index of the facet so we can remove it from the active facets.
		var i = $scope.activeFacets.indexOf(facet);

		// If it exists, remove the facet from the list of active facets.
		if (i != -1) {
			$scope.activeFacets.splice(i, 1);

			// Find the corresponding facet in the filter models and turn it off.
			for (var k in $scope.useFacets) {
				if ($scope.useFacets[k]) {
					$scope.useFacets[k][facet] = false;
				}
			}
		}
	};

	// Clear any active facets when a search query is entered (or cleared).
	// Add newValue && (!!oldValue === false) to if statement to allow search query to be changed and preserve facets.
	$scope.$watch('query', function (newValue, oldValue) {
		if ((newValue !== oldValue) && $scope.activeFacets.length) {
			$scope.clearAllFacets();
		}
	});
	
	var filterAfters = [];

	// FacetResults "constructor" object.
	// http://davidwalsh.name/javascript-objects-deconstruction
	var FacetResults = {
		init: function(facetIndex, facetName) {
			this.facetIndex = facetIndex;
			this.facetName = facetName;
		},
		filterItems: function(filterAfterArray) {
			// Name the new array created after filter is run.
			var newArrayIndex = this.facetIndex;
			// Add the new array to the filterAfters array
			filterAfters[newArrayIndex] = [];

			var selected = false;

			// Iterate over previously filtered items.
			for (var n in filterAfterArray) {
				var itemObj = filterAfterArray[n],
					useFacet = $scope.useFacets[this.facetName];

				// Iterate over new facet.
				for (var facet in useFacet) {
					if (useFacet[facet]) {
						selected = true;

						// Push facet to list of active facets if doesn't already exist.
						if (!Helpers.contains($scope.activeFacets, facet)) {
							$scope.activeFacets.push(facet);
						}

						// Push item from previous filter to new array if matches new facet and unique.
						// (Using == instead of === enables matching integers to strings)
						if (itemObj[this.facetName] == facet && !Helpers.contains(filterAfters[newArrayIndex], itemObj)) {
							filterAfters[newArrayIndex].push(itemObj);
							break;
						}
					} else {
						selected = false;

						// Remove facet from list of active facets if toggled off.
						var facetIndex = $scope.activeFacets.indexOf(facet);

						if (facetIndex > -1) {
							$scope.activeFacets.splice(facetIndex, 1);
						}
					}
				}
			}

			if (!selected) {
				filterAfters[newArrayIndex] = filterAfterArray;
			}
		}
	};
	
	/*---
		SET UP FACETS
			- define facet group names
			- compile all facets that belong in each group
			- create new objects for each set of facet results
	---*/
	
	// Define the facet group names.
	// If fetching from data, this will need to be in resolve/callback.
	var facetGroupNames = ['cuisine_type', 'duration', 'studs'];
	var facetGroupNamesLen = facetGroupNames.length;
	$scope.facetGroups = [];

	// Collect all options for each facet group from items dataset.
	// The HTML template will iterate over the facetGroups array to generate filter options.
	// (Alternately, we could pre-define the facets we want to use)
	for (var i = 0; i < facetGroupNamesLen; i++) {
		var facetGroupObj = {
				name: facetGroupNames[i],
				facets: Helpers.uniq($scope.items, facetGroupNames[i])
			};

		$scope.facetGroups.push(facetGroupObj);
	}

	// Create new object for each set of facet results (ie., like "new"ing).
	var filterBy = [];

	for (var i = 0; i < facetGroupNamesLen; i++) {
		var thisName = facetGroupNames[i];

		filterBy.push(Object.create(FacetResults));
		filterBy[i].init(i, thisName);
	}

	/*---
		WATCH FACET SELECTION
			- "new" each facet results set
			- run filters
			- return final list of items after last filter is run
	---*/

	$scope.activeFacets = [];
	
	$scope.$watch('useFacets', function(newVal, oldVal) {
		// Filter each facet set.
		for (var i = 0; i < facetGroupNamesLen; i++) {
			if (i === 0) {
				filterBy[0].filterItems($scope.items);
			} else {
				filterBy[i].filterItems(filterAfters[i - 1]);
			}
		}

		// Return the final filtered list of items.
		$scope.filteredItems = filterAfters[facetGroupNamesLen - 1];

	}, true);




	$scope.mySortFunction = function(filteredItems) {
        if((isNaN(filteredItems[$scope.sortExpression]))  )
            return filteredItems[$scope.sortExpression];
        return parseInt(filteredItems[$scope.sortExpression]);
    }
});