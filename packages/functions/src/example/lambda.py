from utils.common import helper_function

def handler():
    helper_function()
    return {
        "statusCode": 200,
        "body": "Hello World"
    }
