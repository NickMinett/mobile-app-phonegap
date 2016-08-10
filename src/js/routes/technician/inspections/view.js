angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-inspections-view-index', {
				parent: 'technician',
				url: '/inspections/:inspection',
				templateUrl: 'views/technician/inspections/view/index.html',
				controller: 'TechnicianInspectionsViewControllerIndex',
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}]
				}
			})
			.state('technician-inspections-view-majorAssembly', {
				parent: 'technician',
				url: '/inspections/:inspection/:majorAssembly',
				templateUrl: 'views/technician/inspections/view/majorAssembly.html',
				controller: 'TechnicianInspectionsViewControllerMajorAssembly',
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}]
				}
			})
			.state('technician-inspections-view-subAssembly', {
				parent: 'technician',
				url: '/inspections/:inspection/:majorAssembly/:subAssembly',
				templateUrl: 'views/technician/inspections/view/subAssembly.html',
				controller: 'TechnicianInspectionsViewControllerSubAssembly',
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}]
				}
			});
	}]);