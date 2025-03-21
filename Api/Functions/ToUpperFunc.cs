using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;

namespace Api.Functions;

class ToUpperFunc
{
    public APIGatewayHttpApiV2ProxyResponse Handler(APIGatewayHttpApiV2ProxyRequest request, ILambdaContext context)
    {
        request.QueryStringParameters.TryGetValue("input", out var input);
        return new APIGatewayHttpApiV2ProxyResponse
        {
            Body = input?.ToUpper() + "WAKE UP",
            StatusCode = 200
        };
    }
}
