<a class="tab-item" ng-class="{true:'active'}[tab.view == $activeView]" ng-repeat="tab in tabs track by $index" ng-click="clicked($index)">
    <span class = "{{ tab.icon }}"> </span> <br/>
    <small class = "tab-label">{{ tab.text }}</small>
</a> 
