var products = [{
    ProductID : 1,
    ProductName : "Milanesa con papas fritas",
    SupplierID : 1,
    CategoryID : 1,
    QuantityPerUnit : "10 boxes x 20 bags",
    UnitPrice : 700,
    Description : "Carne chubutense de primera calidad",
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : "Si",
    Category : {
        CategoryID : 1, 
    }
}, {
    ProductID : 2,
    ProductName : "Asado",
    SupplierID : 1,
    CategoryID : 1,
    QuantityPerUnit : "24 - 12 oz bottles",
    UnitPrice : 800,
    Description : "Carne muy tierna",
    UnitsOnOrder : 40,
    ReorderLevel : 25,
    Discontinued : "si",
    Category : {
        CategoryID : 1,
    }
}, {
    ProductID : 3,
    ProductName : "Sushi",
    SupplierID : 1,
    CategoryID : 2,
    QuantityPerUnit : "12 - 550 ml bottles",
    UnitPrice : 750,
    Description : "autentica receta asiatica",
    UnitsOnOrder : 70,
    ReorderLevel : 25,
    Discontinued : "si",
    Category : {
        CategoryID : 2
    }
}, {
    ProductID : 4,
    ProductName : "Fideos con salsa bolognesa",
    SupplierID : 2,
    CategoryID : 2,
    QuantityPerUnit : "48 - 6 oz jars",
    UnitPrice : 300,
    Description : "pastas de receta italiana",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "si",
    Category : {
        CategoryID : 2,
    }
}, {
    ProductID : 5,
    ProductName : "Hamburguesa con papas fritas",
    SupplierID : 2,
    CategoryID : 2,
    QuantityPerUnit : "36 boxes",
    UnitPrice : 200,
    Description : "riquisimas",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "no",
    Category : {
        CategoryID : 2,
        CategoryName : "Comida rapida",
    }
}, {
    ProductID : 6,
    ProductName : "Milanesa napolitana",
    SupplierID : 3,
    CategoryID : 2,
    QuantityPerUnit : "12 - 8 oz jars",
    UnitPrice : 500,
    Description : "receta autentica de Napoles",
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : "si",
    Category : {
        CategoryID : 2,
        CategoryName : "Minutas",
    }
}, {
    ProductID : 7,
    ProductName : "Ravioles con salsa a eleccion",
    SupplierID : 3,
    CategoryID : 7,
    QuantityPerUnit : "12 - 1 lb pkgs.",
    UnitPrice : 220,
    Description : "Ravioles con mucho relleno",
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : "no",
    Category : {
        CategoryID : 7,
        CategoryName : "Pastas",
    }
}, {
    ProductID : 8,
    ProductName : "nioquis de la casa ",
    SupplierID : 3,
    CategoryID : 2,
    QuantityPerUnit : "12 - 12 oz jars",
    UnitPrice : 400,
    Description : "nioquis caseros los mas ricos de la ciudad",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "si",
    Category : {
        CategoryID : 2,
        CategoryName : "pastas",
    }
}, {
    ProductID : 9,
    ProductName : "filet de merluza",
    SupplierID : 4,
    CategoryID : 6,
    QuantityPerUnit : "18 - 500 g pkgs.",
    UnitPrice : 350,
    Description : "Filet despinado",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "si",
    Category : {
        CategoryID : 6,
        CategoryName : "pescados",
    }
}, {
    ProductID : 10,
    ProductName : "boga",
    SupplierID : 4,
    CategoryID : 6,
    QuantityPerUnit : "18 - 500 g pkgs.",
    UnitPrice : 450,
    Description : "boga de rio",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "no",
    Category : {
        CategoryID : 6,
        CategoryName : "pescados",
    }
}, {
    ProductID : 11,
    ProductName : "Pizza de muzzarela",
    SupplierID : 4,
    CategoryID : 6,
    QuantityPerUnit : "18 - 500 g pkgs.",
    UnitPrice : 400,
    Description : "pizza a la piedra",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "si",
    Category : {
        CategoryID : 6,
        CategoryName : "pizzas",
    }
}, {
    ProductID : 12,
    ProductName : "Empanadas",
    SupplierID : 5,
    CategoryID : 4,
    QuantityPerUnit : "10 - 500 g pkgs.",
    UnitPrice : 30,
    Description : "empanadas de carne,pollo,jamon y queso, pescado y de verdura",
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : "si",
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
    }
}, {
    ProductID : 13,
    ProductName : "Pepsi",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 120,
    Description : "2,25 L",
    CategoryName : "bebidas",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "no",
    Category : {
        CategoryID : 8,
    }
}, {
    ProductID : 14,
    ProductName : "Seven UP",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 110,
    Description : "2,25 L",
    CategoryName : "bebidas",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "Si",
    Category : {
        CategoryID : 8,
    }
}, {
    ProductID : 15,
    ProductName : "Cerveza Quilmes",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 200,
    Description : "2,25 L",
    CategoryName : "bebidas",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "si",
    Category : {
        CategoryID : 8,
    }
}, {
    ProductID : 16,
    ProductName : "Vino Michel Torino",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 120,
    Description : "2,25 L",
    CategoryName : "bebidas",
    UnitsOnOrder : 400,
    ReorderLevel : 5,
    Discontinued : "si",
    Category : {
        CategoryID : 8,
    }
}, {
    ProductID : 17,
    ProductName : "porcion de torta",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 30,
    Description : "a eleccion",
    CategoryName : "postres",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "si",
    Category : {
        CategoryID : 9,
    }
}, {
    ProductID : 18,
    ProductName : "Helado",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 50,
    Description : "todos los gustos disponibles",
    CategoryName : "postres",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "no",
    Category : {
        CategoryID : 9,
    }
}, {
    ProductID : 19,
    ProductName : "Flan casero",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 150,
    Description : "una delicia de la casa",
    CategoryName : "postres",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "si",
    Category : {
        CategoryID : 9,
    }
}, {
    ProductID : 20,
    ProductName : "Lemon Pie",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 60,
    Description : "precio por porcion",
    CategoryName : "postres",
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : "no",
    Category : {
        CategoryID : 9,
    }
}];