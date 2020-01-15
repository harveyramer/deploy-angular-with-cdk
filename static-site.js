#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudfront = require("@aws-cdk/aws-cloudfront");
const route53 = require("@aws-cdk/aws-route53");
const s3 = require("@aws-cdk/aws-s3");
const s3deploy = require("@aws-cdk/aws-s3-deployment");
const acm = require("@aws-cdk/aws-certificatemanager");
const cdk = require("@aws-cdk/core");
const targets = require("@aws-cdk/aws-route53-targets/lib");
const core_1 = require("@aws-cdk/core");
/**
 * Static site infrastructure, which deploys site content to an S3 bucket.
 *
 * The site redirects from HTTP to HTTPS, using a CloudFront distribution,
 * Route53 alias record, and ACM certificate.
 */
class StaticSite extends core_1.Construct {
    constructor(parent, name, props) {
        super(parent, name);
        const zone = route53.HostedZone.fromLookup(this, "Zone", {
            domainName: props.domainName,
        });
        const siteDomain = props.siteSubDomain + "." + props.domainName;
        new cdk.CfnOutput(this, "Site", { value: "https://" + siteDomain });
        // Content bucket
        const siteBucket = new s3.Bucket(this, "SiteBucket", {
            bucketName: siteDomain,
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "error.html",
            publicReadAccess: true,
            // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
            // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
            // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });
        new cdk.CfnOutput(this, "Bucket", { value: siteBucket.bucketName });
        // TLS certificate
        const certificateArn = new acm.DnsValidatedCertificate(this, "SiteCertificate", {
            domainName: props.domainName,
            subjectAlternativeNames: ["*." + props.domainName],
            hostedZone: zone,
        }).certificateArn;
        new cdk.CfnOutput(this, "Certificate", { value: certificateArn });
        // CloudFront distribution that provides HTTPS
        const distribution = new cloudfront.CloudFrontWebDistribution(this, "SiteDistribution", {
            aliasConfiguration: {
                acmCertRef: certificateArn,
                names: [siteDomain],
                sslMethod: cloudfront.SSLMethod.SNI,
                securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_1_2016,
            },
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: siteBucket,
                    },
                    behaviors: [{ isDefaultBehavior: true }],
                },
            ],
        });
        new cdk.CfnOutput(this, "DistributionId", { value: distribution.distributionId });
        // Route53 alias record for the CloudFront distribution
        new route53.ARecord(this, "SiteAliasRecord", {
            recordName: siteDomain,
            target: route53.AddressRecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
            zone,
        });
        // Deploy site contents to S3 bucket
        new s3deploy.BucketDeployment(this, "DeployWithInvalidation", {
            sources: [s3deploy.Source.asset("./site-contents")],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ["/*"],
        });
    }
}
exports.StaticSite = StaticSite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXNpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtc2l0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBdUQ7QUFDdkQsZ0RBQWlEO0FBQ2pELHNDQUF1QztBQUN2Qyx1REFBd0Q7QUFDeEQsdURBQXdEO0FBQ3hELHFDQUFzQztBQUN0Qyw0REFBNkQ7QUFDN0Qsd0NBQTBDO0FBTzFDOzs7OztHQUtHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsZ0JBQVM7SUFDdkMsWUFBWSxNQUFpQixFQUFFLElBQVksRUFBRSxLQUFzQjtRQUNqRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDdkQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQzdCLENBQUMsQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFcEUsaUJBQWlCO1FBQ2pCLE1BQU0sVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ25ELFVBQVUsRUFBRSxVQUFVO1lBQ3RCLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxnQkFBZ0IsRUFBRSxJQUFJO1lBRXRCLGdHQUFnRztZQUNoRyxzR0FBc0c7WUFDdEcscUdBQXFHO1lBQ3JHLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87U0FDekMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFcEUsa0JBQWtCO1FBQ2xCLE1BQU0sY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUM5RSxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsdUJBQXVCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNsRCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ2xCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFbEUsOENBQThDO1FBQzlDLE1BQU0sWUFBWSxHQUFHLElBQUksVUFBVSxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN0RixrQkFBa0IsRUFBRTtnQkFDbEIsVUFBVSxFQUFFLGNBQWM7Z0JBQzFCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDbkIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRztnQkFDbkMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhO2FBQ2hFO1lBQ0QsYUFBYSxFQUFFO2dCQUNiO29CQUNFLGNBQWMsRUFBRTt3QkFDZCxjQUFjLEVBQUUsVUFBVTtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDekM7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFbEYsdURBQXVEO1FBQ3ZELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0MsVUFBVSxFQUFFLFVBQVU7WUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekYsSUFBSTtTQUNMLENBQUMsQ0FBQztRQUVILG9DQUFvQztRQUNwQyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7WUFDNUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNuRCxpQkFBaUIsRUFBRSxVQUFVO1lBQzdCLFlBQVk7WUFDWixpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFsRUQsZ0NBa0VDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IGNsb3VkZnJvbnQgPSByZXF1aXJlKFwiQGF3cy1jZGsvYXdzLWNsb3VkZnJvbnRcIik7XG5pbXBvcnQgcm91dGU1MyA9IHJlcXVpcmUoXCJAYXdzLWNkay9hd3Mtcm91dGU1M1wiKTtcbmltcG9ydCBzMyA9IHJlcXVpcmUoXCJAYXdzLWNkay9hd3MtczNcIik7XG5pbXBvcnQgczNkZXBsb3kgPSByZXF1aXJlKFwiQGF3cy1jZGsvYXdzLXMzLWRlcGxveW1lbnRcIik7XG5pbXBvcnQgYWNtID0gcmVxdWlyZShcIkBhd3MtY2RrL2F3cy1jZXJ0aWZpY2F0ZW1hbmFnZXJcIik7XG5pbXBvcnQgY2RrID0gcmVxdWlyZShcIkBhd3MtY2RrL2NvcmVcIik7XG5pbXBvcnQgdGFyZ2V0cyA9IHJlcXVpcmUoXCJAYXdzLWNkay9hd3Mtcm91dGU1My10YXJnZXRzL2xpYlwiKTtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGljU2l0ZVByb3BzIHtcbiAgZG9tYWluTmFtZTogc3RyaW5nO1xuICBzaXRlU3ViRG9tYWluOiBzdHJpbmc7XG59XG5cbi8qKlxuICogU3RhdGljIHNpdGUgaW5mcmFzdHJ1Y3R1cmUsIHdoaWNoIGRlcGxveXMgc2l0ZSBjb250ZW50IHRvIGFuIFMzIGJ1Y2tldC5cbiAqXG4gKiBUaGUgc2l0ZSByZWRpcmVjdHMgZnJvbSBIVFRQIHRvIEhUVFBTLCB1c2luZyBhIENsb3VkRnJvbnQgZGlzdHJpYnV0aW9uLFxuICogUm91dGU1MyBhbGlhcyByZWNvcmQsIGFuZCBBQ00gY2VydGlmaWNhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0aWNTaXRlIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBDb25zdHJ1Y3QsIG5hbWU6IHN0cmluZywgcHJvcHM6IFN0YXRpY1NpdGVQcm9wcykge1xuICAgIHN1cGVyKHBhcmVudCwgbmFtZSk7XG5cbiAgICBjb25zdCB6b25lID0gcm91dGU1My5Ib3N0ZWRab25lLmZyb21Mb29rdXAodGhpcywgXCJab25lXCIsIHtcbiAgICAgIGRvbWFpbk5hbWU6IHByb3BzLmRvbWFpbk5hbWUsXG4gICAgfSk7XG4gICAgY29uc3Qgc2l0ZURvbWFpbiA9IHByb3BzLnNpdGVTdWJEb21haW4gKyBcIi5cIiArIHByb3BzLmRvbWFpbk5hbWU7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJTaXRlXCIsIHsgdmFsdWU6IFwiaHR0cHM6Ly9cIiArIHNpdGVEb21haW4gfSk7XG5cbiAgICAvLyBDb250ZW50IGJ1Y2tldFxuICAgIGNvbnN0IHNpdGVCdWNrZXQgPSBuZXcgczMuQnVja2V0KHRoaXMsIFwiU2l0ZUJ1Y2tldFwiLCB7XG4gICAgICBidWNrZXROYW1lOiBzaXRlRG9tYWluLFxuICAgICAgd2Vic2l0ZUluZGV4RG9jdW1lbnQ6IFwiaW5kZXguaHRtbFwiLFxuICAgICAgd2Vic2l0ZUVycm9yRG9jdW1lbnQ6IFwiZXJyb3IuaHRtbFwiLFxuICAgICAgcHVibGljUmVhZEFjY2VzczogdHJ1ZSxcblxuICAgICAgLy8gVGhlIGRlZmF1bHQgcmVtb3ZhbCBwb2xpY3kgaXMgUkVUQUlOLCB3aGljaCBtZWFucyB0aGF0IGNkayBkZXN0cm95IHdpbGwgbm90IGF0dGVtcHQgdG8gZGVsZXRlXG4gICAgICAvLyB0aGUgbmV3IGJ1Y2tldCwgYW5kIGl0IHdpbGwgcmVtYWluIGluIHlvdXIgYWNjb3VudCB1bnRpbCBtYW51YWxseSBkZWxldGVkLiBCeSBzZXR0aW5nIHRoZSBwb2xpY3kgdG9cbiAgICAgIC8vIERFU1RST1ksIGNkayBkZXN0cm95IHdpbGwgYXR0ZW1wdCB0byBkZWxldGUgdGhlIGJ1Y2tldCwgYnV0IHdpbGwgZXJyb3IgaWYgdGhlIGJ1Y2tldCBpcyBub3QgZW1wdHkuXG4gICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZLCAvLyBOT1QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZVxuICAgIH0pO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiQnVja2V0XCIsIHsgdmFsdWU6IHNpdGVCdWNrZXQuYnVja2V0TmFtZSB9KTtcblxuICAgIC8vIFRMUyBjZXJ0aWZpY2F0ZVxuICAgIGNvbnN0IGNlcnRpZmljYXRlQXJuID0gbmV3IGFjbS5EbnNWYWxpZGF0ZWRDZXJ0aWZpY2F0ZSh0aGlzLCBcIlNpdGVDZXJ0aWZpY2F0ZVwiLCB7XG4gICAgICBkb21haW5OYW1lOiBwcm9wcy5kb21haW5OYW1lLFxuICAgICAgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM6IFtcIiouXCIgKyBwcm9wcy5kb21haW5OYW1lXSxcbiAgICAgIGhvc3RlZFpvbmU6IHpvbmUsXG4gICAgfSkuY2VydGlmaWNhdGVBcm47XG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJDZXJ0aWZpY2F0ZVwiLCB7IHZhbHVlOiBjZXJ0aWZpY2F0ZUFybiB9KTtcblxuICAgIC8vIENsb3VkRnJvbnQgZGlzdHJpYnV0aW9uIHRoYXQgcHJvdmlkZXMgSFRUUFNcbiAgICBjb25zdCBkaXN0cmlidXRpb24gPSBuZXcgY2xvdWRmcm9udC5DbG91ZEZyb250V2ViRGlzdHJpYnV0aW9uKHRoaXMsIFwiU2l0ZURpc3RyaWJ1dGlvblwiLCB7XG4gICAgICBhbGlhc0NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgYWNtQ2VydFJlZjogY2VydGlmaWNhdGVBcm4sXG4gICAgICAgIG5hbWVzOiBbc2l0ZURvbWFpbl0sXG4gICAgICAgIHNzbE1ldGhvZDogY2xvdWRmcm9udC5TU0xNZXRob2QuU05JLFxuICAgICAgICBzZWN1cml0eVBvbGljeTogY2xvdWRmcm9udC5TZWN1cml0eVBvbGljeVByb3RvY29sLlRMU19WMV8xXzIwMTYsXG4gICAgICB9LFxuICAgICAgb3JpZ2luQ29uZmlnczogW1xuICAgICAgICB7XG4gICAgICAgICAgczNPcmlnaW5Tb3VyY2U6IHtcbiAgICAgICAgICAgIHMzQnVja2V0U291cmNlOiBzaXRlQnVja2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVoYXZpb3JzOiBbeyBpc0RlZmF1bHRCZWhhdmlvcjogdHJ1ZSB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJEaXN0cmlidXRpb25JZFwiLCB7IHZhbHVlOiBkaXN0cmlidXRpb24uZGlzdHJpYnV0aW9uSWQgfSk7XG5cbiAgICAvLyBSb3V0ZTUzIGFsaWFzIHJlY29yZCBmb3IgdGhlIENsb3VkRnJvbnQgZGlzdHJpYnV0aW9uXG4gICAgbmV3IHJvdXRlNTMuQVJlY29yZCh0aGlzLCBcIlNpdGVBbGlhc1JlY29yZFwiLCB7XG4gICAgICByZWNvcmROYW1lOiBzaXRlRG9tYWluLFxuICAgICAgdGFyZ2V0OiByb3V0ZTUzLkFkZHJlc3NSZWNvcmRUYXJnZXQuZnJvbUFsaWFzKG5ldyB0YXJnZXRzLkNsb3VkRnJvbnRUYXJnZXQoZGlzdHJpYnV0aW9uKSksXG4gICAgICB6b25lLFxuICAgIH0pO1xuXG4gICAgLy8gRGVwbG95IHNpdGUgY29udGVudHMgdG8gUzMgYnVja2V0XG4gICAgbmV3IHMzZGVwbG95LkJ1Y2tldERlcGxveW1lbnQodGhpcywgXCJEZXBsb3lXaXRoSW52YWxpZGF0aW9uXCIsIHtcbiAgICAgIHNvdXJjZXM6IFtzM2RlcGxveS5Tb3VyY2UuYXNzZXQoXCIuL3NpdGUtY29udGVudHNcIildLFxuICAgICAgZGVzdGluYXRpb25CdWNrZXQ6IHNpdGVCdWNrZXQsXG4gICAgICBkaXN0cmlidXRpb24sXG4gICAgICBkaXN0cmlidXRpb25QYXRoczogW1wiLypcIl0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==