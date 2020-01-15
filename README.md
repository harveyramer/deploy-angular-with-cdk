# deploy-angular-with-cdk

Learn how to quickly spin up an Angular application and deploy it with Amazon Cloud Development Kit (CDK).

This project assumes you have some knowledge of JavaScript and have installed the latest version of [Node](https://nodejs.org/) in your development environment.

It also assumes you have [installed the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html) (On Mac, it's easy with Homebrew). And configured it with credentials.

This project uses a [static site example project](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/static-site) created by AWS as a starting place.

## Install

[Angular CLI](https://cli.angular.io/) and [AWS CDK for TypeScript](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) must be installed globally with NPM.

```
$ npm install -g @angular/cli
$ npm install -g aws-cdk
```

## Configure

### AWS Credentials

Navigate to the [IAM console](https://console.aws.amazon.com/iam/home?region=us-east-1) and create a new user for your project (or use an existing one) with programmatic access. The security credentials tab will let you access your `Access key ID` and `Secret Access Key`.

[Set credentials](https://docs.aws.amazon.com/amazonswf/latest/awsrbflowguide/set-up-creds.html) in the AWS credentials profile file on your local system, located at:

`~/.aws/credentials` on Linux, OS X, or Unix
`C:\Users\USERNAME\.aws\credentials` on Windows

This file contains lines in the following format:

```
[default]
AWS_ACCESS_KEY_ID = your_access_key_id
AWS_SECRET_ACCESS_KEY = your_secret_access_key
```

### AWS CDK Project

Navigate to the root directory of project project and run:

```
$ npm install -g aws-cdk
$ npm install
$ npm run build
```

### Angular Project

Navigate to the `angular` directory and run `npm i`

## DNS

Navigate to the [Route 53 dashboard](https://console.aws.amazon.com/route53/home?region=us-west-2#hosted-zones:) and create a Hosted Zone.

![alt text](/rm-img/hosted-zones.png "Empty Route 53 Hosted Zones Page")

![alt text](/rm-img/create-hosted-zone.png "Adding a zone")

### DNS Migration

In order for users to access this project, you will need your domain name hosted in Route 53. That will take some time to propogate, so I suggest completing the steps below immediately before continuing.

1. Open your Route 53 hosted zone and copy 4 nameservers from the NS record value.
2. In your current DNS provider, open your domain name and replace its name servers with those you just copied.
3. Save your changes and wait for migration to complete (maybe 48 hours).

More details on this process are available in the article, [Making Route 53 the DNS Service for an Inactive Domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-inactive.html). If you have [an existing website](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html), this process is more complicated.

## Deploy

What we have here is an empty Angular project, but it's an app, and it's deployable!

### First Run

Find your AWS account number by navigating to the [Support page in the console](https://console.aws.amazon.com/support/home#/) and looking at the top of the left column.

If this is your first CDK project using this AWS account, run the following:

```
$ CDK_DEFAULT_ACCOUNT=your_account_number CDK_DEFAULT_REGION=your_region cdk bootstrap -c domain=your_domain -c subdomain=your_subdomain
```

For example, the actual command might be:

```
CDK_DEFAULT_ACCOUNT=12345678901 CDK_DEFAULT_REGION=us-east-1 cdk bootstrap -c domain=example.com -c subdomain=www
```

### To Publish Changes

```
$ npm run build && CDK_DEFAULT_ACCOUNT=your_account_number CDK_DEFAULT_REGION=your_region cdk deploy -c domain=mystaticsite.com -c subdomain=www
```

Given the hosted zone I created for becomingwhatweare.com, my deploy command will be:

```
$ npm run build && CDK_DEFAULT_ACCOUNT=12345678901 CDK_DEFAULT_REGION=us-east-1 cdk deploy -c domain=becomingwhatweare.com -c subdomain=angular-example
```

As the deployment runs, you will be asked:

```
Do you wish to deploy these changes (y/N)?
```

Enter `y` to continue the deployment.

#### Be Patient

Your first deployment requires quite a bit of infrastructure to be provisioned and configured. It may take more than a half hour in some cases.

## Next Steps

Build a CI/CD pipeline that deploys this project on merging to master.

Any requests? [Contact me](https://www.harveyramer.com/contact).
