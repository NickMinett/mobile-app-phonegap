describe('AuthControllerLogin', function () {
    var AuthControllerLogin, AuthService, $state, rootScope, $stateParams, $window, SettingsService, NetworkInformationService, SyncService, NotificationService;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _AuthService_, _$state_, _SettingsService_, _NetworkInformationService_, _SyncService_, _NotificationService_) {
        AuthControllerLogin = $controller;
        rootScope = _$rootScope_;
        AuthService = _AuthService_;
        $state = _$state_;
        SettingsService = _SettingsService_;
        NetworkInformationService = _NetworkInformationService_;
        SyncService = _SyncService_;
        NotificationService = _NotificationService_;
    }));

    it('should exist', function(){
        var controller = AuthControllerLogin('AuthControllerLogin', {$scope: {}});
        expect(controller).toBeDefined();
    });

    describe('.validate()', function() {
        var scope, controller;

        beforeEach(function () {
            scope = rootScope.$new();
            controller = AuthControllerLogin('AuthControllerLogin', {$scope: scope});
        });

        it('should return true when a username and password is provided', function () {
            scope.username = 'a';
            scope.password = 'a';
            expect(scope.validate()).toBe(true);
        });

        it('should return false when no username is provided, but a password is provided', function () {
            scope.username = '';
            scope.password = 'a';
            expect(scope.validate()).toBe(false);
        });

        it('should return false when no password is provided, but a username is provided', function () {
            scope.username = 'a';
            scope.password = '';
            expect(scope.validate()).toBe(false);
        });
    });

    describe('.login()', function() {
        var scope, controller;

        beforeEach(function () {
            scope = rootScope.$new();
            controller = AuthControllerLogin('AuthControllerLogin', {$scope: scope});
        });

        //Test fails because login details have been changed
        it('should be successfully logged in as an technician', inject(function($q) {
            var deferred = $q.defer();
            spyOn(AuthService, 'authenticate').and.returnValue(deferred.promise);
            spyOn($state, 'go');

            scope.username = 'technician';
            scope.password = 'technician';
            scope.type = 'technician';
            scope.login();

            deferred.resolve();
            scope.$digest();

            expect($state.go).toHaveBeenCalledWith('index');
        }));
    });
});