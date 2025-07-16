import azure.functions as func
import os
import json
from azure.cosmos import CosmosClient

def main(req: func.HttpRequest) -> func.HttpResponse:
    group_id = req.params.get("groupId")

    if not group_id:
        return func.HttpResponse("Missing groupId", status_code=400)

    
    # 🔧 Return mocked response for now
    mock_chores = [
        {"id": "1", "task": "Take out trash", "completed": False, "groupId": group_id},
        {"id": "2", "task": "Do the dishes", "completed": True, "groupId": group_id}
    ]

    return func.HttpResponse(
        json.dumps(mock_chores),
        mimetype="application/json",
        status_code=200
    )

    # try:
    #     conn_str = os.environ["COSMOS_DB_CONN_STRING"]
    #     client = CosmosClient.from_connection_string(conn_str)
    #     db = client.get_database_client("housewise-db")
    #     container = db.get_container_client("chores")

    #     chores = list(container.query_items(
    #         query="SELECT * FROM c WHERE c.groupId=@groupId",
    #         parameters=[{"name": "@groupId", "value": group_id}],
    #         enable_cross_partition_query=True
    #     ))

    #     return func.HttpResponse(
    #         json.dumps(chores),
    #         mimetype="application/json",
    #         status_code=200
    #     )

    # except Exception as e:
    #     return func.HttpResponse(f"Error: {str(e)}", status_code=500)

