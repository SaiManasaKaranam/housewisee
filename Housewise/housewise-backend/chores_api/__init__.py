import azure.functions as func
import json

print("azure.functions import worked!")

def main(req: func.HttpRequest) -> func.HttpResponse:
    method = req.method

    if method == "GET":
        # Sample chores
        chores = [
            {"id": "1", "title": "Wash dishes", "assignee": "Meera", "status": "pending"},
            {"id": "2", "title": "Take out trash", "assignee": "Rahul", "status": "done"}
        ]
        return func.HttpResponse(json.dumps(chores), status_code=200, mimetype="application/json")

    elif method == "POST":
        try:
            chore_data = req.get_json()
            return func.HttpResponse(json.dumps({
                "message": "Chore received!",
                "data": chore_data
            }), status_code=201, mimetype="application/json")
        except:
            return func.HttpResponse("Invalid JSON", status_code=400)

    return func.HttpResponse("Method Not Allowed", status_code=405)
