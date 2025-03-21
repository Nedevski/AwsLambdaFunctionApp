import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.Function(this, 'ToLowerFunc', {
      functionName: 'ToLowerFunc',
      runtime: lambda.Runtime.DOTNET_8,
      code: lambda.Code.fromAsset('../../Api/bin/Release/net8.0/publish'),
      handler: 'Api::Api.Functions.ToLowerFunc::Handler',
      timeout: cdk.Duration.seconds(15)
    });
    
    // The code that defines your stack goes here
    new lambda.Function(this, 'ToUpperFunc', {
      functionName: 'ToUpperFunc',
      runtime: lambda.Runtime.DOTNET_8,
      code: lambda.Code.fromAsset('../../Api/bin/Release/net8.0/publish'),
      handler: 'Api::Api.Functions.ToUpperFunc::Handler',
      timeout: cdk.Duration.seconds(15)
    });
  }
}
