/**
 * Created by zhanglin on 2017/3/2.
 */
(function (window) {
    window.angular.module("TodoApp", []);
    window.angular.module("TodoApp").controller("MainController", ["$scope", function ($scope) {
        $scope.textValue = "";
        $scope.todoList = [
            { textValue: "学习HTML5基础", done: false },
            { textValue: "学习CSS3基础", done: false },
            { textValue: "学习AngularJS基础", done: false },
            { textValue: "学习BootStrap基础", done: false }
        ];
        $scope.addTask = function () {
            var textValue = $scope.textValue.trim();
            if (textValue) {
                $scope.todoList.push({
                    textValue: textValue,
                    done: false
                });
                $scope.textValue = "";
            }
        }
        $scope.deleteTask = function (task) {
            var index = $scope.todoList.indexOf(task);
            $scope.todoList.splice(index, 1);
        }
        $scope.updateDone = function () {
            var temp = $scope.todoList.filter(function (item) {
                return item.done;
            });
            return temp.length;
        }
    }]);
})(window);
