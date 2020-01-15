"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_po_1 = require("./app.po");
const protractor_1 = require("protractor");
describe('workspace-project App', () => {
    let page;
    beforeEach(() => {
        page = new app_po_1.AppPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('site-contents app is running!');
    });
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await protractor_1.browser.manage().logs().get(protractor_1.logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: protractor_1.logging.Level.SEVERE,
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUyZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmUyZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBQ25DLDJDQUE4QztBQUU5QyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLElBQUksSUFBYSxDQUFDO0lBRWxCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLEdBQUcsSUFBSSxnQkFBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDbkIsMkRBQTJEO1FBQzNELE1BQU0sSUFBSSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ2xELEtBQUssRUFBRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFBhZ2UgfSBmcm9tICcuL2FwcC5wbyc7XG5pbXBvcnQgeyBicm93c2VyLCBsb2dnaW5nIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmRlc2NyaWJlKCd3b3Jrc3BhY2UtcHJvamVjdCBBcHAnLCAoKSA9PiB7XG4gIGxldCBwYWdlOiBBcHBQYWdlO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHBhZ2UgPSBuZXcgQXBwUGFnZSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRpc3BsYXkgd2VsY29tZSBtZXNzYWdlJywgKCkgPT4ge1xuICAgIHBhZ2UubmF2aWdhdGVUbygpO1xuICAgIGV4cGVjdChwYWdlLmdldFRpdGxlVGV4dCgpKS50b0VxdWFsKCdzaXRlLWNvbnRlbnRzIGFwcCBpcyBydW5uaW5nIScpO1xuICB9KTtcblxuICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgIC8vIEFzc2VydCB0aGF0IHRoZXJlIGFyZSBubyBlcnJvcnMgZW1pdHRlZCBmcm9tIHRoZSBicm93c2VyXG4gICAgY29uc3QgbG9ncyA9IGF3YWl0IGJyb3dzZXIubWFuYWdlKCkubG9ncygpLmdldChsb2dnaW5nLlR5cGUuQlJPV1NFUik7XG4gICAgZXhwZWN0KGxvZ3MpLm5vdC50b0NvbnRhaW4oamFzbWluZS5vYmplY3RDb250YWluaW5nKHtcbiAgICAgIGxldmVsOiBsb2dnaW5nLkxldmVsLlNFVkVSRSxcbiAgICB9IGFzIGxvZ2dpbmcuRW50cnkpKTtcbiAgfSk7XG59KTtcbiJdfQ==