"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AppPage {
    navigateTo() {
        return protractor_1.browser.get(protractor_1.browser.baseUrl);
    }
    getTitleText() {
        return protractor_1.element(protractor_1.by.css('app-root .content span')).getText();
    }
}
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBRWxELE1BQWEsT0FBTztJQUNsQixVQUFVO1FBQ1IsT0FBTyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBaUIsQ0FBQztJQUN0RCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQXFCLENBQUM7SUFDaEYsQ0FBQztDQUNGO0FBUkQsMEJBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBicm93c2VyLCBieSwgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQXBwUGFnZSB7XG4gIG5hdmlnYXRlVG8oKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIuZ2V0KGJyb3dzZXIuYmFzZVVybCkgYXMgUHJvbWlzZTxhbnk+O1xuICB9XG5cbiAgZ2V0VGl0bGVUZXh0KCkge1xuICAgIHJldHVybiBlbGVtZW50KGJ5LmNzcygnYXBwLXJvb3QgLmNvbnRlbnQgc3BhbicpKS5nZXRUZXh0KCkgYXMgUHJvbWlzZTxzdHJpbmc+O1xuICB9XG59XG4iXX0=