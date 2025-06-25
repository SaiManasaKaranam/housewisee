# ========== Provider ==========
provider "azurerm" {
  features {}
}

# ========== Resource Group ==========
resource "azurerm_resource_group" "housewise" {
  name     = "housewise-rg"
  location = "East US"
}

# ========== Cosmos DB Account ==========
resource "azurerm_cosmosdb_account" "housewise_cosmos" {
  name                = "housewisecosdb"
  location            = azurerm_resource_group.housewise.location
  resource_group_name = azurerm_resource_group.housewise.name
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"  # SQL API

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = azurerm_resource_group.housewise.location
    failover_priority = 0
  }

  capabilities {
    name = "EnableServerless"
  }
}

# ========== Cosmos DB SQL Database ==========
resource "azurerm_cosmosdb_sql_database" "chores_db" {
  name                = "chores-db"
  resource_group_name = azurerm_resource_group.housewise.name
  account_name        = azurerm_cosmosdb_account.housewise_cosmos.name
}

# ========== Cosmos DB Container ==========
resource "azurerm_cosmosdb_sql_container" "chores_container" {
  name                = "chores"
  resource_group_name = azurerm_resource_group.housewise.name
  account_name        = azurerm_cosmosdb_account.housewise_cosmos.name
  database_name       = azurerm_cosmosdb_sql_database.chores_db.name

  partition_key_paths = ["/id"]
  partition_key_version = 2

  indexing_policy {
    indexing_mode = "consistent"
  }
}

# ========== Outputs ==========
output "cosmosdb_endpoint" {
  value = azurerm_cosmosdb_account.housewise_cosmos.endpoint
}

output "cosmosdb_primary_key" {
  value     = azurerm_cosmosdb_account.housewise_cosmos.primary_key
  sensitive = true
}
