### Cheatsheet

#### Configure AWS Cli

- `npm install -g aws-cdk`
- `aws configure`
- `aws sts get-caller-identity --query "Account" --output text`

#### CDK

[AWS Guide](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)

- `cdk init app --language typescript`
- `cdk bootstrap`
- `cdk acknowledge 32775` - hide annoying error in output
- `cdk list` - verify
