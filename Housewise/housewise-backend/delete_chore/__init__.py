import azure.functions as func
import os
import json
from azure.cosmos import CosmosClient

def main(req: func.HttpRequest) -> func.HttpResponse:
    chore_id = req.route_params.get("id")
    group_id = req.params.get("groupId")  # required to access partition

    if not chore_id or not group_id:
        return func.HttpResponse("Missing id or groupId", status_code=400)

    try:
        conn_str = os.environ["COSMOS_DB_CONN_STRING"]
        client = CosmosClient.from_connection_string(conn_str)
        db = client.get_database_client("housewise-db")
        container = db.get_container_client("chores")

        container.delete_item(item=chore_id, partition_key=group_id)

        return func.HttpResponse("Chore deleted successfully", status_code=200)

    except Exception as e:
        return func.HttpResponse(f"Error: {str(e)}", status_code=500)
