import azure.functions as func
import os
import json
from azure.cosmos import CosmosClient

def main(req: func.HttpRequest) -> func.HttpResponse:
    chore_id = req.route_params.get("id")
    if not chore_id:
        return func.HttpResponse("Missing chore ID", status_code=400)

    try:
        data = req.get_json()
        conn_str = os.environ["COSMOS_DB_CONN_STRING"]
        client = CosmosClient.from_connection_string(conn_str)
        db = client.get_database_client("housewise-db")
        container = db.get_container_client("chores")

        # Fetch existing item
        existing = container.read_item(item=chore_id, partition_key=data["groupId"])

        # Apply updates
        for key, value in data.items():
            existing[key] = value

        # Save it back
        container.replace_item(item=chore_id, body=existing)

        return func.HttpResponse("Chore updated successfully", status_code=200)

    except Exception as e:
        return func.HttpResponse(f"Error: {str(e)}", status_code=500)
