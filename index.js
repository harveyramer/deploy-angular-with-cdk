#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const static_site_1 = require("./static-site");
/**
 * This stack relies on getting the domain name from CDK context.
 * Use 'cdk synth -c domain=mystaticsite.com -c subdomain=www'
 * Or add the following to cdk.json:
 * {
 *   "context": {
 *     "domain": "mystaticsite.com",
 *     "subdomain": "www"
 *   }
 * }
 **/
class MyStaticSiteStack extends cdk.Stack {
    constructor(parent, name, props) {
        super(parent, name, props);
        new static_site_1.StaticSite(this, "StaticSite", {
            domainName: this.node.tryGetContext("domain"),
            siteSubDomain: this.node.tryGetContext("subdomain"),
        });
    }
}
const app = new cdk.App();
new MyStaticSiteStack(app, "MyStaticSite-dev", {
    env: {
        // Stack must be in us-east-1, because the ACM certificate for a
        // global CloudFront distribution must be requested in us-east-1.
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
    },
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBc0M7QUFDdEMsK0NBQTJDO0FBRTNDOzs7Ozs7Ozs7O0lBVUk7QUFDSixNQUFNLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3ZDLFlBQVksTUFBZSxFQUFFLElBQVksRUFBRSxLQUFxQjtRQUM5RCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLHdCQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQzdDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUU7SUFDN0MsR0FBRyxFQUFFO1FBQ0gsZ0VBQWdFO1FBQ2hFLGlFQUFpRTtRQUNqRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7UUFDeEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0tBQ3ZDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IGNkayA9IHJlcXVpcmUoXCJAYXdzLWNkay9jb3JlXCIpO1xuaW1wb3J0IHsgU3RhdGljU2l0ZSB9IGZyb20gXCIuL3N0YXRpYy1zaXRlXCI7XG5cbi8qKlxuICogVGhpcyBzdGFjayByZWxpZXMgb24gZ2V0dGluZyB0aGUgZG9tYWluIG5hbWUgZnJvbSBDREsgY29udGV4dC5cbiAqIFVzZSAnY2RrIHN5bnRoIC1jIGRvbWFpbj1teXN0YXRpY3NpdGUuY29tIC1jIHN1YmRvbWFpbj13d3cnXG4gKiBPciBhZGQgdGhlIGZvbGxvd2luZyB0byBjZGsuanNvbjpcbiAqIHtcbiAqICAgXCJjb250ZXh0XCI6IHtcbiAqICAgICBcImRvbWFpblwiOiBcIm15c3RhdGljc2l0ZS5jb21cIixcbiAqICAgICBcInN1YmRvbWFpblwiOiBcInd3d1wiXG4gKiAgIH1cbiAqIH1cbiAqKi9cbmNsYXNzIE15U3RhdGljU2l0ZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBjZGsuQXBwLCBuYW1lOiBzdHJpbmcsIHByb3BzOiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHBhcmVudCwgbmFtZSwgcHJvcHMpO1xuXG4gICAgbmV3IFN0YXRpY1NpdGUodGhpcywgXCJTdGF0aWNTaXRlXCIsIHtcbiAgICAgIGRvbWFpbk5hbWU6IHRoaXMubm9kZS50cnlHZXRDb250ZXh0KFwiZG9tYWluXCIpLFxuICAgICAgc2l0ZVN1YkRvbWFpbjogdGhpcy5ub2RlLnRyeUdldENvbnRleHQoXCJzdWJkb21haW5cIiksXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxubmV3IE15U3RhdGljU2l0ZVN0YWNrKGFwcCwgXCJNeVN0YXRpY1NpdGUtZGV2XCIsIHtcbiAgZW52OiB7XG4gICAgLy8gU3RhY2sgbXVzdCBiZSBpbiB1cy1lYXN0LTEsIGJlY2F1c2UgdGhlIEFDTSBjZXJ0aWZpY2F0ZSBmb3IgYVxuICAgIC8vIGdsb2JhbCBDbG91ZEZyb250IGRpc3RyaWJ1dGlvbiBtdXN0IGJlIHJlcXVlc3RlZCBpbiB1cy1lYXN0LTEuXG4gICAgYWNjb3VudDogcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfQUNDT1VOVCxcbiAgICByZWdpb246IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX1JFR0lPTixcbiAgfSxcbn0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==